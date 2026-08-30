import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { GamesExplorer } from "@/components/GamesExplorer";
import { games, getAllSeries } from "@/data/games";

export const metadata: Metadata = {
  title: "Games",
  description:
    "Browse every Call of Duty release — mainline entries, spin-offs, remasters, mobile games, and battle royale titles — in one searchable catalog.",
};

export default function GamesPage() {
  const series = getAllSeries();

  return (
    <div>
      <PageHero
        eyebrow={`${games.length} titles catalogued`}
        title="The Games"
        description="Every mainline release, spin-off, remaster, and mobile title across the franchise's history. Search, filter by series or type, and sort chronologically."
        image="/images/hero-games.jpg"
        imagePosition="center 20%"
      />
      <Container className="py-12 sm:py-16">
        <GamesExplorer games={games} series={series} />
      </Container>
    </div>
  );
}
