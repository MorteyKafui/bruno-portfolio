/**
 * Atmospheric hero background: ivory to white gradient, a soft teal glow, and
 * a faint set of concentric contours evoking isodose lines.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-linear-to-b from-ivory via-ivory to-white" />
      <div className="absolute -top-1/4 right-[-10%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgb(20_92_99/0.16),transparent_70%)]" />
      <div className="absolute bottom-[-30%] left-[-15%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(closest-side,rgb(82_124_136/0.12),transparent_70%)]" />
      <svg
        className="absolute top-[8%] right-[-6%] hidden w-[58vw] max-w-4xl text-teal opacity-[0.11] lg:block"
        viewBox="0 0 800 800"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <ellipse cx="420" cy="400" rx="380" ry="300" />
        <ellipse cx="430" cy="395" rx="320" ry="245" />
        <ellipse cx="440" cy="390" rx="262" ry="194" />
        <ellipse cx="448" cy="386" rx="206" ry="148" />
        <ellipse cx="454" cy="383" rx="152" ry="106" />
        <ellipse cx="458" cy="381" rx="100" ry="68" />
        <ellipse cx="460" cy="380" rx="50" ry="33" />
      </svg>
    </div>
  );
}
