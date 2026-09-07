# Feature: Personal brand homepage

**From build-plan:** feature 1
**Status:** not started
**Branch:** `feature/personal-brand-homepage`

## Goal

Deliver the complete story-driven homepage at `/` and, with it, the visual
foundation every later feature builds on: typography, palette tokens, spacing,
sticky navigation, the editorial section system, reusable Motion primitives,
the image strategy, and responsive behavior. The result must be polished enough
to judge the site's visual direction on its own.

## Design reference

No external mockup. Direction comes from `project-overview.md` (UI/UX section):
"where physics meets medicine", editorial magazine meets scientific portfolio.
Principles borrowed from modern personal-brand sites (oversized type, confident
composition, large photographic moments, restrained navigation) with an
original identity. Existing assets:

- `public/assets/imgs/profile-pic.jpg` - 2956x3542 studio portrait, cutout on
  white, head tightly cropped at the top. Hero anchor, bottom-aligned.
- `public/assets/imgs/graduation-pic.jpeg` - 720x1080 doctoral-gown portrait.
  Educator act.

## In scope

- Root layout: DM Serif Display + Inter via `next/font/google` (remove Geist),
  ivory-first palette tokens in `globals.css`, shadcn semantic tokens remapped
  to the palette, `.dark` as a section-scoped cinematic theme, site metadata
  title and description, `MotionConfig reducedMotion="user"` provider.
- shadcn/ui `Button` and `Sheet` added via the CLI and restyled.
- Typed structured content in `data/`: `professor.ts`, `research.ts` (areas
  only), `navigation.ts`, `home.ts` (act copy). Shared `Image` and `Link` types.
- Motion primitives in `components/motion/`: `Reveal` (whileInView fade/rise),
  `SplitLines` (staggered line reveal for display headings), `ParallaxImage`
  (scroll-linked, disabled on reduced motion and below `md`), provider.
- Editorial primitives in `components/editorial/`: `Section` (theme, padding,
  id), `Eyebrow` (small uppercase label), `SectionHeading` (index + eyebrow +
  display lines), `DisplayHeading`.
- Sticky `SiteHeader`: wordmark, desktop links, subtle change after scroll,
  full-screen mobile menu (Sheet) with staggered link reveal, keyboard and
  Escape support.
- Hero: portrait, eyebrow, role line, four-line display statement, lead
  paragraph, two CTAs, scroll cue; entrance sequence (background, portrait,
  metadata, staggered type, CTAs, cue); subtle portrait scale on scroll.
- Six homepage acts rendered from data with alternating rhythm:
  1. Statement (Act 1, the Person) - light, typographic, three metadata columns
  2. Research (Act 2, the Scientist) - dark charcoal to teal, numbered list of
     research areas with hover reveal (no cards)
  3. Impact (Act 3) - light, Physics to Technology to Medicine to People to
     Impact chain with scroll-driven connector, three short editorial paragraphs
  4. Educator (Act 4) - image-heavy, graduation portrait with parallax and
     offset statement
  5. Perspective (Act 5, the Thinker) - dark, quiet, one large statement
  6. Connection (Act 6) - atmospheric teal gradient, closing invitation list
- Footer: wordmark, descriptor, section links, copyright.
- Responsive design at mobile (390), tablet (820), desktop (1440): reduced
  parallax and decorative motion below `md`, dramatic but readable type.
- Accessibility: semantic landmarks and heading order, visible focus, keyboard
  operable menu, meaningful alt text, reduced-motion support.

## Out of scope

- Any route other than `/` (about, research, services, publications, teaching,
  mentorship, blog, contact belong to features 2 to 10). Navigation and CTA
  hrefs are data-driven hash anchors now and switch to routes as features land.
- CV download and "View Publications" CTA (no CV file or publications exist yet;
  the data shape reserves `cvUrl`).
- Contact form, email address, academic profile links (feature 10); rendered
  only when present in data.
