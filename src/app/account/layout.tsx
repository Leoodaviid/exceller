import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import AccountShell from "@/components/account/account-shell";

type AccountLayoutProps = {
  children: ReactNode;
};

export default async function AccountLayout({ children }: AccountLayoutProps) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  const { name, email } = session.user;

  return (
    <AccountShell userName={name ?? null} userEmail={email ?? null}>
      {children}
    </AccountShell>
  );
}
