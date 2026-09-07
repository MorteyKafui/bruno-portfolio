import { Section } from "@/components/editorial/section";
import { SectionHeading } from "@/components/editorial/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { sectionIds } from "@/data/navigation";
import { impact } from "@/data/home";
import { ImpactChain } from "./impact-chain";

export function Impact() {
  return (
    <Section id={sectionIds.impact} theme="ivory" aria-labelledby="impact-heading">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              id="impact-heading"
              index={impact.index}
              eyebrow={impact.eyebrow}
              lines={impact.lines}
            />
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <ImpactChain steps={impact.chain} />
        </div>

        <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-3 md:gap-8">
          {impact.pillars.map((pillar, index) => (
            <Reveal
              as="article"
              key={pillar.title}
              delay={index * 0.1}
              className="flex flex-col gap-5 border-t border-line pt-8"
            >
              <span className="text-eyebrow text-graphite">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-display-sm">{pillar.title}</h3>
              <p className="max-w-sm leading-relaxed text-graphite">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
