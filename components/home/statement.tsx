import { Section } from "@/components/editorial/section";
import { SectionHeading } from "@/components/editorial/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { sectionIds } from "@/data/navigation";
import { statement } from "@/data/home";

export function Statement() {
  return (
    <Section id={sectionIds.about} theme="white" aria-labelledby="statement-heading">
      <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading
            id="statement-heading"
            index={statement.index}
            eyebrow={statement.eyebrow}
            lines={statement.lines}
            headingClassName="[&>span:last-child]:italic [&>span:last-child]:lowercase [&>span:last-child]:text-teal"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
          <div className="flex flex-col gap-7">
            {statement.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <p className="text-lead text-graphite first:text-ink">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16">
            <dl className="grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
              {statement.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-3">
                  <dt className="text-eyebrow text-graphite">{fact.label}</dt>
                  <dd className="font-display text-xl leading-snug text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
