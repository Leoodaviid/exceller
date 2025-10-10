import { QUOTATION_STATUS_META } from "@/constants/quotation-status";
import { AccountQuotation } from "@/types/quotation";
import Wrapper from "@/components/global/wrapper";
import { formatCurrency, formatDate } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib";

type AccountQuotationsListProps = {
  quotations: AccountQuotation[];
};

const PassengerPill = ({ label, value }: { label: string; value: number }) => {
  if (value <= 0) return null;
  return (
    <span className="rounded-full border border-border/40 bg-[#111111]/70 px-3 py-1 text-xs font-medium text-muted-foreground">
      {value} {label}
    </span>
  );
};

export const AccountQuotationsList = ({
  quotations,
}: AccountQuotationsListProps) => {
  if (quotations.length === 0) {
    return (
      <Wrapper className="py-12 sm:py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-3xl border border-border/40 bg-[#0B0B0B]/70 px-6 py-14 text-center shadow-[0_0_40px_rgba(10,10,10,0.4)] sm:px-8 sm:py-16">
          <Badge variant="outline" className="border-border/50 bg-[#101010]">
            Sem cotações ainda
          </Badge>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pronto para começar suas próximas viagens?
            </h2>
            <p className="text-sm text-muted-foreground">
              Assim que recebermos uma nova solicitação feita com o seu e-mail,
              ela aparecerá aqui para acompanhar o status, valores e equipe de
              atendimento responsável.
            </p>
          </div>
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            <Button asChild size="sm" className="rounded-full px-5">
              <Link href="/quotation">Solicitar nova cotação</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full border-border/60"
            >
              <Link href="/contact">Falar com especialista</Link>
            </Button>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="py-10 sm:py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {quotations.map((quotation) => {
          const statusInfo = QUOTATION_STATUS_META[
            quotation.status as keyof typeof QUOTATION_STATUS_META
          ] ?? {
            label: quotation.status,
            dotClass: "bg-muted-foreground/60",
            textClass: "text-muted-foreground",
            badgeClass: "border-border/50 bg-border/10",
          };

          const passengerBadges = [
            {
              label: quotation.passengers.adults === 1 ? "adulto" : "adultos",
              value: quotation.passengers.adults,
            },
            {
              label:
                quotation.passengers.children === 1 ? "criança" : "crianças",
              value: quotation.passengers.children,
            },
            {
              label: quotation.passengers.infants === 1 ? "bebê" : "bebês",
              value: quotation.passengers.infants,
            },
          ];

          const route = `${quotation.origin.city}${
            quotation.origin.code ? ` (${quotation.origin.code})` : ""
          } → ${quotation.destination.city}${
            quotation.destination.code ? ` (${quotation.destination.code})` : ""
          }`;

          return (
            <article
              key={quotation.id}
              className="group relative flex h-full flex-col gap-6 rounded-3xl border border-border/50 bg-[#0C0C0C]/80 p-5 shadow-[0_12px_36px_rgba(8,8,8,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-[#111111]/90 sm:p-6"
            >
              <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Protocolo
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {quotation.protocol}
                  </h3>
                </div>
                <Badge
                  variant="outline"
                  className={cn(
                    "flex items-center gap-2 border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
                    statusInfo.badgeClass
                  )}
                >
                  <span
                    className={cn("size-2 rounded-full", statusInfo.dotClass)}
                  />
                  {statusInfo.label}
                </Badge>
              </div>

              <div className="space-y-4 rounded-2xl border border-border/40 bg-[#101010]/60 p-4 sm:space-y-5">
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Rota
                  </span>
                  <p className="text-sm font-medium text-foreground/90 sm:text-base">
                    {route}
                  </p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {quotation.origin.name} → {quotation.destination.name}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                      Embarque
                    </span>
                    <span className="font-medium">
                      {formatDate(quotation.departureDate)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                      Retorno
                    </span>
                    <span className="font-medium">
                      {formatDate(quotation.returnDate)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                      Tipo de viagem
                    </span>
                    <span className="font-medium">{quotation.tripType}</span>
                    {quotation.cabinClass && (
                      <span className="text-xs text-muted-foreground">
                        Cabine: {quotation.cabinClass}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                {passengerBadges.map((pill) => (
                  <PassengerPill
                    key={pill.label}
                    label={pill.label}
                    value={pill.value}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2 rounded-2xl border border-border/40 bg-[#101010]/60 p-4 text-center sm:text-left">
                <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Valor estimado
                </span>
                <span className="text-2xl font-semibold text-primary sm:text-3xl">
                  {formatCurrency(quotation.totalPrice)}
                </span>
                {quotation.validUntil && (
                  <span className="text-xs text-muted-foreground">
                    Tarifas válidas até {formatDate(quotation.validUntil)}.
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                  Atualização
                </span>
                <span className="text-center sm:text-left">
                  Recebida em{" "}
                  {formatDate(quotation.createdAt, "dd/MM/yyyy HH:mm")} • Última
                  atualização em{" "}
                  {formatDate(quotation.updatedAt, "dd/MM/yyyy HH:mm")}
                </span>
                {quotation.assignedTo?.name && (
                  <span className="text-center sm:text-left">
                    Consultor responsável: {quotation.assignedTo.name}
                    {quotation.assignedTo.email
                      ? ` (${quotation.assignedTo.email})`
                      : ""}
                  </span>
                )}
                {quotation.responseNotes && (
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm text-primary-foreground/90">
                    <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                      Observações da Exceller
                    </span>
                    <p className="mt-1 whitespace-pre-wrap text-sm text-primary-foreground/90">
                      {quotation.responseNotes}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center gap-3 border-t border-border/40 pt-4 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <span className="text-muted-foreground">
                  Precisa de ajustes? Nosso time responde em poucos minutos.
                </span>
                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full border-border/60"
                  >
                    <Link href="/contact">Solicitar ajustes</Link>
                  </Button>
                  <Button asChild size="sm" className="rounded-full px-5">
                    <Link href="https://wa.me/5585981801316">
                      Falar no WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
