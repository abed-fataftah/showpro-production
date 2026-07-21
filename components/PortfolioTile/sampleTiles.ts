import type { PortfolioTileData } from "./PortfolioTile";

// Placeholder masonry tiles — visual stand-ins until owner media (PO §D-25). NOT owner content.
export const teaserTiles: readonly PortfolioTileData[] = [
  { type: "video", ratio: "16 / 10", tone: "plum",  label: "Dance production", featured: true },
  { type: "photo", ratio: "3 / 4",   tone: "gold",  label: "Live band" },
  { type: "photo", ratio: "1 / 1",   tone: "teal",  label: "Stage set" },
  { type: "video", ratio: "9 / 13",  tone: "wine",  label: "Showcase reel", featured: true },
  { type: "photo", ratio: "4 / 3",   tone: "steel", label: "Performers" },
  { type: "photo", ratio: "3 / 4",   tone: "ink",   label: "Costume detail" },
];

export const fullTiles: readonly PortfolioTileData[] = [
  ...teaserTiles,
  { type: "photo", ratio: "4 / 5",   tone: "plum",  label: "Choreography" },
  { type: "video", ratio: "16 / 9",  tone: "gold",  label: "Band set" },
  { type: "photo", ratio: "1 / 1",   tone: "wine",  label: "Ushers" },
  { type: "photo", ratio: "3 / 4",   tone: "teal",  label: "Models" },
  { type: "video", ratio: "4 / 5",   tone: "steel", label: "Full production", featured: true },
  { type: "photo", ratio: "16 / 10", tone: "ink",   label: "Lighting" },
  { type: "photo", ratio: "9 / 13",  tone: "wine",  label: "On stage" },
  { type: "video", ratio: "1 / 1",   tone: "plum",  label: "Rehearsal" },
];