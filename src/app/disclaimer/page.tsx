import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Arovia Group",
  description: "This website is general information and is not personal medical advice.",
};

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="text-4xl font-semibold">Medical Disclaimer</h1>
      <p className="mt-4 leading-relaxed text-slate-600">
        Content on this website is general information about Arovia Group services. It is not a diagnosis, treatment plan, or emergency instruction. If you have a medical emergency, contact local emergency services. Speak with a qualified clinician about your own care.
      </p>
    </article>
  );
}
