# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npm run lint` — ESLint over all `.js`/`.jsx`

No test setup exists. No TypeScript (plain JSX).

## Architecture

Single-page personal portfolio. React 19 + Vite 8 + Tailwind CSS v4, deployed on Vercel.

- **`src/main.jsx`** — entry. Mounts `<App>` in StrictMode and calls `@vercel/analytics` `inject()`.
- **`src/App.jsx`** — composes the whole page as a fixed vertical stack of section components: `Navbar → Hero → About → Skills → Projects → Contact`. There is no router; sections are anchored by `id` and linked via in-page hash navigation.
- **`src/components/*.jsx`** — one component per page section. Self-contained: inline SVG icons defined at top of file, Tailwind utility classes for all styling, no shared UI library.

### Key conventions

- **`src/config.js` is the single source of truth** for personal info, social links, resume path, and the Formspree form ID. Components import `{ profile }` / `{ tagline }` from it — edit content here, not in component JSX. The resume PDF is served from `public/resume.pdf` (path `/resume.pdf` in config).
- **Scroll-reveal animation** is a shared pattern: `useReveal()` (`src/hooks/useReveal.js`) returns a ref backed by an `IntersectionObserver` that adds `.is-visible` when the element enters view. Attach the ref to an element that also has the `.reveal` or `.reveal-stagger` class. Those classes (and other custom effects: `.dot-grid`, `.gradient-text`, `.card-hover`, glow/marquee keyframes) live in `src/index.css`, which also imports Tailwind via `@import "tailwindcss"`.
- **Tailwind v4** has no `tailwind.config.js`; it's wired through the `@tailwindcss/vite` plugin in `vite.config.js`. Theme is dark (zinc-950 base, violet-500 accent).
- **Contact form** (`Contact.jsx`) POSTs to Formspree when `profile.formspreeId` is set, otherwise falls back to opening a `mailto:` link. Status is tracked via local `idle | sending | success | error` state.

### SEO

`index.html` carries hand-maintained meta tags (Open Graph, Twitter, JSON-LD Person schema) with the deployed Vercel URL and the same identity as `config.js`. When changing name/title/links, update **both** `config.js` and `index.html`.
