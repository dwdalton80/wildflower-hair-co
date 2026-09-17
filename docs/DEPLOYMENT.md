# Build, Deployment, Hosting & DNS

> Part of the technical handoff package. See also: [`ARCHITECTURE.md`](./ARCHITECTURE.md)
> (code structure) and [`HANDOFF.md`](./HANDOFF.md) (accounts/credentials/conversion
> history).

**Status as of 2026-09-17: done.** The site is deployed on Cloudflare and the
domain's DNS has been cut over from GoDaddy to Cloudflare (nameserver change
was submitted same day — may still be propagating, see §3). This document
records what was actually set up, so it doubles as a runbook if any of it
ever needs to be reproduced (a new Cloudflare account, a disaster-recovery
rebuild, etc.).

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

## 2. Hosting: Cloudflare Workers (static assets), not classic Pages

The site is deployed as a **Workers** project named `wildflower-hair-co`
under the `dwdalton80@gmail.com` Cloudflare account — Cloudflare's newer
unified "Workers & Pages" platform, using a Worker configured to serve static
assets (via `wrangler.json`'s `assets` block) rather than the older, separate
Cloudflare Pages product. This mirrors how `dd-insurance-group` (a prior,
similar migration on this same account) is set up, and is what the "Create
application → Connect to Git" flow in the current dashboard produces by
default — there's no meaningful difference for a static site like this one.

- **Live URLs**: `wildflower-hair-co.dwdalton80.workers.dev` (always works),
  `wildflowerhairco.me` and `www.wildflowerhairco.me` (once DNS finishes
  propagating — see §3).
- **Git integration**: connected to `dwdalton80/wildflower-hair-co` on
  GitHub, production branch `main`. **Every push to `main` auto-builds and
  deploys** — confirmed working live (see the GitHub App note below).
- **Build command**: `npm run build`. **Deploy command**: `npx wrangler
  deploy`. **Root directory**: `/`. No environment variables/build
  variables are set (none are needed — see §5).

`wrangler.json` at the repo root carries the config Cloudflare's build reads
(`assets.directory: "./dist"`, `not_found_handling:
"single-page-application"` — this last part is what makes client-side routes
like `/about` and `/contact` work: an unmatched path falls back to
`index.html` so `react-router-dom` can render the right page client-side).

### ⚠️ Known issue hit during setup: GitHub App repository access

Right after creating the Workers project, the dashboard showed **"This
project is disconnected from your Git account. This may cause deployments to
fail"** under Settings → Builds, and a push to `main` silently did not
trigger a build. Root cause: the **Cloudflare Workers and Pages** GitHub App
(installed on the `dwdalton80` GitHub account) was scoped to "Only select
repositories" and only had access to `dd-insurance-group` — the new
`wildflower-hair-co` repo was never added to its repository access list, even
though the Cloudflare project-creation wizard let you pick it (the wizard's
repo picker and the GitHub App's actual access grant are two different
things).

**Fix**: on GitHub, go to
[github.com/settings/installations](https://github.com/settings/installations)
→ **Cloudflare Workers and Pages** → **Configure** → **Repository access** →
add `wildflower-hair-co` to the selected-repositories list → **Save**.
GitHub redirects back to Cloudflare, and the "disconnected" warning clears
within a few seconds. **If you ever add another repo to this Cloudflare
account's Git integration and its pushes don't trigger builds, check this
first** — it's a one-time-per-repo grant, not something that happens
automatically just because you connected a repo through the Cloudflare
wizard.

### Security headers

[`public/_headers`](../public/_headers) sets response headers (CSP,
`X-Frame-Options`, `Strict-Transport-Security`, `Referrer-Policy`,
`Permissions-Policy`, `X-Content-Type-Options`) via [Cloudflare's `_headers`
convention](https://developers.cloudflare.com/pages/configuration/headers/).
It's copied into `dist/` on every build since it lives in `public/`. The CSP
is scoped to exactly what this site loads: itself, Google Fonts, self-hosted
images, and (see below) GlossGenius' service photos. **If you add a new
external script/font/image/API host anywhere in the app, update the
`Content-Security-Policy` line too**, or the browser will silently block
that resource in production (dev mode doesn't enforce CSP; only the deployed
Worker does, since `_headers` is a Cloudflare-specific convention with no
local equivalent). Re-check with
[securityheaders.com](https://securityheaders.com/?q=wildflowerhairco.me)
after any change here.

**One CSP gap found and fixed during the initial deploy**: the first
`_headers` had `img-src 'self' data:` only, which silently blocked all 15
service-card images in `Services.jsx` — they're hotlinked from
`static.glossgenius.com`, which local `npm run preview` never surfaces
(CSP is only enforced by the deployed `_headers` file, not by Vite). Caught
by loading the live `*.workers.dev` URL and checking the browser console for
CSP violation errors after the first deploy — **do this after any future
`_headers` change**, don't assume `npm run build` passing means CSP is
correct.

## 3. Domain & DNS: moved from GoDaddy to Cloudflare

State **before** this migration (verified via public DNS lookups,
2026-09-17):

| Record | Value | Meaning |
|---|---|---|
| Registrar | GoDaddy.com, LLC | `wildflowerhairco.me` registered 2026-02-23, expires **2027-02-23**. Migrating DNS does **not** change the registrar — GoDaddy is still where the domain itself is registered/renewed. |
| Nameservers | `ns65.domaincontrol.com`, `ns66.domaincontrol.com` | GoDaddy's own DNS. |
| A (root) | `216.24.57.1` | Base44's hosting. |
| `www` | CNAME → `base44.onrender.com` | Base44's app, hosted on Render. |
| MX | *(none)* | No mail configured for this domain — moving DNS carried no email risk. |
| TXT | *(none)* at the root — but see the `_dmarc` finding in `HANDOFF.md` §4 | A `_dmarc` TXT record exists despite no MX; kept as-is, unrelated to this migration. |

**What was done, in order:**

1. **Added `wildflowerhairco.me` as a zone** in Cloudflare (Free plan) via
   **Domains → Add domain → Connect a domain**. Cloudflare's automatic scan
   imported the pre-existing `A` (root → `216.24.57.1`), `www` CNAME (→
   `base44.onrender.com`), a `_domainconnect` CNAME (a GoDaddy one-click-app
   feature, unrelated to hosting — left alone), and the `_dmarc` TXT record.
2. **Changed nameservers at GoDaddy** (My Products → wildflowerhairco.me →
   DNS → Nameservers → **I'll use my own nameservers**) from
   `ns65`/`ns66.domaincontrol.com` to the two Cloudflare-assigned nameservers
   Cloudflare's zone-setup page displayed. GoDaddy's confirmation dialog
   warns changing nameservers "could potentially lead to your website
   disappearing from public view" — expected and fine here, since the new
   Worker deployment (§2) was already live and verified at its
   `*.workers.dev` URL before this step.
3. **Deleted the stale `A` and `www` CNAME records** in the Cloudflare DNS
   records UI (both pointed at Base44/Render) — this was **required**:
   Cloudflare refuses to bind a Worker custom domain to a hostname that
   already has an externally-managed A/CNAME record at that exact name.
   Left `_domainconnect` and `_dmarc` alone (unrelated to hosting).
4. **Bound both `wildflowerhairco.me` and `www.wildflowerhairco.me`** to the
   `wildflower-hair-co` Worker (Worker → Domains → Add Domain, once as the
   root domain with no subdomain, once with subdomain `www`). This is what
   actually creates the new DNS routing to the Worker — Cloudflare manages
   these records itself once a custom domain is added; there's nothing to
   hand-edit in DNS records for either hostname going forward.
5. **SSL/TLS → Edge Certificates → Always Use HTTPS**: turned **on**.
6. **Rules → Redirect Rules**: deployed the built-in **"Redirect from WWW to
   root"** template as-is — matches `https://www.*`, redirects (301, query
   string preserved) to `https://${1}`. The deploy dialog warned "Your DNS
   configuration may not be proxying traffic for www" — this is a **known
   false positive** for this setup (`www` is a Worker custom-domain binding,
   not a plain proxied CNAME, which the dialog's heuristic doesn't
   recognize — the exact same false positive documented in the
   `dd-insurance-group` migration on this account). Deployed anyway
   ("Ignore and deploy rule anyway").
   - This matches `index.html`'s
     `<link rel="canonical" href="https://wildflowerhairco.me/">` and the
     sitemap, which both treat the bare apex domain as canonical.

**Verify** (nameserver propagation can take anywhere from a few minutes to
24-48 hours — GoDaddy's own warning; re-run these until they pass):
```bash
dig +short NS wildflowerhairco.me                # should show *.ns.cloudflare.com, not *.domaincontrol.com
curl -sI http://wildflowerhairco.me/              # → 301 → https://wildflowerhairco.me/
curl -sI https://www.wildflowerhairco.me/         # → 301 → https://wildflowerhairco.me/
```
Then load the site in a browser and confirm: images and fonts load with no
console errors (check for CSP violations specifically), and a **direct**
load of `/about` and `/contact` (not just in-app navigation) both render —
that's `not_found_handling: "single-page-application"` in `wrangler.json`
doing its job.

**Decommission Base44**: once the above is confirmed, cancel/downgrade the
Base44 project so its subscription isn't paid for indefinitely — it no
longer serves any live traffic once DNS finishes cutting over, but the
account itself doesn't cancel on its own. See `HANDOFF.md` §3 for what
Base44 was providing (nothing, anymore) and §5 for the full migration
checklist.

## 4. Environment variables & secrets

**None are required.** There is no `.env` file, and a repo-wide search for
`import.meta.env` turns up nothing. The old Base44 setup used
`VITE_BASE44_APP_ID` / `VITE_BASE44_APP_BASE_URL` for local frontend-only dev
against the hosted Base44 backend — those are gone along with the Base44 SDK
itself (see `HANDOFF.md` §2). No build variables were configured on the
Cloudflare Workers project either.

## 5. Access inventory for this deployment

- **Cloudflare account**: `dwdalton80@gmail.com` — same account already
  hosting `ddinsgroup.com`/`dd-insurance-group`. This is where DNS,
  the Worker, SSL, and redirect rules all live now.
- **GitHub**: `dwdalton80/wildflower-hair-co`, with the **Cloudflare
  Workers and Pages** GitHub App granted access (see the §2 note above if
  this ever needs re-granting for a repo).
- **GoDaddy**: still the domain registrar (renewal/ownership), no longer
  the DNS host. Nameservers point to Cloudflare.
