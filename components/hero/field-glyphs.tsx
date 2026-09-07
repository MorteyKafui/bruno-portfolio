"use client";

import { useTheme } from "next-themes";
import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/** Dose, imaging, and cellular tokens used in medical physics. */
const MEDICAL_GLYPHS = [
  "α",
  "β",
  "γ",
  "Δ",
  "λ",
  "μ",
  "Ω",
  "∑",
  "∫",
  "∇",
  "∂",
  "√",
  "±",
  "°",
  "ψ",
  "φ",
  "θ",
  "σ",
  "ħ",
  "⊕",
  "⊗",
  "⊙",
  "Gy",
  "Sv",
  "Bq",
  "eV",
  "CT",
  "MRI",
  "DNA",
  "RNA",
  "e⁻",
] as const;

export function FieldGlyphs() {
  const { resolvedTheme } = useTheme();
  const reduce = usePrefersReducedMotion();
  const color = resolvedTheme === "dark" ? "#4FA3A5" : "#145C63";

  return (
    <GlyphMatrix
      glyphs={MEDICAL_GLYPHS}
      cellSize={16}
      mutationRate={reduce ? 0 : 0.035}
      interval={reduce ? 10_000 : 110}
      fadeBottom={0.72}
      color={color}
      className="absolute inset-0 opacity-40 dark:opacity-30"
    />
  );
}
