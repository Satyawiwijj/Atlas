import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AtlasFeature } from "@/components/work/AtlasFeature";
import { CaseStudyGrid } from "@/components/work/CaseStudyGrid";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Nylor Tech — websites, web apps, and custom software we've built.",
};

export default function WorkPage() {
  const featured = CASE_STUDIES.find((c) => c.featured);
  const rest = CASE_STUDIES.filter((c) => !c.featured);

  return (
    <PageShell className="py-16 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Our work"
          as="h1"
          title="What we build."
          description="Our own product plus the kind of tools we build for clients — dashboards, CRMs, internal software, and AI agents."
        />
      </Reveal>

      {featured && (
        <Reveal className="mt-12">
          <AtlasFeature caseStudy={featured} />
        </Reveal>
      )}

      <Reveal className="mt-16 md:mt-20">
        <CaseStudyGrid caseStudies={rest} />
      </Reveal>
    </PageShell>
  );
}
