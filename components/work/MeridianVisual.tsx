import { useId } from "react";
import { BRAND } from "@/lib/brand";

const VIEWBOX_W = 560;
const VIEWBOX_H = 400;

/**
 * An honest concept visualization for a real-time ops dashboard — abstract data
 * streams and a line chart in the brand's visual language, not a fabricated UI mockup.
 * Communicates "real-time data, unified view" without pretending to show real software.
 */
export function MeridianVisual({ className = "" }: { className?: string }) {
  const gradId = useId();
  const glowId = useId();

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2={VIEWBOX_W} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={BRAND.ember} />
          <stop offset="100%" stopColor={BRAND.halo} />
        </linearGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Dashboard frame — subtle rounded rectangle */}
      <rect
        x="20" y="20"
        width={VIEWBOX_W - 40} height={VIEWBOX_H - 40}
        rx="16"
        stroke={BRAND.ink}
        strokeOpacity={0.12}
        strokeWidth={1.5}
      />

      {/* Top bar — header area */}
      <rect x="40" y="40" width="120" height="8" rx="4" fill={BRAND.steel} fillOpacity={0.3} />
      <rect x="40" y="56" width="80" height="6" rx="3" fill={BRAND.steel} fillOpacity={0.2} />

      {/* Three data source indicators — top right */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={VIEWBOX_W - 80 + i * 20}
          cy="52"
          r={4}
          fill={i === 0 ? BRAND.ember : i === 1 ? BRAND.halo : BRAND.steel}
          opacity={i === 0 ? 0.9 : 0.5}
        />
      ))}

      {/* Stat cards row — left side */}
      {[
        { x: 40, w: 100, val: "2.4k", label: "Orders" },
        { x: 160, w: 100, val: "98%", label: "On-time" },
        { x: 280, w: 100, val: "142", label: "Active" },
      ].map((card) => (
        <g key={card.x}>
          <rect
            x={card.x} y="80"
            width={card.w} height="60"
            rx="10"
            fill={BRAND.ink}
            fillOpacity={0.04}
          />
          <text
            x={card.x + 16} y="108"
            fontFamily="var(--font-display)"
            fontSize="20"
            fontWeight="700"
            fill={BRAND.ink}
          >
            {card.val}
          </text>
          <text
            x={card.x + 16} y="126"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill={BRAND.steel}
          >
            {card.label}
          </text>
        </g>
      ))}

      {/* Line chart — main visualization */}
      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="40" y1={180 + i * 40}
          x2={VIEWBOX_W - 40} y2={180 + i * 40}
          stroke={BRAND.ink}
          strokeOpacity={0.06}
          strokeWidth={0.5}
        />
      ))}

      {/* Chart area fill */}
      <path
        d={`M40,280 L120,260 L200,220 L280,240 L360,200 L440,170 L520,190 L520,320 L40,320 Z`}
        fill={`url(#${gradId})`}
        fillOpacity={0.08}
      />

      {/* Chart line */}
      <path
        d={`M40,280 L120,260 L200,220 L280,240 L360,200 L440,170 L520,190`}
        stroke={`url(#${gradId})`}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Data points */}
      {[
        { x: 40, y: 280 },
        { x: 120, y: 260 },
        { x: 200, y: 220 },
        { x: 280, y: 240 },
        { x: 360, y: 200 },
        { x: 440, y: 170 },
        { x: 520, y: 190 },
      ].map((pt, i) => (
        <g key={i}>
          {i === 5 && (
            <circle cx={pt.x} cy={pt.y} r={8} fill={BRAND.ember} opacity={0.2} filter={`url(#${glowId})`} />
          )}
          <circle
            cx={pt.x} cy={pt.y}
            r={3.5}
            fill={i === 5 ? BRAND.ember : BRAND.steel}
            opacity={i === 5 ? 1 : 0.6}
          />
        </g>
      ))}

      {/* Live indicator dot */}
      <circle cx={VIEWBOX_W - 40} cy="52" r={3} fill={BRAND.ember}>
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
