import type { Seo } from "../schema/content";
const r = (name: string) => ({
  title: "[PLACEHOLDER] " + name + " title",
  description: "[PLACEHOLDER] " + name + " description (COPY-003).",
  ogImage: "og/PLACEHOLDER-og.jpg",
});
export const seo = {
  home: r("Home"),
  portfolio: r("Portfolio"),
  about: r("About"),
  contact: r("Contact"),
  privacy: r("Privacy"),
} as const satisfies Seo;