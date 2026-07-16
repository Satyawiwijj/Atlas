import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND.cloud,
        }}
      >
        <svg width={120} height={120} viewBox="0 0 48 48" fill="none">
          <circle
            cx="24"
            cy="24"
            r="17"
            stroke={BRAND.halo}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray="94.352 12.462"
          />
          <circle cx="45.006" cy="15.937" r="4" fill={BRAND.ember} />
        </svg>
      </div>
    ),
    { ...size },
  );
}
