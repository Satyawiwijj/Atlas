import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/home/Hero";
import { AboutBlurb } from "@/components/home/AboutBlurb";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { Pricing } from "@/components/home/Pricing";
import { Approach } from "@/components/home/Approach";
import { Faq } from "@/components/home/Faq";
import { AtlasTeaser } from "@/components/home/AtlasTeaser";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PageShell>
        <AboutBlurb />
        <StatsSection />
        <ServicesTeaser />
        <Pricing />
        <Approach />
        <Faq />
        <AtlasTeaser />
        <CtaSection />
      </PageShell>
    </>
  );
}
