"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, LayoutDashboard, LogOut, Menu } from "lucide-react";
import { ReactNode, useTransition } from "react";
import { signOutAction } from "@/actions/auth/sign-out";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "../../../public/images/logo.png";

const navLinks = [
  { href: "/system", label: "Dashboard", icon: LayoutDashboard },
  { href: "/system/quotations", label: "Cotações", icon: FileText },
];

type AdminNavbarProps = {
  userName?: string | null;
  children: ReactNode;
};

export function AdminNavbar({ userName, children }: AdminNavbarProps) {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const activeHref = navLinks.reduce<string | null>((current, link) => {
    const matches =
      pathname === link.href || pathname.startsWith(`${link.href}/`);

    if (!matches) {
      return current;
    }

    if (!current) {
      return link.href;
    }

    return link.href.length > current.length ? link.href : current;
  }, null);

  const handleSignOut = () => {
    startTransition(async () => {
      await signOutAction();
    });
  };

  return (
    <SidebarProvider className="bg-background text-foreground">
      <Sidebar
        collapsible="icon"
        className="border-r border-border/60 bg-sidebar"
      >
        <SidebarHeader className="border-b border-border/60 px-4 py-4">
          <div className="flex items-center justify-between gap-2 transition-all group-data-[state=collapsed]:flex-col group-data-[state=collapsed]:items-center group-data-[state=collapsed]:justify-center">
            <Link
              href="/system"
              className="flex items-center gap-2 transition-all group-data-[state=collapsed]:gap-0 group-data-[state=collapsed]:justify-center"
            >
              <div className="relative h-9 w-10 group-data-[state=collapsed]:hidden">
                <Image
                  src={Logo}
                  alt="Exceller"
                  fill
                  priority
                  sizes="48px"
                  className="rounded"
                />
              </div>
              <span className="text-sm font-semibold text-foreground group-data-[state=collapsed]:hidden">
                Exceller Admin
              </span>
            </Link>
            <SidebarTrigger
              size="icon"
              className="text-muted-foreground hover:text-foreground "
              aria-label="Alternar menu"
            >
              <Menu className="h-5 w-5" />
            </SidebarTrigger>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navLinks.map((link) => {
                  const isActive = activeHref === link.href;

                  return (
                    <SidebarMenuItem key={link.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="text-muted-foreground data-[active=true]:bg-sidebar-primary/15 data-[active=true]:text-sidebar-primary"
                      >
                        <Link
                          href={link.href}
                          className="flex w-full items-center gap-3"
                        >
                          <link.icon className="h-4 w-4" />
                          <span>{link.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-border/60 px-4 py-4 group-data-[state=collapsed]:px-2 group-data-[state=collapsed]:py-4">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground group-data-[state=collapsed]:items-center">
            {userName && (
              <span className="truncate group-data-[state=collapsed]:hidden">
                Olá, {userName.split(" ")[0]}
              </span>
            )}
            <Button
              variant="secondary"
              size="sm"
              onClick={handleSignOut}
              disabled={isPending}
              className="flex items-center gap-2 group-data-[state=collapsed]:h-9 group-data-[state=collapsed]:w-9 group-data-[state=collapsed]:justify-center group-data-[state=collapsed]:rounded-full group-data-[state=collapsed]:p-0"
            >
              <LogOut className="h-4 w-4" />
              <span className="group-data-[state=collapsed]:sr-only">Sair</span>
            </Button>
          </div>
        </SidebarFooter>

        <SidebarRail className="border-border/60" />
      </Sidebar>

      <SidebarInset className="bg-background text-foreground">
        <div className="flex flex-1 flex-col px-6 py-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
