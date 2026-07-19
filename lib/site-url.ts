// Single source for the absolute site base URL (canonical, OG images, sitemap).
// The real domain is owner-owned and pending (PO §D-25); until then this is a placeholder
// and a PRODUCTION build fails if it is still a placeholder (CS §6.8).
const PLACEHOLDER_SITE_URL = "https://PLACEHOLDER.example.com";

export function getSiteUrl(): string {
  const raw = process.env.SITE_URL?.trim();
  const url = raw && raw.length > 0 ? raw : PLACEHOLDER_SITE_URL;
  const isProduction = process.env.SITE_BUILD_MODE === "production";
  if (url.includes("PLACEHOLDER")) {
    if (isProduction) {
      throw new Error("[seo] PRODUCTION build blocked: SITE_URL is a placeholder (CS §6.8). Set SITE_URL to the real owner domain.");
    }
    console.warn("[seo] preview mode: SITE_URL is a placeholder (" + url + ") — set a real domain before production.");
  }
  return url;
}