import { hero } from "../../content/hero";
import { WhatsAppCTA } from "../WhatsAppCTA/WhatsAppCTA";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.sweep} aria-hidden="true" />
      <div className={styles.scrim} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>{hero.eyebrow}</span>
        <h1 className={styles.headline}>{hero.headline}</h1>
        <p className={styles.subhead}>{hero.subhead}</p>
        <div className={styles.actions}>
          <WhatsAppCTA size="lg" />
          <a className={styles.scrollLink} href="#work">
            See the work <span className={styles.arrow} aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}