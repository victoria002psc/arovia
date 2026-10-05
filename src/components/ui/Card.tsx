"use client";

import { motion } from "framer-motion";
import { hoverLift, itemVariants } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={hoverLift}
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card",
        className,
      )}
    >
      {children}
    </motion.article>
  );
}
