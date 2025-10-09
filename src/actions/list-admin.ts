"use server";

import { prisma } from "@/services/prisma";

export async function listAdminUsers() {
  const users = await prisma.user.findMany({
    where: { role: "ADMIN" },
    select: { id: true, name: true, email: true, image: true },
    orderBy: { name: "asc" },
    take: 100,
  });
  return users;
}
