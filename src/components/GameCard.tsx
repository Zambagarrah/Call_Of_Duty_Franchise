import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import type { Game } from "@/data/types";
import { Badge } from "./Badge";
import { cn, seriesBadgeClasses, typeLabel } from "@/lib/utils";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-border-subtle bg-surface transition-colors hover:border-accent/50 hover:bg-surface-hover"
    >
      <div
        className={cn(
          "relative flex h-32 items-center justify-center overflow-hidden border-b border-border-subtle bg-background-elevated",
        )}
      >
        <span className="font-display text-5xl font-bold tracking-widest text-foreground/10 select-none">
          {game.year}
        </span>
        <Gamepad2
          className="absolute h-8 w-8 text-muted/40 transition-colors group-hover:text-accent/70"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={seriesBadgeClasses(game.series)}>{game.series}</Badge>
          <Badge>{typeLabel(game.type)}</Badge>
        </div>
        <h3 className="font-display text-lg leading-snug font-semibold tracking-wide text-foreground uppercase group-hover:text-accent">
          {game.title}
        </h3>
        <p className="line-clamp-3 text-sm text-muted">{game.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-2 font-mono text-xs text-muted/70">
          <span>{game.year}</span>
          <span>{game.developers[0]}{game.developers.length > 1 ? " +" : ""}</span>
        </div>
      </div>
    </Link>
  );
}
