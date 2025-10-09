import { auth } from "@/auth";
import Providers from "@/components/global/providers";
import { base, heading } from "@/constants/fonts";
import { SessionProvider } from "next-auth/react";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { Viewport } from "next";
import Script from "next/script";

export const metadata = generateMetadata({ canonicalPath: "/" });

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
    <html lang="pt-BR" suppressHydrationWarning>
      <SessionProvider session={session}>
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Exceller",
            url: "https://excelleragency.com",
            logo: "https://excelleragency.com/images/logo.png",
            sameAs: ["https://www.instagram.com/excelleragency"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+55-88-98180-1316",
              contactType: "customer support",
              areaServed: "BR",
              availableLanguage: ["pt", "en"],
            },
          })}
        </Script>

        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Exceller",
            url: "https://excelleragency.com",
          })}
        </Script>
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
