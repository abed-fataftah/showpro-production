import { services, servicesSection } from "../../content/services";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow={servicesSection.eyebrow} title={servicesSection.heading} />
        <ol className={styles.list}>
          {services.map((svc, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.title}>{svc.title}</h3>
                <p className={styles.desc}>{svc.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.closing}>{servicesSection.closing}</p>
      </div>
    </section>
  );
}