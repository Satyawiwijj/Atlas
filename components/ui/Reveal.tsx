"use client";

import type { ReactNode } from "react";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, className: revealClassName } = useRevealOnScroll<HTMLDivElement>();
  return (
    <div ref={ref} className={`${revealClassName} ${className}`}>
      {children}
    </div>
  );
}
