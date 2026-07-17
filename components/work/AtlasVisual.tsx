import { useId } from "react";
import { BRAND } from "@/lib/brand";

type Row = {
  y: number;
  width: number;
  confidence: string;
  tone: "primary" | "secondary" | "tertiary";
};

const NODE_X = 44;
const BAR_X = 64;
const VIEWBOX_W = 560;
const VIEWBOX_H = 400;

const ROWS: Row[] = [
  { y: 48, width: 460, confidence: "94%", tone: "primary" },
  { y: 128, width: 370, confidence: "81%", tone: "secondary" },
  { y: 208, width: 300, confidence: "68%", tone: "secondary" },
  { y: 288, width: 230, confidence: "52%", tone: "tertiary" },
  { y: 368, width: 160, confidence: "37%", tone: "tertiary" },
];

/**
 * An honest stand-in for a product screenshot Atlas doesn't have yet: a ranked-signal
 * visualization in the same broken-ring/spark visual language as the rest of the brand,
 * not a fabricated UI mockup. Reads as "ranked, evidence-backed judgment" - Atlas's actual
 * value prop - without pretending to show real software.
 */
export function AtlasVisual({ className = "" }: { className?: string }) {
  const gradientId = useId();
  const glowId = useId();

  const toneFill: Record<Row["tone"], string> = {
    primary: `url(#${gradientId})`,
    secondary: `${BRAND.ink}99`,
    tertiary: `${BRAND.steel}80`,
  };

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1={BAR_X} y1="48" x2={VIEWBOX_W} y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E7C158" />
          <stop offset="100%" stopColor={BRAND.emberDeep} />
        </linearGradient>
        <filter id={glowId} x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Connective trace threading the ranked nodes - the ring motif's curvilinear language,
          not a literal chart line */}
      <path
        d={`M${NODE_X},${ROWS[0].y} C${NODE_X + 40},${ROWS[0].y + 20} ${NODE_X + 40},${ROWS[1].y - 20} ${NODE_X},${ROWS[1].y}
            C${NODE_X - 40},${ROWS[1].y + 20} ${NODE_X - 40},${ROWS[2].y - 20} ${NODE_X},${ROWS[2].y}
            C${NODE_X + 40},${ROWS[2].y + 20} ${NODE_X + 40},${ROWS[3].y - 20} ${NODE_X},${ROWS[3].y}
            C${NODE_X - 40},${ROWS[3].y + 20} ${NODE_X - 40},${ROWS[4].y - 20} ${NODE_X},${ROWS[4].y}`}
        stroke={BRAND.steel}
        strokeOpacity={0.35}
        strokeWidth={1.5}
        strokeDasharray="2 6"
        strokeLinecap="round"
      />

      {ROWS.map((row, i) => (
        <g key={row.y}>
          {i === 0 && (
            <circle cx={NODE_X} cy={row.y} r={10} fill={BRAND.ember} opacity={0.5} filter={`url(#${glowId})`} />
          )}
          <circle
            cx={NODE_X}
            cy={row.y}
            r={5}
            fill={i === 0 ? BRAND.ember : BRAND.steel}
            opacity={i === 0 ? 1 : 0.6}
          />
          <rect
            x={BAR_X}
            y={row.y - 7}
            width={row.width}
            height={14}
            rx={7}
            fill={toneFill[row.tone]}
          />
          <text
            x={BAR_X + row.width + 14}
            y={row.y + 4}
            fontFamily="var(--font-mono)"
            fontSize="13"
            fill={i === 0 ? BRAND.emberDeep : BRAND.steel}
          >
            {row.confidence}
          </text>
        </g>
      ))}
    </svg>
  );
}
