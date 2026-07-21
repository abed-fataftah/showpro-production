import { portfolioIntro, portfolio } from "../../content/portfolio";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { PortfolioMasonry } from "../../components/PortfolioTile/PortfolioMasonry";
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
      <PortfolioMasonry items={portfolio} />
    </section>
  );
}