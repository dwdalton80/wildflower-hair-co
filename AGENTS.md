# AGENTS.md

## Project Context

This is a static React (Vite + Tailwind) marketing site for Wildflower Hair
Co., hosted on Cloudflare Pages. There is no backend, no database, and no
user authentication. It was originally scaffolded by Base44 and converted off
that platform — see [`docs/HANDOFF.md`](./docs/HANDOFF.md) for the full
conversion record before assuming any Base44-era convention still applies.

Start with `README.md` for local setup, then `docs/ARCHITECTURE.md` for the
code map and `docs/DEPLOYMENT.md` for build/hosting/DNS.

## Key files

- `src/`: frontend application source.
- `src/lib/siteConfig.js`: brand/contact/social config — change values here,
  not inline in components.
- `src/data/`: static data (portfolio gallery, testimonials) that used to be
  fetched from a Base44-hosted database.
- `vite.config.js`: Vite config, including the `@/*` → `src/*` path alias.
- `wrangler.json`, `public/_headers`: Cloudflare Pages config.

## Working notes

- Use `npm run dev` for local development — this is a plain static site, no
  separate backend process to run alongside it.
- Run `npm run lint`, `npm run typecheck`, and `npm run build` before
  finishing code changes.
- New images go in `public/images/`, referenced by absolute path
  (`/images/...`). Don't hotlink external image URLs.
- Don't reintroduce a Base44 SDK/CLI dependency, `@/api/base44Client`-style
  code, or an auth system unless the user explicitly asks for one — all of
  that was deliberately removed as unused scaffolding (`docs/HANDOFF.md` §2).
