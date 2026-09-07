import { Section } from "@/components/editorial/section";
import { SectionHeading } from "@/components/editorial/section-heading";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import { sectionIds } from "@/data/navigation";
import { educator } from "@/data/home";
import { graduationPortrait } from "@/data/professor";

export function Educator() {
  return (
    <Section id={sectionIds.teaching} theme="white" aria-labelledby="educator-heading">
      <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal
          as="figure"
          y={40}
          amount={0.15}
          className="lg:col-span-5 lg:row-start-1"
        >
          <ParallaxImage
            image={graduationPortrait}
            sizes="(min-width: 1024px) 38vw, 100vw"
            amount={7}
            className="aspect-[3/4] w-full bg-ivory"
          />
          <figcaption className="text-eyebrow mt-5 text-graphite">
            {educator.eyebrow}
          </figcaption>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-center lg:pt-16">
          <SectionHeading
            id="educator-heading"
            index={educator.index}
            eyebrow={educator.eyebrow}
            lines={educator.lines}
            accent={1}
          />

          <Reveal delay={0.15} className="mt-12">
            <p className="text-lead max-w-lg text-graphite">{educator.body}</p>
          </Reveal>

          <Reveal delay={0.25} className="mt-14">
            <ul className="divide-y divide-line border-y border-line">
              {educator.pillars.map((pillar, index) => (
                <li key={pillar} className="flex items-baseline gap-6 py-5">
                  <span className="text-eyebrow tabular-nums text-graphite">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl leading-none">{pillar}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
