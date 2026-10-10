import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Terms Notice | Arovia Group",
  description: "Interim terms for using the Arovia Group website. Formal terms will be published when counsel-approved.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-arovia-teal">Interim notice</p>
      <h1 className="mt-3 text-4xl font-semibold text-arovia-navy">Website Terms Notice</h1>
      <p className="mt-4 text-sm text-slate-500">
        This is an interim notice for website use. It is not a counsel-approved terms of service and does not create a clinical, pharmacy,
        equipment, or software contract.
      </p>
      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        <p>
          Information on this website describes Arovia Group services in general terms. Availability, pricing, and suitability are confirmed
          when you contact the team. Nothing on the site is an offer that you can accept online, a booking confirmation, or a guarantee of
          outcomes.
        </p>
        <p>
          Do not use the website for emergencies. Call local emergency services. Read the{" "}
          <Link href="/medical-disclaimer" className="font-semibold text-arovia-navy underline-offset-4 hover:underline">
            Medical Disclaimer
          </Link>{" "}
          and the{" "}
          <Link href="/privacy" className="font-semibold text-arovia-navy underline-offset-4 hover:underline">
            Privacy Notice
          </Link>{" "}
          before sending an enquiry.
        </p>
        <p>Formal terms for bookings, supply, or software engagements will be provided separately when those transactions are offered.</p>
      </div>
    </article>
  );
}
