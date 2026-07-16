import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AtlasTeaser() {
  return (
    <section className="py-16 md:py-20 border-t border-ink/10">
      <Reveal>
        <Link
          href="/work"
          className="group block rounded-3xl border border-ink/10 p-10 md:p-16 transition-colors duration-200 hover:border-ember-deep/40"
        >
          <Eyebrow>Flagship product</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-ink mt-5 max-w-xl">
            Meet Atlas.
          </h2>
          <p className="mt-3 text-ink/80 max-w-lg text-base md:text-lg">
            Atlas tells B2B teams who to contact and why — the first thing we built at Nylor Tech,
            proof of how we work before we ever build it for a client.
          </p>
          <span className="mt-6 inline-block text-sm text-ink/70 group-hover:text-ember-deep transition-colors duration-200">
            See the case study →
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
