import { AtlasVisual } from "@/components/work/AtlasVisual";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SERVICES, type CaseStudy } from "@/lib/content";

export function AtlasFeature({ caseStudy }: { caseStudy: CaseStudy }) {
  const services = SERVICES.filter((s) => caseStudy.serviceSlugs.includes(s.slug));

  return (
    <section className="relative overflow-hidden rounded-3xl border border-ink/10 px-8 py-16 md:px-16 md:py-24">
      <div className="relative grid gap-8 md:grid-cols-[1fr_320px] md:items-center md:gap-16">
        <div className="flex flex-col max-w-2xl order-2 md:order-1">
          <div className="flex items-center gap-3">
            <Eyebrow>{caseStudy.tagline}</Eyebrow>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] border border-halo/30 bg-halo/10 text-ink rounded-full px-2.5 py-0.5">
              In development
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-ink mt-5">
            {caseStudy.name}
          </h1>
          <p className="text-lg md:text-xl text-ink/80 max-w-xl mt-4">{caseStudy.description}</p>
          <ul className="flex flex-wrap gap-3 mt-6">
            {services.map((service) => (
              <li
                key={service.slug}
                className="font-mono text-xs uppercase tracking-[0.14em] text-ember-deep border border-ember-deep rounded-full px-3 py-1.5"
              >
                {service.title}
              </li>
            ))}
          </ul>

          {caseStudy.stats && caseStudy.stats.length > 0 && (
            <div className="flex flex-wrap gap-8 mt-8">
              {caseStudy.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-ember-deep">{stat.value}</span>
                  <span className="text-sm text-ink/60 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {caseStudy.techStack && caseStudy.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-ink/50 border border-ink/10 rounded px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <AtlasVisual className="order-1 md:order-2 w-64 mx-auto md:w-full md:mx-0" />
      </div>
    </section>
  );
}
