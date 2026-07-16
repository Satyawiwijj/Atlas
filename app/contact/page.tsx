import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { AbstractRings } from "@/components/brand/AbstractRings";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Nylor Tech — websites, automation, AI agents, custom software.",
};

export default function ContactPage() {
  return (
    <PageShell className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Contact"
        as="h1"
        title="Tell us what you're building."
        description="A few details now saves a round of back-and-forth later."
      />

      <div className="relative mt-16 grid md:grid-cols-[1fr_360px] gap-16">
        <ContactForm />
        <div className="relative">
          <ContactInfo />
          <AbstractRings
            size={340}
            className="pointer-events-none absolute -right-16 top-40 hidden lg:block"
          />
        </div>
      </div>
    </PageShell>
  );
}
