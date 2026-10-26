import type { EventType, EventTypesSection } from "../schema/content";
// Exactly four (CR-007 / D-13), enforced by the schema.
// NOTE: schema requires a non-empty description per type, but the design lists titles only.
// Descriptions mirror the title text (approved copy) until/unless owner supplies one-liners.
export const eventTypes = [
  { title: "Hotel & Resort Private Events", description: "Hotel & resort private events." },
  { title: "Casino Premium-Membership Private Events", description: "Casino premium-membership private events." },
  { title: "Corporate Events", description: "Corporate events." },
  { title: "Mall Festival & Parade Dance Shows", description: "Mall festival & parade dance shows." },
] as const satisfies readonly EventType[];

export const eventTypesSection = {
  eyebrow: "Types of Events",
  intro: "We Work With Professional Event Teams:",
} as const satisfies EventTypesSection;