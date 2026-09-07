"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/content";
import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";

interface SiteHeaderProps {
  name: string;
  items: NavItem[];
  descriptor: string;
}

type SurfaceTheme = "light" | "dark";

/** Theme of the section currently sitting under the header bar. */
function readSurfaceTheme(): SurfaceTheme {
  const probeY = 40;
  const hits = document.elementsFromPoint(window.innerWidth / 2, probeY);
  for (const el of hits) {
    if (el.closest("header")) continue;
    const surface = el.closest<HTMLElement>("[data-theme]");
    if (surface) return surface.dataset.theme === "dark" ? "dark" : "light";
  }
  return "light";
}

type HeaderState = `${"top" | "scrolled"}|${SurfaceTheme}`;

function subscribeToViewport(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

function readHeaderState(): HeaderState {
  return `${window.scrollY > 24 ? "scrolled" : "top"}|${readSurfaceTheme()}`;
}

export function SiteHeader({ name, items, descriptor }: SiteHeaderProps) {
  const state = useSyncExternalStore(
    subscribeToViewport,
    readHeaderState,
    (): HeaderState => "top|light",
  );
  const [position, surface] = state.split("|") as ["top" | "scrolled", SurfaceTheme];
  const scrolled = position === "scrolled";

  return (
    <header
      data-scrolled={scrolled || undefined}
      data-surface={surface}
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b text-foreground transition-[background-color,border-color,color] duration-500 ease-(--ease-editorial)",
        surface === "dark" && "dark",
        scrolled
          ? "border-foreground/10 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/70"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "container-editorial flex items-center justify-between transition-[height] duration-500 ease-(--ease-editorial)",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <Wordmark name={name} />

        <ul className="hidden items-center gap-7 md:flex lg:gap-9">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative py-2 text-[0.8125rem] font-medium tracking-tight text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-400 ease-(--ease-editorial) group-hover:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <MobileMenu name={name} items={items} descriptor={descriptor} />
        </div>
      </nav>
    </header>
  );
}
