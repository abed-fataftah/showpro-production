import { portfolioIntro, portfolio } from "../../content/portfolio";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { MediaPlaceholder } from "../../components/MediaPlaceholder/MediaPlaceholder";
import styles from "../../components/PageIntro/PageIntro.module.css";
import { routeMetadata } from "../../lib/seo";
export const metadata = routeMetadata("portfolio");
export default function PortfolioPage() {
  // Real masonry + video tiles arrive with the islands + media phases; static placeholder grid for now.
  const tiles: ReadonlyArray<{ ratio: string; tone: "plum" | "gold" | "neutral" }> = [
    { ratio: "3 / 4", tone: "plum" },
    { ratio: "1 / 1", tone: "gold" },
    { ratio: "4 / 3", tone: "neutral" },
    { ratio: "1 / 1", tone: "plum" },
    { ratio: "3 / 4", tone: "gold" },
    { ratio: "4 / 3", tone: "neutral" },
  ];
  return (
    <section className={`container ${styles.page}`}>
      <SectionHeading eyebrow={portfolioIntro.eyebrow} title={portfolioIntro.heading} as="h1" />
      <div className={styles.prose}>
        <p className={styles.lede}>{portfolioIntro.lede}</p>
      </div>
      <div className={styles.grid}>
        {tiles.map((t, i) => (
          <MediaPlaceholder key={i} label="Portfolio media pending" ratio={t.ratio} tone={t.tone} />
        ))}
      </div>
      <p className={styles.note}>
        {portfolio.length === 0 ? "Gallery items are added with the media phase." : ""}
      </p>
    </section>
  );
}