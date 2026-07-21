import type { PortfolioItem } from "../../schema/content";
import styles from "./PortfolioTile.module.css";

export function PortfolioTile({ item }: { item: PortfolioItem }) {
  const cls = [styles.tile, item.featured ? styles.feat : undefined].filter(Boolean).join(" ");
  const reveal = item.featured ? "feature" : "tile";

  if (item.type === "video") {
    return (
      <div className={cls} data-reveal={reveal}>
        <video className={styles.video} poster={item.poster} controls muted preload="none" playsInline aria-label={item.alt}>
          <source src={item.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  const webpLg = item.src.replace(/\.jpg$/i, ".webp");
  const webpSm = webpLg.replace(/-lg\.webp$/i, "-sm.webp");
  return (
    <div className={cls} data-reveal={reveal}>
      <picture>
        <source type="image/webp" srcSet={`${webpSm} 800w, ${webpLg} 1600w`} sizes="(max-width: 820px) 50vw, 33vw" />
        <img className={styles.img} src={item.src} alt={item.alt} loading="lazy" decoding="async" />
      </picture>
    </div>
  );
}