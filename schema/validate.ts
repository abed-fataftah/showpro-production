import {
  siteContentSchema,
  scanForPlaceholders,
  contactShapeErrors,
  type SiteContent,
} from "./content";

import { siteSettings } from "../content/site-settings";
import { hero } from "../content/hero";
import { services, servicesSection } from "../content/services";
import { eventTypes, eventTypesSection } from "../content/event-types";
import { portfolio, portfolioTeaser, portfolioIntro } from "../content/portfolio";
import { about } from "../content/about";
import { geographicReach } from "../content/geographic-reach";
import { credibility } from "../content/credibility";
import { privacy } from "../content/privacy";
import { contactBand, contactPage } from "../content/contact";
import { seo } from "../content/seo";

type BuildMode = "preview" | "production";
const mode: BuildMode = process.env.SITE_BUILD_MODE === "production" ? "production" : "preview";

const raw = {
  siteSettings, hero,
  services, servicesSection,
  eventTypes, eventTypesSection,
  portfolio, portfolioTeaser, portfolioIntro,
  about, geographicReach, credibility, privacy,
  contactBand, contactPage, seo,
};

const parsed: SiteContent = siteContentSchema.parse(raw);

const cErrors = contactShapeErrors(parsed.siteSettings);
if (cErrors.length > 0) {
  throw new Error("[content] contact-value errors:\n - " + cErrors.join("\n - "));
}

const hits = scanForPlaceholders(parsed);
if (hits.length > 0) {
  const lines = hits.map((h) => "   - " + h.path + " = " + JSON.stringify(h.value)).join("\n");
  if (mode === "production") {
    throw new Error("[content] PRODUCTION build blocked: " + hits.length + " placeholder(s) remain (CS §6.8):\n" + lines);
  }
  console.warn("[content] preview mode: " + hits.length + " clearly-marked placeholder(s) present (blocks production):\n" + lines);
}

export const content: SiteContent = parsed;