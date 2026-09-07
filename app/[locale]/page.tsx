import { Hero } from "@/components/hero/hero";
import { Connection } from "@/components/home/connection";
import { Educator } from "@/components/home/educator";
import { Impact } from "@/components/home/impact";
import { Perspective } from "@/components/home/perspective";
import { ResearchAreas } from "@/components/home/research-areas";
import { Statement } from "@/components/home/statement";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { footer, hero } from "@/data/home";
import { primaryNavigation } from "@/data/navigation";
import { professor } from "@/data/professor";

export default function Home() {
  return (
    <>
      <SiteHeader
        name={professor.name}
        items={primaryNavigation}
        descriptor={footer.descriptor}
      />
      <main id="main" className="flex-1">
        <Hero
          eyebrow={hero.eyebrow}
          roles={professor.roles}
          lines={hero.lines}
          lead={hero.lead}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
          scrollCue={hero.scrollCue}
          portrait={professor.portrait}
        />
        <Statement />
        <ResearchAreas />
        <Impact />
        <Educator />
        <Perspective />
        <Connection />
      </main>
      <SiteFooter />
    </>
  );
}
