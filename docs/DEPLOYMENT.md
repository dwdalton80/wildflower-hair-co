# Build, Deployment, Hosting & DNS

> Part of the technical handoff package. See also: [`ARCHITECTURE.md`](./ARCHITECTURE.md)
> (code structure) and [`HANDOFF.md`](./HANDOFF.md) (accounts/credentials/conversion
> history).

This document walks through everything needed to take this repo from "code on
GitHub" to "live on Cloudflare Pages at wildflowerhairco.me" — starting from
the state as of **2026-09-17**: the site is still live on Base44's hosting
(Render), and the domain's DNS is still at GoDaddy, not Cloudflare. **None of
the steps below can be done from this session** — they need your logins to
Cloudflare and GoDaddy. This is the exact runbook to follow.

## 1. Local development

Requirements: Node.js 20+ and npm.

```bash
npm install        # install dependencies
npm run dev          # start Vite dev server, hot reload
npm run build           # production build → dist/
npm run preview           # serve the dist/ build locally to sanity-check before deploy
npm run lint                # eslint
npm run typecheck             # tsc --noEmit (jsconfig-driven)
```

The build is fully static: `vite build` outputs plain HTML/CSS/JS/images to
`dist/`. Nothing else runs — no server bundle, no functions, no database.

## 2. Create the Cloudflare Pages project

