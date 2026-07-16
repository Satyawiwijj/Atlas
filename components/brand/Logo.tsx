import Link from "next/link";
import { LogoMark } from "./LogoMark";

type LogoProps = {
  size?: number;
  className?: string;
  markOnly?: boolean;
  animate?: boolean;
  tone?: "ink" | "cloud";
};

const WORDMARK_TONES = {
  ink: { primary: "text-ink", secondary: "text-steel" },
  cloud: { primary: "text-cloud", secondary: "text-cloud/60" },
};

export function Logo({ size = 32, className, markOnly = false, animate = true, tone = "ink" }: LogoProps) {
  const wordmark = WORDMARK_TONES[tone];
  return (
    <Link
      href="/"
      aria-label="Nylor Tech home"
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      <LogoMark size={size} animate={animate} />
      {!markOnly && (
        <span className="font-display tracking-tight leading-none" style={{ fontSize: size * 0.62 }}>
          <span className={`font-bold ${wordmark.primary}`}>nylor</span>{" "}
          <span className={`font-normal ${wordmark.secondary}`}>tech</span>
        </span>
      )}
    </Link>
  );
}
