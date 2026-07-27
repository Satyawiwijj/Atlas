import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PRICING = [
  {
    service: "Landing Page",
    range: "$200 - $500",
    description: "A clean, fast page that converts visitors into leads.",
    timeline: "3-5 days",
  },
  {
    service: "Business Website",
    range: "$500 - $1,500",
    description: "Multi-page site with services, about, and contact — built for your brand.",
    timeline: "1-2 weeks",
  },
  {
    service: "Web Application",
    range: "$1,500 - $3,000",
    description: "Custom dashboards, portals, or tools your team actually uses.",
    timeline: "2-4 weeks",
  },
  {
    service: "Monthly Retainer",
    range: "$200 - $800/mo",
    description: "Ongoing maintenance, updates, and small feature builds.",
    timeline: "Ongoing",
  },
];

export function Pricing() {
  return (
    <section className="py-16 md:py-20 border-t border-ink/10">
      <Reveal>
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent ranges, not surprises."
          description="Every project is scoped on a call. These are typical ranges — your project may be more or less depending on complexity."
        />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {PRICING.map((item) => (
            <div
              key={item.service}
              className="rounded-2xl border border-ink/10 p-6 md:p-8 hover:border-ember-deep/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-ink">{item.service}</h3>
                <span className="font-display text-lg font-bold text-ember-deep whitespace-nowrap">
                  {item.range}
                </span>
              </div>
              <p className="mt-3 text-sm text-ink/70">{item.description}</p>
              <p className="mt-2 text-xs text-ink/50">Typical timeline: {item.timeline}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/60 text-center">
          Not sure what you need?{" "}
          <Link href="/contact" className="text-ember-deep hover:underline">
            Tell us what you&apos;re building
          </Link>{" "}
          and we&apos;ll give you an honest estimate.
        </p>
      </Reveal>
    </section>
  );
}
