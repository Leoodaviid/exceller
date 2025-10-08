"use server";

import { prisma } from "@/services/prisma";
import { Prisma } from "@generated/prisma";

export type AirportResult = {
  id: string;
  iataCode: string;
  name: string;
  city: string;
  state: string;
  country: string;
};

const formatQuery = (query?: string) => query?.trim() ?? "";

export const searchAirports = async (query?: string): Promise<AirportResult[]> => {
  const term = formatQuery(query);

  const where = term.length
    ? {
        isActive: true,
        OR: [
          { iataCode: { contains: term, mode: Prisma.QueryMode.insensitive } },
          { name: { contains: term, mode: Prisma.QueryMode.insensitive } },
          { city: { contains: term, mode: Prisma.QueryMode.insensitive } },
          { state: { contains: term, mode: Prisma.QueryMode.insensitive } },
        ],
      }
    : { isActive: true };

  const airports = await prisma.airport.findMany({
    where,
    orderBy: [{ city: "asc" }, { name: "asc" }],
    take: 15,
  });

  return airports.map((airport) => ({
    id: airport.id,
    iataCode: airport.iataCode,
    name: airport.name,
    city: airport.city,
    state: airport.state,
    country: airport.country,
  }));
};
