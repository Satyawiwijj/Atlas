import { useId } from "react";
import { BRAND } from "@/lib/brand";

const VIEWBOX_W = 560;
const VIEWBOX_H = 400;

/**
 * An honest concept visualization for a lightweight CRM — abstract pipeline
 * lanes and contact cards in the brand's visual language, not a fabricated UI mockup.
 * Communicates "simple, opinionated client tracking" without pretending to show real software.
 */
export function BeaconVisual({ className = "" }: { className?: string }) {
  const gradId = useId();

  const stages = [
    { label: "Lead", x: 40, cards: 3 },
    { label: "Active", x: 180, cards: 2 },
    { label: "Closed", x: 320, cards: 1 },
  ];

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
      </defs>

      {/* Pipeline header */}
      <rect x="40" y="30" width="140" height="10" rx="5" fill={BRAND.steel} fillOpacity={0.25} />
      <rect x="40" y="50" width="90" height="7" rx="3.5" fill={BRAND.steel} fillOpacity={0.15} />

      {/* Pipeline lanes */}
      {stages.map((stage) => (
        <g key={stage.label}>
          {/* Lane column */}
          <rect
            x={stage.x} y="80"
            width="120" height={VIEWBOX_H - 120}
            rx="12"
            fill={BRAND.ink}
            fillOpacity={0.03}
            stroke={BRAND.ink}
            strokeOpacity={0.08}
            strokeWidth={1}
          />

          {/* Lane label */}
          <text
            x={stage.x + 16} y="104"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fontWeight="500"
            fill={BRAND.steel}
            letterSpacing="0.08em"
          >
            {stage.label.toUpperCase()}
          </text>

          {/* Card count badge */}
          <circle
            cx={stage.x + 100} cy="99"
            r={8}
            fill={stage.label === "Active" ? BRAND.ember : BRAND.steel}
            fillOpacity={stage.label === "Active" ? 0.15 : 0.1}
          />
          <text
            x={stage.x + 100} y="103"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            fill={stage.label === "Active" ? BRAND.emberDeep : BRAND.steel}
            textAnchor="middle"
          >
            {stage.cards}
          </text>

          {/* Contact cards in lane */}
          {Array.from({ length: stage.cards }).map((_, i) => {
            const y = 124 + i * 70;
            return (
              <g key={i}>
                <rect
                  x={stage.x + 10} y={y}
                  width="100" height="54"
                  rx="8"
                  fill="white"
                  stroke={BRAND.ink}
                  strokeOpacity={0.1}
                  strokeWidth={1}
                />
                {/* Avatar circle */}
                <circle
                  cx={stage.x + 28} cy={y + 18}
                  r={8}
                  fill={i === 0 && stage.label === "Active" ? BRAND.ember : BRAND.steel}
                  fillOpacity={0.2}
                />
                {/* Name bars */}
                <rect
                  x={stage.x + 44} y={y + 12}
                  width={50} height={6} rx={3}
                  fill={BRAND.ink}
                  fillOpacity={0.15}
                />
                {/* Subtitle */}
                <rect
                  x={stage.x + 44} y={y + 24}
                  width={35} height={4} rx={2}
                  fill={BRAND.steel}
                  fillOpacity={0.2}
                />
                {/* Action pill */}
                <rect
                  x={stage.x + 16} y={y + 36}
                  width={40} height={10} rx={5}
                  fill={i === 0 && stage.label === "Active" ? BRAND.ember : BRAND.steel}
                  fillOpacity={0.1}
                />
                <rect
                  x={stage.x + 68} y={y + 36}
                  width={24} height={10} rx={5}
                  fill={BRAND.ink}
                  fillOpacity={0.05}
                />
              </g>
            );
          })}

          {/* Arrow connector between lanes */}
          {stage.label !== "Closed" && (
            <g>
              <line
                x1={stage.x + 124} y1={VIEWBOX_H / 2}
                x2={stage.x + 156} y2={VIEWBOX_H / 2}
                stroke={BRAND.steel}
                strokeOpacity={0.3}
                strokeWidth={1.5}
                strokeDasharray="2 4"
              />
              <polygon
                points={`${stage.x + 156},${VIEWBOX_H / 2 - 3} ${stage.x + 162},${VIEWBOX_H / 2} ${stage.x + 156},${VIEWBOX_H / 2 + 3}`}
                fill={BRAND.steel}
                fillOpacity={0.3}
              />
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}
