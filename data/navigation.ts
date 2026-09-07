import type { NavItem } from "@/types/content";

// Feature 1 links to homepage sections. Later features replace these hrefs
// with routes (/about, /research, ...) without changing consumers.
export const primaryNavigation: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Impact", href: "/#impact" },
  { label: "Teaching", href: "/#teaching" },
  { label: "Perspective", href: "/#perspective" },
  { label: "Connect", href: "/#connect" },
];

export const sectionIds = {
  about: "about",
  research: "research",
  impact: "impact",
  teaching: "teaching",
  perspective: "perspective",
  connect: "connect",
} as const;
