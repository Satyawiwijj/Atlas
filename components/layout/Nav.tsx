"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { LogoMark } from "@/components/brand/LogoMark";
import { Button } from "@/components/ui/Button";
import { PageShell } from "./PageShell";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-50 pt-8 md:pt-10">
      <PageShell className="relative z-50">
        <nav className="flex items-center justify-between" aria-label="Primary">
          <Logo size={40} tone={open ? "cloud" : "ink"} />

          <button
            type="button"
            className={`relative flex items-center gap-3 text-base md:text-lg font-semibold transition-colors duration-200 ${
              open ? "text-cloud hover:text-ember" : "text-ink hover:text-ember-deep"
            }`}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
            <span className="relative flex h-5 w-7 flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transition-transform duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-transform duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </nav>
      </PageShell>

      <div
        id="site-menu"
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <LogoMark
          size={560}
          animate={false}
          className="pointer-events-none absolute -right-32 -bottom-32 opacity-[0.05]"
        />
        <PageShell className="relative flex h-full flex-col justify-center py-24">
          <ul className="flex flex-col gap-2">
            {LINKS.map((link, i) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="flex items-baseline gap-4 md:gap-6">
                  <span className="font-mono text-sm text-cloud/50">{String(i + 1).padStart(2, "0")}</span>
                  <Link
                    href={link.href}
                    tabIndex={open ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className={`font-display text-6xl md:text-8xl font-bold tracking-tight transition-colors duration-200 ${
                      active ? "text-ember" : "text-cloud hover:text-ember"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button href="/contact" variant="primaryInverted" className="mt-12 self-start" tabIndex={open ? 0 : -1}>
            Start a project
          </Button>
        </PageShell>
      </div>
    </header>
  );
}
