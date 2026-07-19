import type { MetadataRoute } from "next";
import { getSiteUrl } from "../lib/site-url";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");
  const now = new Date();
  const routes: ReadonlyArray<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: base + r.path,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}