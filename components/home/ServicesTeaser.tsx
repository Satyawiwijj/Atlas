import Link from "next/link";
import { SERVICES } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesTeaser() {
  return (
    <section className="py-16 md:py-20 border-t border-ink/10">
      <Reveal>
        <SectionHeading eyebrow="What we do" title="Anything tech, done properly." />
        <div className="stagger-children mt-4">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 md:gap-x-12 py-8 border-t border-ink/10 last:border-b transition-colors duration-200"
            >
              <span className="font-mono text-sm text-ink/70">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex flex-col gap-1">
                <span className="font-display text-2xl md:text-3xl font-semibold text-ink group-hover:text-ember-deep transition-colors duration-200">
                  {service.title}
                </span>
                <span className="text-sm md:text-base text-ink/80 max-w-md">{service.summary}</span>
              </span>
              <span className="hidden md:inline text-sm text-ink/70 group-hover:text-ember-deep transition-colors duration-200 self-center">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
