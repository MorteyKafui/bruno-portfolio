import Link from "next/link";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export function Wordmark({ name, className, onClick }: WordmarkProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${name}, home`}
      className={cn(
        "font-display text-[1.375rem] leading-none tracking-tight text-foreground",
        className,
      )}
    >
      {name}
      <span className="text-teal dark:text-teal-bright">.</span>
    </Link>
  );
}
