"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Section entrance motion.
 *
 * IMPORTANT: Never gate content behind `opacity: 0` waiting on IntersectionObserver.
 * That pattern left /pharmacy (and other Reveal-wrapped pages) permanently blank when
 * `whileInView` never fired. Content must paint immediately; motion is enhancement only.
 */
export function Reveal({ children, className }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
