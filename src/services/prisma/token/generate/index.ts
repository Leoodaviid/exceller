import { prisma } from "@/services/prisma";
import { getVerificationTokenByIdentifier } from "@/services/prisma/token";
import { getPasswordResetTokenByIdentifier } from "@/services/prisma/token/password";
import { v4 as uuidv4 } from "uuid";

export const generatePasswordResetToken = async (identifier: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPasswordResetTokenByIdentifier(identifier);

  if (existingToken) {
    await prisma.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const passwordResetToken = await prisma.passwordResetToken.create({
    data: {
      identifier,
      token,
      expires,
    },
  });

  return passwordResetToken;
};

export const generateVerificationToken = async (identifier: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByIdentifier(identifier);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      identifier,
      token,
      expires,
    },
  });

  return verificationToken;
};
