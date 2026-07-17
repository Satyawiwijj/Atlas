"use client";

import { useEffect, useRef, useState } from "react";

// Belt-and-suspenders max wait before a section is forced visible even if the
// IntersectionObserver never reports it as intersecting (e.g. a fast scroll/fling,
// or a scroll-restore jump, can skip an element's intersection window entirely -
// content must never be capable of getting stuck permanently invisible).
const MAX_WAIT_MS = 1500;

/** Fades/translates an element in once, the first time it enters the viewport. */
export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    const fallback = window.setTimeout(() => setVisible(true), MAX_WAIT_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return { ref, className: `reveal ${visible ? "reveal-visible" : ""}` };
}
