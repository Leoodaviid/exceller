
import type { Metadata } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://excelleragency.com";
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "Exceller";

export const generateMetadata = ({
  title = `${APP_NAME} — Cotações de passagens aéreas com até 18% OFF`,
  description = `Exceller: agência de cotações personalizadas de passagens aéreas. Negociação exclusiva de tarifas, análise de rotas e suporte 24/7 (LATAM, AZUL, GOL).`,
  image = `${APP_URL}/og/og-default.jpg`,
  noIndex = false,
  canonicalPath = "/",
  keywords = [
    "cotações de passagens aéreas",
    "agência de viagens B2B",
    "tarifas negociadas",
    "LATAM",
    "AZUL",
    "GOL",
    "economizar em voos",
    "milhas aéreas",
    "viagens"
  ],
}: {
  title?: string;
  description?: string;
  image?: string | null;
  noIndex?: boolean;
  canonicalPath?: string;
  keywords?: string[];
} = {}): Metadata => ({
  metadataBase: new URL(APP_URL),
  title,
  description,
  applicationName: APP_NAME,
  authors: [{ name: "Exceller" }],
  creator: "Exceller",
  publisher: "Exceller",
  category: "travel",
  // Google não usa keywords para ranking; mantenho por compatibilidade com outros buscadores
  keywords,
  robots: noIndex
    ? { index: false, follow: false }
    : { index: true, follow: true, "max-image-preview": "large" },
  alternates: {
    canonical: canonicalPath,
    languages: { "x-default": APP_URL, "pt-BR": APP_URL, "en": `${APP_URL}/en` },
  },
  openGraph: {
    type: "website",
    url:  canonicalPath ? new URL(canonicalPath, APP_URL) : APP_URL,
    title,
    description,
    siteName: APP_NAME,
    images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : [],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: image ? [image] : [],
  },
  icons: {
    icon: [
    { url: "/icons/icon.svg", type: "image/svg+xml" }, 
    { url: "/favicon.ico" } 
  ],
  apple: [{ url: "/icons/apple-touch-icon-180.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, 
  },
  appleWebApp: {
    title: APP_NAME,
    statusBarStyle: "black-translucent",
    capable: true,
  },
});
