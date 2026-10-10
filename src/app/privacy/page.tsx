import type { Metadata } from "next";
import Link from "next/link";
import { email } from "@/lib/site-info";

export const metadata: Metadata = {
  title: "Privacy Notice | Arovia Group",
  description: "How Arovia Group currently handles website enquiries. A formal privacy policy will replace this notice when counsel-approved.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-arovia-teal">Interim notice</p>
      <h1 className="mt-3 text-4xl font-semibold text-arovia-navy">Privacy Notice</h1>
      <p className="mt-4 text-sm text-slate-500">
        This is an interim website notice, not a counsel-approved privacy policy. It will be replaced when a formal policy is ready.
      </p>
      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        <p>
          The contact form is for service enquiries only — for example, which Arovia service you are asking about and how we should reply.
          Do not submit sensitive medical details, prescriptions, lab results, diagnosis information, or other clinical records through the website.
        </p>
        <p>
          If you need to share clinical information, contact a clinician directly by phone or in person. For emergencies, call local emergency
          services.
        </p>
        <p>
          Enquiry details you choose to send (such as name, email, phone, and message) are used only to respond to that enquiry. They are not
          sold. How long they are retained and which processors are used will be described in the formal privacy policy.
        </p>
        <p>
          Questions about this notice:{" "}
          <a className="font-semibold text-arovia-navy underline-offset-4 hover:underline" href={`mailto:${email}`}>
            {email}
          </a>
          . See also the{" "}
          <Link href="/medical-disclaimer" className="font-semibold text-arovia-navy underline-offset-4 hover:underline">
            Medical Disclaimer
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
