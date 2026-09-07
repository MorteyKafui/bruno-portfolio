"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/editorial/eyebrow";
import { SplitLines } from "@/components/motion/split-lines";
import { editorialEase } from "@/components/motion/reveal";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { DisplayLine } from "@/data/home";
import type { Image as ImageData, Link as LinkData } from "@/types/content";
import { HeroBackdrop } from "./hero-backdrop";

interface HeroProps {
  eyebrow: string;
  roles: string[];
  lines: DisplayLine[];
  lead: string;
  primaryCta: LinkData;
  secondaryCta: LinkData;
  scrollCue: string;
  portrait: ImageData;
}

const fade = (delay: number, y = 16) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: editorialEase, delay },
});

export function Hero({
  eyebrow,
  roles,
  lines,
  lead,
  primaryCta,
  secondaryCta,
  scrollCue,
  portrait,
}: HeroProps) {
  const reduce = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1, 1.07]);
  const y = useTransform(scrollY, [0, 700], [0, 56]);
  const scrollLinked = !reduce && isDesktop;

  const displayLines = lines.map((line) => ({
    text: line.text,
    className:
      line.style === "caps" ? "uppercase" : "italic text-teal",
  }));

  return (
    <section
      aria-labelledby="hero-heading"
      data-theme="light"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ivory pt-24 text-ink md:pt-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <HeroBackdrop />
      </motion.div>

      <div className="container-editorial grid flex-1 grid-cols-1 items-end gap-x-6 lg:grid-cols-12">
        <div className="relative z-10 pt-8 pb-12 lg:col-span-7 lg:pb-24">
          <motion.div {...fade(0.55)} className="flex flex-col gap-3">
            <Eyebrow className="text-teal">{eyebrow}</Eyebrow>
            <p className="text-eyebrow text-graphite">
              {roles.join("  \u00b7  ")}
            </p>
          </motion.div>

          <SplitLines
            as="h1"
            id="hero-heading"
            trigger="mount"
            delay={0.75}
            stagger={0.11}
            lines={displayLines}
            className="text-display-xl mt-8 md:mt-10"
          />

          <motion.p
            {...fade(1.45)}
            className="text-lead mt-8 max-w-md text-graphite md:mt-10"
          >
            {lead}
          </motion.p>

          <motion.div
            {...fade(1.6)}
            className="mt-10 flex flex-wrap items-center gap-3 md:mt-12"
          >
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href={primaryCta.href} />}
            >
              {primaryCta.label}
              <ArrowDown className="size-4 transition-transform duration-300 group-hover/button:translate-y-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href={secondaryCta.href} />}
            >
              {secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: editorialEase, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[20rem] self-end mix-blend-multiply sm:max-w-[24rem] lg:col-span-5 lg:max-w-none"
        >
          <motion.div
            style={scrollLinked ? { scale, y } : undefined}
            className="origin-bottom will-change-transform"
          >
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              priority
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 24rem, 20rem"
              className="h-auto max-h-[78svh] w-full object-contain object-bottom"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        {...fade(2.1, 0)}
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-eyebrow text-graphite">{scrollCue}</span>
        <span className="block h-12 w-px overflow-hidden bg-ink/10">
          <span className="block h-full w-full bg-teal motion-safe:animate-scroll-cue" />
        </span>
      </motion.div>
    </section>
  );
}
