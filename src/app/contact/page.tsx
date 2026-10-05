import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/lib/constants";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Contact Arovia Group — Healthcare, Equipment, Digital Solutions",
  description: "Get in touch with Arovia. Contact us for healthcare services, equipment sourcing, digital health projects, or partnerships.",
  alternates: { canonical: "/contact" },
};

const routes = [
  ["Healthcare & Care Services", "Clinic appointments, home care, diagnostics, and ambulance.", "Healthcare/Care Services"],
  ["Medicines & Pharmacy", "Prescriptions, health products, and pharmacy partnerships.", "Medicines/Pharmacy"],
  ["Medical Equipment & Trade", "Import, export, equipment supply, and consumables.", "Medical Equipment"],
  ["Digital Health & Technology", "Apps, websites, platforms, and custom software.", "Digital Health Solutions"],
  ["Partnerships", "Strategic, reseller, and integration conversations.", "Partnership/Business Inquiry"],
];

export default function ContactPage({ searchParams }: { searchParams?: { type?: string } }) {
  const contactFaqs = faqs.filter((item) =>
    ["contact-response", "fastest-contact", "what-to-provide", "schedule", "quote", "emergency-support", "international"].includes(item.id),
  );

  return (
    <>
      <header className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">Get in Touch With Arovia Group</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Questions about our services? Ready to partner with us? Let&apos;s connect and explore how we can help.
          </p>
          <p className="mt-4 max-w-3xl text-slate-300">
            Whether you&apos;re a patient seeking healthcare, a professional interested in partnership, a business looking for equipment, or an organization needing digital health solutions, our team is ready to listen.
          </p>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold">Multiple Ways to Reach Us</h2>
          <p className="mt-3 text-slate-600">Choose the contact method that works best for you. Published phone, email, WhatsApp, and address are added as soon as they are confirmed.</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-700">
            <li><strong>Phone:</strong> {company.phone || "To be confirmed"} · {company.hours || "Business hours to be confirmed"}</li>
            <li><strong>WhatsApp:</strong> {company.whatsapp || "To be confirmed"}</li>
            <li><strong>Email:</strong> {company.email || "To be confirmed"}</li>
            <li><strong>Visit:</strong> {company.address || "Address to be confirmed"}</li>
          </ul>
          <h2 className="mt-10 text-2xl font-semibold">Different services, tailored support</h2>
          <ul className="mt-4 space-y-3">
            {routes.map(([title, copy, type]) => (
              <li key={title} className="rounded-2xl bg-white p-4 shadow-card">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{copy}</p>
                <p className="mt-2 text-xs text-slate-500">Inquiry type: {type}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-card">
          <h2 className="text-2xl font-semibold">Send Us a Message</h2>
          <p className="mt-2 text-sm text-slate-600">Fill out the form and the team will reply within one business day once contact operations are live.</p>
          <div className="mt-6">
            <ContactForm initialType={searchParams?.type} />
          </div>
        </div>
      </section>
      <section className="bg-white py-16" id="visit">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold">Visit Us</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            A map will be embedded when the clinic and office addresses are confirmed. Hours, holiday closures, and directions will sit beside it.
          </p>
          <div className="mt-6 flex min-h-48 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
            Map placeholder · address pending
          </div>
          <h2 className="mt-12 text-2xl font-semibold">Contact FAQs</h2>
          <div className="mt-4 max-w-3xl">
            <FAQAccordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
