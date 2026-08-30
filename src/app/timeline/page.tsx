import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { TimelineList } from "@/components/TimelineList";
import { getTimelineSorted } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "An interactive timeline of the Call of Duty franchise — every major release alongside the studio, business, and esports milestones that shaped it.",
};

export default function TimelinePage() {
  const events = getTimelineSorted();

  return (
    <div>
      <PageHero
        eyebrow="2001 – 2025"
        title="The Timeline"
        description="Filter by category to trace releases, studio changes, business milestones, and the growth of competitive Call of Duty side by side."
      />
      <Container className="py-12 sm:py-16">
        <TimelineList events={events} />
      </Container>
    </div>
  );
}
