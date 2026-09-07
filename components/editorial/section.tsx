import { cn } from "@/lib/utils";

export type SectionTheme = "ivory" | "white" | "dark" | "teal";

const themes: Record<SectionTheme, string> = {
  ivory: "bg-ivory text-ink",
  white: "bg-white text-ink",
  dark: "dark bg-charcoal text-warm-white",
  teal: "dark bg-teal text-warm-white",
};

interface SectionProps extends React.ComponentProps<"section"> {
  theme?: SectionTheme;
  padded?: boolean;
}

export function Section({
  theme = "ivory",
  padded = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-theme={theme === "dark" || theme === "teal" ? "dark" : "light"}
      className={cn(
        "relative isolate overflow-hidden",
        themes[theme],
        padded && "py-24 md:py-32 lg:py-40",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
