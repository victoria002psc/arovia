/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Nodemailer/SMTP is NOT supported in the Pages Functions (Workers) runtime
 * (no reliable outbound TCP for SMTP). This handler uses the Resend HTTP API
 * via fetch, matching the Resend path already in src/lib/mailer.ts.
 *
 * Secrets (set in Cloudflare Pages → Settings → Environment variables / Secrets;
 * never commit these values):
 * - EMAIL_PROVIDER_KEY  (Resend API key)
 * - CONTACT_EMAIL       (inbox that receives enquiries)
 * - EMAIL_FROM          (verified Resend from address, e.g. "Arovia Group <hello@yourdomain.com>")
 */
import { contactSchema, enquiryLabels } from "../../src/lib/contact-schema";

type Env = {
  EMAIL_PROVIDER_KEY?: string;
  CONTACT_EMAIL?: string;
  EMAIL_FROM?: string;
};

type PagesContext = {
  request: Request;
  env: Env;
};

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

async function deliverViaResend(
  env: Env,
  input: {
    name: string;
    email: string;
    phone: string;
    enquiryType: keyof typeof enquiryLabels;
    organization?: string;
    message: string;
    preferredContact: string;
  },
) {
  const key = env.EMAIL_PROVIDER_KEY;
  if (!key) {
    throw new Error("EMAIL_PROVIDER_KEY is not configured.");
  }

  const to = env.CONTACT_EMAIL || "arovia22@gmail.com";
  const subject = `Arovia enquiry: ${enquiryLabels[input.enquiryType]}`;
  const text = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `Enquiry: ${enquiryLabels[input.enquiryType]}`,
    input.organization ? `Organization: ${input.organization}` : "",
    `Preferred contact: ${input.preferredContact}`,
    "",
    input.message,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.EMAIL_FROM || "Arovia Group <onboarding@resend.dev>",
      to: [to],
      reply_to: input.email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    throw new Error("Email provider rejected the enquiry.");
  }
}

export async function onRequestPost(context: PagesContext) {
  const ip = context.request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "edge";
  if (limited(ip)) {
    return json({ ok: false, message: "Please wait a few minutes before sending another enquiry." }, 429);
  }

  let body: unknown;
  try {
    body = await context.request.json();
  } catch {
    return json({ ok: false, message: "Send a valid enquiry." }, 400);
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return json({ ok: false, message: "Check the highlighted fields.", fieldErrors }, 400);
  }

  if (parsed.data.company.trim()) {
    return json({ ok: true, message: "Your enquiry has been received." });
  }

  if (Date.now() - parsed.data.startedAt < 3000) {
    return json({ ok: true, message: "Your enquiry has been received." });
  }

  try {
    await deliverViaResend(context.env, parsed.data);
  } catch {
    return json({ ok: false, message: "We couldn't send that enquiry. Please try again." }, 502);
  }

  return json({
    ok: true,
    message: "Your enquiry has been received. We will reply using the contact method you chose.",
  });
}

export async function onRequest(context: PagesContext) {
  if (context.request.method === "POST") {
    return onRequestPost(context);
  }
  return json({ ok: false, message: "Method not allowed." }, 405);
}
