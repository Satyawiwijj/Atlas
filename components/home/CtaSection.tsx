import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AbstractRings } from "@/components/brand/AbstractRings";

// The only inverted (dark) panel in the page body - everywhere else that treatment lives
// is the mobile nav takeover. Closing on ink gives the page an actual last beat instead of
// trailing off at the same weight as every section before it.
export function CtaSection() {
  return (
    <section className="py-16 md:py-20 border-t border-ink/10">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 md:px-16 md:py-20 flex flex-col items-start">
          <AbstractRings
            size={360}
            className="pointer-events-none absolute -right-24 -top-20 hidden md:block opacity-80"
          />
          <Eyebrow tone="cloud">Ready when you are</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-cloud max-w-2xl mt-5">
            Have something worth building?
          </h2>
          <Button href="/contact" variant="primaryInverted" className="mt-8">
            Start a project
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
