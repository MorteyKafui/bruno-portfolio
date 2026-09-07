import { Eyebrow } from "@/components/editorial/eyebrow";
import { Section } from "@/components/editorial/section";
import { SplitLines } from "@/components/motion/split-lines";
import { Reveal } from "@/components/motion/reveal";
import { sectionIds } from "@/data/navigation";
import { perspective } from "@/data/home";

export function Perspective() {
  return (
    <Section
      id={sectionIds.perspective}
      theme="dark"
      aria-labelledby="perspective-heading"
      className="py-32 md:py-44 lg:py-56"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgb(79_163_165/0.22),transparent_70%)]"
      />

      <div className="container-editorial flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow index={perspective.index} className="text-cool-gray">
            {perspective.eyebrow}
          </Eyebrow>
        </Reveal>
        <SplitLines
          as="p"
          id="perspective-heading"
          lines={perspective.lines}
          stagger={0.12}
          className="text-display-md mt-12 max-w-5xl md:mt-16"
        />
      </div>
    </Section>
  );
}
