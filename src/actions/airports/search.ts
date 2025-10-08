"use server"
import { prisma } from "@/services/prisma";
import { Prisma } from "@generated/prisma";
import { Decimal } from "@prisma/client/runtime/library"; 

export type AirportResult = {
  id: string;
  iataCode: string | null;
  icaoCode: string | null;
  name: string;
  city: string;
  state: string | null;
  country: string;
  latitude: number | null;
  longitude: number | null;
  label: string;
};

// converte Decimal|string|number|null -> number|null
function toNumberSafe(value: unknown): number | null {
  if (value == null) return null;

  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }

  if (value instanceof Decimal) return value.toNumber();

  return null;
}

function buildLabel(a: {
  city: string;
  state: string | null;
  country: string;
  iataCode: string | null;
  icaoCode: string | null;
}) {
  const code = a.iataCode?.toUpperCase() || a.icaoCode?.toUpperCase() || "";
  const loc =
    a.state && a.state.trim().length > 0
      ? `${a.city}/${a.state}, ${a.country}`
      : `${a.city}, ${a.country}`;
  return code ? `${code} — ${loc}` : loc;
}

const formatQuery = (q?: string) => (q ?? "").trim();

export const searchAirports = async (
  query?: string
): Promise<AirportResult[]> => {
  const term = formatQuery(query);

  // 🚀 Caso 1 — Sem termo → lista neutra
  if (!term) {
    const airports = await prisma.airport.findMany({
      where: { isActive: true, iataCode: { not: null } },
      orderBy: [{ country: "asc" }, { city: "asc" }, { name: "asc" }],
      take: 15,
      select: {
        id: true,
        iataCode: true,
        icaoCode: true,
        name: true,
        city: true,
        state: true,
        country: true,
        latitude: true,
        longitude: true,
      },
    });

    return airports.map((a) => ({
      ...a,
      latitude: toNumberSafe(a.latitude),
      longitude: toNumberSafe(a.longitude),
      label: buildLabel(a),
    }));
  }

  const q = term;
  const qUpper = term.toUpperCase();
  const limit = 15;

  try {
    // 🚀 Caso 2 — Busca com pg_trgm (ranking)
    const results = await prisma.$queryRaw<
      Array<{
        id: string;
        iataCode: string | null;
        icaoCode: string | null;
        name: string;
        city: string;
        state: string | null;
        country: string;
        latitude: string | number | null;
        longitude: string | number | null;
        score: number;
      }>
    >(Prisma.sql`
      WITH ranked AS (
        SELECT id, "iataCode", "icaoCode", name, city, state, country, latitude, longitude, 100::float AS score
        FROM "Airport"
        WHERE "isActive" = true AND "iataCode" = ${qUpper}
        UNION ALL
        SELECT id, "iataCode", "icaoCode", name, city, state, country, latitude, longitude, 80::float AS score
        FROM "Airport"
        WHERE "isActive" = true AND "iataCode" ILIKE ${qUpper + "%"}
        UNION ALL
        SELECT id, "iataCode", "icaoCode", name, city, state, country, latitude, longitude, 70::float AS score
        FROM "Airport"
        WHERE "isActive" = true AND "icaoCode" ILIKE ${qUpper + "%"}
        UNION ALL
        SELECT id, "iataCode", "icaoCode", name, city, state, country, latitude, longitude,
               GREATEST(similarity(name, ${q}), similarity(city, ${q})) * 60.0 AS score
        FROM "Airport"
        WHERE "isActive" = true AND (name % ${q} OR city % ${q})
      )
      SELECT *
      FROM ranked
      ORDER BY score DESC, city ASC, name ASC
      LIMIT ${Prisma.raw(String(limit))};
    `);

    const seen = new Set<string>();
    return results
      .filter((r) => (seen.has(r.id) ? false : seen.add(r.id)))
      .map((a) => ({
        ...a,
        latitude: toNumberSafe(a.latitude),
        longitude: toNumberSafe(a.longitude),
        label: buildLabel(a),
      }));
  } catch {
    // 🚀 Caso 3 — Fallback (sem pg_trgm)
    const airports = await prisma.airport.findMany({
      where: {
        isActive: true,
        OR: [
          { iataCode: { contains: qUpper, mode: Prisma.QueryMode.insensitive } },
          { icaoCode: { startsWith: qUpper } },
          { name: { contains: q, mode: Prisma.QueryMode.insensitive } },
          { city: { contains: q, mode: Prisma.QueryMode.insensitive } },
          { state: { contains: q, mode: Prisma.QueryMode.insensitive } },
          { country: { contains: q, mode: Prisma.QueryMode.insensitive } },
        ],
      },
      orderBy: [{ city: "asc" }, { name: "asc" }],
      take: limit,
      select: {
        id: true,
        iataCode: true,
        icaoCode: true,
        name: true,
        city: true,
        state: true,
        country: true,
        latitude: true,
        longitude: true,
      },
    });

    return airports.map((a) => ({
      ...a,
      latitude: toNumberSafe(a.latitude),
      longitude: toNumberSafe(a.longitude),
      label: buildLabel(a),
    }));
  }
};
