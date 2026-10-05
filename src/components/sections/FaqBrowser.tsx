"use client";

import { useMemo, useState } from "react";
import { faqs, faqCategories } from "@/content/faqs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import type { FaqCategory } from "@/types";

export function FaqBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof faqCategories)[number]["id"]>("all");

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
      <label className="block text-sm font-semibold text-arovia-ink">
        Search questions
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by keyword"
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-base font-normal"
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
            className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
              category === item.id ? "bg-slate-900 text-white" : "bg-white text-slate-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-500">{filtered.length} questions</p>
      <div className="mt-4">
        {filtered.length > 0 ? (
          <FAQAccordion items={filtered} />
        ) : (
          <p className="rounded-3xl bg-white p-6 text-slate-600">No questions match that search. Try another word or contact the team.</p>
        )}
      </div>
    </div>
  );
}
