import type { Credibility } from "../schema/content";
export const credibility = {
  eyebrow: "Experience",
  heading: "Built for premium venues.",
  body: "Our work lives in premium environments — casinos, hotels, resorts, and corporate stages across Asia. We build shows to the standard those rooms expect: polished, rehearsed, and ready for a discerning audience.",
  points: [
    { title: "End-to-end production", body: "One team, from concept to the day itself." },
    { title: "Professional performers", body: "Dancers, singers, musicians, and models." },
    { title: "Dual bases, regional reach", body: "Macau and Malaysia, working across the region." },
    { title: "Custom to your theme", body: "Music, costume, and choreography built for your event." },
  ],
} as const satisfies Credibility;