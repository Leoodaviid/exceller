import { prisma } from "@/services/prisma";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verifyToken = await prisma.verificationToken.findUnique({
      where: { token },
    });
    return verifyToken;
  } catch (err) {
    return null;
  }
};

export const getVerificationTokenByIdentifier = async (identifier: string) => {
  try {
    const verifyToken = await prisma.verificationToken.findFirst({
      where: { identifier },
    });
    return verifyToken;
  } catch (err) {
    return null;
  }
};
