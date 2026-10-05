# Audit — before the final structure

Read-only snapshot taken before Phase 0 restructure. The site was a Next.js 14 App Router project with the earlier four-pillar naming.

## Routes and main components

Routes that existed:

- `/` homepage (`src/app/page.tsx`)
- `/about`, `/contact`, `/faq`, `/privacy`, `/terms`, `/medical-disclaimer`, `/disclaimer` (re-export)
- `/care`, `/care/clinic`, `/care/homecare`, `/care/diagnostics`, `/care/ambulance`
- `/medicines` and a re-export at `/pharmacy`
- `/equipment`, `/equipment/import`, `/equipment/export`, `/equipment/equipment`, `/equipment/supplies`
- Re-exports at `/equipment-trade`, `/equipment-trade/export`, `/equipment-trade/medical-equipment`
- `/digital-health` and `/apps`, `/websites`, `/platforms`, `/solutions`
- `/design-system` (noindex), `/api/contact`

Layout and sections: `PageLayout`, `Navigation`, `Footer`, `Breadcrumbs`, `Hero`, `Pillars`, `ServicePageTemplate`, `ContactForm`, `FaqBrowser`.

Data lived in `src/content/*`, `src/data/*`, and `src/lib/constants.ts`. Contact details lived in `src/lib/site-info.ts`.

## Old names and removed services

Found in user-facing data and pages before the restructure:

- "Home Care" in navigation history, `pillarDirectory`, homepage pillars, service cards, FAQ category, design-system sample
- "Medicines" and `/medicines` in pharmacy content, homepage, about, constants, design system
- "Import", `/equipment/import`, and import FAQs in equipment content and FAQ
- "Medical Supplies", `/equipment/supplies`, and consumables FAQ
- `/equipment`, `/equipment/export`, `/equipment/equipment`
- Header CTA "Get in Touch" (already changed to "Talk to Arovia" in the header before this audit; still present on the contact heading and design-system sample)

## Visual problems versus the final direction

- Tailwind gradients (`gradient-care`, `gradient-medicine`, `gradient-equipment`, `gradient-digital`, `gradient-subtle`) and a glow shadow
- Design-system page demonstrates those gradients
- `ServicePageView` uses a gradient header
- Pillar colors are full saturated fills (`#10B981`, `#EF4444`, `#3B82F6`, `#8B5CF6`) rather than subtle accents
- Homepage and about use rounded card grids
- Hero still depends on `/images/hero-consult.jpg`, which is not in `/public`
- Float keyframes exist in Tailwind
- No emoji icons were found in components; lucide line icons are used

## `/public`

- `logo.svg` and `logo-white.svg` only. These are not the approved Arovia mark and must not be used as a replacement logo.
- `logo-arovia.png` is referenced by `Logo.tsx` but the file is not in `/public`.
- No photography is stored in the repo.

## Placeholders already in `site-info.ts`

Business hours, logo, tagline, years of experience, founder/leadership, certifications, clinic registration, pharmacy license, export code, service areas, emergency response, social links, partners. WhatsApp flag is false.
