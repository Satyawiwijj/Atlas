import type { CaseStudy } from "@/lib/content";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="rounded-2xl border border-ink/10 p-6">
      <h3 className="font-display text-xl font-semibold text-ink">{caseStudy.name}</h3>
      <p className="mt-2 text-sm text-ink/80">{caseStudy.description}</p>
    </div>
  );
}
