"use client";

/**
 * Consistent section heading used across About/Projects/Experience/Skills.
 * Renders a monospace "// section" kicker and a large title, both revealed
 * on scroll. Content is passed in — nothing personal is hardcoded here.
 */
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface SectionHeadingProps {
  /** Small mono kicker, e.g. "projects" → renders as "// projects" */
  kicker: string;
  title: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12"
    >
      <motion.p variants={fadeUp} className="mb-3 font-mono text-sm text-accent">
        <span className="text-muted">{"// "}</span>
        {kicker}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-3 max-w-2xl text-muted"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
