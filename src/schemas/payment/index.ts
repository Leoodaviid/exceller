import * as z from "zod";
import { PaymentMethod, PaymentStatus } from "@generated/prisma";

export const PaymentSchema = z
  .object({
    quotationId: z.string().cuid({ message: "Cotação inválida." }),
    method: z.nativeEnum(PaymentMethod, {
      required_error: "Informe o meio de pagamento.",
    }),
    status: z
      .nativeEnum(PaymentStatus)
      .default(PaymentStatus.CONFIRMED),
    amount: z.coerce
      .number({ invalid_type_error: "Valor inválido." })
      .positive({ message: "Valor deve ser maior que zero." }),
    paidAt: z.coerce.date().optional(),
    receiptUrl: z.string().url().optional(),
    installments: z.coerce.number().min(1).max(12).optional(),
    notes: z.string().trim().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.status === PaymentStatus.CONFIRMED && !data.paidAt) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["paidAt"],
        message: "Informe a data de pagamento.",
      });
    }
  });

export type PaymentFormValues = z.infer<typeof PaymentSchema>;
export type PaymentFormInput = z.input<typeof PaymentSchema>;
