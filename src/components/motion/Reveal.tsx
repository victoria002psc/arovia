"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/animation-variants";

export function Reveal({ children, className }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
