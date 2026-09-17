# Wildflower Hair Co.

Marketing and booking-hub website for Wildflower Hair Co. — Kyia, a
hairstylist based in Durant, Oklahoma, operating inside Hair Designs by
Charlotte.

**Live site:** [wildflowerhairco.me](https://wildflowerhairco.me)

This is a static React site (Vite + Tailwind CSS), intended for hosting on
Cloudflare Pages. There is no backend server, no database, and no user
authentication — booking happens off-site through
[GlossGenius](https://kyiadalton.glossgenius.com/services).

This repo was converted from a **Base44** app (Base44 SDK + hosted backend on
Render) to a plain static site. See [`docs/HANDOFF.md`](./docs/HANDOFF.md) for
the full record of what changed and why.

## Documentation

- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** — what's built, tech
  stack, repository structure, routes, data flow.
- **[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)** — local dev, build,
  Cloudflare Pages hosting, and the DNS cutover from the current GoDaddy/Base44
  setup. **Start here to actually put the site live.**
- **[docs/HANDOFF.md](./docs/HANDOFF.md)** — technical handoff: every external
  account this site depends on, what the Base44→static conversion changed,
  known limitations, and conventions for future development.

## Quick start

```bash
npm install
npm run dev         # local dev server with hot reload
npm run build         # production build → dist/
npm run preview        # serve the production build locally
npm run lint             # eslint
npm run typecheck          # tsc --noEmit (jsconfig-driven JS type checking)
```

No environment variables or `.env` file are required to run this locally.

## Where things live

- **Brand/contact info**: [`src/lib/siteConfig.js`](./src/lib/siteConfig.js) —
  stylist name, tagline, booking URL, salon address/phone, social links.
  Change values here, not scattered throughout components.
- **Portfolio gallery data**: [`src/data/portfolioImages.js`](./src/data/portfolioImages.js)
  — static replacement for what used to be a Base44 database entity.
- **Pages**: [`src/pages/`](./src/pages/), routed in [`src/App.jsx`](./src/App.jsx).
- **Homepage sections** (hero, services, portfolio, about, contact, footer):
  [`src/components/wildflower/`](./src/components/wildflower/).
- **Images**: [`public/images/`](./public/images/).
