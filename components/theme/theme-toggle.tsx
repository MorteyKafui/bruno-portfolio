"use client";

import { useState } from "react";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { playSwitchClick } from "@/lib/switch-sound";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  /** Show the mode label next to the bulb (mobile menu, footer). */
  withLabel?: boolean;
}

/**
 * Bulb switch. Both icons are rendered and swapped with CSS so the server
 * markup never depends on the theme; the current mode is read only on click.
 */
export function ThemeToggle({ className, withLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("Theme");
  const [swing, setSwing] = useState(0);

  const toggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    void playSwitchClick(next === "light" ? "on" : "off");
    setSwing((n) => n + 1);
    setTheme(next);
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size={withLabel ? "sm" : "icon-sm"}
      onClick={toggle}
      aria-label={t("toggle")}
      title={t("toggle")}
      className={cn("group/bulb", withLabel && "gap-3 px-3", className)}
    >
      <motion.span
        key={swing}
        aria-hidden
        initial={swing === 0 ? false : { rotate: -18, scale: 0.85 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 420, damping: 12, mass: 0.6 }}
        className="inline-flex origin-top"
      >
        <Lightbulb className="size-4.5 text-accent dark:hidden" />
        <LightbulbOff className="hidden size-4.5 dark:block" />
      </motion.span>
      {withLabel && (
        <span className="text-sm">
          <span className="dark:hidden">{t("light")}</span>
          <span className="hidden dark:inline">{t("dark")}</span>
        </span>
      )}
    </Button>
  );
}
