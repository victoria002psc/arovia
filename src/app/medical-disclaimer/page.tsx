import type { Metadata } from "next";
import Link from "next/link";
import { Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Arovia Group",
  description: "General information on this website is not personal medical advice.",
  alternates: { canonical: "/medical-disclaimer" },
  robots: { index: true, follow: true },
};

export default function MedicalDisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-arovia-teal">Important</p>
      <Heading level={1} className="mt-3">
        Medical Disclaimer
      </Heading>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
        <p>
          Content on this website is general information about Arovia Group services. It is not a diagnosis, treatment plan, prescription,
          or emergency instruction, and it is not a substitute for professional medical advice.
        </p>
        <p>
          If you have a medical emergency, contact local emergency services immediately. Speak with a qualified clinician about your own
          care.
        </p>
        <p>
          Do not submit sensitive medical details through the website contact form. Use the form for service enquiries only. See the{" "}
          <Link href="/privacy" className="font-semibold text-arovia-navy underline-offset-4 hover:underline">
            Privacy Notice
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
