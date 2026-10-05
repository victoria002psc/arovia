This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Local commands

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

## Cloudflare

Cloudflare’s current Next.js guide uses [vinext](https://github.com/cloudflare/vinext) on Workers, not the older OpenNext adapter. This repository still builds with `next build`. A vinext migration is a separate step and was not applied here, so the working Next.js build stays intact.

When you choose to migrate:

1. Read the current guide: https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
2. Follow vinext’s migrate-to-vinext skill and select the Cloudflare target.
3. Set these environment variables in the Workers project:
   - `CONTACT_EMAIL` — defaults to arovia22@gmail.com if unset
   - `EMAIL_PROVIDER` — `resend` or `smtp`
   - `EMAIL_PROVIDER_KEY` — Resend API key when using Resend
   - `EMAIL_FROM`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` — SMTP settings when using SMTP
   - `NEXT_PUBLIC_SITE_URL` — the public origin, used for canonical URLs and the sitemap
4. Deploy with the vinext Cloudflare workflow after the compatibility check passes.

Until that migration, `npm run build` is the build this project is tested with.

## Documents

- `docs/PLACEHOLDERS_TO_FILL.md`
- `docs/IMAGE_CREDITS.md`
- `docs/CONTENT_GAPS.md`
- `docs/QA_REPORT.md`
- `docs/SEO_KEYWORDS.md`
