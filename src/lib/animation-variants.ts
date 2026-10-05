import type { Easing, Variants } from "framer-motion";

const ease: Easing = "easeInOut";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease },
  },
};

export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

export const hoverLift = {
  y: -2,
  transition: { duration: 0.3, ease },
};

export const buttonHover = {
  y: -2,
  transition: { duration: 0.3, ease },
};

export const buttonTap = { scale: 0.98 };

/** Definitions only. Pages apply these in later phases. */
export const fadeUp: Variants = itemVariants;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const staggerContainer: Variants = containerVariants;

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: 12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
