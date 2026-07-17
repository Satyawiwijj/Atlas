"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { OrbitField } from "@/components/brand/OrbitField";
import { PageShell } from "@/components/layout/PageShell";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const orbitWrapRef = useRef<HTMLDivElement>(null);

  // Desktop/tablet + motion-safe only: pinning fights native scroll feel on mobile, and this
  // whole sequence is decorative, so reduced-motion users get the plain static layout instead.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=90%",
            scrub: 1,
            pin: true,
          },
        });

        tl.to(textRef.current, { autoAlpha: 0, y: -40, ease: "power1.in" }, 0)
          .to(orbitWrapRef.current, { scale: 1.4, ease: "power1.inOut" }, 0)
          .to(orbitWrapRef.current, { autoAlpha: 0, ease: "power1.in" }, 0.7);
      });

      // The hero's height depends on the display webfont, which loads async - without this,
      // ScrollTrigger measures the pin distance against the pre-font-swap (often shorter) layout.
      document.fonts.ready.then(() => ScrollTrigger.refresh());

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <PageShell className="relative pt-16 pb-20 md:pt-24 md:pb-28 grid gap-4 md:grid-cols-[1fr_380px] md:items-center md:gap-12">
        <div ref={textRef} className="max-w-3xl flex flex-col">
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

        <div ref={orbitWrapRef} className="order-first md:order-last">
          <OrbitField
            className="hero-in pointer-events-none w-48 mx-auto md:w-full md:mx-0 [--hero-opacity:0.7] md:[--hero-opacity:1]"
            style={{ "--hero-delay": "40ms" } as React.CSSProperties}
          />
        </div>
      </PageShell>
    </section>
  );
}
