type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "cloud";
  style?: React.CSSProperties;
};

const TONES = {
  ink: "text-ink/70",
  cloud: "text-cloud/60",
};

export function Eyebrow({ children, className = "", tone = "ink", style }: EyebrowProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.18em] ${TONES[tone]} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
