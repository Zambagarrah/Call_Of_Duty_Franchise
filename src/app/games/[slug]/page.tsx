import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Gamepad2 } from "lucide-react";
import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";
import { games, getGameBySlug } from "@/data/games";
import { cn, seriesBadgeClasses, typeLabel } from "@/lib/utils";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  return {
    title: game.title,
    description: game.summary,
  };
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const predecessor = game.predecessorSlug ? getGameBySlug(game.predecessorSlug) : undefined;
  const successor = game.successorSlug ? getGameBySlug(game.successorSlug) : undefined;

  return (
    <div>
      <div className="relative overflow-hidden border-b border-border-subtle bg-background-elevated">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,106,26,0.14), transparent)",
          }}
          aria-hidden
        />
        <Container className="relative py-14 sm:py-20">
          <Link
            href="/games"
            className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-muted uppercase hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            All games
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className={seriesBadgeClasses(game.series)}>{game.series}</Badge>
            <Badge>{typeLabel(game.type)}</Badge>
            <Badge>{game.year}</Badge>
          </div>
          <h1 className="mt-4 font-display text-4xl leading-tight font-bold tracking-wide text-foreground uppercase sm:text-5xl">
            {game.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{game.summary}</p>
        </Container>
      </div>

      <Container className="grid grid-cols-1 gap-10 py-12 sm:py-16 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-6">
          <div className="flex h-40 items-center justify-center rounded-sm border border-border-subtle bg-surface">
            <Gamepad2 className="h-10 w-10 text-muted/40" aria-hidden />
          </div>

          <div className="flex flex-col gap-4">
            {game.description.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-widest text-foreground uppercase">
              Notable features
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {game.notableFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-sm border border-border-subtle bg-surface px-3 py-2 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {(predecessor || successor) && (
            <div className="grid grid-cols-1 gap-3 border-t border-border-subtle pt-6 sm:grid-cols-2">
              {predecessor ? (
                <Link
                  href={`/games/${predecessor.slug}`}
                  className="group flex flex-col gap-1 rounded-sm border border-border-subtle bg-surface p-4 hover:border-accent/50"
                >
                  <span className="flex items-center gap-1 font-mono text-xs text-muted uppercase">
                    <ArrowLeft className="h-3 w-3" aria-hidden /> Previous
                  </span>
                  <span className="font-display font-semibold text-foreground uppercase group-hover:text-accent">
                    {predecessor.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {successor ? (
                <Link
                  href={`/games/${successor.slug}`}
                  className="group flex flex-col items-end gap-1 rounded-sm border border-border-subtle bg-surface p-4 text-right hover:border-accent/50"
                >
                  <span className="flex items-center gap-1 font-mono text-xs text-muted uppercase">
                    Next <ArrowRight className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="font-display font-semibold text-foreground uppercase group-hover:text-accent">
                    {successor.title}
                  </span>
                </Link>
              ) : null}
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-4">
          <div className="rounded-sm border border-border-subtle bg-surface p-5">
            <h2 className="font-display text-sm font-semibold tracking-widest text-foreground uppercase">
              Details
            </h2>
            <dl className="mt-4 flex flex-col gap-3 text-sm">
              <InfoRow label="Release date" value={game.releaseDate} />
              <InfoRow label="Developer(s)" value={game.developers.join(", ")} />
              <InfoRow label="Publisher" value={game.publisher} />
              <InfoRow label="Platforms" value={game.platforms.join(", ")} />
              {game.engine ? <InfoRow label="Engine" value={game.engine} /> : null}
              <InfoRow label="Setting" value={game.setting} />
            </dl>
          </div>
        </aside>
      </Container>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className={cn("flex flex-col gap-0.5 border-b border-border-subtle pb-3 last:border-0 last:pb-0")}>
      <dt className="font-mono text-[0.65rem] tracking-widest text-muted uppercase">{label}</dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}
