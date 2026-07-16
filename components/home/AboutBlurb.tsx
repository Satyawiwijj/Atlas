import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutBlurb() {
  return (
    <section className="py-16 md:py-20 border-t border-ink/10">
      <Reveal>
        <SectionHeading
          eyebrow="Who we are"
          title="A small studio, run like a product team."
          description="Nylor Tech takes on a small number of client builds at a time — websites, automation, and custom software — and holds every one of them to the same bar we hold our own product, Atlas, to."
        />
      </Reveal>
    </section>
  );
}
