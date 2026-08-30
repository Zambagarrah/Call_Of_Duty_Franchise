import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2 } from "lucide-react";
import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";
import { GameCard } from "@/components/GameCard";
import { studios, getStudioBySlug } from "@/data/studios";
import { getGameBySlug } from "@/data/games";
import { studioRoleLabel } from "@/lib/utils";

export function generateStaticParams() {
  return studios.map((studio) => ({ slug: studio.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const studio = getStudioBySlug(slug);
  if (!studio) return {};
  return {
    title: studio.name,
    description: studio.description[0],
  };
}

export default async function StudioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const studio = getStudioBySlug(slug);
  if (!studio) notFound();

  const notableGames = studio.notableGameSlugs
    .map((s) => getGameBySlug(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <div>
      <div className="relative overflow-hidden border-b border-border-subtle bg-background-elevated">
        <Container className="relative py-14 sm:py-20">
          <Link
            href="/studios"
            className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-muted uppercase hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            All studios
          </Link>
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border-subtle bg-surface text-accent">
              <Building2 className="h-7 w-7" aria-hidden />
            </span>
            <div>
              <h1 className="font-display text-3xl leading-tight font-bold tracking-wide text-foreground uppercase sm:text-4xl">
                {studio.name}
              </h1>
              <p className="mt-1 font-mono text-xs text-muted">
                Est. {studio.founded} · {studio.headquarters}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>{studioRoleLabel(studio.role)}</Badge>
            <Badge>Owned by {studio.parent}</Badge>
          </div>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-4">
          {studio.description.map((paragraph, i) => (
            <p key={i} className="max-w-3xl text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        {notableGames.length > 0 ? (
          <div className="mt-12">
            <h2 className="font-display text-sm font-semibold tracking-widest text-foreground uppercase">
              Notable work
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {notableGames.map((game) => (
                <GameCard key={game.slug} game={game} />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
