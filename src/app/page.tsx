import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Services } from "@/components/sections/Services";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { audiences, howItWorks, reasons } from "@/lib/constants";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Arovia Group — Integrated Healthcare Ecosystem",
  description:
    "Complete healthcare solutions in one place. Clinic care, home care, medicines, medical equipment, and healthcare technology. Integrated for better outcomes.",
  alternates: { canonical: "/" },
};

const previewIds = ["schedule", "deliver-meds", "import-how", "custom-digital"];

export default function HomePage() {
  const preview = faqs.filter((item) => previewIds.includes(item.id));

  return (
    <>
      <Hero />
      <Pillars />
      <section className="bg-gradient-subtle py-20" id="how-arovia-works">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">The Arovia Approach</h2>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            We connect four distinct healthcare capabilities into one seamless ecosystem. Here&apos;s how it works:
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <li key={step.title} className="rounded-3xl bg-white p-5 shadow-card">
                <span className="text-sm font-semibold text-cyan-700">Step {index + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">Healthcare Solutions for Everyone</h2>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Whether you&apos;re an individual patient, a family seeking care, or a healthcare institution, Arovia&apos;s integrated ecosystem is designed for you.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((card) => (
              <li key={card.title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
                <Link href={card.href} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-cyan-700">
                  {card.cta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">The Arovia Difference</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="rounded-3xl bg-slate-50 p-6">
                <span className="text-sm font-semibold text-cyan-700">0{index + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{reason.title}</h3>
                <p className="mt-2 text-slate-600">{reason.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Services />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold">Healthcare partners describe the idea</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            These are sample lines from the content plan. Real names and organizations will replace them after testimonials are collected.
          </p>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              "Arovia's integrated approach to healthcare delivery has transformed how we serve our patients. The equipment, care coordination, and technology solutions work seamlessly together.",
              "As an international buyer, Arovia made equipment sourcing simple and reliable. Their expertise and professionalism are exceptional.",
              "The homecare service was exactly what our family needed. Professional, compassionate, and reliable.",
            ].map((quote) => (
              <li key={quote} className="rounded-3xl border border-slate-200 p-5 text-sm leading-relaxed text-slate-700">
                “{quote}”
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Sample quote · attribution pending</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold">Questions? We Have Answers</h2>
          <div className="mt-6">
            <FAQAccordion items={preview} />
          </div>
          <Link href="/faq" className="mt-6 inline-flex min-h-11 items-center font-semibold text-cyan-700">
            View All FAQs
          </Link>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold">Ready to Partner With Arovia?</h2>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Whether you&apos;re a healthcare institution, medical equipment supplier, or digital health innovator, let&apos;s explore how we can work together.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact?type=Medical%20Equipment" className="inline-flex min-h-11 items-center rounded-full bg-blue-600 px-5 font-semibold text-white">Equipment Partnership</Link>
            <Link href="/contact?type=Digital%20Health%20Solutions" className="inline-flex min-h-11 items-center rounded-full bg-violet-600 px-5 font-semibold text-white">Digital Health Project</Link>
            <Link href="/contact?type=Partnership%2FBusiness%20Inquiry" className="inline-flex min-h-11 items-center rounded-full bg-emerald-600 px-5 font-semibold text-white">Care Network Expansion</Link>
            <Link href="/contact?type=General%20Inquiry" className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 font-semibold">General Business Inquiry</Link>
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="Ready to transform?"
        title="Begin Your Healthcare Journey Today"
        copy="Whatever your healthcare need, Arovia is ready to help. Connect with our team and discover how our integrated ecosystem works for you."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Call when our number is published", href: "/contact" }}
      />
    </>
  );
}
