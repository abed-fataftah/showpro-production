import { contactBand } from "../../content/contact";
import { WhatsAppCTA } from "../WhatsAppCTA/WhatsAppCTA";
import styles from "./ContactBand.module.css";

export function ContactBand() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>{contactBand.eyebrow}</span>
        <h2 className={styles.heading}>{contactBand.heading}</h2>
        <WhatsAppCTA size="lg" />
      </div>
    </section>
  );
}