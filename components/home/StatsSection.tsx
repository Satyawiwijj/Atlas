import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "48h", label: "Proposal turnaround" },
  { value: "US", label: "Working hours overlap" },
  { value: "3", label: "Services under one roof" },
  { value: "100%", label: "Code we maintain" },
];

/**
 * Stats strip showing key trust signals for US clients.
 */
export function StatsSection() {
  return (
    <section className="py-12 md:py-16">
      <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1">
              <span className="font-display text-4xl md:text-5xl font-bold text-ink">
                {stat.value}
              </span>
              <span className="text-sm text-ink/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
