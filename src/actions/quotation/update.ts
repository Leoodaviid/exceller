"use server";

import { prisma } from "@/services/prisma";
import { QuotationStatus } from "@generated/prisma";
import { auth } from "@/auth";
import { UpdateQuotationCoreSchema } from "@/schema/quotation";

export async function updateQuotationCore(formData: unknown) {
  const session = await auth();
  if (!session?.user) return { error: "Não autenticado." } as const;

  const parsed = UpdateQuotationCoreSchema.safeParse(formData);
  if (!parsed.success) {
    return { error: "Dados inválidos.", issues: parsed.error.flatten().fieldErrors } as const;
  }

  const { id, status, assignedToId, responseNotes, validUntil, conditions } = parsed.data;

  // (Opcional) checar permissão: apenas ADMIN pode editar
  if (session.user.role !== "ADMIN") {
    return { error: "Sem permissão para editar cotações." } as const;
  }

  // Se vier responsável, garantir que é ADMIN
  if (assignedToId) {
    const admin = await prisma.user.findFirst({ where: { id: assignedToId, role: "ADMIN" } });
    if (!admin) return { error: "Responsável precisa ser um usuário ADMIN." } as const;
  }

  await prisma.quotation.update({
    where: { id },
    data: {
      status: status as keyof typeof QuotationStatus,
      assignedToId: assignedToId ?? null,
      responseNotes: responseNotes ?? null,
      validUntil: validUntil ?? null,
      conditions: conditions ?? null,
    },
  });

  return { success: "Cotação atualizada." } as const;
}
