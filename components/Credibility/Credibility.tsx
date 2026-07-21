import { credibility } from "../../content/credibility";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./Credibility.module.css";

export function Credibility() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={credibility.eyebrow} title={credibility.heading} />
        <p className={styles.body}>{credibility.body}</p>
        <ul className={styles.points} data-reveal>
          {credibility.points.map((pt, i) => (
            <li key={i} className={styles.point}>
              <span className={styles.mk} aria-hidden="true" />
              <h3 className={styles.pointTitle}>{pt.title}</h3>
              <p className={styles.pointBody}>{pt.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}