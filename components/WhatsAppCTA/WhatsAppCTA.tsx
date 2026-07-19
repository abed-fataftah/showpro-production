import { siteSettings } from "../../content/site-settings";
import styles from "./WhatsAppCTA.module.css";

// Fixed site-wide primary action label (D-09 / P3-7) - functional UI copy, not business content.
const LABEL = "Chat on WhatsApp";

export function WhatsAppCTA({ size = "md" }: { size?: "md" | "lg" }) {
  const digits = siteSettings.whatsappNumber.replace(/[^\d]/g, "");
  const href = "https://wa.me/" + digits + "?text=" + encodeURIComponent(siteSettings.whatsappOpener);
  const cls = size === "lg" ? styles.ctaLg : styles.cta;
  return (
    <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
      <span className={styles.dot} aria-hidden="true" />
      {LABEL}
    </a>
  );
}