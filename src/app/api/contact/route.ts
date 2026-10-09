import { handleContactPost } from "@/lib/handle-contact-post";

/**
 * Node.js App Router contact handler (Nodemailer SMTP and/or Resend via `src/lib/mailer.ts`).
 *
 * Cloudflare Pages static export cannot serve this Route Handler. Production on Pages uses
 * `functions/api/contact.ts` (Resend HTTP API). This file is retained for local Node hosting
 * (`next start` without static export) and shared validation/email logic.
 *
 * Note: with `output: "export"` in next.config.mjs, `next build` does not emit this route.
 * The file is excluded from the static export graph by remaining an unsupported dynamic
 * handler; see `scripts/prepare-static-export.mjs` which parks it during Pages builds.
 */
export async function POST(request: Request) {
  return handleContactPost(request);
}
