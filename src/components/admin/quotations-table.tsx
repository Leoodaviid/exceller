"use client";
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
import { formatCurrency, formatDate } from "@/utils";
import { FinancialTabContent } from "@/app/system/_components/financial-tab";
import { AdminTabContent } from "@/app/system/_components/admin-tab-content";
import { PaymentTabContent } from "@/app/system/_components/payment-tab";
import { QuotationOverviewTab } from "@/app/system/_components/quotation-overview-tab";
import { QuotationTripTab } from "@/app/system/_components/quotation-trip-tab";

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
    iataCode: string | null; // <- agora pode ser null
    icaoCode: string | null; // <- inclua ICAO como fallback
    name: string;
    state: string | null; // <- agora pode ser null
    country: string; // útil no admin
  };
  destination: {
    city: string;
    iataCode: string | null; // <- idem
    icaoCode: string | null; // <- idem
    name: string;
    state: string | null; // <- idem
    country: string;
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
                          <TabsList className="grid w-full grid-cols-5 rounded-md border border-border/50 bg-card/80 p-1">
                            <TabsTrigger value="overview">Resumo</TabsTrigger>
                            <TabsTrigger value="admin">Admin</TabsTrigger>
                            <TabsTrigger value="trip">Viagem</TabsTrigger>
                            <TabsTrigger value="pricing">
                              Financeiro
                            </TabsTrigger>
                            <TabsTrigger
                              value="payment"
                              disabled={
                                !quotation.totalPrice ||
                                quotation.totalPrice <= 0
                              }
                              title={
                                !quotation.totalPrice
                                  ? "Preencha o financeiro para liberar"
                                  : ""
                              }
                            >
                              Pagamento
                            </TabsTrigger>
                          </TabsList>

                          <div className="relative mt-4 flex-1">
                            <ScrollArea className="h-full min-h-[360px] pr-2">
                              {/* OVERVIEW igual ao seu */}
                              <TabsContent
                                value="overview"
                                className="space-y-4"
                              >
                                <QuotationOverviewTab q={quotation} />
                              </TabsContent>

                              {/* ADMIN: status + responsável + validade + notas/condições */}
                              <TabsContent value="admin" className="space-y-4">
                                <AdminTabContent quotation={quotation} />
                              </TabsContent>

                              {/* TRIP: igual ao seu (read-only) */}
                              <TabsContent value="trip" className="space-y-4">
                                <QuotationTripTab q={quotation} />
                              </TabsContent>

                              {/* FINANCEIRO: editável */}
                              <TabsContent
                                value="pricing"
                                className="space-y-4"
                              >
                                <FinancialTabContent quotation={quotation} />
                              </TabsContent>

                              {/* PAGAMENTO: usa tua action existente */}
                              <TabsContent
                                value="payment"
                                className="space-y-4"
                              >
                                <PaymentTabContent quotation={quotation} />
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
