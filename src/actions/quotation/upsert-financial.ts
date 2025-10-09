"use server";

import { UpsertFinancialSchema } from "@/schema/quotation";
import { prisma } from "@/services/prisma";
import { Prisma } from "@generated/prisma";

export async function upsertQuotationFinancial(formData: unknown) {
  const parsed = UpsertFinancialSchema.safeParse(formData);
  if (!parsed.success) {
    return { error: "Dados financeiros inválidos.", issues: parsed.error.flatten().fieldErrors } as const;
  }

  const {
    id,
    adultPrice, childPrice, infantPrice,
    additionalFees,
  } = parsed.data;

  // total = (adult * qtdAdultos) + (child * qtdChildren) + (infant * qtdInfants) + taxas
  const quotation = await prisma.quotation.findUnique({
    where: { id },
    select: { adultsCount: true, childrenCount: true, infantsCount: true },
  });
  if (!quotation) return { error: "Cotação não encontrada." } as const;

  const total =
    (adultPrice ?? 0) * quotation.adultsCount +
    (childPrice ?? 0) * quotation.childrenCount +
    (infantPrice ?? 0) * quotation.infantsCount +
    (additionalFees ?? 0);

  await prisma.quotation.update({
    where: { id },
    data: {
      adultPrice: adultPrice != null ? new Prisma.Decimal(adultPrice) : null,
      childPrice: childPrice != null ? new Prisma.Decimal(childPrice) : null,
      infantPrice: infantPrice != null ? new Prisma.Decimal(infantPrice) : null,
      additionalFees: additionalFees != null ? new Prisma.Decimal(additionalFees) : null,
      totalPrice: new Prisma.Decimal(total),
    },
  });

  // UI usa: se totalPrice > 0 → libera aba Pagamento
  return { success: "Financeiro salvo.", totalPrice: total } as const;
}
