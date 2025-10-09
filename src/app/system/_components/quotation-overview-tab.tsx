"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib";
import { QUOTATION_STATUS_META } from "@/constants/quotation-status";
import { SerializableQuotation } from "@/components/admin/quotations-table";

const fmtDate = (v?: string | null, pat = "dd/MM/yyyy HH:mm") =>
  v ? format(new Date(v), pat, { locale: ptBR }) : "—";

export function QuotationOverviewTab({ q }: { q: SerializableQuotation }) {
  const statusInfo = QUOTATION_STATUS_META[
    q.status as keyof typeof QUOTATION_STATUS_META
  ] ?? {
    label: q.status,
    dotClass: "bg-muted-foreground/60",
    textClass: "text-muted-foreground",
    badgeClass: "border-border/50 bg-border/10",
  };

  const pax = [
    { label: "Adultos", value: q.adultsCount },
    { label: "Crianças", value: q.childrenCount },
    { label: "Bebês", value: q.infantsCount },
  ];

  const assignedInitials = q.assignedTo?.name
    ? q.assignedTo.name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "—";

  return (
    <div className="grid gap-4">
      {/* Linha superior: protocolo + status + responsável */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Protocolo</span>
          <Badge variant="outline" className="text-xs">
            {q.protocol}
          </Badge>
          <Separator orientation="vertical" className="h-5" />
          <div className="flex items-center gap-2">
            <span className={cn("h-2 w-2 rounded-full", statusInfo.dotClass)} />
            <span
              className={cn("text-[11px] font-medium", statusInfo.textClass)}
            >
              {statusInfo.label}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Responsável</span>
          {q.assignedTo ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-[10px]">
                        {assignedInitials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">
                      {q.assignedTo.name ?? q.assignedTo.email}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p className="text-xs">{q.assignedTo.email}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Badge variant="secondary" className="text-xs">
              Não atribuído
            </Badge>
          )}
        </div>
      </div>

      {/* Datas e tipo/cabine */}
      <Card className="border-border/40 bg-card/60">
        <CardContent className="grid gap-4 p-4 sm:grid-cols-3">
          <InfoItem label="Criada em" value={fmtDate(q.createdAt)} />
          <InfoItem label="Atualizada em" value={fmtDate(q.updatedAt)} />
          <InfoItem
            label="Validade da proposta"
            value={fmtDate(q.validUntil)}
          />
          <InfoItem
            label="Tipo de viagem"
            value={q.tripType === "ROUND_TRIP" ? "Ida e volta" : "Somente ida"}
          />
          <InfoItem label="Cabine" value={q.cabinClass ?? "Não informado"} />
          <InfoItem label="Empresa" value={q.company ?? "—"} />
        </CardContent>
      </Card>

      {/* Passageiros */}
      <Card className="border-border/40 bg-card/60">
        <CardContent className="flex flex-wrap gap-2 p-4">
          {pax.map((p) => (
            <Badge key={p.label} variant="outline" className="text-xs">
              {p.label}: <span className="ml-1 font-medium">{p.value}</span>
            </Badge>
          ))}
        </CardContent>
      </Card>

      {/* Observações / Notas */}
      {(q.observations || q.responseNotes) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {q.observations && (
            <Block label="Observações do cliente" value={q.observations} />
          )}
          {q.responseNotes && (
            <Block label="Notas internas" value={q.responseNotes} />
          )}
        </div>
      )}
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <span className="text-xs font-medium uppercase text-muted-foreground">
        {label}
      </span>
      <p className="text-sm text-foreground">{value}</p>
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
