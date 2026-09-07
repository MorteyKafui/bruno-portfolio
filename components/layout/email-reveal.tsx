"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface EmailRevealProps {
  email: string;
  className?: string;
}

/**
 * Shows the address obfuscated (as on the owner's earlier site) until the
 * visitor asks for it, then renders a real mailto link. Keeps casual scrapers
 * out without hiding the address from people.
 */
export function EmailReveal({ email, className }: EmailRevealProps) {
  const t = useTranslations("Sections");
  const [revealed, setRevealed] = useState(false);
  const [user, domain] = email.split("@");

  if (revealed) {
    return (
      <a
        href={`mailto:${email}`}
        className={cn("underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-accent", className)}
      >
        {email}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setRevealed(true)}
      aria-label={t("revealEmail")}
      className={cn(
        "cursor-pointer text-start underline decoration-dotted decoration-foreground/40 underline-offset-4 transition-colors hover:text-accent",
        className,
      )}
    >
      <span aria-hidden>
        {user} [at] {domain}
      </span>
    </button>
  );
}
