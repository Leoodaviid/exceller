import { prisma } from "@/services/prisma";

const formatDateTime = (date: Date) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

const statusLabels: Record<string, string> = {
  PENDING: "Pendente",
  IN_PROGRESS: "Em análise",
  RESPONDED: "Respondida",
  AWAITING_PAYMENT: "Aguardando pagamento",
  PAID: "Paga",
  COMPLETED: "Concluída",
  CANCELED: "Cancelada",
};

async function getQuotations() {
  return prisma.quotation.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      origin: true,
      destination: true,
    },
    take: 25,
  });
}

const QuotationsPage = async () => {
  const quotations = await getQuotations();

  return (
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Cotações recentes</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Visão rápida das últimas solicitações recebidas via site institucional.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border/60 bg-[#0d0d0f]">
          <table className="min-w-full divide-y divide-border/50 text-sm">
            <thead className="bg-[#101014] text-left uppercase text-xs tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Protocolo</th>
                <th className="px-4 py-3">Cliente</th>
                <th className="px-4 py-3">Rota</th>
                <th className="px-4 py-3">Embarque</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Criada em</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {quotations.map((quotation) => {
                const outbound = `${quotation.origin.city} (${quotation.origin.iataCode}) → ${quotation.destination.city} (${quotation.destination.iataCode})`;
                const departure = formatDateTime(quotation.departureDate);
                const status = statusLabels[quotation.status] ?? quotation.status;

                return (
                  <tr key={quotation.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium">{quotation.protocol}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <span>{quotation.clientName}</span>
                        <span className="text-xs text-muted-foreground">{quotation.clientEmail}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{outbound}</td>
                    <td className="px-4 py-3">{departure}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {formatDateTime(quotation.createdAt)}
                    </td>
                  </tr>
                );
              })}

              {quotations.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-muted-foreground">
                    Nenhuma cotação recebida até o momento.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default QuotationsPage;
