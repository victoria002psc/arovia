import type { Variants, Easing } from "framer-motion";

const easeOut: Easing = "easeOut";

/** Staggered section entrance. */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Fade and rise used for cards, headings, and list items. */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/** Full-page fade used when a route first paints. */
export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const hoverLift = {
  y: -8,
  transition: { duration: 0.25, ease: easeOut },
};

export const buttonHover = {
  y: -2,
  transition: { duration: 0.2, ease: easeOut },
};

export const buttonTap = { scale: 0.98 };
