import { ReactNode } from "react";

import { auth } from "@/auth";
import { AdminNavbar } from "@/components/admin/admin-navbar";

export default async function SystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  const userName = session?.user?.name;

  return <AdminNavbar userName={userName}>{children}</AdminNavbar>;
}
