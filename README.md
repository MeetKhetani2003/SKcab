# SK Cab Service — Ahmedabad Taxi Website

Production-ready, multi-page Next.js (App Router) website focused on converting visitors into **phone calls** and **WhatsApp bookings** for SK Cab Service, Ahmedabad.

- Phone: +91 77779 19383
- Stack: Next.js, React, TypeScript, Tailwind CSS v4, Lucide React

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, booking form, services, fleet, areas, feedback, CTA |
| `/airport-taxi` | SVPI airport taxi SEO page, fare enquiry table, FAQ |
| `/outstation-taxi` | Route cards, starting per-km rates, disclaimer |
| `/fleet` | Fleet & fares (fares are by request) |
| `/contact` | Contact details, WhatsApp enquiry form, map |

## Structure

Source lives in `src/` (`@/*` alias):

- `src/app` — routes, layout, `robots.ts`, `sitemap.ts`
- `src/components` — reusable UI (Navbar, StickyMobileBar, BookingForm, FleetCard, ...)
- `src/lib/constants.ts` — business constants and WhatsApp URL helpers
- `src/lib/data.ts` — data-driven content (fleet, routes, FAQs, navigation)
- `public/images`, `public/logo.png` — local images

Tailwind v4 is configured through `src/app/globals.css` (`@theme`), so no `tailwind.config.ts` is needed.

## Configuration

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) in production so canonical URLs, Open Graph, sitemap and JSON-LD use the real domain.

## Content to confirm with the business

- Fares are not published; pages show "Get Current Fare" / "Request Current Fare".
- Outstation per-km rates are labelled as starting/example rates.
- Rider feedback is clearly sample content — replace in `TESTIMONIALS` (`src/lib/data.ts`) with real reviews.
- Replace the generated photos in `public/images` with real fleet photos when available.

## Scripts

```bash
npm install
npm run dev
npm run build && npm run start
```
