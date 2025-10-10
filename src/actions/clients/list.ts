"use server"

import { prisma } from "@/services/prisma";
import { AccountQuotation } from "@/types/quotation";
import { TRIP_TYPE_LABELS } from "@/utils/quotations";

export async function getClientQuotations(email: string): Promise<AccountQuotation[]> {
  const quotations = await prisma.quotation.findMany({
    where: { clientEmail: email },
    include: {
      origin: {
        select: {
          city: true,
          name: true,
          iataCode: true,
          icaoCode: true,
        },
      },
      destination: {
        select: {
          city: true,
          name: true,
          iataCode: true,
          icaoCode: true,
        },
      },
      assignedTo: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return quotations.map((quotation) => ({
    id: quotation.id,
    protocol: quotation.protocol,
    status: String(quotation.status),
    createdAt: quotation.createdAt.toISOString(),
    updatedAt: quotation.updatedAt.toISOString(),
    departureDate: quotation.departureDate.toISOString(),
    returnDate: quotation.returnDate?.toISOString() ?? null,
    tripType:
      TRIP_TYPE_LABELS[String(quotation.tripType)] ??
      String(quotation.tripType),
    cabinClass: quotation.cabinClass ?? null,
    origin: {
      city: quotation.origin.city,
      code: quotation.origin.iataCode ?? quotation.origin.icaoCode ?? null,
      name: quotation.origin.name,
    },
    destination: {
      city: quotation.destination.city,
      code:
        quotation.destination.iataCode ??
        quotation.destination.icaoCode ??
        null,
      name: quotation.destination.name,
    },
    passengers: {
      adults: quotation.adultsCount,
      children: quotation.childrenCount,
      infants: quotation.infantsCount,
    },
    totalPrice: quotation.totalPrice?.toNumber() ?? null,
    responseNotes: quotation.responseNotes ?? null,
    validUntil: quotation.validUntil?.toISOString() ?? null,
    assignedTo: quotation.assignedTo
      ? {
          name: quotation.assignedTo.name ?? null,
          email: quotation.assignedTo.email ?? null,
        }
      : null,
  }));
}