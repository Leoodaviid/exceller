import type { MetadataRoute } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://excelleragency.com";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const staticRoutes = [
  { path: "/",             freq: "weekly",  priority: 1.0 },
  { path: "/about",        freq: "monthly", priority: 0.7 },
  { path: "/integrations", freq: "monthly", priority: 0.7 },
  { path: "/quotation",    freq: "weekly",  priority: 0.8 },
  { path: "/contact",      freq: "monthly", priority: 0.6 },
  { path: "/help",         freq: "monthly", priority: 0.6 },
] satisfies ReadonlyArray<{ path: string; freq: ChangeFreq; priority: number }>;

const enRoutes = [
  { path: "/en",       freq: "weekly",  priority: 0.8 },
  { path: "/en/about", freq: "monthly", priority: 0.6 },
] satisfies ReadonlyArray<{ path: string; freq: ChangeFreq; priority: number }>;


const dynamicRoutes: Array<{ path: string; updatedAt?: Date; freq: ChangeFreq; priority: number }> = [
  // { path: "/destinations/sao-paulo", updatedAt: new Date("2025-09-01"), freq: "weekly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const build = (r: { path: string; freq: ChangeFreq; priority: number; updatedAt?: Date }): MetadataRoute.Sitemap[number] => ({
    url: new URL(r.path, APP_URL).toString(),
    lastModified: r.updatedAt ?? now,
    changeFrequency: r.freq,   
    priority: r.priority,
  });

  return [
    ...staticRoutes.map(build),
    ...enRoutes.map(build),
    ...dynamicRoutes.map(build),
  ];
}
