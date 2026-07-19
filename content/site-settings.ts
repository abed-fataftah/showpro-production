import type { SiteSettings } from "../schema/content";
// DEVELOPMENT PLACEHOLDERS ONLY (CS §6.8). Owner values are outstanding blockers (PO §D-25).
export const siteSettings = {
  businessName: "[Business Name]",
  whatsappNumber: "+000 0000 0000",
  wechatId: "[wechat-id-placeholder]",
  wechatQr: "qr/PLACEHOLDER-wechat-qr.png",
  email: "hello@[businessname].com",
  whatsappOpener: "[PLACEHOLDER] Enquiry opener pending owner sign-off (COPY-003).",
  reachLine: "[PLACEHOLDER] Reach line pending owner sign-off (COPY-003).",
  tagline: "[PLACEHOLDER] Footer tagline pending owner sign-off (COPY-003).",
} as const satisfies SiteSettings;