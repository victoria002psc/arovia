import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Arovia Group",
  description: "Terms for using the Arovia Group website. The formal terms will be published before launch.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="text-4xl font-semibold">Terms of Service</h1>
      <p className="mt-4 text-slate-600">
        Formal terms of service will be published before the site is used for bookings or payments. Information on this website describes services and does not create a clinical, supply, or software contract.
      </p>
    </article>
  );
}
