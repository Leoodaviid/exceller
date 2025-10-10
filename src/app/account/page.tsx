import Wrapper from "@/components/global/wrapper";
import { AccountQuotationsList } from "@/components/account/account-quotations-list";
import { getClientQuotations } from "@/actions/clients/list";
import { formatDate } from "@/utils";
import { auth } from "@/auth";

export default async function AccountPage() {
  const session = await auth();
  const email = session?.user?.email;

  if (!email) {
    return (
      <Wrapper className="py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border/40 bg-[#0B0B0B]/70 px-8 py-16 text-center shadow-[0_0_40px_rgba(10,10,10,0.4)]">
          <h2 className="text-2xl font-semibold tracking-tight">
            Não encontramos seu e-mail
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Para visualizar suas cotações, atualize seu cadastro com um e-mail
            válido ou entre em contato com o time Exceller.
          </p>
        </div>
      </Wrapper>
    );
  }

  const quotations = await getClientQuotations(email);
  const totalQuotations = quotations.length;
  const respondedStatuses = new Set([
    "RESPONDED",
    "AWAITING_PAYMENT",
    "PAID",
    "COMPLETED",
  ]);
  const inProgressStatuses = new Set(["PENDING", "IN_PROGRESS"]);

  const respondedCount = quotations.filter((quotation) =>
    respondedStatuses.has(quotation.status)
  ).length;
  const inProgressCount = quotations.filter((quotation) =>
    inProgressStatuses.has(quotation.status)
  ).length;

  const lastUpdatedFormatted = quotations[0]?.updatedAt
    ? formatDate(quotations[0].updatedAt, "dd/MM/yyyy HH:mm", "")
    : "";
  const lastUpdatedAt = lastUpdatedFormatted || null;

  const summaryCards = [
    {
      label: "Solicitações enviadas",
      value: totalQuotations,
    },
    {
      label: "Cotações respondidas",
      value: respondedCount,
    },
    {
      label: "Em andamento",
      value: inProgressCount,
    },
  ];

  return (
    <>
      <section className="relative py-8 sm:py-10">
        <div className="absolute inset-x-0 top-2 -z-10 h-32 bg-[radial-gradient(80%_200%_at_50%_0%,rgba(212,175,55,0.18)_0%,rgba(5,5,5,0)_70%)] sm:h-40" />
        <Wrapper className="space-y-8 sm:space-y-10">
          <div className="flex flex-col gap-4 rounded-3xl border border-border/40 bg-[#0B0B0B]/70 p-6 text-center shadow-[0_12px_40px_rgba(8,8,8,0.45)] sm:p-8 sm:text-left">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground sm:text-xs">
                Minhas cotações
              </span>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Acompanhe o avanço das propostas enviadas pela Exceller
              </h2>
            </div>
            <p className="text-sm text-muted-foreground sm:text-base">
              Aqui você encontra todas as solicitações feitas com o e-mail{" "}
              <span className="font-semibold text-foreground">{email}</span>.
              Consulte status, valores e peça atualizações ao time de
              especialistas.
            </p>
            {lastUpdatedAt && (
              <span className="text-xs text-muted-foreground">
                Última atualização recebida em {lastUpdatedAt}.
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {summaryCards.map((card) => (
              <div
                key={card.label}
                className="rounded-3xl border border-border/40 bg-[#101010]/75 p-5 text-center shadow-[0_10px_24px_rgba(8,8,8,0.35)] sm:p-6"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
                  {card.label}
                </span>
                <p className="mt-3 text-2xl font-semibold sm:text-3xl">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      <AccountQuotationsList quotations={quotations} />
    </>
  );
}
