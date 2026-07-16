import { BRAND } from "@/lib/brand";

type AbstractRingsProps = {
  size?: number;
  className?: string;
};

const VIEWBOX = 400;

type Ring = {
  cx: number;
  cy: number;
  radius: number;
  strokeWidth: number;
  gapDegrees: number;
  rotation: number;
  color: string;
  opacity: number;
  spark?: boolean;
};

const RINGS: Ring[] = [
  { cx: 230, cy: 190, radius: 160, strokeWidth: 2, gapDegrees: 55, rotation: -20, color: BRAND.halo, opacity: 0.45, spark: true },
  { cx: 130, cy: 265, radius: 95, strokeWidth: 2.5, gapDegrees: 85, rotation: 130, color: BRAND.ember, opacity: 0.35, spark: true },
  { cx: 305, cy: 85, radius: 52, strokeWidth: 2, gapDegrees: 60, rotation: 60, color: BRAND.steel, opacity: 0.3 },
];

function polarPoint(cx: number, cy: number, angleDegrees: number, radius: number) {
  const radians = (angleDegrees * Math.PI) / 180;
  return { x: cx + radius * Math.cos(radians), y: cy + radius * Math.sin(radians) };
}

// A brand-consistent abstract graphic: several "broken ring" arcs (the same motif as the
// logo mark) at varying scale/rotation/color, standing in for photography in spots that would
// otherwise read empty - per the brand guide's own "generated assets that match the art
// direction" allowance, rather than stock photos.
export function AbstractRings({ size = 400, className }: AbstractRingsProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {RINGS.map((ring, i) => {
        const circumference = 2 * Math.PI * ring.radius;
        const gapLength = (circumference * ring.gapDegrees) / 360;
        const visibleLength = circumference - gapLength;
        const spark = ring.spark ? polarPoint(ring.cx, ring.cy, -ring.gapDegrees / 2, ring.radius) : null;
        return (
          <g key={i} transform={`rotate(${ring.rotation} ${ring.cx} ${ring.cy})`}>
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
            {spark && (
              <circle cx={spark.x} cy={spark.y} r={ring.strokeWidth * 1.1} fill={BRAND.ember} opacity={ring.opacity} />
            )}
          </g>
        );
      })}
    </svg>
  );
}
