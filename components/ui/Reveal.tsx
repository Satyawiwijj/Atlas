"use client";

import type { ReactNode } from "react";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reveal = useRevealOnScroll<HTMLDivElement>();
  return (
    <div ref={reveal.ref} className={`${reveal.className} ${className}`}>
      {children}
    </div>
  );
}
