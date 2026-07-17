"use client";

import { useEffect, useId, useRef } from "react";
import { BRAND } from "@/lib/brand";

type OrbitFieldProps = {
  className?: string;
  style?: React.CSSProperties;
  /** Disable the cursor-tilt (e.g. when the piece sits somewhere the pointer rarely reaches). */
  parallax?: boolean;
};

type Ring = {
  cx: number;
  cy: number;
  radius: number;
  strokeWidth: number;
  gapDegrees: number;
  color: string;
  opacity: number;
  durationSeconds: number;
  reverse?: boolean;
  spark?: boolean;
  sparkOpacity?: number;
};

const VIEWBOX = 460;

// A stroked circle starts drawing at 3 o'clock and proceeds clockwise, so a dash/gap pattern
// with no extra rotation naturally opens its gap centered on angle 0 - this mirrors the math
// LogoMark uses for its own single ring.
function polarPoint(cx: number, cy: number, angleDegrees: number, radius: number) {
  const radians = (angleDegrees * Math.PI) / 180;
  return { x: cx + radius * Math.cos(radians), y: cy + radius * Math.sin(radians) };
}

/**
 * The brand's ring-gap-spark logomark, made kinetic: three broken rings at varied scale,
 * speed and direction, each spark riding its own ring's gap edge so it appears to circle
 * continuously as that ring turns. Speeds are slow (30-70s/revolution) so it reads as a
 * quiet orbital system, not a spinner. On desktop, the whole piece tilts gently toward the
 * cursor; it's inert under prefers-reduced-motion and on touch devices.
 */
export function OrbitField({ className = "", style, parallax = true }: OrbitFieldProps) {
  const gradientId = useId();
  const glowId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax) return;
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion || coarsePointer) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function onPointerMove(event: PointerEvent) {
      const rect = wrap!.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = relY * -8;
      targetY = relX * 8;
    }

    function onPointerLeave() {
      targetX = 0;
      targetY = 0;
    }

    function tick() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      inner!.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerleave", onPointerLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(raf);
    };
  }, [parallax]);

  const RINGS: Ring[] = [
    {
      cx: 230,
      cy: 210,
      radius: 190,
      strokeWidth: 3,
      gapDegrees: 46,
      color: `url(#${gradientId})`,
      opacity: 0.9,
      durationSeconds: 52,
      spark: true,
      sparkOpacity: 0.85,
    },
    {
      cx: 150,
      cy: 300,
      radius: 104,
      strokeWidth: 2.5,
      gapDegrees: 72,
      color: BRAND.ember,
      opacity: 0.55,
      durationSeconds: 34,
      reverse: true,
      spark: true,
      sparkOpacity: 0.7,
    },
    {
      cx: 330,
      cy: 110,
      radius: 58,
      strokeWidth: 2,
      gapDegrees: 95,
      color: BRAND.steel,
      opacity: 0.4,
      durationSeconds: 70,
    },
  ];

  return (
    <div ref={wrapRef} className={className} style={{ ...style, perspective: "900px" }}>
      <div ref={innerRef} className="transition-transform duration-300 ease-out will-change-transform">
        <svg width="100%" viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`} fill="none" aria-hidden="true">
          <defs>
            <linearGradient
              id={gradientId}
              x1={VIEWBOX - 20}
              y1="20"
              x2="20"
              y2={VIEWBOX - 20}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#E7C158" />
              <stop offset="100%" stopColor="#AD850F" />
            </linearGradient>
            <filter id={glowId} x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          {RINGS.map((ring, i) => {
            const circumference = 2 * Math.PI * ring.radius;
            const gapLength = (circumference * ring.gapDegrees) / 360;
            const visibleLength = circumference - gapLength;
            const sparkPoint = ring.spark
              ? polarPoint(ring.cx, ring.cy, -ring.gapDegrees / 2, ring.radius)
              : null;
            return (
              <g
                key={i}
                className={`orbit-ring ${ring.reverse ? "orbit-ring-reverse" : ""}`}
                style={{ animationDuration: `${ring.durationSeconds}s` }}
              >
                <circle
                  cx={ring.cx}
                  cy={ring.cy}
                  r={ring.radius}
                  stroke={ring.color}
                  strokeWidth={ring.strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={`${visibleLength} ${gapLength}`}
                  opacity={ring.opacity}
                />
                {sparkPoint && (
                  <>
                    <circle
                      cx={sparkPoint.x}
                      cy={sparkPoint.y}
                      r={ring.strokeWidth * 1.6}
                      fill={BRAND.ember}
                      opacity={(ring.sparkOpacity ?? 0.5) * 0.6}
                      filter={`url(#${glowId})`}
                    />
                    <circle
                      cx={sparkPoint.x}
                      cy={sparkPoint.y}
                      r={ring.strokeWidth * 0.9}
                      fill={BRAND.ember}
                      opacity={ring.sparkOpacity ?? 0.85}
                    />
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
