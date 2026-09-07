"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { editorialEase } from "@/components/motion/reveal";
import type { NavItem } from "@/types/content";
import { Wordmark } from "./wordmark";

interface MobileMenuProps {
  name: string;
  items: NavItem[];
  descriptor: string;
}

const list: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: editorialEase } },
};

export function MobileMenu({ name, items, descriptor }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="sm" className="-mr-3 text-sm" />}
      >
        Menu
      </SheetTrigger>
      <SheetContent
        side="top"
        showCloseButton={false}
        className="dark inset-0 flex h-dvh w-full flex-col bg-charcoal text-warm-white data-[side=top]:h-dvh data-[side=top]:border-none"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Site navigation for {name}
        </SheetDescription>

        <div className="container-editorial flex h-20 items-center justify-between">
          <Wordmark name={name} onClick={close} />
          <Button variant="ghost" size="sm" className="-mr-3 text-sm" onClick={close}>
            Close
          </Button>
        </div>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          className="container-editorial flex flex-1 flex-col justify-center gap-1 py-8"
        >
          {items.map((entry, index) => (
            <motion.li key={entry.href} variants={item}>
              <Link
                href={entry.href}
                onClick={close}
                className="group flex items-baseline gap-5 border-b border-warm-white/10 py-4"
              >
                <span className="text-eyebrow w-6 tabular-nums text-cool-gray">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[2.5rem] leading-none tracking-tight transition-colors duration-300 group-hover:text-teal-bright">
                  {entry.label}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.6 } }}
          className="container-editorial pb-10 text-sm text-cool-gray"
        >
          {descriptor}
        </motion.p>
      </SheetContent>
    </Sheet>
  );
}
