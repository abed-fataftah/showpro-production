import type { SiteSettings } from "../schema/content";
// Real owner-approved values (F-007). wechatId + wechatQr remain placeholders:
// the WeChat handle + cropped QR image belong to the pictures/QR pass (kept placeholder so production stays gated).
export const siteSettings = {
  businessName: "Showpro Production",
  whatsappNumber: "+60 17-500 2680",
  wechatId: "[wechat-id-placeholder]",
  wechatQr: "qr/PLACEHOLDER-wechat-qr.png",
  email: "Showpromacau@gmail.com",
  whatsappOpener: "Hi — I'd like to enquire about a live show for an event.",
  reachLine: "Macau · Hong Kong · Malaysia · Singapore",
  tagline: "Live show production — Macau & Malaysia.",
} as const satisfies SiteSettings;