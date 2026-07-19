import { privacy } from "../../content/privacy";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import styles from "../../components/PageIntro/PageIntro.module.css";

export default function PrivacyPage() {
  return (
    <section className={`container ${styles.page}`}>
      <SectionHeading eyebrow="Privacy" title={privacy.heading} as="h1" />
      <div className={styles.prose}>
        <p>{privacy.body}</p>
      </div>
    </section>
  );
}