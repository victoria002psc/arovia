import type { ContactInput } from "@/lib/contact-schema";
import { enquiryLabels } from "@/lib/contact-schema";

export async function deliverInquiry(input: ContactInput) {
  const to = process.env.CONTACT_EMAIL || "arovia22@gmail.com";
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

  const provider = process.env.EMAIL_PROVIDER;
  const key = process.env.EMAIL_PROVIDER_KEY;

  if (provider === "resend" && key) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || "Arovia Group <onboarding@resend.dev>",
        to: [to],
        reply_to: input.email,
        subject,
        text,
      }),
    });
    if (!response.ok) throw new Error("Email provider rejected the enquiry.");
    return { delivered: true as const };
  }

  if (provider === "smtp" && process.env.SMTP_HOST) {
    const nodemailer = await import("nodemailer");
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });
    await transport.sendMail({
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to,
      replyTo: input.email,
      subject,
      text,
    });
    return { delivered: true as const };
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("Arovia enquiry (no email provider configured)", { to, subject, text });
    return { delivered: false as const, logged: true as const };
  }

  throw new Error("Email provider is not configured.");
}
