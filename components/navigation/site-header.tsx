"use client";

import { useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/content";
import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";

interface SiteHeaderProps {
  name: string;
  items: NavItem[];
  descriptor: string;
}

export function SiteHeader({ name, items, descriptor }: SiteHeaderProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      data-scrolled={scrolled || undefined}
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-(--ease-editorial)",
        scrolled
          ? "border-ink/10 bg-ivory/85 shadow-[0_1px_0_0_rgb(17_19_21/0.04)] backdrop-blur-md supports-backdrop-filter:bg-ivory/70"
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
                className="group relative py-2 text-[0.8125rem] font-medium tracking-tight text-graphite transition-colors duration-300 hover:text-ink"
              >
                {item.label}
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-teal transition-transform duration-400 ease-(--ease-editorial) group-hover:scale-x-100"
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
