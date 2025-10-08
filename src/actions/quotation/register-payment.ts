"use server";

import { PaymentSchema, PaymentFormInput } from "@/schemas/payment";
import { prisma } from "@/services/prisma";
import { Prisma, PaymentStatus, QuotationStatus } from "@generated/prisma";

type PaymentStatusValue = (typeof PaymentStatus)[keyof typeof PaymentStatus];
type QuotationStatusValue = (typeof QuotationStatus)[keyof typeof QuotationStatus];

const mapPaymentToQuotationStatus = (
  status: PaymentStatusValue
): QuotationStatusValue | undefined => {
  switch (status) {
    case PaymentStatus.CONFIRMED:
      return QuotationStatus.PAID;
    case PaymentStatus.PENDING:
      return QuotationStatus.AWAITING_PAYMENT;
    case PaymentStatus.FAILED:
      return QuotationStatus.AWAITING_PAYMENT;
    case PaymentStatus.REFUNDED:
      return QuotationStatus.CANCELED;
    default:
      return undefined;
  }
};

export const registerPayment = async (values: PaymentFormInput) => {
  const parsed = PaymentSchema.safeParse(values);

  if (!parsed.success) {
    return {
      error: "Dados de pagamento inválidos.",
      issues: parsed.error.flatten().fieldErrors,
    } as const;
  }

  const data = parsed.data;

  const quotation = await prisma.quotation.findUnique({
    where: { id: data.quotationId },
    select: { id: true, status: true },
  });

  if (!quotation) {
    return { error: "Cotação não encontrada." } as const;
  }

  const quotationStatus = mapPaymentToQuotationStatus(data.status);

  await prisma.$transaction(async (trx) => {
    await trx.payment.create({
      data: {
        quotationId: data.quotationId,
        method: data.method,
        status: data.status,
        amount: new Prisma.Decimal(data.amount),
        paidAt: data.paidAt ?? null,
        receiptUrl: data.receiptUrl,
        installments: data.installments,
        notes: data.notes,
      },
    });

    if (quotationStatus && quotation.status !== quotationStatus) {
      await trx.quotation.update({
        where: { id: data.quotationId },
        data: { status: quotationStatus },
      });
    }
  });

  return {
    success: "Pagamento registrado com sucesso.",
    status: quotationStatus ?? quotation.status,
  } as const;
};
