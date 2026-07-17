import { useId } from "react";
import { BRAND } from "@/lib/brand";

type Ring = {
  cx: number;
  cy: number;
  radius: number;
  gapDegrees: number;
  rotation: number;
};

const STUDIO_RING: Ring = { cx: 52, cy: 64, radius: 38, gapDegrees: 46, rotation: -30 };
const WORK_RING: Ring = { cx: 80, cy: 40, radius: 22, gapDegrees: 60, rotation: 100 };

function polarPoint(cx: number, cy: number, angleDegrees: number, radius: number) {
  const radians = (angleDegrees * Math.PI) / 180;
  return { x: cx + radius * Math.cos(radians), y: cy + radius * Math.sin(radians) };
}

function dashArray(radius: number, gapDegrees: number) {
  const circumference = 2 * Math.PI * radius;
  const gapLength = (circumference * gapDegrees) / 360;
  return `${circumference - gapLength} ${gapLength}`;
}

/**
 * "A small studio, run like a product team" gets a mark, not a stock headshot: two
 * broken rings of different scale, orbiting together - the same construction as LogoMark,
 * standing in for "team" without faking a photo of people who aren't there yet.
 */
export function TeamMark({ className = "" }: { className?: string }) {
  const gradientId = useId();
  const sparkPoint = polarPoint(WORK_RING.cx, WORK_RING.cy, -WORK_RING.gapDegrees / 2, WORK_RING.radius);

  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="100" y1="20" x2="20" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E7C158" />
          <stop offset="100%" stopColor={BRAND.emberDeep} />
        </linearGradient>
      </defs>

      {/* Larger ring - steel, the studio */}
      <circle
        cx={STUDIO_RING.cx}
        cy={STUDIO_RING.cy}
        r={STUDIO_RING.radius}
        stroke={BRAND.steel}
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={dashArray(STUDIO_RING.radius, STUDIO_RING.gapDegrees)}
        transform={`rotate(${STUDIO_RING.rotation} ${STUDIO_RING.cx} ${STUDIO_RING.cy})`}
        opacity={0.55}
      />

      {/* Smaller ring - ember gradient, the work */}
      <circle
        cx={WORK_RING.cx}
        cy={WORK_RING.cy}
        r={WORK_RING.radius}
        stroke={`url(#${gradientId})`}
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={dashArray(WORK_RING.radius, WORK_RING.gapDegrees)}
        transform={`rotate(${WORK_RING.rotation} ${WORK_RING.cx} ${WORK_RING.cy})`}
      />
      <circle cx={sparkPoint.x} cy={sparkPoint.y} r={2.6} fill={BRAND.ember} />
    </svg>
  );
}
