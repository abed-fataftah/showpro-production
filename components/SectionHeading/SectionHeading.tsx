import styles from "./SectionHeading.module.css";

export function SectionHeading({ eyebrow, title, as = "h2" }: { eyebrow: string; title: string; as?: "h1" | "h2" }) {
  const Heading = as;
  return (
    <div className={styles.head} data-reveal>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <Heading className={styles.title}>{title}</Heading>
    </div>
  );
}