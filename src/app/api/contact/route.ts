import { NextResponse } from "next/server";
import type { InquiryPayload } from "@/types";

function isPayload(value: unknown): value is InquiryPayload {
  if (!value || typeof value !== "object") return false;
  const data = value as InquiryPayload;
  return (
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.inquiryType === "string" &&
    typeof data.subject === "string" &&
    typeof data.message === "string" &&
    (data.preferredContact === "phone" || data.preferredContact === "email" || data.preferredContact === "whatsapp")
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Send a valid inquiry." }, { status: 400 });
  }

  if (!isPayload(body)) {
    return NextResponse.json({ message: "Some required details are missing." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ message: "Your inquiry has been received." });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);
  if (body.name.trim().length < 2 || !emailOk || body.subject.trim().length < 3 || body.message.trim().length < 20) {
    return NextResponse.json({ message: "Check your name, email, subject, and message." }, { status: 400 });
  }

  console.info("Arovia inquiry received", {
    name: body.name,
    email: body.email,
    inquiryType: body.inquiryType,
    subject: body.subject,
    preferredContact: body.preferredContact,
  });

  return NextResponse.json({
    message: "Your inquiry has been received. Our team will reply once contact details are confirmed.",
  });
}
