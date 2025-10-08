import * as z from "zod";

const today = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
};

export const QuotationSchema = z
  .object({
    fullName: z.string().trim().min(3, { message: "Informe seu nome completo." }),
    email: z.string().trim().email({ message: "E-mail inválido." }),
    phone: z
      .string()
      .trim()
      .min(10, { message: "Telefone inválido." })
      .max(20, { message: "Telefone inválido." }),
       cpf: z
      .string()
      .trim()
      .optional()
      .refine(
        (val) =>
          !val || /^(\d{3}\.?\d{3}\.?\d{3}\-?\d{2})$/.test(val.replace(/\D/g, "")),
        { message: "CPF inválido." }
      ),
    company: z.string().trim().optional(),
    originId: z.string().cuid({ message: "Selecione o aeroporto de origem." }),
    destinationId: z
      .string()
      .cuid({ message: "Selecione o aeroporto de destino." }),
    tripType: z.enum(["ONE_WAY", "ROUND_TRIP"], {
      required_error: "Selecione o tipo de viagem.",
    }),
    departureDate: z.preprocess(
      (value) => (value === "" ? undefined : value),
      z.coerce.date({ invalid_type_error: "Data de ida inválida." })
    ),
    returnDate: z
      .preprocess((value) => {
        if (value === "" || value === null || value === undefined) return undefined;
        if (value instanceof Date) return value;
        const parsed = new Date(value as string);
        return Number.isNaN(parsed.getTime()) ? undefined : parsed;
      }, z.date({ invalid_type_error: "Data de volta inválida." }))
      .optional(),
    adults: z.coerce
      .number({ invalid_type_error: "Informe a quantidade de adultos." })
      .min(1, { message: "Pelo menos 1 adulto." })
      .max(9, { message: "Limite de 9 adultos." }),
    children: z.coerce
      .number({ invalid_type_error: "Informe a quantidade de crianças." })
      .min(0)
      .max(9, { message: "Limite de 9 crianças." })
      .optional(),
    infants: z.coerce
      .number({ invalid_type_error: "Informe a quantidade de bebês." })
      .min(0)
      .max(9, { message: "Limite de 9 bebês." })
      .optional(),
    cabinClass: z.string().trim().optional(),
    observations: z.string().trim().max(1000, { message: "Máximo de 1000 caracteres." }).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.originId === data.destinationId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["destinationId"],
        message: "Escolha um destino diferente da origem.",
      });
    }

    const dep = data.departureDate;
    if (dep < today()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["departureDate"],
        message: "Data de ida não pode ser no passado.",
      });
    }

    if (data.tripType === "ROUND_TRIP") {
      if (!data.returnDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["returnDate"],
          message: "Informe a data de retorno.",
        });
      } else if (data.returnDate <= dep) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["returnDate"],
          message: "Volta deve ser após a ida.",
        });
      }
    }

    if (data.infants && data.infants > data.adults) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["infants"],
        message: "Cada bebê deve estar acompanhado por um adulto.",
      });
    }
  });

export type QuotationFormValues = z.infer<typeof QuotationSchema>;
export type QuotationFormInput = z.input<typeof QuotationSchema>;