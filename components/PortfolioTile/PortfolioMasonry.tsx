import { PortfolioTile, type PortfolioTileData } from "./PortfolioTile";
import styles from "./PortfolioTile.module.css";

export function PortfolioMasonry({ items }: { items: readonly PortfolioTileData[] }) {
  return (
    <div className={styles.masonry}>
      {items.map((it, i) => (
        <PortfolioTile key={i} {...it} />
      ))}
    </div>
  );
}