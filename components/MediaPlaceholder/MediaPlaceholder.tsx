import styles from "./MediaPlaceholder.module.css";

// Styled stand-in for pending owner media (PO §D-25). No real <img>/<video> until the media phase.
export function MediaPlaceholder({ label, ratio = "16 / 9", tone = "plum" }: { label: string; ratio?: string; tone?: "plum" | "gold" | "neutral" }) {
  const toneClass = tone === "gold" ? styles.gold : tone === "neutral" ? styles.neutral : styles.plum;
  return (
    <div className={`${styles.ph} ${toneClass}`} style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <span className={styles.tag}>{label}</span>
    </div>
  );
}