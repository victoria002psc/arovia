# QA report

Mobile Lighthouse against the production server on 5 October 2026 (`next start`, homepage `/`).

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| `/` mobile | 90 | 96 | 100 | 92 |

Largest contentful paint was 3.6 s, total blocking time 120 ms, and cumulative layout shift 0.

Other checks:

- `npm run lint` completed with no warnings or errors.
- `npm run build` completed with exit code 0.
- `node scripts/check-links.mjs` reported 29 routes, 243 internal hrefs, and no broken links.
- A valid contact payload is logged and accepted when no email provider is configured and `NODE_ENV` is not production. The production server returns an error until `EMAIL_PROVIDER` is set, so an enquiry is not marked sent when it cannot be delivered.
- An invalid payload returns HTTP 400 with field errors. A honeypot submission (`company` filled in) returns success and is not delivered.
- Organization and MedicalBusiness JSON-LD include name, URL, email, telephone, and the Guntur postal address. Hours and geo coordinates are omitted.
- `/design-system` is `noindex` and disallowed in `robots.ts`.
- Security headers: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`. Content-Security-Policy is described in `next.config.mjs` and is not enforced yet.
