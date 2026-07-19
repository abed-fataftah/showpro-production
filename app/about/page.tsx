import { about } from "../../content/about";
import { geographicReach } from "../../content/geographic-reach";
import { credibility } from "../../content/credibility";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import styles from "../../components/PageIntro/PageIntro.module.css";

export default function AboutPage() {
  return (
    <section className={`container ${styles.page}`}>
      <SectionHeading eyebrow="Who We Are" title={about.heading} as="h1" />
      <div className={styles.prose}>
        <p>{about.body}</p>
        <p className={styles.dual}>{about.dualBaseLine}</p>
      </div>

      <div className={styles.subsection}>
        <SectionHeading eyebrow="Where We Work" title={geographicReach.heading} />
        <div className={styles.prose}>
          <p>{geographicReach.body}</p>
        </div>
      </div>

      <div className={styles.subsection}>
        <SectionHeading eyebrow={credibility.eyebrow} title={credibility.heading} />
        <div className={styles.prose}>
          <p>{credibility.body}</p>
        </div>
      </div>
    </section>
  );
}