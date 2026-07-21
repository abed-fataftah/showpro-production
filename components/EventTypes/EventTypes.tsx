import { eventTypes, eventTypesSection } from "../../content/event-types";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./EventTypes.module.css";

const NUMERALS = ["i", "ii", "iii", "iv"] as const;

export function EventTypes() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={eventTypesSection.eyebrow} title={eventTypesSection.intro} />
        <ul className={styles.list} data-reveal>
          {eventTypes.map((et, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.idx} aria-hidden="true">{NUMERALS[i] ?? String(i + 1)}</span>
              <h3 className={styles.title}>{et.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}