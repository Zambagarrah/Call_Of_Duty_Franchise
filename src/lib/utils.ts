import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { GameType, Series, StudioRole, TimelineCategory } from "@/data/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupBy<T, K extends string | number>(
  items: T[],
  keyFn: (item: T) => K,
): Map<K, T[]> {
  const map = new Map<K, T[]>();
  for (const item of items) {
    const key = keyFn(item);
    const bucket = map.get(key);
    if (bucket) {
      bucket.push(item);
    } else {
      map.set(key, [item]);
    }
  }
  return map;
}

const SERIES_STYLES: Record<Series, string> = {
  Classic: "border-stone-500/40 bg-stone-500/10 text-stone-300",
  "Modern Warfare": "border-sky-500/40 bg-sky-500/10 text-sky-300",
  "Black Ops": "border-red-500/40 bg-red-500/10 text-red-300",
  Ghosts: "border-slate-400/40 bg-slate-400/10 text-slate-300",
  "Advanced Warfare": "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  "Infinite Warfare": "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
  WWII: "border-amber-600/40 bg-amber-600/10 text-amber-400",
  Vanguard: "border-orange-500/40 bg-orange-500/10 text-orange-300",
  Warzone: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  Mobile: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  Other: "border-zinc-500/40 bg-zinc-500/10 text-zinc-300",
};

export function seriesBadgeClasses(series: Series): string {
  return SERIES_STYLES[series] ?? SERIES_STYLES.Other;
}

const TYPE_LABELS: Record<GameType, string> = {
  mainline: "Mainline",
  expansion: "Expansion",
  remaster: "Remaster",
  spinoff: "Spin-off",
  mobile: "Mobile",
  "battle-royale": "Battle Royale",
  regional: "Regional release",
};

export function typeLabel(type: GameType): string {
  return TYPE_LABELS[type];
}

const ROLE_LABELS: Record<StudioRole, string> = {
  lead: "Lead studio",
  support: "Support studio",
  mobile: "Mobile studio",
  infrastructure: "Infrastructure studio",
};

export function studioRoleLabel(role: StudioRole): string {
  return ROLE_LABELS[role];
}

const TIMELINE_CATEGORY_STYLES: Record<TimelineCategory, string> = {
  release: "border-orange-500/40 bg-orange-500/10 text-orange-300",
  studio: "border-sky-500/40 bg-sky-500/10 text-sky-300",
  business: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  esports: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300",
  technology: "border-violet-500/40 bg-violet-500/10 text-violet-300",
};

export function timelineCategoryClasses(category: TimelineCategory): string {
  return TIMELINE_CATEGORY_STYLES[category];
}

const TIMELINE_CATEGORY_LABELS: Record<TimelineCategory, string> = {
  release: "Release",
  studio: "Studio",
  business: "Business",
  esports: "Esports",
  technology: "Technology",
};

export function timelineCategoryLabel(category: TimelineCategory): string {
  return TIMELINE_CATEGORY_LABELS[category];
}
