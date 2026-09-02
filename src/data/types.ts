// Shared content types for the Franchise Archive data set.
// All copy in this data layer is original, editorial summary text written
// for this project — it is not copied from any official source.

export type GameType =
  | "mainline"
  | "expansion"
  | "remaster"
  | "spinoff"
  | "mobile"
  | "battle-royale"
  | "regional";

export type Series =
  | "Classic"
  | "Modern Warfare"
  | "Black Ops"
  | "Ghosts"
  | "Advanced Warfare"
  | "Infinite Warfare"
  | "WWII"
  | "Vanguard"
  | "Warzone"
  | "Mobile"
  | "Other";

export interface Game {
  slug: string;
  title: string;
  series: Series;
  type: GameType;
  year: number;
  releaseDate: string;
  developers: string[];
  publisher: string;
  platforms: string[];
  engine?: string;
  setting: string;
  summary: string;
  description: string[];
  notableFeatures: string[];
  predecessorSlug?: string;
  successorSlug?: string;
  /** Optional key art / cover photo, relative to /public (e.g. "/images/games/foo.jpg"). */
  coverImage?: string;
}

export type StudioRole =
  | "lead"
  | "support"
  | "mobile"
  | "infrastructure";

export interface Studio {
  slug: string;
  name: string;
  founded: number;
  headquarters: string;
  role: StudioRole;
  roleLabel: string;
  parent: string;
  description: string[];
  notableGameSlugs: string[];
}

export type TimelineCategory =
  | "release"
  | "studio"
  | "business"
  | "esports"
  | "technology";

export interface TimelineEvent {
  id: string;
  year: number;
  date?: string;
  title: string;
  category: TimelineCategory;
  description: string;
  relatedGameSlug?: string;
}

export type FutureStatus = "confirmed" | "rumored";

export interface FutureEntry {
  id: string;
  title: string;
  expectedWindow: string;
  status: FutureStatus;
  studio?: string;
  summary: string;
  details: string[];
}
