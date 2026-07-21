import type { PortfolioItem, PortfolioTeaser, PortfolioIntro } from "../schema/content";
// Empty until the media pass supplies web-ready, consent-confirmed items.
export const portfolio = [] as const satisfies readonly PortfolioItem[];

export const portfolioTeaser = {
  eyebrow: "Selected Work",
  line: "A look at the shows we create — bands, dancers, and full productions, performed by our own team.",
} as const satisfies PortfolioTeaser;

export const portfolioIntro = {
  eyebrow: "The Work",
  heading: "One curated look at what we do.",
  lede: "Live bands, dance productions, models and ushers, and the shows we build around them.",
} as const satisfies PortfolioIntro;