import type { Metadata } from "next";
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
      <p className="bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-950">[VERIFY WITH LEGAL COUNSEL]</p>
      <Heading level={1} className="mt-6">
        Medical Disclaimer
      </Heading>
      <p className="mt-4 leading-relaxed text-slate-600">
        Content on this website is general information about Arovia Group services. It is not a diagnosis, treatment plan, or emergency instruction. If you have a medical emergency, contact local emergency services. Speak with a qualified clinician about your own care.
      </p>
    </article>
  );
}
