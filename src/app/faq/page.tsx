import type { Metadata } from "next";
import { FaqBrowser } from "@/components/sections/FaqBrowser";
import { faqs } from "@/content/faqs";
import { fillCopy } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Arovia Healthcare FAQ — Common Questions Answered",
  description: "Frequently asked questions about Arovia's healthcare services, equipment, medicines, and digital solutions.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: fillCopy(item.answer) },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
      <p className="mt-3 text-lg text-slate-600">
        Answers across care, medicines, equipment, and digital health. Search or filter by topic.
      </p>
      <div className="mt-8">
        <FaqBrowser />
      </div>
    </section>
  );
}
