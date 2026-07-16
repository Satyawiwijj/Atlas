import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaSection() {
  return (
    <section className="py-16 md:py-20 border-t border-ink/10">
      <Reveal className="flex flex-col items-start">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-ink max-w-2xl">
          Have something worth building?
        </h2>
        <Button href="/contact" className="mt-5">
          Start a project
        </Button>
      </Reveal>
    </section>
  );
}
