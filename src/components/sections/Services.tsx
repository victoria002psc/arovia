"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { serviceCards } from "@/lib/constants";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { pillarClasses } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-arovia-ink sm:text-4xl">Our Complete Healthcare Services</h2>
        <p className="mt-3 text-lg text-slate-600">Explore what Arovia can do for you</p>
        <motion.ul
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {serviceCards.map((service) => {
            const tone = pillarClasses(service.pillar);
            return (
              <motion.li key={service.href} variants={itemVariants}>
                <Link
                  href={service.href}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-2 hover:shadow-lift"
                >
                  <span className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${tone.gradient}`} />
                  <h3 className="mt-4 text-lg font-semibold text-arovia-ink">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <span className={`mt-4 text-sm font-semibold ${tone.text}`}>Learn More</span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
