import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { StudioCard } from "@/components/StudioCard";
import { studios } from "@/data/studios";

export const metadata: Metadata = {
  title: "Studios",
  description:
    "Meet the development studios behind the Call of Duty franchise, from lead studios Infinity Ward and Treyarch to the support and mobile teams keeping it running.",
};

export default function StudiosPage() {
  return (
    <div>
      <PageHero
        eyebrow={`${studios.length} studios profiled`}
        title="The Studios"
        description="Call of Duty has never been the work of a single team. Meet the lead, support, mobile, and infrastructure studios that build and run the franchise year-round."
      />
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studios.map((studio) => (
            <StudioCard key={studio.slug} studio={studio} />
          ))}
        </div>
      </Container>
    </div>
  );
}
