import type { Hero } from "../schema/content";
export const hero = {
  eyebrow: "Live Show Production — Macau & Malaysia",
  headline: "We build the show your event is remembered for.",
  subhead: "From casting and choreography to music, costume, props, and on-site direction, we create and produce bespoke live entertainment for casinos, hotels, resorts, and corporate events across Macau, Hong Kong, Malaysia, and Singapore.",
} as const satisfies Hero;