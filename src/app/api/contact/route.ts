import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { deliverInquiry } from "@/lib/mailer";

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

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, message: "Please wait a few minutes before sending another enquiry." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Send a valid enquiry." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, message: "Check the highlighted fields.", fieldErrors }, { status: 400 });
  }

  if (parsed.data.company.trim()) {
    return NextResponse.json({ ok: true, message: "Your enquiry has been received." });
  }

  if (Date.now() - parsed.data.startedAt < 3000) {
    return NextResponse.json({ ok: true, message: "Your enquiry has been received." });
  }

  try {
    await deliverInquiry(parsed.data);
  } catch {
    return NextResponse.json({ ok: false, message: "We couldn't send that enquiry. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: "Your enquiry has been received. We will reply using the contact method you chose." });
}
