import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={`container ${styles.wrap}`}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.body}>The page you were looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className={styles.link}>Return home →</Link>
    </section>
  );
}