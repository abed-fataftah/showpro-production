import type { PortfolioItem } from "../schema/content";
// Empty until the media feature (F-004) supplies web-ready, consent-confirmed items.
// The schema enforces on every real item: discriminated photo|video, video requires poster,
// non-empty alt, consentConfirmed:true, and strict objects (no category).
export const portfolio = [] as const satisfies readonly PortfolioItem[];