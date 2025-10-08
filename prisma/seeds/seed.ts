import { prisma } from "@/services/prisma";
import { parse } from "csv-parse/sync";
import { z } from "zod";

const RAW_URL =
  "https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat";

// ==========================
// Configurações de execução
// ==========================
const BATCH_SIZE = 50;         // ajuste conforme seu DB/latência (30–120)
const PROGRESS_EVERY = 200;    // imprime progresso a cada N registros

/**
 * Colunas do airports.dat:
 * 0: AirportID
 * 1: Name
 * 2: City
 * 3: Country
 * 4: IATA
 * 5: ICAO
 * 6: Latitude
 * 7: Longitude
 * 8: Altitude (ft)
 * 9: Timezone (float)
 * 10: DST
 * 11: Tz database time zone
 * 12: Type
 * 13: Source
 */
const RowSchema = z.tuple([
  z.any(), // AirportID
  z.any(), // Name
  z.any(), // City
  z.any(), // Country
  z.any(), // IATA
  z.any(), // ICAO
  z.any(), // Latitude
  z.any(), // Longitude
  z.any(), // Altitude (ft)
  z.any(), // Timezone
  z.any(), // DST
  z.any(), // Tz DB
  z.any(), // Type
  z.any(), // Source
]);

// -------- helpers de parsing/normalização --------
function n(val: unknown) {
  if (val === undefined || val === null) return null;
  const s = String(val).trim();
  if (!s || s === "\\N" || s.toLowerCase() === "null") return null;
  return s;
}
function toNum(val: unknown): number | null {
  const s = n(val);
  if (s === null) return null;
  const v = Number(s);
  return Number.isFinite(v) ? v : null;
}
function ftToM(ft: number | null): number | null {
  if (ft == null) return null;
  return Math.round(ft * 0.3048);
}

// -------- executor em lotes com concorrência --------
async function runInBatches<T>(
  items: T[],
  batchSize: number,
  worker: (item: T, idx: number) => Promise<void>,
  onProgress?: (done: number, total: number) => void
) {
  let done = 0;
  for (let i = 0; i < items.length; i += batchSize) {
    const slice = items.slice(i, i + batchSize);
    await Promise.allSettled(
      slice.map((it, j) =>
        worker(it, i + j).then(() => {
          done++;
          if (onProgress && done % PROGRESS_EVERY === 0) onProgress(done, items.length);
        })
      )
    );
  }
}

// ==========================
// Script principal (seed)
// ==========================
async function main() {
  console.log("Baixando airports.dat...");
  const res = await fetch(RAW_URL);
  if (!res.ok) throw new Error(`Falha ao baixar: ${res.status} ${res.statusText}`);
  const text = await res.text();

  console.log("Parseando CSV...");
  const records = parse(text, {
    delimiter: ",",
    relax_quotes: true,
    relax_column_count: true,
  }) as unknown[];

  console.log(`Linhas: ${records.length}`);

  let kept = 0;
  let skipped = 0;
  const startedAt = Date.now();

  await runInBatches(
    records,
    BATCH_SIZE,
    async (item) => {
      const row = RowSchema.safeParse(item);
      if (!row.success) {
        skipped++;
        return;
      }

      const [
        _airportId,
        name,
        city,
        country,
        iata,
        icao,
        lat,
        lon,
        altFt,
        tzOffset,
        dst,
        tzdb,
        type,
        source,
      ] = row.data;

      const kind = n(type)?.toLowerCase();
      // manter só aeroportos "reais"
      if (kind && kind !== "airport") {
        skipped++;
        return;
      }

      const iataCode = n(iata);
      const icaoCode = n(icao);
      const latitude = toNum(lat);
      const longitude = toNum(lon);
      const elevationM = ftToM(toNum(altFt));
      const utcOffset = toNum(tzOffset);
      const tzDatabase = n(tzdb);
      const dstRule = n(dst);

      const data = {
        iataCode,
        icaoCode,
        name: n(name) ?? "Unknown",
        city: n(city) ?? "Unknown",
        state: null as string | null, // OpenFlights não traz estado
        country: n(country) ?? "Unknown",
        latitude: latitude ?? null,
        longitude: longitude ?? null,
        elevationM,
        tzDatabase: tzDatabase ?? null,
        utcOffset: utcOffset ?? null,
        dstRule: dstRule ?? null,
        kind: kind ?? "airport",
        source: n(source),
        isActive: true,
      };

      try {
        if (iataCode) {
          // upsert por IATA
          await prisma.airport.upsert({
            where: { iataCode },
            update: data,
            create: data,
          });
        } else if (icaoCode) {
          // fallback por ICAO (não é unique no schema por padrão)
          const existing = await prisma.airport.findFirst({
            where: { icaoCode },
            select: { id: true },
          });
          if (existing) {
            await prisma.airport.update({ where: { id: existing.id }, data });
          } else {
            await prisma.airport.create({ data });
          }
        } else {
          // último caso: sem IATA e sem ICAO
          await prisma.airport.create({ data });
        }
        kept++;
      } catch (e: any) {
        // colisão por IATA (dataset pode ter sujeira/duplicata)
        if (iataCode && String(e.message).includes("Unique constraint failed")) {
          const ex = await prisma.airport.findUnique({ where: { iataCode } });
          if (ex) {
            await prisma.airport.update({ where: { id: ex.id }, data });
            kept++;
            return;
          }
        }
        // log mínimo pra não poluir
        // console.error("Falha ao processar:", { iataCode, icaoCode, name: data.name }, e?.message ?? e);
        skipped++;
      }
    },
    (done, total) => {
      const pct = ((done / total) * 100).toFixed(1);
      process.stdout.write(`\rProcessados: ${done}/${total} (${pct}%)`);
    }
  );

  process.stdout.write("\n");
  const secs = ((Date.now() - startedAt) / 1000).toFixed(1);
  console.log(`Import concluído → upserts: ${kept} | ignorados: ${skipped} | tempo: ${secs}s`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