- Featured research project, services, teaching detail, mentorship, blog, media
  sections on the homepage (features 3 to 9 extend the homepage).
- Counters or metrics (no real numbers exist; nothing is invented).
- Active-section indicator, page transitions, SEO structured data, sitemap
  (features 11 and 13).
- Career timeline (feature 2).

## Build loop

Build one small step at a time. `workflow.stepReview` is `feature`: implement
and verify each step, then present one review packet after all steps.
`workflow.checkpointCommits` is `disabled`: no checkpoint prompts. `/complete`
makes the final feature commit. Never accept a review packet you have not read;
split any diff that is too large to review.

## Build steps

- [ ] **Step 1 - Design foundation** - swap fonts to DM Serif Display + Inter,
  rewrite `globals.css` tokens to the project palette (light root, `.dark`
  section theme, Tailwind color aliases, display type scale utilities), set
  metadata, add `MotionConfig` provider, add shadcn `Button` and `Sheet`.
  *Done when:* `/` renders on ivory with the serif display font visible,
  `bunx tsc --noEmit` and `bun run lint` pass, `components/ui/button.tsx` and
  `sheet.tsx` exist.
- [ ] **Step 2 - Structured content** - add `types/content.ts` (`Image`,
  `Link`, `NavItem`), `data/professor.ts`, `data/research.ts`,
  `data/navigation.ts`, `data/home.ts` with clearly marked
  `// TODO(content):` placeholders and no invented facts. *Done when:*
  typecheck passes and every string later rendered on the homepage traces to
  a data module.
- [ ] **Step 3 - Motion and editorial primitives** - `Reveal`, `SplitLines`,
  `ParallaxImage`, `Section`, `Eyebrow`, `DisplayHeading`, `SectionHeading`.
  *Done when:* a section using them renders, animations play on scroll in a
  browser, and with reduced motion emulated the content is fully visible
  without transforms.
- [ ] **Step 4 - Navigation** - `SiteHeader` (sticky, transparent over hero,
  border and blur after ~24px scroll) and `MobileMenu` (full-screen Sheet,
  staggered links, close on link click). *Done when:* header stays fixed while
  scrolling, style changes after scroll, menu opens from the button, traps
  focus, closes on Escape and on link selection, and no nested anchors exist.
- [ ] **Step 5 - Hero** - portrait with `next/image` (`priority`, responsive
  `sizes`), eyebrow, role line, four-line display statement via `SplitLines`,
  lead, CTAs, scroll cue, entrance sequence, scroll-linked portrait scale.
  *Done when:* the sequence plays in order on load, the portrait scales
  subtly on scroll on desktop and not on mobile, CTAs reach `#research` and
  `#connect`, and the hero fills the viewport at 1440 and reads cleanly at 390.
- [ ] **Step 6 - Homepage acts and footer** - Statement, Research, Impact,
  Educator, Perspective, Connection sections plus `SiteFooter`, composed in
  `app/page.tsx` as server components with client islands. *Done when:* all
  six acts render from data in order with alternating light/dark/image
  rhythm, each has an `id` matching navigation, hover reveals work in the
  research list, the impact connector draws on scroll, and the footer links
  resolve.
- [ ] **Step 7 - Responsive, accessibility, and verification pass** - check
  390/820/1440 layouts, keyboard path (skip link, header, menu, CTAs), focus
  visibility, alt text, heading order, reduced motion, console cleanliness.
  Run lint, typecheck, and `bun run build`. *Done when:* all three commands
  pass, the dev server shows no console or hydration errors on `/`, and
  screenshots at the three widths show intentional layouts.

## Files / areas

- `app/layout.tsx`, `app/globals.css`, `app/page.tsx`
- `components/ui/button.tsx`, `components/ui/sheet.tsx` (shadcn CLI)
- `components/motion/motion-provider.tsx`, `reveal.tsx`, `split-lines.tsx`,
  `parallax-image.tsx`
