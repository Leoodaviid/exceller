"use client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QUOTATION_STATUS_META } from "@/constants/quotation-status";
import { cn } from "@/lib";

const formatCurrency = (value: number | null | undefined) => {
  if (value === null || value === undefined) {
    return "—";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
};

const formatDate = (
  value: string | null | undefined,
  pattern = "dd/MM/yyyy"
) => {
  if (!value) {
    return "—";
  }

  return format(new Date(value), pattern, { locale: ptBR });
};

export type SerializableQuotation = {
  id: string;
  protocol: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientCPF: string;
  company: string | null;
  tripType: string;
  departureDate: string;
  returnDate: string | null;
  adultsCount: number;
  childrenCount: number;
  infantsCount: number;
  cabinClass: string | null;
  observations: string | null;
  status: string;
  responseNotes: string | null;
  adultPrice: number | null;
  childPrice: number | null;
  infantPrice: number | null;
  additionalFees: number | null;
  totalPrice: number | null;
  conditions: string | null;
  validUntil: string | null;
  createdAt: string;
  updatedAt: string;
  origin: {
    city: string;
    iataCode: string;
    name: string;
    state: string;
  };
  destination: {
    city: string;
    iataCode: string;
    name: string;
    state: string;
  };
  assignedTo: {
    name: string | null;
    email: string | null;
  } | null;
};

type QuotationsTableProps = {
  quotations: SerializableQuotation[];
};

export function QuotationsTable({ quotations }: QuotationsTableProps) {
  const hasQuotations = quotations.length > 0;

  return (
    <div className="overflow-hidden rounded-lg border border-border/30 bg-background/60 shadow-md">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-border/40 bg-background/70 backdrop-blur text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            <TableHead className="px-3 py-3 md:px-4">Protocolo</TableHead>
            <TableHead className="px-3 py-3 md:px-4">Cliente</TableHead>
            <TableHead className="px-3 py-3 md:px-4">Rota</TableHead>
            <TableHead className="px-3 py-3 md:px-4">Embarque</TableHead>
            <TableHead className="px-3 py-3 md:px-4">Status</TableHead>
            <TableHead className="px-3 py-3 md:px-4">Criada em</TableHead>
            <TableHead className="px-3 py-3 text-right md:px-4">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hasQuotations ? (
            quotations.map((quotation) => {
              const statusInfo = QUOTATION_STATUS_META[
                quotation.status as keyof typeof QUOTATION_STATUS_META
              ] ?? {
                label: quotation.status,
                dotClass: "bg-muted-foreground/60",
                textClass: "text-muted-foreground",
                badgeClass: "border-border/50 bg-border/10",
              };
              const statusLabel = statusInfo.label;
              const route = `${quotation.origin.city} (${quotation.origin.iataCode}) → ${quotation.destination.city} (${quotation.destination.iataCode})`;

              return (
                <TableRow
                  key={quotation.id}
                  className="border-b border-border/20 text-xs transition-colors odd:bg-card/70 even:bg-background/80 hover:bg-card/80 last:border-b-0"
                >
                  <TableCell className="px-3 py-2 font-medium md:px-4">
                    {quotation.protocol}
                  </TableCell>
                  <TableCell className="px-3 py-2 md:px-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-foreground">
                        {quotation.clientName}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {quotation.clientEmail}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-3 py-2 text-[11px] text-muted-foreground md:px-4">
                    {route}
                  </TableCell>
                  <TableCell className="px-3 py-2 text-[11px] text-muted-foreground md:px-4">
                    {formatDate(quotation.departureDate)}
                  </TableCell>
                  <TableCell className="px-3 py-2 md:px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full",
                          statusInfo.dotClass
                        )}
                      />
                      <span
                        className={cn(
                          "text-[11px] font-medium",
                          statusInfo.textClass
                        )}
                      >
                        {statusInfo.label}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-3 py-2 text-[11px] text-muted-foreground md:px-4">
                    {formatDate(quotation.createdAt, "dd/MM/yyyy HH:mm")}
                  </TableCell>
                  <TableCell className="px-3 py-2 text-right md:px-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground hover:text-foreground"
                          aria-label="Ver detalhes"
                        >
                          <EllipsisVertical className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="flex max-h-[85vh] max-w-2xl flex-col gap-6 sm:max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>
                            Protocolo {quotation.protocol}
                          </DialogTitle>
                          <DialogDescription>
                            Status atual: {statusLabel}
                          </DialogDescription>
                        </DialogHeader>

                        <Tabs
                          defaultValue="overview"
                          className="flex w-full flex-1 flex-col overflow-hidden"
                        >
                          <TabsList className="grid w-full grid-cols-4 rounded-md border border-border/50 bg-card/80 p-1">
                            <TabsTrigger
                              value="overview"
                              className="rounded-sm px-2 py-1 text-xs text-muted-foreground transition-colors data-[state=active]:bg-background data-[state=active]:text-foreground"
                            >
                              Resumo
                            </TabsTrigger>
                            <TabsTrigger
                              value="customer"
                              className="rounded-sm px-2 py-1 text-xs text-muted-foreground transition-colors data-[state=active]:bg-background data-[state=active]:text-foreground"
                            >
                              Cliente
                            </TabsTrigger>
                            <TabsTrigger
                              value="trip"
                              className="rounded-sm px-2 py-1 text-xs text-muted-foreground transition-colors data-[state=active]:bg-background data-[state=active]:text-foreground"
                            >
                              Viagem
                            </TabsTrigger>
                            <TabsTrigger
                              value="pricing"
                              className="rounded-sm px-2 py-1 text-xs text-muted-foreground transition-colors data-[state=active]:bg-background data-[state=active]:text-foreground"
                            >
                              Financeiro
                            </TabsTrigger>
                          </TabsList>

                          <div className="relative mt-4 flex-1">
                            <ScrollArea className="h-full min-h-[320px] pr-2 sm:min-h-[360px]">
                              <TabsContent
                                value="overview"
                                className="space-y-4"
                              >
                                <section className="grid gap-3 sm:grid-cols-2">
                                  <InfoItem
                                    label="Status"
                                    value={statusLabel}
                                  />
                                  <InfoItem
                                    label="Criada em"
                                    value={formatDate(
                                      quotation.createdAt,
                                      "dd/MM/yyyy HH:mm"
                                    )}
                                  />
                                  <InfoItem
                                    label="Última atualização"
                                    value={formatDate(
                                      quotation.updatedAt,
                                      "dd/MM/yyyy HH:mm"
                                    )}
                                  />
                                  <InfoItem
                                    label="Responsável"
                                    value={
                                      quotation.assignedTo?.name ||
                                      "Não atribuído"
                                    }
                                    helper={
                                      quotation.assignedTo?.email ?? undefined
                                    }
                                  />
                                  <InfoItem
                                    label="Tipo de viagem"
                                    value={
                                      quotation.tripType === "ROUND_TRIP"
                                        ? "Ida e volta"
                                        : "Somente ida"
                                    }
                                  />
                                  <InfoItem
                                    label="Cabine"
                                    value={
                                      quotation.cabinClass ?? "Não informado"
                                    }
                                  />
                                </section>

                                <section className="grid gap-3 sm:grid-cols-3">
                                  <InfoItem
                                    label="Adultos"
                                    value={quotation.adultsCount.toString()}
                                  />
                                  <InfoItem
                                    label="Crianças"
                                    value={quotation.childrenCount.toString()}
                                  />
                                  <InfoItem
                                    label="Bebês"
                                    value={quotation.infantsCount.toString()}
                                  />
                                </section>

                                {(quotation.observations ||
                                  quotation.responseNotes) && (
                                  <section className="grid gap-2">
                                    {quotation.observations && (
                                      <InfoBlock
                                        label="Observações do cliente"
                                        value={quotation.observations}
                                      />
                                    )}
                                    {quotation.responseNotes && (
                                      <InfoBlock
                                        label="Notas internas"
                                        value={quotation.responseNotes}
                                      />
                                    )}
                                  </section>
                                )}
                              </TabsContent>

                              <TabsContent
                                value="customer"
                                className="space-y-4"
                              >
                                <section className="grid gap-3 sm:grid-cols-2">
                                  <InfoItem
                                    label="Nome"
                                    value={quotation.clientName}
                                  />
                                  <InfoItem
                                    label="E-mail"
                                    value={quotation.clientEmail}
                                  />
                                  <InfoItem
                                    label="Telefone"
                                    value={quotation.clientPhone}
                                  />
                                  <InfoItem
                                    label="CPF"
                                    value={quotation.clientCPF}
                                  />
                                  <InfoItem
                                    label="Empresa"
                                    value={quotation.company ?? "—"}
                                  />
                                </section>
                              </TabsContent>

                              <TabsContent value="trip" className="space-y-4">
                                <section className="grid gap-3">
                                  <InfoItem
                                    label="Origem"
                                    value={`${quotation.origin.city} (${quotation.origin.iataCode})`}
                                    helper={quotation.origin.name}
                                  />
                                  <InfoItem
                                    label="Destino"
                                    value={`${quotation.destination.city} (${quotation.destination.iataCode})`}
                                    helper={quotation.destination.name}
                                  />
                                  <InfoItem
                                    label="Data de embarque"
                                    value={formatDate(quotation.departureDate)}
                                  />
                                  <InfoItem
                                    label="Data de retorno"
                                    value={formatDate(quotation.returnDate)}
                                  />
                                  <InfoItem
                                    label="Validade da proposta"
                                    value={formatDate(
                                      quotation.validUntil,
                                      "dd/MM/yyyy HH:mm"
                                    )}
                                  />
                                </section>

                                {quotation.conditions && (
                                  <InfoBlock
                                    label="Condições"
                                    value={quotation.conditions}
                                  />
                                )}
                              </TabsContent>

                              <TabsContent
                                value="pricing"
                                className="space-y-4"
                              >
                                <section className="grid gap-3 sm:grid-cols-2">
                                  <InfoItem
                                    label="Valor por adulto"
                                    value={formatCurrency(quotation.adultPrice)}
                                  />
                                  <InfoItem
                                    label="Valor por criança"
                                    value={formatCurrency(quotation.childPrice)}
                                  />
                                  <InfoItem
                                    label="Valor por bebê"
                                    value={formatCurrency(
                                      quotation.infantPrice
                                    )}
                                  />
                                  <InfoItem
                                    label="Taxas adicionais"
                                    value={formatCurrency(
                                      quotation.additionalFees
                                    )}
                                  />
                                  <InfoItem
                                    label="Total"
                                    value={formatCurrency(quotation.totalPrice)}
                                  />
                                </section>
                              </TabsContent>
                            </ScrollArea>
                          </div>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="px-4 py-12 text-center text-sm text-muted-foreground"
              >
                Nenhuma cotação encontrada com os filtros atuais.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function InfoItem({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper?: string;
}) {
  return (
    <div className="space-y-1">
      <span className="text-xs font-medium uppercase text-muted-foreground">
        {label}
      </span>
      <p className="text-sm text-foreground">{value}</p>
      {helper && <p className="text-xs text-muted-foreground">{helper}</p>}
    </div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <span className="text-xs font-medium uppercase text-muted-foreground">
        {label}
      </span>
      <p className="rounded-md border border-border/60 bg-muted/20 p-3 text-sm leading-relaxed text-muted-foreground">
        {value}
      </p>
    </div>
  );
}
