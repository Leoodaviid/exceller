"use server";

import * as z from "zod";
import { ResetSchema } from "@/schemas/user";
import { getUserByEmail } from "@/services/prisma/user";
import { generatePasswordResetToken } from "@/services/prisma/token/generate";
import { sendPasswordResetEmail } from "@/services/mail";


export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Email inválido!" };
  }
  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email não encontrado!" };
  }

  try {
    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(
      passwordResetToken.identifier,
      passwordResetToken.token
    );
  } catch (error) {}
  return { success: "Link para recuperação enviado! Verifique seu e-mail." };
};
