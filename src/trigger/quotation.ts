import { task, schedules, logger } from "@trigger.dev/sdk";
import { prisma } from "@/services/prisma";
import { addDays, subHours, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  sendQuotationConfirmationEmail,
  sendQuotationAdminAlertEmail,
} from "@/services/mail";

export const quotationCreatedTask = task({
  id: "quotation-created-notification",
  queue: { name: "quotation-notifications", concurrencyLimit: 2 },
  run: async (
    payload: { quotationId: string; protocol: string },
  ) => {
    const quotation = await prisma.quotation.findUnique({
      where: { id: payload.quotationId },
      include: {
        origin: true,
        destination: true,
      },
    });

    if (!quotation) {
      return { status: "quotation_not_found", quotationId: payload.quotationId };
    }

    const formattedDeparture = format(quotation.departureDate, "dd/MM/yyyy", {
      locale: ptBR,
    });

    const formattedReturn = quotation.returnDate
      ? format(quotation.returnDate, "dd/MM/yyyy", { locale: ptBR })
      : undefined;

    const passengerInfo = {
      adults: quotation.adultsCount,
      children: quotation.childrenCount,
      infants: quotation.infantsCount,
    };

    try {
      await sendQuotationConfirmationEmail({
        to: quotation.clientEmail,
        name: quotation.clientName,
        protocol: quotation.protocol,
        origin: `${quotation.origin.city} (${quotation.origin.iataCode})`,
        destination: `${quotation.destination.city} (${quotation.destination.iataCode})`,
        departure: formattedDeparture,
        returnDate: formattedReturn,
        passengers: passengerInfo,
      });
    } catch (error) {
      logger.error("Failed to send quotation confirmation email", {
        quotationId: quotation.id,
        error,
      });
    }

    const adminRecipient = process.env.EXCELLER_NOTIFICATION_EMAIL;

    if (adminRecipient) {
      try {
        await sendQuotationAdminAlertEmail({
          to: adminRecipient,
          name: quotation.clientName,
          protocol: quotation.protocol,
          origin: `${quotation.origin.city} (${quotation.origin.iataCode})`,
          destination: `${quotation.destination.city} (${quotation.destination.iataCode})`,
          departure: formattedDeparture,
          returnDate: formattedReturn,
          passengers: passengerInfo,
          customerEmail: quotation.clientEmail,
          customerPhone: quotation.clientPhone,
        });
      } catch (error) {
        logger.error("Failed to send admin notification email", {
          quotationId: quotation.id,
          error,
        });
      }
    }

    return {
      protocol: quotation.protocol,
      client: {
        name: quotation.clientName,
        email: quotation.clientEmail,
        phone: quotation.clientPhone,
      },
      trip: {
        origin: `${quotation.origin.city} (${quotation.origin.iataCode})`,
        destination: `${quotation.destination.city} (${quotation.destination.iataCode})`,
        departure: formattedDeparture,
        return: formattedReturn,
        passengers: {
          adults: quotation.adultsCount,
          children: quotation.childrenCount,
          infants: quotation.infantsCount,
        },
      },
    };
  },
});

export const pendingQuotationReminder = schedules.task({
  id: "pending-quotation-reminder",
  cron: { pattern: "0 * * * *", timezone: "America/Sao_Paulo" },
  run: async (payload) => {
    const since = subHours(payload.timestamp, 1);

    const pending = await prisma.quotation.findMany({
      where: {
        status: "PENDING",
        createdAt: {
          lte: since,
        },
      },
      select: {
        id: true,
        protocol: true,
        clientName: true,
        createdAt: true,
      },
      orderBy: { createdAt: "asc" },
      take: 50,
    });

    const nextCheck = addDays(payload.timestamp, 1);

    return {
      checkedAt: payload.timestamp,
      timezone: payload.timezone,
      pendingCount: pending.length,
      sample: pending.slice(0, 5),
      nextCheck,
    };
  },
});
