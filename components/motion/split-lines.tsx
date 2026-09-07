"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { editorialEase } from "./reveal";

type HeadingTag = "h1" | "h2" | "h3" | "p" | "div";

export interface SplitLine {
  text: string;
  className?: string;
}

interface SplitLinesProps {
  lines: (string | SplitLine)[];
  as?: HeadingTag;
  id?: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  /** `mount` animates on load (hero); `inView` waits for scroll. */
  trigger?: "mount" | "inView";
}

const containers = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  div: motion.div,
};

const lineVariants: Variants = {
  hidden: { y: "112%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: editorialEase },
  },
};

export function SplitLines({
  lines,
  as = "h2",
  id,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.09,
  trigger = "inView",
}: SplitLinesProps) {
  const reduce = useReducedMotion();
  const Container = containers[as];
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: { once: true, amount: 0.35 } };

  return (
    <Container
      id={id}
      className={className}
      initial={reduce ? "visible" : "hidden"}
      variants={containerVariants}
      {...triggerProps}
    >
      {lines.map((line, index) => {
        const item = typeof line === "string" ? { text: line } : line;
        return (
          <span
            key={`${item.text}-${index}`}
            className="-mb-[0.14em] block overflow-hidden pb-[0.14em]"
          >
            <motion.span
              variants={lineVariants}
              className={cn("block will-change-transform", lineClassName, item.className)}
            >
              {item.text}
            </motion.span>
          </span>
        );
      })}
    </Container>
  );
}
