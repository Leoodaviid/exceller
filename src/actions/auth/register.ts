"use server";

import { prisma } from "@/services/prisma";
import { RegisterSchema } from "@/schemas/user";
import { getUserByEmail } from "@/services/prisma/user";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { generateVerificationToken } from "@/services/prisma/token/generate";
import { sendVerificationEmail } from "@/services/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error("Campos inválidos");
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email já em utilização" };
  }

  await prisma.user.create({
    data: {
      email,
      hashedPassword,
      name,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(
    verificationToken.identifier,
    verificationToken.token
  );

  return { success: "Conta criada com sucesso! Verifique seu e-mail." };
};
