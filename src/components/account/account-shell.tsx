"use client";

import { ReactNode, useTransition } from "react";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";
import { signOutAction } from "@/actions/auth/sign-out";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";

type AccountShellProps = {
  userName?: string | null;
  userEmail?: string | null;
  children: ReactNode;
};

const greetingFromName = (name?: string | null) => {
  if (!name) {
    return "Olá";
  }

  const [first] = name.trim().split(" ");
  return `Olá, ${first}`;
};

const AccountShell = ({ userName, userEmail, children }: AccountShellProps) => {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      await signOutAction();
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#050505] text-foreground">
      <header className="relative border-b border-border/40 bg-[#080808]/85 backdrop-blur">
        <div className="absolute inset-x-6 -bottom-12 -z-10 h-28 rounded-full blur-[6rem] bg-[radial-gradient(70%_140%_at_50%_0%,rgba(212,175,55,0.35)_0%,rgba(5,5,5,0)_75%)] sm:h-32 lg:inset-x-8 lg:h-40" />
        <Wrapper className="flex flex-col items-center gap-5 py-8 text-center sm:gap-6 lg:flex-row lg:items-center lg:justify-between lg:py-10 lg:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary sm:size-14">
              <Image
                src={Logo}
                alt="Exceller Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="size-6 sm:size-7"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground sm:text-sm">
                Área do cliente
              </span>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {greetingFromName(userName)}
              </h1>
              {userEmail && (
                <span className="text-sm text-muted-foreground sm:text-base">
                  {userEmail}
                </span>
              )}
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 text-sm sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:w-auto lg:justify-end">
            <Link
              href="/help"
              className="rounded-full border border-border/60 bg-transparent px-4 py-2 text-center text-muted-foreground transition-all hover:border-primary/50 hover:text-primary sm:px-5"
            >
              Central de ajuda
            </Link>
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center justify-center gap-2 rounded-full px-4 py-2 sm:px-5"
              disabled={isPending}
              onClick={handleSignOut}
            >
              <LogOutIcon className="size-4" />
              Sair
            </Button>
          </div>
        </Wrapper>
      </header>

      <main className="relative w-full pb-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-[radial-gradient(80%_200%_at_50%_-30%,rgba(212,175,55,0.18)_0%,rgba(5,5,5,0)_65%)] sm:h-32" />
        {children}
      </main>
    </div>
  );
};

export default AccountShell;
