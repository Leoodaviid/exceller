export const QUOTATION_STATUS_META = {
  PENDING: {
    label: "Pendente",
    dotClass: "bg-orange-400",
    textClass: "text-orange-200",
    badgeClass: "border-orange-500/40 bg-orange-500/10",
  },
  IN_PROGRESS: {
    label: "Em análise",
    dotClass: "bg-sky-400",
    textClass: "text-sky-200",
    badgeClass: "border-sky-500/40 bg-sky-500/10",
  },
  RESPONDED: {
    label: "Respondida",
    dotClass: "bg-cyan-400",
    textClass: "text-cyan-200",
    badgeClass: "border-cyan-500/40 bg-cyan-500/10",
  },
  AWAITING_PAYMENT: {
    label: "Aguardando pagamento",
    dotClass: "bg-amber-300",
    textClass: "text-amber-200",
    badgeClass: "border-amber-500/40 bg-amber-500/10",
  },
  PAID: {
    label: "Paga",
    dotClass: "bg-emerald-400",
    textClass: "text-emerald-200",
    badgeClass: "border-emerald-500/40 bg-emerald-500/10",
  },
  COMPLETED: {
    label: "Concluída",
    dotClass: "bg-lime-400",
    textClass: "text-lime-200",
    badgeClass: "border-lime-500/40 bg-lime-500/10",
  },
  CANCELED: {
    label: "Cancelada",
    dotClass: "bg-red-400",
    textClass: "text-red-200",
    badgeClass: "border-red-500/40 bg-red-500/10",
  },
} satisfies Record<
  string,
  {
    label: string;
    dotClass: string;
    textClass: string;
    badgeClass: string;
  }
>;

export type QuotationStatusKey = keyof typeof QUOTATION_STATUS_META;

export const QUOTATION_STATUS_LABELS = Object.fromEntries(
  Object.entries(QUOTATION_STATUS_META).map(([key, meta]) => [key, meta.label])
) as Record<QuotationStatusKey, string>;
