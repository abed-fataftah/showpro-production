import Link from "next/link";
import { portfolioTeaser } from "../../content/portfolio";
import { MediaPlaceholder } from "../MediaPlaceholder/MediaPlaceholder";
import styles from "./PortfolioTeaser.module.css";

export function PortfolioTeaser() {
  const tiles: ReadonlyArray<{ ratio: string; tone: "plum" | "gold" | "neutral" }> = [
    { ratio: "3 / 4", tone: "plum" },
    { ratio: "1 / 1", tone: "gold" },
    { ratio: "3 / 4", tone: "neutral" },
  ];
  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>{portfolioTeaser.eyebrow}</span>
          <p className={styles.line}>{portfolioTeaser.line}</p>
          <Link className={styles.link} href="/portfolio">View full portfolio →</Link>
        </div>
        <div className={styles.grid}>
          {tiles.map((t, i) => (
            <MediaPlaceholder key={i} label="Portfolio media pending" ratio={t.ratio} tone={t.tone} />
          ))}
        </div>
      </div>
    </section>
  );
}