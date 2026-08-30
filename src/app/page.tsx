import Link from "next/link";
import { ArrowRight, Gamepad2, Building2, Clock, Radar } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { StatBlock } from "@/components/StatBlock";
import { GameCard } from "@/components/GameCard";
import { Badge } from "@/components/Badge";
import { games, getGameBySlug } from "@/data/games";
import { studios } from "@/data/studios";

const FEATURED_SLUGS = ["black-ops-7", "modern-warfare", "black-ops", "warzone"];

export default function Home() {
  const featured = FEATURED_SLUGS.map((slug) => getGameBySlug(slug)!).filter(Boolean);
  const mainlineCount = games.filter((g) => g.type === "mainline").length;
  const spanYears = new Date().getFullYear() - 2003 + 1;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,106,26,0.16), transparent)",
          }}
          aria-hidden
        />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase">
              Unofficial fan archive · est. 2003
            </p>
            <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-wide text-foreground uppercase text-shadow-glow sm:text-6xl lg:text-7xl">
              Every deployment.
              <br />
              <span className="text-accent">Every era.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              A community-built reference covering the history, games, development studios, and
              future of the Call of Duty franchise — from the beaches of Normandy to the
              battlefields of 2035.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/games"
                className="clip-tag inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 font-mono text-sm font-semibold tracking-wide text-background uppercase transition-colors hover:bg-accent-strong"
              >
                Browse all games
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/history"
                className="clip-tag inline-flex items-center gap-2 border border-border-subtle bg-surface px-5 py-3 font-mono text-sm font-semibold tracking-wide text-foreground uppercase transition-colors hover:border-accent/50"
              >
                Read the history
              </Link>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatBlock value={String(games.length)} label="Games catalogued" />
            <StatBlock value={String(mainlineCount)} label="Mainline entries" />
            <StatBlock value={String(studios.length)} label="Studios profiled" />
            <StatBlock value={`${spanYears}`} label="Years of history" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Start here"
            title="Explore the archive"
            description="Four ways into the franchise's story — pick where you want to start."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ExploreCard
              href="/history"
              icon={<Clock className="h-5 w-5" aria-hidden />}
              title="History"
              description="From 2003's original WWII shooter to the current live-service era."
            />
            <ExploreCard
              href="/games"
              icon={<Gamepad2 className="h-5 w-5" aria-hidden />}
              title="Games"
              description="Every mainline entry, spin-off, remaster, and mobile release."
            />
            <ExploreCard
              href="/studios"
              icon={<Building2 className="h-5 w-5" aria-hidden />}
              title="Studios"
              description="The developers behind the franchise, from Infinity Ward to TiMi."
            />
            <ExploreCard
              href="/future"
              icon={<Radar className="h-5 w-5" aria-hidden />}
              title="Future"
              description="Confirmed live-service plans and clearly-labeled industry rumors."
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-border-subtle bg-background-elevated py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Spotlight"
            title="Featured entries"
            description="A cross-section of the franchise's most significant releases."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <Badge>Fan-made · non-commercial</Badge>
          <p className="max-w-2xl text-sm text-muted">
            This project is an independent reference built by fans, for fans. It is not
            affiliated with Activision or Microsoft. All original artwork and logos belong to
            their respective owners — see the footer for details.
          </p>
        </Container>
      </section>
    </div>
  );
}

function ExploreCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-sm border border-border-subtle bg-surface p-5 transition-colors hover:border-accent/50 hover:bg-surface-hover"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-border-subtle bg-background-elevated text-muted group-hover:text-accent">
        {icon}
      </span>
      <h3 className="font-display text-lg font-semibold tracking-wide text-foreground uppercase group-hover:text-accent">
        {title}
      </h3>
      <p className="text-sm text-muted">{description}</p>
      <span className="mt-auto flex items-center gap-1 font-mono text-xs font-semibold tracking-wide text-accent uppercase opacity-0 transition-opacity group-hover:opacity-100">
        Explore <ArrowRight className="h-3 w-3" aria-hidden />
      </span>
    </Link>
  );
}
