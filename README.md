# SafeBite — Eat Safe. Live Better.

Marketing website for **SafeBite**, a mobile food-allergen scanner. Scan food instantly, detect allergens, and make smarter choices — backed by community reports and machine intelligence.

## Sections

Single-page site (`src/App.tsx`): Navbar → Hero → capability ticker → Why we built this (01) → Features (02) → How it works (03) → Community (04) → Download CTA (05) → Footer.

- iOS app status: **coming soon** (App Store button is intentionally disabled)
- Android: Google Play button in the CTA section

## Stack

| Layer    | Choice                                                        |
| -------- | ------------------------------------------------------------- |
| UI       | React 19 + TypeScript (strict)                                |
| Build    | Vite 8                                                        |
| Styling  | Tailwind CSS v4 (CSS-first, custom `font-display` theme token)|
| Motion   | Framer Motion (basic springs, reduced-motion aware)           |
| Icons    | Lucide (product UI) + react-icons (official brand marks only) |
| Type     | Bricolage Grotesque (display) + Inter (body), via Google Fonts|

## Getting started

```bash
npm install
npm run dev
```

| Script          | What it does              |
| --------------- | ------------------------- |
| `npm run dev`   | Start the dev server      |
| `npm run build` | Type-check + production build (`dist/`) |
| `npm run lint`  | Run ESLint                |
| `npm run preview` | Preview the production build |

## Project structure

```
index.html                  Title, favicon, fonts, SEO/OG meta
public/safebite-icon.png    Official logo (favicon + apple-touch-icon)
src/App.tsx                 Page composition, capability ticker, MotionConfig
src/components/            Navbar, Hero, WhyBuilt, Features,
                           HowItWorks, Community, CTA, Footer
src/index.css               Tailwind import, theme, grain, marquee,
                           focus ring, reduced-motion rules
AGENTS.md                   Working conventions for AI coding agents
```

## Powered by

- [Open Food Facts](https://world.openfoodfacts.org/) — open food product database
- Google Machine Learning — ingredient and allergen intelligence
- [Groq AI](https://groq.com/) — real-time reasoning at scan speed

Developed by **Concurrent**. © SafeBite. All rights reserved.