1. Sign in (or create an account) at [dash.cloudflare.com](https://dash.cloudflare.com).
2. **Workers & Pages → Create → Pages → Connect to Git**, and authorize/select
   the `dwdalton80/wildflower-hair-co` GitHub repository.
3. Build settings:
   - **Framework preset**: Vite (or None — the settings below are what
     actually matter)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (repo root)
4. Deploy. Cloudflare will build and give you a `*.pages.dev` preview URL —
   confirm the site loads correctly there **before** touching DNS in step 4.

`wrangler.json` at the repo root already carries the equivalent config
(`assets.directory: "./dist"`, `not_found_handling:
"single-page-application"` — this last part is what makes client-side routes
like `/about` and `/contact` work: an unmatched path falls back to
`index.html` so `react-router-dom` can render the right page). You don't need
to run `wrangler` manually for the Git-connected setup above; it's there for
reference and for `wrangler pages deploy dist` if you ever want to deploy
manually/from CI instead.

### Security headers

[`public/_headers`](../public/_headers) sets response headers (CSP,
`X-Frame-Options`, `Strict-Transport-Security`, `Referrer-Policy`,
`Permissions-Policy`, `X-Content-Type-Options`) via [Cloudflare Pages' `_headers`
convention](https://developers.cloudflare.com/pages/configuration/headers/).
It's copied into `dist/` on every build since it lives in `public/`. The CSP
is scoped to exactly what this site loads: itself, Google Fonts, and
self-hosted images. **If you add a new external script/font/image/API host
anywhere in the app, update the `Content-Security-Policy` line too**, or the
browser will silently block that resource in production (dev mode doesn't
enforce CSP). Re-check with [securityheaders.com](https://securityheaders.com/?q=wildflowerhairco.me)
after deploying.

## 3. Move the domain's DNS to Cloudflare

Verified via public DNS lookups (2026-09-17), **before** any migration:

| Record | Value | Meaning |
|---|---|---|
| Registrar | GoDaddy.com, LLC | `wildflowerhairco.me` registered 2026-02-23, expires **2027-02-23**. |
| Nameservers | `ns65.domaincontrol.com`, `ns66.domaincontrol.com` | Still GoDaddy's own DNS — **not yet delegated to Cloudflare**. |
| A (root) | `216.24.57.1` | Points at Base44's hosting. |
| `www` | CNAME → `base44.onrender.com` | Base44's app is hosted on Render. |
| MX | *(none)* | No mail is configured for this domain. Nothing to preserve — moving DNS carries no email risk (contrast with a domain that has Microsoft 365/Google Workspace mail on it, where you'd need to copy MX/SPF/DKIM/DMARC records before switching nameservers). |
| TXT | *(none)* | No site-verification or SPF/DMARC records to carry over either. |

Because there's no mail and no other services on this domain today, the
cutover is simpler than a typical migration — there's really only the website
to move.

**Step 1 — Add the site to Cloudflare.**
In the Cloudflare dashboard: **Add a Site** → enter `wildflowerhairco.me` →
pick a plan (Free is enough) → let Cloudflare scan existing DNS records. It
will likely find the current `A` and `www` `CNAME` records above — you can
leave those as-is for now; they'll be replaced by the Pages custom-domain
binding in Step 3.

**Step 2 — Change nameservers at GoDaddy.**
Cloudflare will give you two nameservers (e.g. `xxx.ns.cloudflare.com`,
`yyy.ns.cloudflare.com` — specific to your zone). In GoDaddy: **My Products →
wildflowerhairco.me → DNS → Nameservers → Change** → enter Cloudflare's two
nameservers, replacing `ns65`/`ns66.domaincontrol.com`. Propagation is
typically under an hour but can take up to 24-48 hours; Cloudflare emails you
once the zone is active.

**Step 3 — Bind the domain to the Pages project.**
Once the zone shows **Active** in Cloudflare: go to your Pages project →
**Custom domains → Set up a custom domain** → add `wildflowerhairco.me`.
Repeat for `www.wildflowerhairco.me` (or add it as a redirect — see Step 4).
This replaces the old A/CNAME records pointing at Base44/Render with
Cloudflare's own routing to your Pages deployment.

**Step 4 — HTTPS and www→apex redirect (recommended).**
To avoid the same "duplicate content across http/https and www/apex" search-indexing
problem documented in a prior migration on a different project:
- **SSL/TLS → Edge Certificates → Always Use HTTPS**: turn **on**.
- **Rules → Redirect Rules**: add a rule (Cloudflare has a built-in "Redirect
  from WWW to root" template) matching `https://www.wildflowerhairco.me/*` →
  redirect (301, preserve query string) to `https://wildflowerhairco.me/${1}`.
- This matches `index.html`'s `<link rel="canonical" href="https://wildflowerhairco.me/">`
  and the sitemap, which both treat the bare apex domain as canonical.

**Step 5 — Verify.**
```bash
dig +short NS wildflowerhairco.me                # should show *.ns.cloudflare.com
curl -sI http://wildflowerhairco.me/              # → 301 → https://wildflowerhairco.me/
curl -sI https://www.wildflowerhairco.me/         # → 301 → https://wildflowerhairco.me/
```
And load the site in a browser to confirm images, fonts, and both `/about`
and `/contact` routes work (a direct load of `/about`, not just clicking to it
from `/` — that's the case `not_found_handling:
"single-page-application"` in `wrangler.json` needs to handle correctly).

**Step 6 — Decommission Base44.** Once the new site is confirmed live and
correct at `wildflowerhairco.me`, cancel/downgrade the Base44 project so it
stops serving traffic (it no longer will, once DNS points elsewhere, but the
account/subscription itself is separate from DNS). See `HANDOFF.md` for what
Base44 was providing and why none of it is needed anymore.

## 4. How deploys are triggered

This repo has no `.github/workflows/` directory or other CI config, so once
Cloudflare Pages' Git integration (§2) is connected, every push to `main`
auto-builds and deploys — no manual step. Confirm this is actually configured
as expected in the Pages project's **Settings → Builds & deployments** after
the first deploy.

## 5. Environment variables & secrets

**None are required.** There is no `.env` file, and a repo-wide search for
`import.meta.env` turns up nothing. The old Base44 setup used
`VITE_BASE44_APP_ID` / `VITE_BASE44_APP_BASE_URL` for local frontend-only dev
against the hosted Base44 backend — those are gone along with the Base44 SDK
itself (see `HANDOFF.md` §3). If Cloudflare Pages' project settings ever had
Base44-related environment variables configured from a prior attempt, they're
now inert and safe to remove.

## 6. Action items — things only you can verify/do

None of the following are visible from the repo:

1. **Cloudflare account** — create one if you don't already have one; this is
   also where DNS will live going forward (§3).
2. **GitHub access** — confirm the Cloudflare Pages Git integration has access
   to `dwdalton80/wildflower-hair-co`.
3. **GoDaddy access** — needed to change nameservers (§3, Step 2). Confirm you
   still have login access to the GoDaddy account that registered
   `wildflowerhairco.me`.
4. **Base44 account** — needed to eventually cancel/downgrade once the
   Cloudflare site is confirmed working (§3, Step 6), so the two hosting
   platforms aren't both being paid for indefinitely.
5. **Custom domain binding** — confirm both `wildflowerhairco.me` and
   `www.wildflowerhairco.me` end up bound to the Pages project, not just
   generically pointed at Cloudflare.
