"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const rings = [
  { cx: 420, cy: 400, rx: 380, ry: 300 },
  { cx: 430, cy: 395, rx: 320, ry: 245 },
  { cx: 440, cy: 390, rx: 262, ry: 194 },
  { cx: 448, cy: 386, rx: 206, ry: 148 },
  { cx: 454, cy: 383, rx: 152, ry: 106 },
  { cx: 458, cy: 381, rx: 100, ry: 68 },
  { cx: 460, cy: 380, rx: 50, ry: 33 },
];

/**
 * Concentric contours evoking isodose lines. With a fine pointer, each ring
 * drifts toward the cursor on its own spring, inner rings further than outer
 * ones, the way a dose distribution tightens around its target.
 */
export function IsodoseField({ className }: { className?: string }) {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduce = usePrefersReducedMotion();
  const active = finePointer && !reduce;
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18, mass: 1.2 });
  const sy = useSpring(py, { stiffness: 60, damping: 18, mass: 1.2 });

  useEffect(() => {
    if (!active) return;
    const onMove = (event: PointerEvent) => {
      px.set((event.clientX / window.innerWidth) * 2 - 1);
      py.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [active, px, py]);

  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 800 800"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {rings.map((ring, index) => (
        <Ring
          key={index}
          {...ring}
          depth={(index + 1) / rings.length}
          sx={sx}
          sy={sy}
          hot={index === rings.length - 1}
        />
      ))}
    </svg>
  );
}

interface RingProps {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  depth: number;
  hot: boolean;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
}

function Ring({ cx, cy, rx, ry, depth, hot, sx, sy }: RingProps) {
  const travel = 26 + depth * 54;
  const x = useTransform(sx, (v) => v * travel);
  const y = useTransform(sy, (v) => v * travel);
  return (
    <motion.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      style={{ x, y }}
      strokeWidth={hot ? 1.6 : 1}
      className={hot ? "text-accent" : undefined}
    />
  );
}
