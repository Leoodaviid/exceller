import { auth } from "@/auth";
import Providers from "@/components/global/providers";
import { base, heading } from "@/constants/fonts";
import { SessionProvider } from "next-auth/react";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { Viewport } from "next";

export const metadata = generateMetadata();

export const viewport: Viewport = {
  width: "device-width",
  themeColor: "#b8941f",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
          className={cn(
            "min-h-screen bg-[#050505] text-foreground font-base antialiased dark",
            base.variable,
            heading.variable
          )}
        >
          <Providers>{children}</Providers>
        </body>
      </SessionProvider>
    </html>
  );
}
