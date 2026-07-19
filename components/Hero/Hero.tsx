import { hero } from "../../content/hero";
import { WhatsAppCTA } from "../WhatsAppCTA/WhatsAppCTA";
import { MediaPlaceholder } from "../MediaPlaceholder/MediaPlaceholder";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.headline}>{hero.headline}</h1>
          <p className={styles.subhead}>{hero.subhead}</p>
          <div className={styles.actions}>
            <WhatsAppCTA size="lg" />
            <a className={styles.scrollLink} href="#work">See the work ↓</a>
          </div>
        </div>
        <div className={styles.media}>
          <MediaPlaceholder label="Hero media pending (poster + looping video, media phase)" ratio="4 / 5" tone="plum" />
        </div>
      </div>
    </section>
  );
}