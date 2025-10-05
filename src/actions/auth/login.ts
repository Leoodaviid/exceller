"use server";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas/user";
import { AuthError } from "next-auth";
import * as z from "zod";
import { getUserByEmail } from "@/services/prisma/user";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";
import { generateVerificationToken } from "@/services/prisma/token/generate";
import { sendVerificationEmail } from "@/services/mail";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Dados inválidos!" };
  }
  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.hashedPassword) {
    return { error: "Usuário não existe!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.identifier,
      verificationToken.token
    );

    return {
      error: "Email não verificado! Verifique seu email para continuar.",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciais inválidas!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
  return { success: "Logged in!" };
};
