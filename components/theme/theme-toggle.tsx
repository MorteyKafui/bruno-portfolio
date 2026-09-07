"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { playSwitchClick } from "@/lib/switch-sound";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  withLabel?: boolean;
}

/**
 * Circle-from-center theme reveal (Magic UI view-transition clip), wired to
 * next-themes and the synthesized switch click.
 */
export function ThemeToggle({ className, withLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("Theme");
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <span className={cn("inline-flex items-center", withLabel && "gap-3")}>
      <AnimatedThemeToggler
        theme={theme}
        onThemeChange={(next) => {
          void playSwitchClick(next === "light" ? "on" : "off");
          setTheme(next);
        }}
        variant="circle"
        fromCenter
        duration={560}
        aria-label={t("toggle")}
        title={t("toggle")}
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted",
          className,
        )}
      />
      {withLabel && (
        <span className="text-sm">
          <span className="dark:hidden">{t("light")}</span>
          <span className="hidden dark:inline">{t("dark")}</span>
        </span>
      )}
    </span>
  );
}
