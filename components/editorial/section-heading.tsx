import { SplitLines, type SplitLine } from "@/components/motion/split-lines";
import { Eyebrow } from "./eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  lines: (string | SplitLine)[];
  as?: "h1" | "h2" | "h3";
  id?: string;
  size?: "xl" | "lg" | "md";
  className?: string;
  headingClassName?: string;
}

const sizes = {
  xl: "text-display-xl",
  lg: "text-display-lg",
  md: "text-display-md",
};

export function SectionHeading({
  index,
  eyebrow,
  lines,
  as = "h2",
  id,
  size = "lg",
  className,
  headingClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-8 md:gap-10", className)}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <SplitLines
        as={as}
        id={id}
        lines={lines}
        className={cn("uppercase", sizes[size], headingClassName)}
      />
    </div>
  );
}
