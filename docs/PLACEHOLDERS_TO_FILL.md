# Placeholders still to supply

These values are visible on the site until you replace them. Phone, email, and the street address already live only in `src/lib/site-info.ts`.

| Placeholder | File | What to supply |
| --- | --- | --- |
| `[BUSINESS HOURS]` | `src/lib/site-info.ts` (`businessHours`) | Opening days and hours. Shown on the contact page once it no longer starts and ends with brackets. |
| `[LOGO]` | `src/lib/site-info.ts` (`logo`) | Confirm whether `public/logo-arovia.png` is the final mark. The header already uses that file. |
| `[TAGLINE]` | `src/lib/site-info.ts` (`tagline`) | Approved tagline, if you want one beyond the homepage headline. |
| `[YEARS OF EXPERIENCE]` | `src/lib/site-info.ts` | Only if you want a verified years figure. Do not invent a number. |
| `[FOUNDER / LEADERSHIP]` | `src/lib/site-info.ts` and the About page | Names and roles you are willing to publish. |
| `[FOUNDING YEAR]` | About page | The year Arovia Group was founded. |
| `[CERTIFICATIONS — to be added once verified]` | `src/data/home.ts` | Certificates you can show evidence for. |
| `[LICENSES — to be added once verified]` | `src/data/home.ts` | Licenses you can show evidence for. |
| `[PARTNERS — to be added once verified]` | `src/data/home.ts` | Named partners you have permission to list. |
| `[CERTIFICATIONS]` | `src/lib/site-info.ts` | Same as above, for any other surface. |
| `[CLINIC REGISTRATION]` | `src/lib/site-info.ts` | Clinic registration, shown on care pages. |
| `[PHARMACY LICENSE]` | `src/lib/site-info.ts` | Pharmacy license, shown on `/pharmacy`. |
| `[EXPORT / IMPORT-EXPORT CODE]` | `src/lib/site-info.ts` | Export registration, shown on Equipment Trade pages. Capability and markets stay unverified. |
| `[SERVICE AREAS / DELIVERY COVERAGE]` | `src/lib/site-info.ts` and About | Towns or a radius you actually cover. The site does not claim coverage beyond Guntur until this is filled. |
| `[EMERGENCY RESPONSE DETAILS]` | `src/lib/site-info.ts` | What the ambulance service can and cannot do. Do not add a response-time promise. |
| `[SOCIAL MEDIA LINKS]` | `src/lib/site-info.ts` | Profile URLs. Hidden in the footer until this is real text. |
| `[PARTNERS]` | `src/lib/site-info.ts` | Partner names. |
| `[TIMEFRAME]` | Homepage FAQ in `src/data/home.ts` | A reply window you will actually meet. |
| `[VERIFY WITH LEGAL COUNSEL]` | Privacy, Terms, Medical Disclaimer | Counsel-approved legal text. |
| WhatsApp | `src/lib/site-info.ts` (`showWhatsApp`) | Set to `true` only after confirming +91 96496 47850 receives WhatsApp. |
| Email delivery | `.env.example` | `EMAIL_PROVIDER` of `resend` or `smtp`, plus the matching key or SMTP settings. |
| `NEXT_PUBLIC_SITE_URL` | `.env` | The live origin, used for canonical URLs and the sitemap. |
| Hero photograph | `docs/IMAGE_CREDITS.md` | Source URL and license for `public/images/hero-consult.jpg`. |
