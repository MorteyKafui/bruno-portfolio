"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Class-based theme on `<html>`. Dark is the default; the visitor can still
 * switch to light. Persistence uses `ika-theme`.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="ika-theme"
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
