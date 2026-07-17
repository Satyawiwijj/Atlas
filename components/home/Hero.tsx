import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { OrbitField } from "@/components/brand/OrbitField";
import { PageShell } from "@/components/layout/PageShell";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <PageShell className="relative pt-16 pb-20 md:pt-24 md:pb-28 grid gap-4 md:grid-cols-[1fr_380px] md:items-center md:gap-12">
        <div className="max-w-3xl flex flex-col">
          <Eyebrow className="hero-in" style={{ "--hero-delay": "60ms" } as React.CSSProperties}>
            Nylor Tech — software studio
          </Eyebrow>
          <h1
            className="hero-in font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mt-5"
            style={{ "--hero-delay": "160ms" } as React.CSSProperties}
          >
            We build software <span className="text-ember-deep">worth betting on.</span>
          </h1>
          <p
            className="hero-in text-lg md:text-xl text-ink/80 max-w-xl mt-5"
            style={{ "--hero-delay": "320ms" } as React.CSSProperties}
          >
            Websites, automation, and AI agents for businesses that need it done right — built by
            a studio that bets on its own products too, starting with Atlas.
          </p>
          <div
            className="hero-in flex flex-wrap gap-4 mt-9"
            style={{ "--hero-delay": "440ms" } as React.CSSProperties}
          >
            <Button href="/contact">Start a project</Button>
            <Button href="/work" variant="secondary">
              See our work
            </Button>
          </div>
        </div>

        <OrbitField
          className="hero-in pointer-events-none order-first md:order-last w-48 mx-auto md:w-full md:mx-0 [--hero-opacity:0.7] md:[--hero-opacity:1]"
          style={{ "--hero-delay": "40ms" } as React.CSSProperties}
        />
      </PageShell>
    </section>
  );
}
