"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

const words = "Complete Healthcare Solutions, Connected in One Place".split(" ");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 40, damping: 20 });
  const y = useSpring(my, { stiffness: 40, damping: 20 });
  const shiftX = useTransform(x, [-0.5, 0.5], [-18, 18]);
  const shiftY = useTransform(y, [-0.5, 0.5], [-12, 12]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        mx.set((event.clientX - bounds.left) / bounds.width - 0.5);
        my.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
    >
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 px-4 py-12 md:px-6 lg:grid-cols-5 lg:py-16">
        <div className="lg:col-span-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700"
          >
            Healthcare Ecosystem for People, Care, and Technology
          </motion.p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-arovia-ink sm:text-5xl lg:text-6xl">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="mr-[0.28em] inline-block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * index, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            At Arovia Group, we believe healthcare shouldn&apos;t be fragmented. Whether you need immediate care, ongoing medicines, medical equipment, or healthcare technology, our integrated ecosystem connects everything you need. We serve patients, families, healthcare institutions, and medical businesses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#pillars">Explore Our Services</Button>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </motion.div>
        </div>
        <motion.div style={{ x: shiftX, y: shiftY }} className="relative min-h-[320px] lg:col-span-2" aria-hidden="true">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400 via-cyan-400 to-violet-500 opacity-90 blur-0" />
          <motion.span className="absolute left-8 top-10 h-24 w-24 animate-float rounded-full bg-white/30 blur-sm" />
          <motion.span className="absolute bottom-12 right-8 h-32 w-32 animate-float-delayed rounded-full bg-rose-300/40" />
          <motion.span className="absolute right-16 top-16 h-16 w-16 animate-float rounded-full bg-blue-200/70" />
          <div className="absolute inset-6 rounded-[1.6rem] border border-white/40 bg-white/10 backdrop-blur-sm" />
          <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-4 text-sm text-slate-700 shadow-card">
            Care, medicines, equipment, and technology — coordinated as one ecosystem.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
