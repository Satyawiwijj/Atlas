import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    title: "Discovery",
    description: "A short call to understand what you actually need — a scoping conversation, not a pitch.",
  },
  {
    title: "Plan",
    description: "You get a clear scope, timeline, and price before any code gets written.",
  },
  {
    title: "Build",
    description: "We build in the open — regular check-ins and working software early, not a surprise at the end.",
  },
  {
    title: "Ship & support",
    description: "Launch is the start, not the finish. We stick around for fixes and iteration after.",
  },
];

export function Approach() {
  return (
    <section className="py-16 md:py-20 border-t border-ink/10">
      <Reveal>
        <SectionHeading eyebrow="How we work" title="A process built to be predictable." />
        <ol className="grid md:grid-cols-4 gap-x-8 gap-y-12 mt-14">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="font-display text-4xl md:text-5xl font-bold text-ink/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink -mt-1">{step.title}</h3>
              <p className="text-sm text-ink/80">{step.description}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
