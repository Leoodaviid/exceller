import { TUser } from "@/types/user";
import type {
  DefaultUser,
} from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT, TUser {}
}

declare module "next-auth" {
  interface Session {
    user: TUser & { image?: string };
  }

  interface User extends DefaultUser, TUser {}
}
