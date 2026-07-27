"use client";

import { useEffect, useRef, useState } from "react";
import { BRAND } from "@/lib/brand";

type ServiceMarkProps = {
  size?: number;
  rotation?: number;
  className?: string;
};

const VIEWBOX = 48;
const CENTER = 24;
const RADIUS = 17;
const STROKE_WIDTH = 3;
const REST_OPACITY = 0.55;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const GAP_DEGREES = 64;
const GAP_ARC_LENGTH = (CIRCUMFERENCE * GAP_DEGREES) / 360;
const VISIBLE_ARC_LENGTH = CIRCUMFERENCE - GAP_ARC_LENGTH;

function polarPoint(angleDegrees: number, radius: number) {
  const radians = (angleDegrees * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(radians), y: CENTER + radius * Math.sin(radians) };
}

/**
 * A single broken-ring-and-spark mark - the logo's motif, sized down to stand in for a
 * service entry. Used instead of a 01/02/03 index: these three offerings are parallel
 * options, not a sequence, so a numeral would imply an order that isn't there. `rotation`
 * gives each instance a distinct gap position so a row of three doesn't look stamped from
 * one template, the same way AbstractRings varies its rings.
 *
 * Draws itself in the first time it scrolls into view rather than on mount - most instances
 * of this mark sit below the fold, and a mount-triggered animation would already be finished
 * before anyone scrolls there to see it.
 */
export function ServiceMark({ size = 44, rotation = 0, className = "" }: ServiceMarkProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);
  const spark = polarPoint(-GAP_DEGREES / 2, RADIUS + 4.5);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = window.setTimeout(() => setDrawn(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g transform={`rotate(${rotation} ${CENTER} ${CENTER})`}>
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke={BRAND.emberDeep}
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          strokeDasharray={`${VISIBLE_ARC_LENGTH} ${GAP_ARC_LENGTH}`}
          className={drawn ? "service-mark-draw" : undefined}
          style={{
            opacity: drawn ? REST_OPACITY : 0,
            transition: "opacity 500ms ease-out",
            ...(drawn ? ({ "--nylor-circumference": CIRCUMFERENCE } as React.CSSProperties) : { strokeDashoffset: CIRCUMFERENCE }),
          }}
        />
        <circle
          cx={spark.x}
          cy={spark.y}
          r={2.2}
          fill={BRAND.ember}
          className={drawn ? "nylor-spark-fade" : undefined}
          style={drawn ? undefined : { opacity: 0 }}
        />
      </g>
    </svg>
  );
}
