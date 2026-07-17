import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { AbstractRings } from "@/components/brand/AbstractRings";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <PageShell className="relative py-24 md:py-32 overflow-hidden">
      <AbstractRings
        size={360}
        className="pointer-events-none absolute -right-16 -top-10 hidden lg:block"
      />
      <div className="relative flex flex-col max-w-xl">
        <Eyebrow>404</Eyebrow>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-ink mt-5">
          This page didn&apos;t ship.
        </h1>
        <p className="text-lg text-ink/80 mt-4">
          The link&apos;s broken, or the page moved. Let&apos;s get you back to something that exists.
        </p>
        <div className="flex flex-wrap gap-4 mt-9">
          <Button href="/">Back to home</Button>
          <Button href="/work" variant="secondary">
            See our work
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
