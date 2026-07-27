"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FAQ = [
  {
    question: "How do you handle timezone differences?",
    answer:
      "We work US business hours (9am-6pm EST) for calls and real-time collaboration. Async communication happens through Slack, Loom videos, and shared docs — so you never wait a full day for a response.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Launch is the start, not the finish. We offer monthly retainers for ongoing support, or per-project fixes. We don't disappear after handoff.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "Weekly check-ins via video call, daily updates in Slack or your preferred tool, and a shared project board. You'll always know what's happening.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "A marketing site: 2-4 weeks. A web app: 4-12 weeks. Custom software: 8-20 weeks. We scope everything on a call before any code gets written.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "Both. We've built for funded startups and established businesses. What matters is that you have a clear problem worth solving — not your company size.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "React, Next.js, Node.js, TypeScript, Tailwind CSS — modern tools that perform well and are easy to maintain. We pick the right tools for your specific needs.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  function toggle(i: number) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const next = openIndex === i ? null : i;

    if (openIndex !== null) {
      const prevPanel = panelRefs.current[openIndex];
      if (prevPanel) {
        if (reducedMotion) {
          gsap.set(prevPanel, { height: 0 });
        } else {
          gsap.set(prevPanel, { height: prevPanel.scrollHeight });
          gsap.to(prevPanel, { height: 0, duration: 0.3, ease: "power2.inOut" });
        }
      }
    }

    if (next !== null) {
      const panel = panelRefs.current[next];
      if (panel) {
        if (reducedMotion) {
          gsap.set(panel, { height: "auto" });
        } else {
          gsap.fromTo(
            panel,
            { height: 0 },
            {
              height: panel.scrollHeight,
              duration: 0.35,
              ease: "power2.out",
              onComplete: () => gsap.set(panel, { height: "auto" }),
            },
          );
        }
      }
    }

    setOpenIndex(next);
  }

  return (
    <section className="py-16 md:py-20 border-t border-ink/10">
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we hear a lot."
          description="If yours isn't here, ask us — we reply fast."
        />
        <div className="mt-10 max-w-3xl">
          {FAQ.map((item, i) => (
            <div key={item.question} className="border-b border-ink/10">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex items-center justify-between gap-4 w-full py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-base md:text-lg font-semibold text-ink">
                  {item.question}
                </span>
                <span
                  className={`text-ink/70 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                className="overflow-hidden"
                style={{ height: 0 }}
              >
                <p className="pb-5 text-sm md:text-base text-ink/70 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
