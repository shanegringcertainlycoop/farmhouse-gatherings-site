# The Farmhouse at Big Long Lake

Marketing site and private guest guide for The Farmhouse at Big Long Lake — a
family lake house rental in Wolcottville, Indiana.

**Live site**: https://biglongfarmhouse.com

## Stack

- [Vite](https://vitejs.dev) + React 18 + TypeScript
- Tailwind CSS (custom camp-style design tokens in `src/index.css`)
- React Router (`/`, `/about`, `/welcome`, 404)
- Supabase (inquiry form submissions)

## Pages

- `/` — main marketing page (hero, experience, lake, area, details, FAQ, inquiry form)
- `/about` — the Gring family story
- `/welcome` — **private guest guide** (wifi, house rules, checkout, local tips).
  Deliberately unlinked, noindexed, and excluded from `sitemap.xml` — shared with
  guests by direct link only. Keep it out of navigation and the sitemap.

## Development

```sh
npm install
npm run dev        # dev server
npm run build      # production build to dist/
npm run test       # vitest
npm run lint       # eslint
```

Note: `scripts/prerender.mjs` is intentionally stubbed out (prerendering was
removed for deployment stability).
