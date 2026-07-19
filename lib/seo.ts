import type { Metadata } from "next";
import type { Seo } from "../schema/content";
import { seo } from "../content/seo";
import { siteSettings } from "../content/site-settings";

type RouteKey = keyof Seo;

const PATHS: Record<RouteKey, string> = {
  home: "/",
  portfolio: "/portfolio",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
};

export function routeMetadata(key: RouteKey): Metadata {
  const entry = seo[key];
  const path = PATHS[key];
  const image = "/" + entry.ogImage;
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: path },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: path,
      siteName: siteSettings.businessName,
      type: "website",
      locale: "en",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [{ url: image }],
    },
  };
}