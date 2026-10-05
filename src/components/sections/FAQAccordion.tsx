"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fillCopy } from "@/lib/utils";

interface FAQAccordionProps {
  items: { question: string; answer: string; id?: string }[];
  allowMultiple?: boolean;
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<string | null>(items[0]?.question ?? null);
  const prepared = useMemo(
    () => items.map((item) => ({ ...item, answer: fillCopy(item.answer) })),
    [items],
  );

  return (
    <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
      {prepared.map((item) => {
        const expanded = open === item.question;
        const panelId = `faq-${item.question.slice(0, 24).replace(/\s+/g, "-")}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                className="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-arovia-ink"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : item.question)}
              >
                {item.question}
                <span aria-hidden="true" className="text-cyan-700">
                  {expanded ? "–" : "+"}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
