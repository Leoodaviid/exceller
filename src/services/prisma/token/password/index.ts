import { prisma } from "@/services/prisma";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    });
    return passwordResetToken;
  } catch (err) {
    return null;
  }
};

export const getPasswordResetTokenByIdentifier = async (identifier: string) => {
  try {
    const verifyToken = await prisma.passwordResetToken.findFirst({
      where: { identifier },
    });
    return verifyToken;
  } catch (err) {
    return null;
  }
};
