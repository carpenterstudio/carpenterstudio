# Routes — Alex Carpenter Studio

## App Router Structure (Next.js App Router)

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Homepage — hero, featured work, services preview |
| `/services` | `src/app/services/page.tsx` | Services — video, graphic design, web design |
| `/portfolio` | `src/app/portfolio/page.tsx` | Portfolio gallery with category filtering |
| `/portfolio/[slug]` | `src/app/portfolio/[slug]/page.tsx` | Individual project detail page |
| `/about` | `src/app/about/page.tsx` | About / bio page |
| `/testimonials` | `src/app/testimonials/page.tsx` | Client testimonials |
| `/contact` | `src/app/contact/page.tsx` | Contact form |

## Root Layout
`src/app/layout.tsx` — wraps all pages with Inter font + metadata
(Header and Footer will be added in Phase 5)
