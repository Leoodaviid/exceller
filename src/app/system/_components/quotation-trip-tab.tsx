"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plane, ArrowRight, MapPin } from "lucide-react";
import { SerializableQuotation } from "@/components/admin/quotations-table";

const fmtDate = (v?: string | null, pat = "dd/MM/yyyy") =>
  v ? format(new Date(v), pat, { locale: ptBR }) : "—";

export function QuotationTripTab({ q }: { q: SerializableQuotation }) {
  const route = {
    originShort: `${q.origin.city} (${q.origin.iataCode})`,
    originLong: q.origin.name,
    destShort: `${q.destination.city} (${q.destination.iataCode})`,
    destLong: q.destination.name,
  };

  return (
    <div className="grid gap-4">
      {/* Rota visual */}
      <Card className="border-border/40 bg-card/60">
        <CardContent className="p-4">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{route.originShort}</span>
            </div>
            <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:inline" />
            <Plane className="h-4 w-4 text-muted-foreground sm:hidden" />
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{route.destShort}</span>
            </div>
          </div>

          <Separator className="my-3" />

          <div className="grid gap-3 sm:grid-cols-2">
            <InfoItem
              label="Origem"
              value={route.originShort}
              helper={route.originLong}
            />
            <InfoItem
              label="Destino"
              value={route.destShort}
              helper={route.destLong}
            />
            <InfoItem
              label="Data de embarque"
              value={fmtDate(q.departureDate)}
            />
            <InfoItem label="Data de retorno" value={fmtDate(q.returnDate)} />
          </div>
        </CardContent>
      </Card>

      {/* Condições e validade */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="border-border/40 bg-card/60">
          <CardContent className="p-4">
            <InfoItem
              label="Validade da proposta"
              value={fmtDate(q.validUntil, "dd/MM/yyyy HH:mm")}
            />
          </CardContent>
        </Card>
        {q.conditions && (
          <Card className="border-border/40 bg-card/60">
            <CardContent className="p-4">
              <Block label="Condições" value={q.conditions} />
            </CardContent>
          </Card>
        )}
      </div>
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

function Block({ label, value }: { label: string; value: string }) {
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
