import type { Service } from "../schema/content";
export const services = [
  { title: "[PLACEHOLDER] Service one", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Service two", description: "[PLACEHOLDER] Pending owner copy." },
] as const satisfies readonly Service[];