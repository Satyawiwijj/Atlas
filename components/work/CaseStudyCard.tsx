import { Eyebrow } from "@/components/ui/Eyebrow";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="rounded-2xl border border-ink/10 p-6 transition-colors duration-200 hover:border-ember-deep/40">
      <Eyebrow>{caseStudy.tagline}</Eyebrow>
      <h3 className="font-display text-xl font-semibold text-ink mt-2">{caseStudy.name}</h3>
      <p className="mt-2 text-sm text-ink/80">{caseStudy.description}</p>
    </div>
  );
}
