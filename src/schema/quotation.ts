import * as z from "zod";

// Campos básicos do modal (status, responsável, notas, validade, condições)
export const UpdateQuotationCoreSchema = z.object({
  id: z.string().cuid(),
  status: z.enum([
    "PENDING", "IN_PROGRESS", "RESPONDED", "AWAITING_PAYMENT", "PAID", "COMPLETED", "CANCELED",
  ]),
  assignedToId: z.string().cuid().optional().nullable(),
  responseNotes: z.string().trim().max(5000).optional().nullable(),
  validUntil: z.coerce.date().optional().nullable(),
  conditions: z.string().trim().max(5000).optional().nullable(),
});

// Financeiro
export const UpsertFinancialSchema = z.object({
  id: z.string().cuid(),
  adultPrice: z.coerce.number().min(0).optional().nullable(),
  childPrice: z.coerce.number().min(0).optional().nullable(),
  infantPrice: z.coerce.number().min(0).optional().nullable(),
  additionalFees: z.coerce.number().min(0).optional().nullable(),
});
export type UpsertFinancialInput = z.infer<typeof UpsertFinancialSchema>;
