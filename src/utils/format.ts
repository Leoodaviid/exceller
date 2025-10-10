import { format as formatDateFns } from "date-fns";
import { ptBR } from "date-fns/locale";

type DateLike = string | number | Date | null | undefined;

const isValidDate = (value: Date) => !Number.isNaN(value.getTime());

export const formatDate = (
  value: DateLike,
  pattern = "dd/MM/yyyy",
  fallback = "—"
) => {
  if (value === null || value === undefined) {
    return fallback;
  }

  const date =
    value instanceof Date
      ? value
      : typeof value === "number"
      ? new Date(value)
      : new Date(value);

  if (!isValidDate(date)) {
    return fallback;
  }

  try {
    return formatDateFns(date, pattern, { locale: ptBR });
  } catch {
    return fallback;
  }
};

export const formatCurrency = (
  value: number | null | undefined,
  currency = "BRL",
  fallback = "—"
) => {
  if (value === null || value === undefined) {
    return fallback;
  }

  try {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(value);
  } catch {
    return fallback;
  }
};
