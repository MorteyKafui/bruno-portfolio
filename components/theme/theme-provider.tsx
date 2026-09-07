"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Class-based theme on `<html>`, defaulting to the system preference and
 * persisted per visitor. next-themes applies the class before paint, so the
 * first frame is already correct and there is no flash or hydration mismatch
 * (the `<html>` element carries `suppressHydrationWarning`).
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="ika-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
