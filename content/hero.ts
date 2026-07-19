import type { Hero } from "../schema/content";
export const hero = {
  eyebrow: "[PLACEHOLDER] Hero eyebrow pending owner copy (COPY-003).",
  headline: "[PLACEHOLDER] Hero headline pending owner copy (COPY-003).",
  subhead: "[PLACEHOLDER] Hero subhead pending owner copy (COPY-003).",
  poster: "media/PLACEHOLDER-hero-poster.jpg",
  videoSrc: "media/PLACEHOLDER-hero.mp4",
} as const satisfies Hero;