import { Eyebrow } from "@/components/ui/Eyebrow";
import { MeridianVisual } from "@/components/work/MeridianVisual";
import { BeaconVisual } from "@/components/work/BeaconVisual";
import type { CaseStudy, CaseStudyType } from "@/lib/content";

const TYPE_BADGES: Record<CaseStudyType, { label: string; className: string }> = {
  real: {
    label: "Shipped",
    className: "bg-ember-deep/10 text-ember-deep border-ember-deep/30",
  },
  "in-progress": {
    label: "In development",
    className: "bg-halo/10 text-ink border-halo/30",
  },
  concept: {
    label: "What we can build",
    className: "bg-ink/5 text-ink/70 border-ink/20",
  },
};

const VISUALS: Record<string, React.ComponentType<{ className?: string }>> = {
  "meridian-dashboard": MeridianVisual,
  "beacon-crm": BeaconVisual,
};

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const badge = TYPE_BADGES[caseStudy.type];
  const Visual = VISUALS[caseStudy.slug];

  return (
    <div className="rounded-2xl border border-ink/10 p-6 transition-colors duration-200 hover:border-ember-deep/40">
      {Visual && (
        <div className="mb-4 overflow-hidden rounded-xl border border-ink/5 bg-ink/[0.02]">
          <Visual className="w-full" />
        </div>
      )}

      <div className="flex items-center gap-3">
        <Eyebrow>{caseStudy.tagline}</Eyebrow>
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.14em] border rounded-full px-2.5 py-0.5 shrink-0 ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold text-ink mt-2">{caseStudy.name}</h3>
      <p className="mt-2 text-sm text-ink/80">{caseStudy.description}</p>

      {caseStudy.techStack && caseStudy.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {caseStudy.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-ink/70 border border-ink/10 rounded px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
