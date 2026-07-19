import Link from "next/link";
import { siteSettings } from "../../content/site-settings";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  const waDigits = siteSettings.whatsappNumber.replace(/[^\d]/g, "");
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.tagline}>{siteSettings.tagline}</p>

        <nav className={styles.links} aria-label="Footer">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>

        <ul className={styles.channels}>
          <li>
            <a href={"https://wa.me/" + waDigits} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </li>
          <li>WeChat: {siteSettings.wechatId}</li>
          <li>
            <a href={"mailto:" + siteSettings.email}>Email</a>
          </li>
        </ul>

        <p className={styles.reach}>{siteSettings.reachLine}</p>
        <p className={styles.copy}>© {year} {siteSettings.businessName}</p>
      </div>
    </footer>
  );
}