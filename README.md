# Ruth Andiswa Sitinga — Portfolio

Next.js 14 (App Router) + TypeScript. No Tailwind — a hand-written design system in
`app/globals.css` so the palette and type stay exactly as designed.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — the portfolio home page
- `app/layout.tsx` — root layout, loads Fredoka / Work Sans / IBM Plex Mono via `next/font`
- `app/globals.css` — design tokens (colors, spacing, type) and all component styles
- `components/LivingPanel.tsx` — the interactive cursor-reactive canvas (the site's signature element)
- `components/Nav.tsx` — sticky nav with scroll shadow
- `app/work/[slug]/page.tsx` — one route per brand case study (`saas`, `fashion`, `food`,
  `wellness`), currently placeholders. These will become the four fictional-brand
  landing pages.

## Swapping in real projects

Edit the `PROJECTS` array in `app/page.tsx` — update `title`, `desc`, and link each card
to a real case study once you have one.

## Deploying to GitHub Pages

This project is already configured for a static export (`output: "export"` in
`next.config.mjs`) and includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds and deploys automatically on every push to
`main`.

1. Push this project to your `username.github.io` repository (replacing the old
   HTML/CSS/JS files).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds the site and deploys it. Check the **Actions**
   tab for progress.

If you'd rather deploy manually instead of using the workflow:

```bash
npm run build      # outputs static files to ./out
```

Copy everything inside `out/` (including the hidden `.nojekyll` file) into the root of
your `username.github.io` repo, commit, and push to `main`.

**If this is a project repo instead** (e.g. `username.github.io/portfolio` rather than
the root `username.github.io` page), add a `basePath` to `next.config.mjs`:

```js
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/portfolio",
};
```

## Design tokens

```
--canvas:  #F5F3FF   background
--ink:     #1B1730   primary text
--ink-soft:#5B5474   secondary text
--zest:    #FF5A36   accent — orange-red
--bloom:   #FF3D8A   accent — magenta
--violet:  #7B5CFA   accent — violet
--mint:    #1FAE7A   accent — green
```
