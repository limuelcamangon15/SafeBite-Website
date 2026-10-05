# AGENTS.md — SafeBite Website

Guidance for AI coding agents working in this repo. Follow these rules on every change.

## Project

Marketing landing site for **SafeBite**, a mobile food-allergen scanner. Static single page (`src/App.tsx`): Navbar → Hero → capability ticker → WhyBuilt (01) → Features (02) → HowItWorks (03) → Community (04) → CTA (05) → Footer.

## Stack

- React 19 + Vite 8 + TypeScript (strict, `noUnusedLocals/Parameters`, `verbatimModuleSyntax` — use `import type`)
- Tailwind CSS v4 (CSS-first; custom tokens via `@theme` in `src/index.css`, e.g. `font-display`)
- Framer Motion (basic springs only), Lucide icons for product UI, `react-icons` for **brand glyphs only**
- npm (`npm run dev` / `npm run build` / `npm run lint` / `npm run preview`)

## Design rules

- iOS-leaning patterns: frosted materials (`bg-white/[0.06] backdrop-blur-xl`), `rounded-[28px]` cards, semibold tight-tracking headlines, 52px CTA targets, spring motion (`stiffness 120 / damping 18` entrances, `400 / 22` taps), Bricolage Grotesque display + Inter body.
- No decorative nonsense UI. Every element must earn its place.
- Official brand marks only when a brand is named: `FaApple` (App Store), `FaGooglePlay` (Google Play), `SiGoogle` (Google ticker), inline official Groq SVG (in `src/App.tsx`). Never substitute generic glyphs.
- App Store is **not shipped**: its button stays a real `<button disabled>` with a frosted "Coming Soon" pill, no motion handlers, no navigation. Google Play is the active store button.
- Mobile-first responsive: stacked full-width CTAs/cards → `sm:`/`md:` grids. All CTAs must be working anchors or real store URLs — no dead buttons.
- Numbered section eyebrows (`01 · …` through `05 · …`); keep numbering coherent when adding/removing sections.

## Accessibility (WCAG AA, non-negotiable)

- Body copy at `text-white/60` or brighter; never use `white/45` or dimmer for readable text.
- `MotionConfig reducedMotion="user"` is set in `src/App.tsx`; keep it. CSS keyframe motion must have a `prefers-reduced-motion` off-switch in `src/index.css`.
- Decorative layers get `aria-hidden`; global `:focus-visible` ring lives in `src/index.css` — don't remove it. Touch targets ≥ 24px (CTAs 52px).

## Workflow

- No code comments unless a line is genuinely non-obvious; one-liners only.
- Don't guess URLs, don't invent stats, testimonials, or integrations. Existing facts: Open Food Facts database, Google Machine Learning, Groq AI, developed by Concurrent.
- After any change run `npx tsc -b` and `npx eslint src/`; run `npm run build` before calling work done.
- Never commit `.opencode/` (gitignored local agent workspace), `node_modules/`, or `dist/`.
