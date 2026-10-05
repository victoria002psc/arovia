import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Arovia Group",
  description: "How Arovia Group handles personal information. The formal policy will be published before launch.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <p className="bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-950">[VERIFY WITH LEGAL COUNSEL]</p>
      <h1 className="mt-6 text-4xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-slate-600">
        The formal privacy policy is being prepared. Until it is published, do not submit sensitive medical details through the website form. Use the form for service inquiries only, and share clinical information directly with a clinician.
      </p>
    </article>
  );
}
