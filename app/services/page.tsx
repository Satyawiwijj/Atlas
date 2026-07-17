import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/content";
import { AbstractRings } from "@/components/brand/AbstractRings";

export const metadata: Metadata = {
  title: "Services",
  description: "Websites, automation & AI agents, and custom software from Nylor Tech.",
};

export default function ServicesPage() {
  return (
    <PageShell className="relative py-16 md:py-24 overflow-hidden">
      <AbstractRings
        size={380}
        className="pointer-events-none absolute -right-20 -top-16 hidden lg:block"
      />
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          as="h1"
          title="Three ways we help businesses ship."
          description="Pick one, or all three — most of our client work ends up touching all three eventually."
        />

        <div className="stagger-children mt-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </Reveal>

      <Reveal className="flex flex-col items-start gap-6 py-16 border-t border-ink/10">
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-ink max-w-md">
          Not sure which one you need?
        </h2>
        <Button href="/contact">Tell us what you&apos;re building</Button>
      </Reveal>
    </PageShell>
  );
}
