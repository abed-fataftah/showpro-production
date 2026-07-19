import Link from "next/link";
import { siteSettings } from "../../content/site-settings";
import { WhatsAppCTA } from "../WhatsAppCTA/WhatsAppCTA";
import styles from "./Header.module.css";

// Nav labels are fixed structural copy (CS §6.7), not editable business content.
// Static shell only: mobile hamburger toggle + scroll-condense are deferred to phase 4 (islands).
export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark}>{siteSettings.businessName}</Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={styles.cta}>
          <WhatsAppCTA />
        </div>
      </div>
    </header>
  );
}