import { contactPage } from "../../content/contact";
import { siteSettings } from "../../content/site-settings";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { WhatsAppCTA } from "../../components/WhatsAppCTA/WhatsAppCTA";
import { CopyButton } from "../../components/client/CopyButton/CopyButton";
import intro from "../../components/PageIntro/PageIntro.module.css";
import styles from "./contact.module.css";
import { routeMetadata } from "../../lib/seo";
export const metadata = routeMetadata("contact");

export default function ContactPage() {
  const waDigits = siteSettings.whatsappNumber.replace(/[^\d]/g, "");
  return (
    <section className={`container ${intro.page}`}>
      <SectionHeading eyebrow={contactPage.eyebrow} title={contactPage.heading} as="h1" />
      <div className={intro.prose}>
        <p className={intro.lede}>{contactPage.intro}</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.channels}>
          <div className={`${styles.channel} ${styles.primary}`}>
            <div className={styles.chTop}>
              <span className={styles.chName}>WhatsApp</span>
              <span className={styles.tag}>Primary</span>
            </div>
            <p className={styles.chNote}>Opens a chat with a ready-to-send message.</p>
            <WhatsAppCTA size="lg" />
            <div className={styles.copyRow}>
              <span className={styles.copyField}>
                <a href={"https://wa.me/" + waDigits} target="_blank" rel="noopener noreferrer">{siteSettings.whatsappNumber}</a>
              </span>
              <CopyButton value={siteSettings.whatsappNumber} label="WhatsApp number" />
            </div>
          </div>

          <div className={styles.channel}>
            <div className={styles.chTop}><span className={styles.chName}>WeChat</span></div>
            <p className={styles.chNote}>Scan the QR code to add us on WeChat.</p>
          </div>

          <div className={styles.channel}>
            <div className={styles.chTop}><span className={styles.chName}>Email</span></div>
            <div className={styles.copyRow}>
              <span className={styles.copyField}>
                <a href={"mailto:" + siteSettings.email}>{siteSettings.email}</a>
              </span>
              <CopyButton value={siteSettings.email} label="Email address" />
            </div>
          </div>
        </div>

        <div className={styles.qrCol}>
          <p className={styles.desktopNote}>Desktop · scan to start on your phone</p>
          <div className={styles.qrPair}>
            <div className={styles.qr}>
              <img className={styles.code} src="/qr/whatsapp-qr.png" alt="WhatsApp QR code to chat with Showpro Production" width={240} height={240} />
              <p className={styles.cap}>WhatsApp — scan to chat</p>
            </div>
            <div className={styles.qr}>
              <img className={styles.code} src={siteSettings.wechatQr} alt="WeChat QR code to add Showpro Production" width={240} height={240} />
              <p className={styles.cap}>WeChat — scan to add</p>
            </div>
          </div>
          <p className={styles.privacyNote}>No form. No data stored. Anything you share when you message us is used only to reply.</p>
        </div>
      </div>
    </section>
  );
}