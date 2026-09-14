"use client";

import { useTranslations } from "next-intl";
import { professor } from "@/data/professor";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  onClick?: () => void;
  transitionTypes?: string[];
}

export function Wordmark({
  className,
  onClick,
  transitionTypes,
}: WordmarkProps) {
  const t = useTranslations("Header");
  const parts = professor.shortName.split(".");

  return (
    <Link
      href="/"
      onClick={onClick}
      transitionTypes={transitionTypes}
      aria-label={t("home", { name: professor.fullName })}
      className={cn(
        "font-display text-[1.375rem] leading-none tracking-tight whitespace-nowrap text-foreground",
        className,
      )}
    >
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <span className="text-accent">.</span>}
        </span>
      ))}
    </Link>
  );
}
