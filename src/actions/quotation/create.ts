"use server";

import { prisma } from "@/services/prisma";
import { QuotationSchema, QuotationFormInput } from "@/schemas/quotation";
import { generateQuotationProtocol } from "@/utils";
import { QuotationStatus } from "@generated/prisma";
import { quotationCreatedTask } from "@/trigger/quotation";

const ensureAirportsExist = async (originId: string, destinationId: string) => {
  const airports = await prisma.airport.findMany({
    where: {
      id: { in: [originId, destinationId] },
      isActive: true,
    },
  });

  if (airports.length !== 2) {
    return false;
  }

  return true;
};

const createUniqueProtocol = async (): Promise<string> => {
  for (let attempts = 0; attempts < 5; attempts += 1) {
    const protocol = generateQuotationProtocol();
    const exists = await prisma.quotation.findUnique({ where: { protocol } });

    if (!exists) {
      return protocol;
    }
  }

  throw new Error("Não foi possível gerar o protocolo da cotação.");
};

export const createQuotation = async (values: QuotationFormInput) => {
  const parsed = QuotationSchema.safeParse(values);

  if (!parsed.success) {
    return {
      error: "Verifique os dados informados.",
      issues: parsed.error.flatten().fieldErrors,
    } as const;
  }

  const data = parsed.data;

  const airportsExist = await ensureAirportsExist(data.originId, data.destinationId);
  if (!airportsExist) {
    return {
      error: "Não foi possível localizar os aeroportos selecionados.",
    } as const;
  }

  const protocol = await createUniqueProtocol();

  const quotation = await prisma.quotation.create({
    data: {
      protocol,
      clientName: data.fullName,
      clientEmail: data.email,
      clientPhone: data.phone,
      clientCPF: data.cpf || "",
      company: data.company,
      originId: data.originId,
      destinationId: data.destinationId,
      tripType: data.tripType,
      departureDate: data.departureDate,
      returnDate: data.tripType === "ROUND_TRIP" ? data.returnDate : null,
      adultsCount: data.adults,
      childrenCount: data.children,
      infantsCount: data.infants,
      cabinClass: data.cabinClass,
      observations: data.observations,
      status: QuotationStatus.PENDING,
    },
  });

  await quotationCreatedTask.trigger({
    quotationId: quotation.id,
    protocol: quotation.protocol,
  });

  return {
    success: "Cotação enviada com sucesso!",
    protocol: quotation.protocol,
    quotationId: quotation.id,
  } as const;
};
