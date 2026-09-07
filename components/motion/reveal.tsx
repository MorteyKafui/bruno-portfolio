"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export const editorialEase = [0.22, 1, 0.36, 1] as const;

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  /** Vertical travel in pixels before settling. */
  y?: number;
  amount?: number;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  amount = 0.3,
  once = true,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.85, ease: editorialEase, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
