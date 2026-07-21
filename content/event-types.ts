import type { EventType, EventTypesSection } from "../schema/content";
// Exactly four (CR-007 / D-13), enforced by the schema.
// NOTE: schema requires a non-empty description per type, but the design lists titles only.
// Descriptions mirror the title text (approved copy) until/unless owner supplies one-liners.
export const eventTypes = [
  { title: "Hotel & resort private events", description: "Hotel & resort private events." },
  { title: "Casino premium-membership private events", description: "Casino premium-membership private events." },
  { title: "Corporate events", description: "Corporate events." },
  { title: "Mall festival & parade dance shows", description: "Mall festival & parade dance shows." },
] as const satisfies readonly EventType[];

export const eventTypesSection = {
  eyebrow: "Types of Events",
  intro: "We work with professional event teams on:",
} as const satisfies EventTypesSection;