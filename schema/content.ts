import * as z from "zod";

const nonEmpty = z.string().min(1);

export const siteSettingsSchema = z.strictObject({
  businessName: nonEmpty,
  whatsappNumber: nonEmpty,
  wechatId: nonEmpty,
  wechatQr: nonEmpty,
  email: nonEmpty,
  whatsappOpener: nonEmpty,
  reachLine: nonEmpty,
  tagline: nonEmpty,
});

export const heroSchema = z.strictObject({
  eyebrow: nonEmpty,
  headline: nonEmpty,
  subhead: nonEmpty,
  poster: nonEmpty,
  videoSrc: nonEmpty,
});

export const serviceSchema = z.strictObject({ title: nonEmpty, description: nonEmpty });
export const servicesSchema = z.array(serviceSchema).min(1);
export const servicesSectionSchema = z.strictObject({ eyebrow: nonEmpty, heading: nonEmpty, closing: nonEmpty });

export const eventTypeSchema = z.strictObject({ title: nonEmpty, description: nonEmpty });
// CR-007 / D-13: exactly four event types.
export const eventTypesSchema = z.array(eventTypeSchema).length(4);
export const eventTypesSectionSchema = z.strictObject({ eyebrow: nonEmpty, intro: nonEmpty });

// BR-003 / CR-009: strict => no category. NFR-005: video requires poster.
// BR-004 / BR-007: consentConfirmed true. ACC-004 / SEO-003: non-empty alt.
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
export const portfolioTeaserSchema = z.strictObject({ eyebrow: nonEmpty, line: nonEmpty });
export const portfolioIntroSchema = z.strictObject({ eyebrow: nonEmpty, heading: nonEmpty, lede: nonEmpty });

export const aboutSchema = z.strictObject({ heading: nonEmpty, body: nonEmpty, dualBaseLine: nonEmpty });
export const geographicReachSchema = z.strictObject({ heading: nonEmpty, body: nonEmpty });
export const credibilitySchema = z.strictObject({
  eyebrow: nonEmpty,
  heading: nonEmpty,
  body: nonEmpty,
  points: z.array(z.strictObject({ title: nonEmpty, body: nonEmpty })).min(1),
});
export const privacySchema = z.strictObject({ heading: nonEmpty, body: nonEmpty });

export const contactBandSchema = z.strictObject({ eyebrow: nonEmpty, heading: nonEmpty });
export const contactPageSchema = z.strictObject({ eyebrow: nonEmpty, heading: nonEmpty, intro: nonEmpty });

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
  servicesSection: servicesSectionSchema,
  eventTypes: eventTypesSchema,
  eventTypesSection: eventTypesSectionSchema,
  portfolio: portfolioSchema,
  portfolioTeaser: portfolioTeaserSchema,
  portfolioIntro: portfolioIntroSchema,
  about: aboutSchema,
  geographicReach: geographicReachSchema,
  credibility: credibilitySchema,
  privacy: privacySchema,
  contactBand: contactBandSchema,
  contactPage: contactPageSchema,
  seo: seoSchema,
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;
export type Hero = z.infer<typeof heroSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type ServicesSection = z.infer<typeof servicesSectionSchema>;
export type EventType = z.infer<typeof eventTypeSchema>;
export type EventTypesSection = z.infer<typeof eventTypesSectionSchema>;
export type PortfolioItem = z.infer<typeof portfolioItemSchema>;
export type PortfolioTeaser = z.infer<typeof portfolioTeaserSchema>;
export type PortfolioIntro = z.infer<typeof portfolioIntroSchema>;
export type About = z.infer<typeof aboutSchema>;
export type GeographicReach = z.infer<typeof geographicReachSchema>;
export type Credibility = z.infer<typeof credibilitySchema>;
export type Privacy = z.infer<typeof privacySchema>;
export type ContactBand = z.infer<typeof contactBandSchema>;
export type ContactPage = z.infer<typeof contactPageSchema>;
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