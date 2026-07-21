import { portfolioIntro, portfolio } from "../../content/portfolio";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { PortfolioMasonry } from "../../components/PortfolioTile/PortfolioMasonry";
import { fullTiles } from "../../components/PortfolioTile/sampleTiles";
import styles from "../../components/PageIntro/PageIntro.module.css";
import { routeMetadata } from "../../lib/seo";
export const metadata = routeMetadata("portfolio");
export default function PortfolioPage() {
  return (
    <section className={`container ${styles.page}`}>
      <SectionHeading eyebrow={portfolioIntro.eyebrow} title={portfolioIntro.heading} as="h1" />
      <div className={styles.prose}>
        <p className={styles.lede}>{portfolioIntro.lede}</p>
      </div>
      <PortfolioMasonry items={fullTiles} />
      <p className={styles.note}>{portfolio.length === 0 ? "Gallery items are added with the media phase." : ""}</p>
    </section>
  );
}