import type { PortfolioItem } from "../../schema/content";
import { PortfolioTile } from "./PortfolioTile";
import styles from "./PortfolioTile.module.css";

export function PortfolioMasonry({ items }: { items: readonly PortfolioItem[] }) {
  return (
    <div className={styles.masonry}>
      {items.map((it, i) => (
        <PortfolioTile key={i} item={it} />
      ))}
    </div>
  );
}