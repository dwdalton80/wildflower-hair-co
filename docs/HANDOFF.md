# Technical Handoff & Base44→Cloudflare Conversion Record

Read alongside [`ARCHITECTURE.md`](./ARCHITECTURE.md) (what's built) and
[`DEPLOYMENT.md`](./DEPLOYMENT.md) (build/hosting/DNS runbook — **the actual
steps to go live**).

**Last verified:** 2026-09-17. The Base44→Cloudflare conversion, the
Cloudflare Workers deployment, and the DNS cutover from GoDaddy to Cloudflare
were all completed this same day — see `DEPLOYMENT.md` for the full record.
Nameserver propagation may still be finishing at the moment this was written.

---

## 1. Executive summary

This site was originally built and hosted on **Base44** (an AI app builder
with a hosted backend). It has been converted to a **static React site with no
backend, no database, and no user authentication**, and is now live on
**Cloudflare** (Workers, static assets — see `DEPLOYMENT.md` §2) at
`wildflowerhairco.me`. The two dynamic sections that used to read from a
Base44-hosted database (the portfolio gallery and a testimonials section) now
read from plain local data files instead — see §2 below.

This is good news for portability going forward: the entire "product" is now
the Git repository plus Cloudflare hosting/DNS plus a couple of third-party
links (GlossGenius booking, social profiles). There's no data to migrate off
a database and no server to re-provision.

## 2. What the conversion changed

The app was scaffolded by Base44 with its full authentication system
(login/register/password-reset/OAuth pages, an `AuthContext`, a
`ProtectedRoute` wrapper) even though **none of it was ever wired up** — the
router in `App.jsx` only ever routed to Home/About/Contact. All of the
following were deleted as dead code:

- `src/api/base44Client.js`, `src/lib/app-params.js`, `src/lib/AuthContext.jsx`
- `src/components/AuthLayout.jsx`, `ProtectedRoute.jsx`,
  `UserNotRegisteredError.jsx`, `GoogleIcon.jsx`
- `src/pages/Login.jsx`, `Register.jsx`, `ForgotPassword.jsx`,
  `ResetPassword.jsx`, `OAuthConsent.jsx`
- The `base44/` directory (CLI config + entity schema files)
- The `@base44/sdk` and `@base44/vite-plugin` npm packages

`App.jsx` was simplified to render routes directly, with no auth-loading
spinner or auth-error branching (there was never anything for it to branch
on).

### Images

The site used to hotlink every image straight from `media.base44.com`. Once
the Base44 subscription is cancelled, those URLs would very likely go dead
and every image on the site would break. All of them — the logo, hero photo,
about photo, the seasonal promo flyer, and all 6 portfolio gallery photos —
were downloaded and are now self-hosted in `public/images/`. Nothing on the
live site references `media.base44.com` anymore.

### Portfolio & Testimonials (the two Base44 "entities")

- **`PortfolioImage`** was a Base44 database entity, fetched at runtime
  (`base44.entities.PortfolioImage.list("display_order", 50)`). Its 6 live
  records (captions, ordering, crop-position hints) were pulled via the
  live site's API and hardcoded into `src/data/portfolioImages.js`, with
  `Portfolio.jsx` updated to import that instead of calling Base44.
- **`Testimonial`** was the same pattern, but the section was already
  disabled (commented out in `Home.jsx`) with zero records ever published.
  `src/data/testimonials.js` exports an empty array;
  `Testimonials.jsx` still works standalone if re-enabled later (see
  `ARCHITECTURE.md` §4).

**If you ever want either section to be editable by Kyia without a code
change/redeploy** (e.g. she wants to add a new portfolio photo herself), that
would mean reintroducing *some* kind of backend or headless CMS — that's a
real, separate decision to make later, not something this conversion
attempted to solve. As it stands, the person who can push to this repo is the
one who updates the gallery.

### Dependency cleanup

The original Base44 scaffold included a large, mostly-unused shadcn/ui
component library and matching npm packages (Stripe, PDF/canvas export,
rich-text editing, maps, charts, drag-and-drop, date pickers, etc.) — none of
it was imported by any actual page or component. Confirmed via a repo-wide
usage grep and pruned:

- **~35 unused shadcn/ui primitive files** deleted from `src/components/ui/`
  (kept: `button`, `input`, `label`, and the toast system, which are actually
  used).
- **package.json dependencies dropped from 58 to 12** (plus devDependencies
  trimmed). `npm install` now pulls ~350 packages instead of the original
  much larger tree.
- Verified with a clean install, `npm run build`, `npm run lint`, `npm run
  typecheck`, and a local `npm run preview` walkthrough of `/`, `/about`, and
  `/contact` after every change above — all pass, all three routes render
  correctly including the portfolio gallery images.

### Vite config

`@base44/vite-plugin` provided the `@/*` → `src/*` path alias, dev-time HMR
notifications, and a few Base44-specific dev tools (visual editor bridge,
analytics tracker). Removing it broke the `@/*` alias at build time (it
worked in dev because `jsconfig.json` covers the editor, but Vite/Rollup
itself needs its own `resolve.alias`) — fixed in `vite.config.js` by adding
that alias directly. Nothing else the plugin provided was in use outside the
Base44 dev environment.

## 3. External accounts inventory (post-conversion)

| # | Service | What it's used for | Where referenced | Who needs access |
|---|---|---|---|---|
| 1 | **GoDaddy** | Domain registrar for `wildflowerhairco.me` (expires **2027-02-23**). No longer the DNS host — see #2. | — (registrar only, not code) | Whoever manages the domain/renewal |
| 2 | **Cloudflare** | Authoritative DNS **and** hosting (Workers, static assets), account `dwdalton80@gmail.com` — same account as `ddinsgroup.com`/`dd-insurance-group` | `wrangler.json` | Hosting owner |
| 3 | **GitHub** | Source control; the **Cloudflare Workers and Pages** GitHub App triggers auto-deploys on push to `main` | Whole repo (`dwdalton80/wildflower-hair-co`) | Dev/owner |
| 4 | **GlossGenius** | All booking happens here — every "Book Now" CTA opens this in a new tab | `src/lib/siteConfig.js` → `bookingUrl` | Kyia (this is her actual booking/calendar/payments system) |
| 5 | **Facebook / Instagram** | Social links in footer/contact | `src/lib/siteConfig.js` | Kyia |
| 6 | **Google Fonts** | Cormorant Garamond, Instrument Sans, Montserrat, Allura | `index.html` | None — free, no account |
| 7 | **Base44** | *(retired)* Previously hosting + backend. Safe to cancel now that the Cloudflare site is live — see `DEPLOYMENT.md` §3. | — | Whoever holds the Base44 account, to cancel it |

## 4. Known issue found during this audit: `hello@wildflowerhairco.com` may not actually receive mail

`siteConfig.js` lists the contact email as `hello@wildflowerhairco.com` — note
this is the **`.com`** domain, a *different* domain from the site itself
(`wildflowerhairco.me`), registered separately (Squarespace Domains, not
GoDaddy). A DNS check on `wildflowerhairco.com` on 2026-09-17 found **no MX
record at all** — meaning, as far as public DNS shows, nothing is currently
configured to receive mail for that domain. If that address is actively used
for client inquiries, it's worth confirming with whoever manages
`wildflowerhairco.com` that mail actually arrives (a mailbox could exist
behind a provider that doesn't show in a plain MX lookup in some edge setups,
but the far more common explanation for "no MX record" is "no mail service
configured"). This is unrelated to the Base44/Cloudflare conversion and isn't
something fixable from this repo — flagging it here because it surfaced
during the DNS research for `DEPLOYMENT.md` and is easy to miss otherwise.

## 5. Migration/go-live checklist

- [x] Push this repo to `main` on `dwdalton80/wildflower-hair-co`.
- [x] Create the Cloudflare Workers project per `DEPLOYMENT.md` §2 — confirmed
      live at `wildflower-hair-co.dwdalton80.workers.dev`.
- [x] Add `wildflowerhairco.me` to Cloudflare and switch nameservers at
      GoDaddy per `DEPLOYMENT.md` §3.
- [x] Bind the custom domain (apex + `www`) to the Worker and set up the
      `www`→apex redirect + Always Use HTTPS (`DEPLOYMENT.md` §3).
- [ ] **Verify live once nameservers finish propagating**: `dig +short NS
      wildflowerhairco.me` shows Cloudflare's nameservers, both `/about` and
      `/contact` load correctly via a direct URL (not just in-app
      navigation), images load, fonts load, no CSP console errors. See
      `DEPLOYMENT.md` §3's verify commands.
- [ ] Once confirmed, cancel/downgrade the Base44 account (`DEPLOYMENT.md`
      §3).
- [ ] Separately: look into the `hello@wildflowerhairco.com` mail question
      above (§4) — not blocking for the Cloudflare migration itself.

## 6. Conventions for maintaining this project going forward

- **Brand/contact/config values** live in `src/lib/siteConfig.js`. Change a
  value once, it propagates everywhere it's used.
- **Portfolio photos**: add the image file to `public/images/`, add an entry
  to `src/data/portfolioImages.js`. No code change needed beyond that.
- **New pages** go in `src/pages/`, get wired into the route table in
  `App.jsx`.
- **New reusable UI** goes in `src/components/`; generic/design-system pieces
  follow the existing shadcn/ui pattern in `src/components/ui/` — use `npx
  shadcn@latest add <component>` rather than hand-rolling primitives, to stay
  consistent with `components.json`.
- **Images**: put new images in `public/images/`, reference by absolute path
  (`/images/...`). Don't hotlink external image URLs — see the whole reason
  this conversion had to do that cleanup in the first place (§2).
- **Before deploying a change**: run `npm run lint`, `npm run typecheck`, and
  `npm run build` locally to catch errors before they hit Cloudflare's build.
- **The Fall Special promo** (`FallSpecialSlide.jsx`) is seasonal, hardcoded
  copy — remember to update or remove it once the promotion period ends (see
  `ARCHITECTURE.md` §6).
