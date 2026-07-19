import type { PortfolioItem, PortfolioTeaser, PortfolioIntro } from "../schema/content";
// Empty until the media feature (F-005) supplies web-ready, consent-confirmed items.
export const portfolio = [] as const satisfies readonly PortfolioItem[];

export const portfolioTeaser = {
  eyebrow: "[PLACEHOLDER] Teaser eyebrow",
  line: "[PLACEHOLDER] Portfolio teaser line pending owner copy (COPY-003).",
} as const satisfies PortfolioTeaser;

export const portfolioIntro = {
  eyebrow: "[PLACEHOLDER] Portfolio eyebrow",
  heading: "[PLACEHOLDER] Portfolio heading pending owner copy (COPY-003).",
  lede: "[PLACEHOLDER] Portfolio lede pending owner copy (COPY-003).",
} as const satisfies PortfolioIntro;