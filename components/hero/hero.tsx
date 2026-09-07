import { getTranslations } from "next-intl/server";
import { hero } from "@/data/home";
import { professor } from "@/data/professor";
import type { Locale } from "@/i18n/config";
import { pick } from "@/i18n/localized";
import { HeroStage } from "./hero-stage";

/** Resolves localized copy on the server and hands plain strings to the stage. */
export async function Hero({ locale }: { locale: Locale }) {
  const t = pick(locale);
  const ui = await getTranslations({ locale, namespace: "Hero" });

  return (
    <HeroStage
      eyebrow={t(hero.eyebrow)}
      roles={t(professor.roles)}
      lines={t(hero.lines)}
      lead={t(hero.lead)}
      primaryCta={t(hero.primaryCta)}
      secondaryCta={t(hero.secondaryCta)}
      cv={professor.cv}
      scrollCue={ui("scrollCue")}
      portrait={{ ...professor.portrait, alt: t(professor.portrait.alt) }}
    />
  );
}
