import { CaseStudyCard } from "./CaseStudyCard";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  if (caseStudies.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ink/20 p-10 text-center">
        <p className="text-ink/70 font-mono text-sm">More case studies land here as they ship.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </div>
  );
}
