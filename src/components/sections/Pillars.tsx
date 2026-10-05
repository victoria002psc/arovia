"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { pillars } from "@/lib/constants";
import { containerVariants } from "@/lib/animation-variants";
import { pillarClasses } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Pillars() {
  const [active, setActive] = useState(pillars[0].id);
  const current = pillars.find((pillar) => pillar.id === active) ?? pillars[0];
  const tone = pillarClasses(current.id);

  return (
    <section id="pillars" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">Our four healthcare pillars</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-arovia-ink sm:text-4xl">One ecosystem. Four ways in.</h2>
        </motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4" role="tablist" aria-label="Healthcare pillars">
          {pillars.map((pillar) => {
            const selected = pillar.id === active;
            const colors = pillarClasses(pillar.id);
            return (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(pillar.id)}
                className={`min-h-11 rounded-3xl border p-5 text-left transition ${
                  selected ? `${colors.border} ${colors.bg} shadow-card` : "border-slate-200 bg-slate-50 hover:bg-white"
                }`}
              >
                <span className={`text-xs font-semibold tracking-[0.14em] ${colors.text}`}>{pillar.title}</span>
                <span className="mt-3 block text-lg font-semibold text-arovia-ink">{pillar.headline}</span>
              </button>
            );
          })}
        </div>
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-6 rounded-[2rem] border border-slate-200 bg-gradient-subtle p-6 md:p-8"
          role="tabpanel"
        >
          <p className={`text-sm font-semibold ${tone.text}`}>{current.tagline}</p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">{current.description}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {current.services.map((service) => (
              <li key={service.href + service.label}>
                <Link href={service.href} className="block rounded-2xl bg-white px-4 py-3 shadow-sm hover:shadow-card">
                  <span className="font-semibold text-arovia-ink">{service.label}</span>
                  <span className="mt-1 block text-sm text-slate-600">{service.detail}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={current.href} variant={current.id === "medicine" ? "medicine" : current.id}>
              {current.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
