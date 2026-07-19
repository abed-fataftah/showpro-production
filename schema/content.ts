import * as z from "zod";

const nonEmpty = z.string().min(1);

// CR-001..CR-011 required copy present; every strictObject rejects stray keys.
export const siteSettingsSchema = z.strictObject({
  businessName: nonEmpty,
  whatsappNumber: nonEmpty,
  wechatId: nonEmpty,
  wechatQr: nonEmpty,
  email: nonEmpty, // real email shape checked separately (CS §6.4), so placeholders pass in dev
  whatsappOpener: nonEmpty,
  reachLine: nonEmpty,
});

export const heroSchema = z.strictObject({
  headline: nonEmpty,
  subhead: nonEmpty,
  poster: nonEmpty,
  videoSrc: nonEmpty,
});

export const serviceSchema = z.strictObject({ title: nonEmpty, description: nonEmpty });
export const servicesSchema = z.array(serviceSchema).min(1);

export const eventTypeSchema = z.strictObject({ title: nonEmpty, description: nonEmpty });
// CR-007 / D-13: exactly four event types.
export const eventTypesSchema = z.array(eventTypeSchema).length(4);

// BR-003 / CR-009: strict => no category/grouping field. NFR-005: video requires poster.
// BR-004 / BR-007: consentConfirmed literally true. ACC-004 / SEO-003: non-empty alt.
const photoItemSchema = z.strictObject({
  type: z.literal("photo"),
  src: nonEmpty,
  alt: nonEmpty,
  consentConfirmed: z.literal(true),
  featured: z.boolean().optional(),
});
const videoItemSchema = z.strictObject({
  type: z.literal("video"),
  src: nonEmpty,
  poster: nonEmpty,
  alt: nonEmpty,
  consentConfirmed: z.literal(true),
  featured: z.boolean().optional(),
});
export const portfolioItemSchema = z.discriminatedUnion("type", [photoItemSchema, videoItemSchema]);
export const portfolioSchema = z.array(portfolioItemSchema);

export const aboutSchema = z.strictObject({ heading: nonEmpty, body: nonEmpty });
export const geographicReachSchema = z.strictObject({ heading: nonEmpty, body: nonEmpty });
export const credibilitySchema = z.strictObject({ heading: nonEmpty, points: z.array(nonEmpty).min(1) });
export const privacySchema = z.strictObject({ heading: nonEmpty, body: nonEmpty });

const routeSeoSchema = z.strictObject({ title: nonEmpty, description: nonEmpty, ogImage: nonEmpty });
export const seoSchema = z.strictObject({
  home: routeSeoSchema,
  portfolio: routeSeoSchema,
  about: routeSeoSchema,
  contact: routeSeoSchema,
  privacy: routeSeoSchema,
});

export const siteContentSchema = z.strictObject({
  siteSettings: siteSettingsSchema,
  hero: heroSchema,
  services: servicesSchema,
  eventTypes: eventTypesSchema,
  portfolio: portfolioSchema,
  about: aboutSchema,
  geographicReach: geographicReachSchema,
  credibility: credibilitySchema,
  privacy: privacySchema,
  seo: seoSchema,
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;
export type Hero = z.infer<typeof heroSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type EventType = z.infer<typeof eventTypeSchema>;
export type PortfolioItem = z.infer<typeof portfolioItemSchema>;
export type About = z.infer<typeof aboutSchema>;
export type GeographicReach = z.infer<typeof geographicReachSchema>;
export type Credibility = z.infer<typeof credibilitySchema>;
export type Privacy = z.infer<typeof privacySchema>;
export type Seo = z.infer<typeof seoSchema>;
export type SiteContent = z.infer<typeof siteContentSchema>;

// ---- Placeholder policy (CS §6.8) ----
const PLACEHOLDER_PATTERNS: readonly RegExp[] = [
  /PLACEHOLDER/i,
  /\+000 0000 0000/,
  /\[[^\]]+\]/,
];

export function isPlaceholderValue(value: string): boolean {
  return PLACEHOLDER_PATTERNS.some((re) => re.test(value));
}

export interface PlaceholderHit {
  readonly path: string;
  readonly value: string;
}

export function scanForPlaceholders(input: unknown): PlaceholderHit[] {
  const hits: PlaceholderHit[] = [];
  const walk = (node: unknown, path: string): void => {
    if (typeof node === "string") {
      if (isPlaceholderValue(node)) hits.push({ path, value: node });
      return;
    }
    if (Array.isArray(node)) {
      node.forEach((child, i) => walk(child, path + "[" + i + "]"));
      return;
    }
    if (node !== null && typeof node === "object") {
      for (const [key, child] of Object.entries(node as Record<string, unknown>)) {
        walk(child, path === "" ? key : path + "." + key);
      }
    }
  };
  walk(input, "");
  return hits;
}

// CS §6.4: real contact-shape checks apply only to non-placeholder values.
export function contactShapeErrors(settings: SiteSettings): string[] {
  const errors: string[] = [];
  if (!isPlaceholderValue(settings.email) && !z.email().safeParse(settings.email).success) {
    errors.push("email is not a valid address: " + settings.email);
  }
  if (!isPlaceholderValue(settings.whatsappNumber)) {
    const digits = settings.whatsappNumber.replace(/[^\d]/g, "");
    if (digits.length < 8) errors.push("whatsappNumber is not usable: " + settings.whatsappNumber);
  }
  return errors;
}