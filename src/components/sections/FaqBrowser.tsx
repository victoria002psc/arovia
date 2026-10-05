"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { faqs, faqCategories } from "@/content/faqs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import type { FaqCategory } from "@/types";

export function FaqBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof faqCategories)[number]["id"]>("all");

  useEffect(() => {
    const slug = window.location.hash.replace("#", "");
    const match = faqs.find((item) => item.id === slug);
    if (match) setCategory(match.category);
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return faqs.filter((item) => {
      const inCategory = category === "all" || item.category === (category as FaqCategory);
      const inText = !needle || `${item.question} ${item.answer}`.toLowerCase().includes(needle);
      return inCategory && inText;
    });
  }, [category, query]);

  return (
    <div>
      <label className="block text-sm font-semibold text-arovia-ink" htmlFor="faq-search">
        Search questions
        <input
          id="faq-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-base font-normal"
        />
      </label>
      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
        {faqCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={category === item.id}
            onClick={() => setCategory(item.id)}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold ${category === item.id ? "bg-arovia-navy text-white" : "bg-white text-slate-700"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-500">{filtered.length} questions</p>
      <div className="mt-4">
        {filtered.length > 0 ? (
          <FAQAccordion items={filtered.map((item) => ({ id: item.id, question: item.question, answer: item.answer }))} />
        ) : (
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-slate-700">No questions match that search.</p>
            <Link href="/contact?type=general" className="mt-4 inline-flex min-h-11 items-center font-semibold text-arovia-navy underline-offset-4 hover:underline">
              Contact Arovia
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
