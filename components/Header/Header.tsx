import Link from "next/link";
import { siteSettings } from "../../content/site-settings";
import { WhatsAppCTA } from "../WhatsAppCTA/WhatsAppCTA";
import { MobileMenu } from "../client/MobileMenu/MobileMenu";
import styles from "./Header.module.css";

// Server component. The only client JS is the small <MobileMenu /> leaf.
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
        <div className={styles.actions}>
          <WhatsAppCTA />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}