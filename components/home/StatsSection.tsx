"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Reveal } from "@/components/ui/Reveal";

type Stat = { display: string; label: string; countTo?: number; suffix?: string };

const STATS: Stat[] = [
  { display: "48h", label: "Proposal turnaround", countTo: 48, suffix: "h" },
  { display: "US", label: "Working hours overlap" },
  { display: "3", label: "Services under one roof", countTo: 3 },
  { display: "100%", label: "Code we maintain", countTo: 100, suffix: "%" },
];

/**
 * Stats strip showing key trust signals for US clients. The numeric ones count up once the
 * strip scrolls into view - the markup always renders the real value first, so search
 * crawlers, no-JS visitors, and reduced-motion users see "48h" etc. immediately; the count-up
 * only ever runs as an enhancement on top of that, never as the sole source of the value.
 */
export function StatsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const valueEls = Array.from(grid.querySelectorAll<HTMLElement>("[data-count-to]"));
    if (valueEls.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        valueEls.forEach((el) => {
          const target = Number(el.dataset.countTo);
          const suffix = el.dataset.suffix ?? "";
          const counter = { n: 0 };
          el.textContent = `0${suffix}`;
          gsap.to(counter, {
            n: target,
            duration: 1.1,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${Math.round(counter.n)}${suffix}`;
            },
          });
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-16">
      <Reveal>
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1">
              <span
                className="font-display text-4xl md:text-5xl font-bold text-ink tabular-nums"
                data-count-to={stat.countTo}
                data-suffix={stat.suffix}
              >
                {stat.display}
              </span>
              <span className="text-sm text-ink/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
