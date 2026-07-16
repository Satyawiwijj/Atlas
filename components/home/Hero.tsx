import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LogoMark } from "@/components/brand/LogoMark";
import { PageShell } from "@/components/layout/PageShell";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <LogoMark
        size={420}
        animate={false}
        className="hero-in pointer-events-none absolute -right-32 -top-24 opacity-[0.09] md:-right-10 md:-top-16"
        style={{ "--hero-delay": "0ms", "--hero-opacity": 0.09 } as React.CSSProperties}
      />
      <PageShell className="relative pt-16 pb-20 md:pt-24 md:pb-28">
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
      </PageShell>
    </section>
  );
}
