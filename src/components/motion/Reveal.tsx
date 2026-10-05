"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
