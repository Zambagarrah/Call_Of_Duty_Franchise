import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { TimelineList } from "@/components/TimelineList";
import { ImageBand } from "@/components/ImageBand";
import { getTimelineSorted } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "An interactive timeline of the Call of Duty franchise — every major release alongside the studio, business, and esports milestones that shaped it.",
};

export default function TimelinePage() {
  const events = getTimelineSorted();
  const years = events.map((event) => event.year);
  const yearRange = `${Math.min(...years)} – ${Math.max(...years)}`;

  return (
    <div>
      <PageHero
        eyebrow={yearRange}
        title="The Timeline"
        description="Filter by category to trace releases, studio changes, business milestones, and the growth of competitive Call of Duty side by side."
        image="/images/hero-timeline.jpg"
        imagePosition="center 30%"
      />
      <Container className="py-12 sm:py-16">
        <TimelineList events={events} />
      </Container>
      <ImageBand
        image="/images/band-timeline.jpg"
        imagePosition="center 45%"
        eyebrow="Two decades, one throughline"
        quote="Every release, reinvention, and studio shift — laid out in order."
      />
    </div>
  );
}
