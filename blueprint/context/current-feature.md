# Feature: Foundation & personal brand homepage (revision 2)

**From build-plan:** feature 1
**Status:** revision 2 in progress (revision 1 was implemented and verified; the owner's review added foundation requirements, see project-plan section 8)
**Branch:** `feature/personal-brand-homepage`

## Goal

Deliver the story-driven homepage for Dr Isaac Kwesi Acquah on a foundation
every later page inherits: locale-aware routing with a translation
architecture, a persisted light/dark theme, the header and footer blocks the
owner selected, the lecturer's name as wordmark, a language switcher, a
downloadable CV, cookie consent, localized SEO metadata, and the first
domain-specific interactive moments. Real facts from the owner's earlier site
replace the "Bruno" placeholders; anything unverified stays a marked
placeholder.

## What changes for the visitor

- `/` redirects to `/en` (later: the detected or remembered language). Every
  page carries its locale in the URL, `<html lang dir>` is correct, and
  metadata, canonical, and `hreflang` are localized.
- Header: "I.K. Acquah" wordmark, About / Research / Services / Get in touch /
  Blog, then `EN` switcher, bulb theme toggle, "Download CV". Floating pill
  that compacts on scroll (adapted from `@efferd/header-2`). Blog stays hidden
  by configuration until the blog route ships.
- Language switcher lists English as active and Français, Español, Português,
  العربية as disabled "coming soon" entries; switching keeps the current page.
- Theme toggle switches light/dark with a short synthesized switch click,
  remembers the choice, and defaults to the system preference.
- Footer adapted from `@efferd/footer-6`: layered reveal, name, descriptor,
  Explore links, Connect (obfuscated email with reveal, location), language
  list, CV link, copyright.
- Cookie notice (bottom, small) with Accept / Decline, remembered for a year.
- Homepage acts, now with verified content: hero, 01 About, 02 Research (with
  an MRI to synthetic CT comparison), 03 Impact, 04 Teaching, 05 Consultancy
  (new, with regulatory disclaimer), 06 Perspective, 07 Get in touch.
- Interactive craft: spring nav indicator, magnetic CTAs, pointer-responsive
  isodose field in the hero, comparison slider, springy cookie banner.

## In scope

1. **i18n core** with `next-intl`: `i18n/config.ts` (locale registry with
   labels, direction, enabled flag), `i18n/routing.ts` (prefix always, cookie
   one year), `i18n/navigation.ts`, `i18n/request.ts` (root params, English
   fallback merge, dev-only missing-key logging), `proxy.ts`,
   `app/[locale]/layout.tsx` as root layout, `[...rest]` catch-all to 404,
   localized `not-found`. `messages/en.json` for UI strings; `Localized<T>`
   plus `localize()` for content fields in `data/`.
2. **Theme**: `next-themes` provider, `suppressHydrationWarning`, class
   strategy, bulb toggle with Web Audio click (no asset, user gesture only),
   token refactor so dark sections lift to a teal-tinted surface in dark mode
   and every component uses semantic tokens. Hero portrait renders as a
   mounted print on ivory in dark mode (blend-mode strategy per theme).
3. **Header and footer blocks** installed through the `@efferd` registry, then
   moved into `components/navigation` and `components/layout`, restyled, and
   wired to messages, data, theme, and locale. Mobile menu keeps the
   accessible Base UI Sheet (focus trap, Escape) and gains language, theme,
   CV.
4. **Navigation data**: five labels from messages; hrefs to homepage anchors
   until routes ship; `enabled` flag per item.
5. **CV download**: labelled placeholder PDF at `public/cv/`, links in header,
   hero, footer, `download` attribute.
6. **Cookie consent**: client island, `useSyncExternalStore` over
   `document.cookie`, spring entrance, translated copy.
7. **Content**: `data/professor.ts`, `data/research.ts`, `data/home.ts`,
   `data/navigation.ts` rewritten with verified facts (project-plan 8.1) as
   localized values; new consultancy act; obfuscated email with reveal.
8. **Interactivity**: `MagneticButton`, nav `layoutId` indicator, isodose
   pointer field, `ScanCompare` (abstract MRI vs synthetic CT plates, range
   input for accessibility), spring cookie banner, footer reveal. All gated by
   `pointer: fine` and reduced motion where relevant.
9. **SEO**: `generateMetadata` per locale (title, description, canonical,
   `alternates.languages` with `x-default`, Open Graph locale), generated OG
   image, Person JSON-LD, `sitemap.ts`, `robots.ts`, `metadataBase` from
   `NEXT_PUBLIC_SITE_URL`.
10. **RTL readiness**: logical utilities (`ps-`, `pe-`, `ms-`, `me-`,
    `start-`, `end-`, `text-start`) in all touched components; direction from
    the locale registry on `<html>`.
11. **Docs**: coding standards gain i18n, theme, and RTL conventions;
    `AGENTS.md` commands unchanged; shadcn skill installed for agents.

## Out of scope

- Any route beyond `/[locale]` (About, Research, Services, Blog, Contact pages
  are features 2 to 10). Nav labels point at homepage anchors meanwhile.
- Translations. Only `en` is enabled; no `fr/es/pt/ar` message files ship.
- Arabic font loading (mapped in config, loaded when `ar` is enabled).
- Cache Components / `'use cache'` (see project-plan 8.9).
- Analytics, contact form, MDX pipeline, publication data.

## Build steps

- [ ] **Step 1 - Plans and spec** - project-plan section 8, build-plan item 1
  and 8 and 20, overview refresh with new hash, this spec. *Done when:* hash
  in `project-overview.md` matches the plans.
- [ ] **Step 2 - Dependencies and blocks** - `next-intl`, `next-themes`,
  shadcn `dropdown-menu`, `@efferd` registry in `components.json`,
  `header-2` and `footer-6` installed, shadcn skill added. *Done when:* the
  block sources are in the repo and `bun install` is clean.
- [ ] **Step 3 - i18n skeleton** - config, routing, navigation, request,
  proxy, `app/[locale]` layout and page, catch-all, not-found, messages,
  `Localized` helpers, `global.d.ts` types. *Done when:* `/` redirects to
  `/en`, `/en` renders, `/xx` and `/en/nope` return the localized 404, and
  the build prerenders `/en`.
- [ ] **Step 4 - Theme and tokens** - provider, toggle with sound, semantic
  token refactor across components, dark-mode section lift, portrait plate.
  *Done when:* toggling persists across reload, both themes read well in
  every act, no hydration warning.
- [ ] **Step 5 - Header, switcher, footer, CV, consent** - adapted blocks,
  dropdown switcher, mobile menu additions, placeholder PDF, banner.
  *Done when:* keyboard path through header, switcher, menu, and banner
  works; CV downloads; banner choice persists.
- [ ] **Step 6 - Content and acts** - verified data, consultancy act,
  comparison slider, isodose field, magnetic CTAs, email reveal. *Done
  when:* every rendered string traces to messages or localized data, no
  invented facts, interactions respect reduced motion.
- [ ] **Step 7 - SEO and verification** - metadata, OG image, JSON-LD,
  sitemap, robots; lint, typecheck, build; CDP checks at 390/820/1440 in both
  themes; hreflang and lang attributes; console clean. *Done when:* all gates
  pass and the verification record below is filled in.

## Data / contracts

- `Locale = "en" | "fr" | "es" | "pt" | "ar"`; `locales` (enabled) and
  `plannedLocales` derive from `localeRegistry` in `i18n/config.ts`. Default
  `en`. Cookie `NEXT_LOCALE`, one year.
- `Localized<T> = { en: T } & Partial<Record<Locale, T>>`;
  `localize(value, locale)` returns the locale value or English.
- Messages namespaces: `Metadata`, `Nav`, `Header`, `Footer`, `Language`,
  `Theme`, `Cookie`, `Hero`, `Sections`, `NotFound`, `Common`.
- `Professor` gains `honorific`, `shortName` (wordmark), `initials`,
  `former` (previous post), `values`, `cv: { href, fileName }`; localized
  fields for `title`, `roles`, `shortBio`, `department`, `university`,
  `location`, `former.role`, `former.institution`, `values`.
- `ResearchArea` fields `title`, `description`, `tags` become localized.
- Nav item: `{ key, href, enabled }`; label resolved from `Nav.<key>`.
- Section ids: `about`, `research`, `impact`, `teaching`, `services`,
  `perspective`, `connect`.
- Theme tokens: light `:root`, dark `.dark`, lifted dark surface for
  `.dark .dark` (inverse sections inside dark mode) and `--card` for paper
  sections. Tailwind `dark:` variant remains `&:is(.dark *)`.
- Cookie `ika_consent = accepted | declined`, one year, `SameSite=Lax`.
- Env `NEXT_PUBLIC_SITE_URL` (canonical origin), fallback
  `http://localhost:3000`.

## Testing

- Gates: `bun run lint`, `bunx tsc --noEmit`, `bun run build`.
- CDP against the production build: redirects, `lang`/`dir`, hreflang links,
  header states over light and dark sections in both themes, theme
  persistence, cookie persistence, CV 200 + `application/pdf`, mobile menu
  focus trap, no console errors, no horizontal overflow at 390/820/1440.
- Second-locale architecture test: temporarily enable `fr` locally with a
  partial dictionary to prove fallback, `lang="fr"`, switcher, and page
  preservation; revert before commit (no unreviewed translations ship).

## Verification record

To be filled in at step 7.

## Notes for the AI

- Server components by default. Client islands: header, switcher, toggle,
  mobile menu, banner, motion primitives, interactive moments.
- Never nest anchors; Base UI `render={<Link />}` with `nativeButton={false}`.
- No browser APIs during render; `useSyncExternalStore` with server snapshots.
- No em dashes in generated text; hyphens and colons instead.
- Do not assert degrees, dates, awards, courses, publications, students, or
  numbers. Where the owner's README mentions a category without specifics
  (three consultancy services, courses, awards), describe the category, not
  invented items, and mark `TODO(content)`.
- The Web Audio click is synthesized (no licensed sample); it only plays on
  the toggle click, never automatically.
- Efferd blocks are written for the Radix `asChild` API; convert to Base UI
  `render` and remove demo content, icons, and links entirely.
