import { BRAND } from "@/lib/brand";

type LogoMarkProps = {
  size?: number;
  className?: string;
  animate?: boolean;
  style?: React.CSSProperties;
};

const VIEWBOX = 48;
const CENTER = 24;
const RADIUS = 17;
const STROKE_WIDTH = 4.5;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const GAP_DEGREES = 42;
const GAP_ARC_LENGTH = (CIRCUMFERENCE * GAP_DEGREES) / 360;
const VISIBLE_ARC_LENGTH = CIRCUMFERENCE - GAP_ARC_LENGTH;

// A stroked <circle> starts drawing at 3 o'clock (angle 0) and proceeds clockwise, so a
// dash-then-gap pattern with no rotation naturally leaves the gap between ~1 and 3 o'clock -
// matching the reference mark's opening without needing an explicit transform.
function polarPoint(angleDegrees: number, radius: number) {
  const radians = (angleDegrees * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(radians),
    y: CENTER + radius * Math.sin(radians),
  };
}

const spark = polarPoint(-GAP_DEGREES / 2, RADIUS + 5.5);

export function LogoMark({ size = 32, className, animate = true, style }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient
          id="nylor-ring-gradient"
          x1={VIEWBOX - 8}
          y1="8"
          x2="8"
          y2={VIEWBOX - 8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E7C158" />
          <stop offset="100%" stopColor="#AD850F" />
        </linearGradient>
        <filter id="nylor-spark-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>
      <circle
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        stroke="url(#nylor-ring-gradient)"
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeDasharray={`${VISIBLE_ARC_LENGTH} ${GAP_ARC_LENGTH}`}
        className={animate ? "nylor-ring-draw" : undefined}
        style={animate ? ({ "--nylor-circumference": CIRCUMFERENCE } as React.CSSProperties) : undefined}
      />
      <circle cx={spark.x} cy={spark.y} r={4} fill={BRAND.ember} opacity={0.3} filter="url(#nylor-spark-glow)" />
      <circle
        cx={spark.x}
        cy={spark.y}
        r={2.4}
        fill={BRAND.ember}
        className={animate ? "nylor-spark-fade" : undefined}
      />
    </svg>
  );
}
