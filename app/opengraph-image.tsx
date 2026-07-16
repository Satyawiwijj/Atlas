import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: BRAND.ink,
          padding: 96,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width={64} height={64} viewBox="0 0 48 48" fill="none">
            <circle
              cx="24"
              cy="24"
              r="17"
              stroke={BRAND.halo}
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="94.352 12.462"
            />
            <circle cx="45.006" cy="15.937" r="2.4" fill={BRAND.ember} />
          </svg>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: BRAND.cloud }}>
            nylor <span style={{ color: BRAND.steel, fontWeight: 400, marginLeft: 10 }}>tech</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 56,
            fontWeight: 700,
            color: BRAND.cloud,
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Websites, automation, and AI agents — built right.
        </div>
      </div>
    ),
    { ...size },
  );
}
