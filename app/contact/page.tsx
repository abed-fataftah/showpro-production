import { contactPage } from "../../content/contact";
import { siteSettings } from "../../content/site-settings";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { WhatsAppCTA } from "../../components/WhatsAppCTA/WhatsAppCTA";
import styles from "../../components/PageIntro/PageIntro.module.css";

export default function ContactPage() {
  const waDigits = siteSettings.whatsappNumber.replace(/[^\d]/g, "");
  return (
    <section className={`container ${styles.page}`}>
      <SectionHeading eyebrow={contactPage.eyebrow} title={contactPage.heading} as="h1" />
      <div className={styles.prose}>
        <p className={styles.lede}>{contactPage.intro}</p>
      </div>

      <div style={{ marginTop: "var(--space-4)" }}>
        <WhatsAppCTA size="lg" />
      </div>

      <ul className={styles.channels}>
        <li className={styles.channel}>
          <span className={styles.channelLabel}>WhatsApp</span>
          <span className={styles.channelValue}>
            <a href={"https://wa.me/" + waDigits} target="_blank" rel="noopener noreferrer">{siteSettings.whatsappNumber}</a>
          </span>
        </li>
        <li className={styles.channel}>
          <span className={styles.channelLabel}>WeChat</span>
          <span className={styles.channelValue}>{siteSettings.wechatId}</span>
        </li>
        <li className={styles.channel}>
          <span className={styles.channelLabel}>Email</span>
          <span className={styles.channelValue}>
            <a href={"mailto:" + siteSettings.email}>{siteSettings.email}</a>
          </span>
        </li>
      </ul>

      <p className={styles.note}>Copy-to-clipboard buttons and scannable QR codes are added in a later phase.</p>
    </section>
  );
}