import styles from "./PortfolioTile.module.css";

export type TileTone = "plum" | "gold" | "teal" | "steel" | "wine" | "ink";
export interface PortfolioTileData {
  readonly type: "photo" | "video";
  readonly ratio: string;
  readonly tone: TileTone;
  readonly label: string;
  readonly featured?: boolean;
}

export function PortfolioTile({ type, ratio, tone, label, featured }: PortfolioTileData) {
  const cls = [styles.tile, featured ? styles.feat : undefined].filter(Boolean).join(" ");
  const phCls = [styles.ph, styles[tone]].filter(Boolean).join(" ");
  return (
    <div className={cls} data-reveal={featured ? "feature" : "tile"} role="img" aria-label={`Portfolio media pending — ${label} (${type})`}>
      <div className={phCls} style={{ aspectRatio: ratio }}>
        <span className={styles.chip}>{type === "video" ? "Video" : "Photo"}</span>
        {type === "video" ? <span className={styles.play} aria-hidden="true" /> : null}
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}