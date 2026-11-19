# Richwest Integrated: website

Next.js 16 (App Router, Cache Components, React 19, Tailwind CSS 4) rebuild of richwestipl.sg. Every page is prerendered as static HTML for SEO and speed.

## Getting started

```bash
cp .env.example .env.local   # add Supabase credentials so the contact form can save leads
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

Requires Node 20.9 or newer (Node 24 LTS recommended).

## Where things live

| What | Where |
| --- | --- |
| Business details (phone, address, hours, tracking IDs) | `src/lib/site.ts` |
| Navigation, service groups (header menu, footer, services page) | `src/lib/site.ts` (`mainNav`, `serviceGroups`) |
| Design tokens, type scale, buttons, motion | `src/app/globals.css` |
| Homepage copy (hero, featured services, projects, gallery) | `src/content/home.ts` |
| Service pages content | `src/content/services.ts` |
| Blog posts | `src/content/posts.ts` |
| FAQ, homepage sections, privacy data | `src/content/*.ts` |
| Images (with alt text and dimensions) | `public/images/` and `src/content/images.ts` |
| Page metadata helper | `src/lib/seo.ts` |
| Structured data (JSON-LD) | `src/lib/schema.ts` |
| Contact form server action | `src/app/actions/contact.ts` |

To add a service or blog post, add an entry to the content file. The page, sitemap entry, metadata and structured data are generated automatically.

## SEO features

- Static HTML for all pages (`ensureStatic = "navigation"` in the root layout guards this)
- Per-page title, description, keywords, canonical URL, Open Graph and Twitter cards
- JSON-LD: HomeAndConstructionBusiness, WebSite, Service, BlogPosting, FAQPage, BreadcrumbList, CollectionPage
- `sitemap.xml` (with image entries), `robots.txt` (previews are `noindex`), web manifest, icons
- Old `/images/r/*` URLs from the previous site 308-redirect to the new image paths
- `next/image` serving AVIF/WebP, self-hosted Inter font, scroll animations in pure CSS (no JS)
- Google tags load after idle under Consent Mode v2; Meta Pixel only with consent

## Design system

- **Colour:** warm paper neutrals (`paper`, `paper-2`, `night`), ink text (`ink`, `ink-2`, `ink-3`) and one accent (`timber`). Every text pair meets WCAG AA; `oak` is for text on dark bands only.
- **Type:** Instrument Serif for display headings (`display-1/2/3`), Hanken Grotesk for everything else. Both self-hosted via `next/font`.
- **Motion:** CSS only, no animation library.
  - First screen: text rises in (transform only, so LCP is not delayed) and photos unveil with a short wipe.
  - On scroll: blocks with `data-reveal` slide up, and photos inside them fade in. `data-draw` draws a line in as it scrolls into view.
  - Hover effects only run on devices with a real pointer.
  - `prefers-reduced-motion` keeps the fades and removes all movement.
- **Navigation:** four links (Services, Projects, About, Journal) plus the quote button. Process and FAQ pages are still live and linked from the footer, the About page and the service pages.
