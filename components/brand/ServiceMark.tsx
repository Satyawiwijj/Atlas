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
 */
export function ServiceMark({ size = 44, rotation = 0, className = "" }: ServiceMarkProps) {
  const spark = polarPoint(-GAP_DEGREES / 2, RADIUS + 4.5);

  return (
    <svg
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
          opacity={0.55}
        />
        <circle cx={spark.x} cy={spark.y} r={2.2} fill={BRAND.ember} />
      </g>
    </svg>
  );
}