- `components/editorial/section.tsx`, `eyebrow.tsx`, `display-heading.tsx`,
  `section-heading.tsx`
- `components/navigation/site-header.tsx`, `mobile-menu.tsx`
- `components/hero/hero.tsx`
- `components/home/statement.tsx`, `research-areas.tsx`, `impact.tsx`,
  `educator.tsx`, `perspective.tsx`, `connection.tsx`
- `components/layout/site-footer.tsx`
- `types/content.ts`, `data/professor.ts`, `data/research.ts`,
  `data/navigation.ts`, `data/home.ts`
- `lib/utils.ts` (existing `cn`)

## Data / contracts

- `Image`: `{ src: string; alt: string; width: number; height: number }`.
  `src` is a `/public`-relative path. Locked for all later features.
- `Link`: `{ label: string; href: string; external?: boolean }`.
- `NavItem`: `Link`. Feature 1 hrefs are `/#<section-id>`; later features
  replace them with routes without changing consumers.
- `Professor`: `name` (string, first name only is available), `fullName`
  (string, placeholder), `title`, `roles` (string[]), `university`,
  `department`, `location`, `shortBio`, `portrait` (Image), `email?`,
  `cvUrl?`, `links` (Link[], may be empty). Optional fields render nothing when
  absent; components never show "TODO" text.
- `ResearchArea`: `title`, `slug` (unique lowercase kebab-case), `description`,
  `tags` (string[]); `longDescription?` and `image?` reserved for feature 3.
- Section ids (stable anchors): `about`, `research`, `impact`, `teaching`,
  `perspective`, `connect`.
- Design tokens (CSS variables in `globals.css`): `--ivory #F7F5F0`,
  `--ink #111315`, `--graphite #555B60`, `--teal #145C63`, `--blue #527C88`,
  `--line #D9D9D4`, `--charcoal #0B1114`, `--warm-white #F4F1EA`,
  `--teal-bright #4FA3A5`, `--cool-gray #B9C4C7`; exposed as Tailwind colors
  via `@theme`. shadcn `--background/--foreground/--primary/...` map onto them
  in `:root` and `.dark`.
- Hero copy: "PHYSICS / that moves / MEDICINE / forward." with the display
  serif; italic lowercase lines contrast the uppercase roman lines.

## Testing

- No test runner is configured; rely on browser evidence plus build.
- Per step: dev server at `http://localhost:3000`, screenshots at 390, 820,
  1440; reduced-motion emulation; keyboard-only pass through header, menu,
  CTAs; console and hydration warnings watched in the dev overlay.
- Final gate: `bun run lint`, `bunx tsc --noEmit`, `bun run build`.

## Notes for the AI

- Server components by default; only the Motion islands and the header scroll
  state are `'use client'`. Never mark `app/page.tsx` or a whole section client.
- Never nest `<a>` inside `Link` or another anchor; `Button` rendering as a
  link must use Base UI `render={<Link href=... />}` or a plain styled `Link`.
- No browser APIs during render. `useScroll`, `useReducedMotion`, and media
  queries run in client components only, with SSR-safe defaults.
- Keep the shadcn `.dark` custom variant; dark sections opt in via the class.
- Copy in `data/home.ts` is editorial placeholder positioning, not attributed
  quotes or factual claims. No degrees, awards, numbers, institutions, or
  student information are asserted anywhere.
- Motion: opacity and transform only; `whileInView` with `once: true`;
  springs or `easeOut` curves around 0.6 to 0.9s; stagger 0.06 to 0.1s.
  Parallax amplitude small (about 6 to 10 percent) and off below `md`.
- Use `next/image` with `fill` inside aspect containers or explicit
  width/height, `sizes` on every responsive image, `priority` only on the hero
  portrait.
- Use `mix-blend-mode: multiply` on the hero portrait so its white background
  disappears into the ivory hero without editing the asset.
- Follow `coding-standards.md` writing rules: no em dashes in generated text;
  use a CSS rule element, not a dash character, as the section index separator.
