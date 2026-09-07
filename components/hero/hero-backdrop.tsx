import { IsodoseField } from "./isodose-field";

/**
 * Atmospheric hero background: page-tone gradient, a soft teal glow, and the
 * isodose contours that follow the pointer on desktop.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-card" />
      <div className="absolute -top-1/4 end-[-10%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgb(20_92_99/0.16),transparent_70%)] dark:bg-[radial-gradient(closest-side,rgb(79_163_165/0.18),transparent_70%)]" />
      <div className="absolute bottom-[-30%] start-[-15%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(closest-side,rgb(82_124_136/0.12),transparent_70%)]" />
      <IsodoseField className="absolute top-[8%] end-[-6%] hidden w-[58vw] max-w-4xl text-teal opacity-[0.13] lg:block dark:text-teal-bright dark:opacity-[0.16]" />
    </div>
  );
}
