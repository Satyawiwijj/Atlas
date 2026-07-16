import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/home/Hero";
import { AboutBlurb } from "@/components/home/AboutBlurb";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { Approach } from "@/components/home/Approach";
import { AtlasTeaser } from "@/components/home/AtlasTeaser";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PageShell>
        <AboutBlurb />
        <ServicesTeaser />
        <Approach />
        <AtlasTeaser />
        <CtaSection />
      </PageShell>
    </>
  );
}
