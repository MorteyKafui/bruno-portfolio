import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/editorial/section";
import { SectionHeading } from "@/components/editorial/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { sectionIds } from "@/data/navigation";
import { research } from "@/data/home";
import { researchAreas } from "@/data/research";

export function ResearchAreas() {
  return (
    <Section id={sectionIds.research} theme="dark" aria-labelledby="research-heading">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_100%_100%,rgb(20_92_99/0.55),transparent_60%)]"
      />

      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              id="research-heading"
              index={research.index}
              eyebrow={research.eyebrow}
              lines={research.lines}
            />
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9">
            <p className="text-lead text-cool-gray">{research.intro}</p>
          </Reveal>
        </div>

        <ol className="mt-20 border-b border-warm-white/12 md:mt-28">
          {researchAreas.map((area, index) => (
            <Reveal
              as="li"
              key={area.slug}
              delay={index * 0.05}
              amount={0.2}
              y={20}
              className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-4 border-t border-warm-white/12 py-8 md:grid-cols-12 md:gap-x-6 md:py-10"
            >
              <span className="text-eyebrow tabular-nums text-cool-gray transition-colors duration-500 group-hover:text-teal-bright md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-display-md md:col-span-5 md:transition-transform md:duration-500 md:ease-(--ease-editorial) md:group-hover:translate-x-3">
                {area.title}
              </h3>

              <div className="col-span-2 flex flex-col gap-4 md:col-span-5 md:col-start-7 md:opacity-60 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
                <p className="max-w-md text-[0.9375rem] leading-relaxed text-warm-white/85">
                  {area.description}
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2" aria-label={`${area.title} topics`}>
                  {area.tags.map((tag) => (
                    <li key={tag} className="text-eyebrow text-cool-gray/80">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <ArrowUpRight
                aria-hidden
                className="hidden size-5 self-center justify-self-end text-teal-bright opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-1 group-hover:opacity-100 md:col-span-1 md:block"
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
