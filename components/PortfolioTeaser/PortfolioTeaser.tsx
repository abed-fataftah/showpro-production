import Link from "next/link";
import { portfolio, portfolioTeaser } from "../../content/portfolio";
import { PortfolioMasonry } from "../PortfolioTile/PortfolioMasonry";
import styles from "./PortfolioTeaser.module.css";

export function PortfolioTeaser() {
  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <div className={styles.head} data-reveal>
          <span className={styles.eyebrow}>{portfolioTeaser.eyebrow}</span>
          <p className={styles.line}>{portfolioTeaser.line}</p>
          <Link className={styles.link} href="/portfolio">View full portfolio →</Link>
        </div>
        <PortfolioMasonry items={portfolio.slice(0, 6)} />
      </div>
    </section>
  );
}