import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { PageShell } from "./PageShell";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 py-12 mt-auto">
      <PageShell className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <Logo size={24} animate={false} />

        <ul className="flex flex-wrap gap-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-ink/80 hover:text-ember-deep transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-ink/70">© {year} Nylor Tech</p>
      </PageShell>
    </footer>
  );
}
