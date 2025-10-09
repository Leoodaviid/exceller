import { prisma } from "@/services/prisma";
import { Prisma, QuotationStatus } from "@generated/prisma";
import { QuotationFilters } from "@/components/admin/quotation-filters";
import {
  QuotationsTable,
  SerializableQuotation,
} from "@/components/admin/quotations-table";

async function getQuotations(search?: string, status?: string) {
  const where: Prisma.QuotationWhereInput = {};

  if (status && status !== "ALL") {
    const statusValue = status as keyof typeof QuotationStatus;
    if (QuotationStatus[statusValue]) {
      where.status = QuotationStatus[statusValue];
    }
  }

  if (search) {
    where.OR = [
      { clientName: { contains: search, mode: "insensitive" } },
      { clientEmail: { contains: search, mode: "insensitive" } },
      { protocol: { contains: search, mode: "insensitive" } },
    ];
  }

  return prisma.quotation.findMany({
    where,
    include: {
      origin: {
        select: {
          city: true,
          iataCode: true,
          icaoCode: true,
          name: true,
          state: true,
          country: true,
        },
      },
      destination: {
        select: {
          city: true,
          iataCode: true,
          icaoCode: true,
          name: true,
          state: true,
          country: true,
        },
      },
      assignedTo: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });
}

export default async function QuotationsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; status?: string }>;
}) {
  const params = await searchParams;
  const search = params?.search ?? "";
  const status = params?.status ?? "ALL";

  const quotations = await getQuotations(search, status);

  const serializableQuotations: SerializableQuotation[] = quotations.map(
    (q) => ({
      id: q.id,
      protocol: q.protocol,
      clientName: q.clientName,
      clientEmail: q.clientEmail,
      clientPhone: q.clientPhone,
      clientCPF: q.clientCPF,
      company: q.company ?? null,
      tripType: String(q.tripType), // <- enum -> string
      departureDate: q.departureDate.toISOString(),
      returnDate: q.returnDate?.toISOString() ?? null,
      adultsCount: q.adultsCount,
      childrenCount: q.childrenCount,
      infantsCount: q.infantsCount,
      cabinClass: q.cabinClass ?? null,
      observations: q.observations ?? null,
      status: String(q.status), // <- enum -> string
      responseNotes: q.responseNotes ?? null,
      adultPrice: q.adultPrice?.toNumber() ?? null,
      childPrice: q.childPrice?.toNumber() ?? null,
      infantPrice: q.infantPrice?.toNumber() ?? null,
      additionalFees: q.additionalFees?.toNumber() ?? null,
      totalPrice: q.totalPrice?.toNumber() ?? null,
      conditions: q.conditions ?? null,
      validUntil: q.validUntil?.toISOString() ?? null,
      createdAt: q.createdAt.toISOString(),
      updatedAt: q.updatedAt.toISOString(),
      origin: {
        city: q.origin.city,
        iataCode: q.origin.iataCode, // string | null
        icaoCode: q.origin.icaoCode ?? null, // string | null
        name: q.origin.name,
        state: q.origin.state, // string | null
        country: q.origin.country, // string
      },
      destination: {
        city: q.destination.city,
        iataCode: q.destination.iataCode,
        icaoCode: q.destination.icaoCode ?? null,
        name: q.destination.name,
        state: q.destination.state,
        country: q.destination.country,
      },
      assignedTo: q.assignedTo
        ? {
            name: q.assignedTo.name ?? null,
            email: q.assignedTo.email ?? null,
          }
        : null,
    })
  );

  return (
    <div className="mx-auto flex w-full flex-col gap-6 px-4 pb-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Cotações</h1>
        <p className="text-sm text-muted-foreground">
          Gerencie solicitações recebidas, filtre por status e organize o fluxo
          de resposta.
        </p>
      </header>

      <QuotationFilters status={status} search={search} />

      <QuotationsTable quotations={serializableQuotations} />
    </div>
  );
}
