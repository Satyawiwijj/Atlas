import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AtlasFeature } from "@/components/work/AtlasFeature";
import { CaseStudyGrid } from "@/components/work/CaseStudyGrid";
import { CASE_STUDIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Nylor Tech, starting with our first product, Atlas.",
};

export default function WorkPage() {
  const featured = CASE_STUDIES.find((c) => c.featured);
  const rest = CASE_STUDIES.filter((c) => !c.featured);

  return (
    <PageShell className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Our work"
        as="h1"
        title="What we've built."
        description="A running record of what Nylor Tech ships — for ourselves and for clients."
      />

      {featured && (
        <div className="mt-12">
          <AtlasFeature caseStudy={featured} />
        </div>
      )}

      <div className="mt-16 md:mt-20">
        <CaseStudyGrid caseStudies={rest} />
      </div>
    </PageShell>
  );
}
