import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "primaryInverted" | "secondaryInverted";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-150 ease-out hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0";

// "Inverted" variants are for use on dark (bg-ink) sections - e.g. the full-screen menu overlay.
// ember only passes contrast as TEXT on an ink background or as a solid fill paired with ink
// text - never as text/border directly on cloud, so light-surface variants use ember-deep there.
const variants: Record<Variant, string> = {
  primary: "bg-ink text-cloud hover:bg-ember hover:text-ink",
  secondary: "border border-ink/20 text-ink hover:border-ember-deep hover:text-ember-deep",
  primaryInverted: "bg-cloud text-ink hover:bg-ember",
  secondaryInverted: "border border-cloud/40 text-cloud hover:border-ember hover:text-ember",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: CommonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonSubmit({
  variant = "primary",
  className = "",
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="submit" className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
