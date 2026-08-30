"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Game, GameType, Series } from "@/data/types";
import { GameCard } from "./GameCard";
import { Reveal } from "./Reveal";
import { cn, typeLabel } from "@/lib/utils";

const ALL_TYPES: GameType[] = [
  "mainline",
  "remaster",
  "expansion",
  "spinoff",
  "mobile",
  "battle-royale",
  "regional",
];

export function GamesExplorer({ games, series }: { games: Game[]; series: Series[] }) {
  const [query, setQuery] = useState("");
  const [activeSeries, setActiveSeries] = useState<Series | "All">("All");
  const [activeType, setActiveType] = useState<GameType | "All">("All");
  const [sort, setSort] = useState<"newest" | "oldest" | "az">("newest");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let result = games.filter((game) => {
      const matchesQuery =
        q.length === 0 ||
        game.title.toLowerCase().includes(q) ||
        game.summary.toLowerCase().includes(q) ||
        game.developers.some((dev) => dev.toLowerCase().includes(q));
      const matchesSeries = activeSeries === "All" || game.series === activeSeries;
      const matchesType = activeType === "All" || game.type === activeType;
      return matchesQuery && matchesSeries && matchesType;
    });

    result = [...result].sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      if (sort === "oldest") return a.year - b.year;
      return b.year - a.year;
    });

    return result;
  }, [games, query, activeSeries, activeType, sort]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-sm border border-border-subtle bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games or developers…"
            className="w-full rounded-sm border border-border-subtle bg-background-elevated py-2 pr-3 pl-9 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={activeType}
            onChange={(e) => setActiveType(e.target.value as GameType | "All")}
            className="rounded-sm border border-border-subtle bg-background-elevated px-3 py-2 font-mono text-xs tracking-wide text-foreground uppercase focus:border-accent focus:outline-none"
          >
            <option value="All">All types</option>
            {ALL_TYPES.map((type) => (
              <option key={type} value={type}>
                {typeLabel(type)}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="rounded-sm border border-border-subtle bg-background-elevated px-3 py-2 font-mono text-xs tracking-wide text-foreground uppercase focus:border-accent focus:outline-none"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="az">A–Z</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveSeries("All")}
          className={cn(
            "rounded-sm border px-3 py-1.5 font-mono text-xs font-semibold tracking-wide uppercase transition-colors",
            activeSeries === "All"
              ? "border-accent bg-accent/10 text-accent"
              : "border-border-subtle text-muted hover:text-foreground",
          )}
        >
          All series
        </button>
        {series.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setActiveSeries(s)}
            className={cn(
              "rounded-sm border px-3 py-1.5 font-mono text-xs font-semibold tracking-wide uppercase transition-colors",
              activeSeries === s
                ? "border-accent bg-accent/10 text-accent"
                : "border-border-subtle text-muted hover:text-foreground",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="font-mono text-xs text-muted">
        {filtered.length} title{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length > 0 ? (
        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </Reveal>
      ) : (
        <div className="rounded-sm border border-dashed border-border-subtle p-10 text-center text-sm text-muted">
          No titles match your filters. Try clearing the search or picking a different series.
        </div>
      )}
    </div>
  );
}
