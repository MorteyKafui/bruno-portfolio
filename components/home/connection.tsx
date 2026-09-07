import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/editorial/section";
import { SectionHeading } from "@/components/editorial/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { sectionIds } from "@/data/navigation";
import { connection } from "@/data/home";
import { professor } from "@/data/professor";

export function Connection() {
  return (
    <Section
      id={sectionIds.connect}
      theme="dark"
      aria-labelledby="connection-heading"
      className="bg-linear-to-b from-charcoal via-[#0f2d32] to-teal"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] h-[80vmax] w-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(79_163_165/0.28),transparent_70%)] motion-safe:animate-drift" />
        <div className="absolute right-[-20%] bottom-[-40%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgb(82_124_136/0.25),transparent_70%)]" />
      </div>

      <div className="container-editorial grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionHeading
            id="connection-heading"
            index={connection.index}
            eyebrow={connection.eyebrow}
            lines={connection.lines}
            size="xl"
            className="[&_span.text-eyebrow]:text-cool-gray"
            headingClassName="[&>span:last-child]:italic [&>span:last-child]:lowercase [&>span:last-child]:text-teal-bright"
          />
        </div>

        <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9 lg:pt-16">
          <Reveal>
            <p className="text-lead text-warm-white/85">{connection.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="divide-y divide-warm-white/12 border-y border-warm-white/12">
              {connection.invitations.map((invitation) => (
                <li key={invitation} className="py-4 font-display text-2xl leading-none">
                  {invitation}
                </li>
              ))}
            </ul>
          </Reveal>

          {professor.email && (
            <Reveal delay={0.2}>
              <Button
                size="lg"
                render={<Link href={`mailto:${professor.email}`} />}
              >
                {connection.ctaLabel}
                <ArrowUpRight className="size-4" />
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}
