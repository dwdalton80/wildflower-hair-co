# Architecture

> Part of the technical handoff package. See also: [`DEPLOYMENT.md`](./DEPLOYMENT.md)
> (build/hosting/DNS) and [`HANDOFF.md`](./HANDOFF.md) (accounts/credentials/
> conversion history).

## 1. Tech stack

- **React 18** + **Vite 6** (JS, not TypeScript — `jsconfig.json` gives editor
  type-checking via JSDoc/inference, but there's no `.ts`/`.tsx`).
- **Tailwind CSS 3** with a small custom palette (`silk`, `umber`, `terra`,
  `peony`, `moss` — see `tailwind.config.js`) and Google Fonts (Cormorant
  Garamond, Instrument Sans, Montserrat, Allura), loaded in `index.html`.
- **react-router-dom v6** for routing (`BrowserRouter`).
- **framer-motion** for scroll/hover animation throughout.
- **@tanstack/react-query** — installed and wired up in `App.jsx`
  (`QueryClientProvider`), but nothing in the app currently calls
  `useQuery`/`useMutation`. Harmless standing infrastructure, not dead code to
  delete — kept in case a future feature needs client-side data fetching.
- A handful of **shadcn/ui** primitives (`src/components/ui/`) — only
  `button`, `input`, `label`, and the toast system (`toast`, `toaster`,
  `use-toast`) are actually used anywhere. The rest of the original
  kitchen-sink shadcn scaffold (accordion, dialog, carousel, calendar, chart,
  sidebar, ~35 components total) was deleted as part of the Base44 conversion
  — see `HANDOFF.md` §3.

## 2. Repository structure

```
src/
  App.jsx                 — router setup, top-level providers
  main.jsx                — React root
  index.css               — Tailwind + CSS custom properties (fonts, radius)
  data/
    portfolioImages.js    — static gallery data (was a Base44 entity)
    testimonials.js       — static reviews data (was a Base44 entity; currently empty/unused)
  lib/
    siteConfig.js          — brand name, tagline, booking URL, contact info, social links
    smoothScroll.js         — anchor-link scroll helper used by the in-page nav
    query-client.js          — react-query client instance
    PageNotFound.jsx          — 404 page
    utils.js                   — `cn()` class-merge helper (shadcn convention)
  hooks/
    use-mobile.jsx, use-size.jsx
  components/
    ScrollToTop.jsx          — resets scroll position on route change
    ui/                       — shadcn/ui primitives actually in use (see §1)
    wildflower/                — all homepage sections + shared site chrome
  pages/
    Home.jsx                    — the main "/" page: composes every wildflower/ section
    AboutPage.jsx, ContactPage.jsx — standalone pages at /about, /contact
```

## 3. Routes

Defined in `src/App.jsx`:

| Path | Component | Notes |
|---|---|---|
| `/` | `Home` | One-page layout: Navbar → Hero (incl. the seasonal `FallSpecialSlide` promo) → Services → Portfolio → About → Contact → Footer → `StickyBookBar`. In-page nav links (`Services`, `Portfolio`, `About`, `Contact`) scroll-anchor to sections on this page via `smoothScrollTo`, they don't route. |
| `/about` | `AboutPage` | Standalone long-form About page. Not linked from the navbar (the navbar's "About" link anchor-scrolls to the `#about` section on Home instead) — reachable directly or via footer/other links if added later. |
| `/contact` | `ContactPage` | Standalone contact-details page (address, phone, email, social, a "Book Now" CTA). Same navbar-vs-route relationship as About. |
| `*` | `PageNotFound` | Generic 404. |

## 4. Data flow — what used to be dynamic, and isn't anymore

Before the Base44→static conversion, two homepage sections fetched from a
Base44-hosted database at runtime:

- **`Portfolio.jsx`** called `base44.entities.PortfolioImage.list(...)` to
  load the gallery grid. It now imports a plain array from
  `src/data/portfolioImages.js`. **To add or reorder portfolio photos going
  forward**: drop the image in `public/images/`, add an entry to that file.
- **`Testimonials.jsx`** called `base44.entities.Testimonial.list(...)`.
  It's imported by `Home.jsx` but currently commented out (`{/* <Testimonials /> */}`)
  — this predates the conversion; no reviews were ever published through
  Base44 either. `src/data/testimonials.js` exports an empty array. To enable
  it: populate that file and uncomment the import/usage in `Home.jsx`.

Everything else on the site (services list + pricing, brand copy, contact
info) was always hardcoded directly in the relevant component or in
`siteConfig.js` — it was never backed by Base44 data, so nothing about it
changed in the conversion.

## 5. Third-party integrations

- **GlossGenius** — two separate integration points, both plain links/images
  (no iframe, no SDK):
  - Booking CTAs (`BookNowButton.jsx`) open `siteConfig.bookingUrl`
    (`https://kyiadalton.glossgenius.com/services`) in a new tab via
    `window.open`.
  - `Services.jsx` hardcodes, per service, a photo hotlinked from
    `static.glossgenius.com` and a deep link straight to that service's
    booking page on `kyiadalton.glossgenius.com/book?service_token=...`.
    Unlike the old `media.base44.com` images, these are **not** self-hosted —
    they're GlossGenius' own live service photos, so hotlinking them is the
    correct choice (they'll stay in sync with whatever Kyia has configured in
    GlossGenius). `public/_headers`' CSP `img-src` explicitly allows
    `static.glossgenius.com` for this reason — don't remove that exception
    unless `Services.jsx` no longer needs it.
- **Google Fonts** — loaded via `<link>` tags in `index.html`, no API key.
- **Facebook / Instagram** — plain outbound links from `siteConfig.facebookUrl`
  / `instagramUrl`, used in the Contact page and footer.

No Stripe, no forms, no analytics, no auth — all present in the original
Base44 scaffold but unused; removed in the conversion (see `HANDOFF.md`).

## 6. Known limitations / things to know

- **`react-router-dom` has two moderate advisories** (open-redirect and an SSR
  hydration issue) fixed only in v7, which is a breaking major version bump
  from the v6 API this app uses. Not upgraded as part of this conversion —
  worth budgeting time for separately, since v7's data APIs differ enough to
  need real testing, not just a version bump. Low real-world risk here (no
  SSR, no user-controlled redirect targets in this app), but flagged for
  awareness.
- **The Fall Special promo is time-sensitive, hardcoded content.**
  `src/components/wildflower/FallSpecialSlide.jsx` hardcodes "Limited Time •
  September & October", "20% Off", and promo code `Fall2026`. It will need
  manual updating (or removal) once that offer ends — there's no
  scheduling/expiry mechanism.
- **`@tanstack/react-query` is installed and provider-wrapped but unused.**
  Intentionally kept rather than ripped out — removing the provider now would
  just mean re-adding it the next time a component needs to fetch something
  client-side.
