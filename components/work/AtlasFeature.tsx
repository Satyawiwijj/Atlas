import { AtlasVisual } from "@/components/work/AtlasVisual";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SERVICES, type CaseStudy } from "@/lib/content";

export function AtlasFeature({ caseStudy }: { caseStudy: CaseStudy }) {
  const services = SERVICES.filter((s) => caseStudy.serviceSlugs.includes(s.slug));

  return (
    <section className="relative overflow-hidden rounded-3xl border border-ink/10 px-8 py-16 md:px-16 md:py-24">
      <div className="relative grid gap-8 md:grid-cols-[1fr_320px] md:items-center md:gap-16">
        <div className="flex flex-col max-w-2xl order-2 md:order-1">
          <Eyebrow>{caseStudy.tagline}</Eyebrow>
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
        </div>
        <AtlasVisual className="order-1 md:order-2 w-64 mx-auto md:w-full md:mx-0" />
      </div>
    </section>
  );
}
