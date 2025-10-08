import { prisma } from "@/services/prisma";
import { Prisma, QuotationStatus } from "@generated/prisma";
import { QuotationFilters } from "@/components/admin/quotation-filters";
import { QuotationsTable, SerializableQuotation } from "@/components/admin/quotations-table";

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
      origin: true,
      destination: true,
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
    (quotation) => ({
      id: quotation.id,
      protocol: quotation.protocol,
      clientName: quotation.clientName,
      clientEmail: quotation.clientEmail,
      clientPhone: quotation.clientPhone,
      clientCPF: quotation.clientCPF,
      company: quotation.company ?? null,
      tripType: quotation.tripType,
      departureDate: quotation.departureDate.toISOString(),
      returnDate: quotation.returnDate?.toISOString() ?? null,
      adultsCount: quotation.adultsCount,
      childrenCount: quotation.childrenCount,
      infantsCount: quotation.infantsCount,
      cabinClass: quotation.cabinClass ?? null,
      observations: quotation.observations ?? null,
      status: quotation.status,
      responseNotes: quotation.responseNotes ?? null,
      adultPrice: quotation.adultPrice?.toNumber() ?? null,
      childPrice: quotation.childPrice?.toNumber() ?? null,
      infantPrice: quotation.infantPrice?.toNumber() ?? null,
      additionalFees: quotation.additionalFees?.toNumber() ?? null,
      totalPrice: quotation.totalPrice?.toNumber() ?? null,
      conditions: quotation.conditions ?? null,
      validUntil: quotation.validUntil?.toISOString() ?? null,
      createdAt: quotation.createdAt.toISOString(),
      updatedAt: quotation.updatedAt.toISOString(),
      origin: {
        city: quotation.origin.city,
        iataCode: quotation.origin.iataCode,
        name: quotation.origin.name,
        state: quotation.origin.state,
      },
      destination: {
        city: quotation.destination.city,
        iataCode: quotation.destination.iataCode,
        name: quotation.destination.name,
        state: quotation.destination.state,
      },
      assignedTo: quotation.assignedTo
        ? {
            name: quotation.assignedTo.name,
            email: quotation.assignedTo.email,
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
