/**
 * Shared Framer Motion variants used across all sections.
 * Import from here instead of redefining per-component, so the whole
 * site animates consistently.
 */
import type { Variants } from "framer-motion";

/** Fade + slide up — the default scroll-reveal for sections and cards. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/** Container that staggers its children's `fadeUp`/`scaleIn` reveals. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Subtle scale-in, good for pills and small items inside a stagger. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/** Slide in from the left — used for timeline entries. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/** Standard viewport config for whileInView reveals. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
