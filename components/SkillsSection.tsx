"use client";

/**
 * Skills section. Reads /data/skills.ts and renders each category as a card
 * of chips, with a staggered scroll-reveal. Add/remove categories or items
 * in the data file — nothing here needs editing.
 */
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animations";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading kicker="skills" title="Tools I work with" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2"
      >
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            className="glass rounded-xl p-5"
          >
            <h3 className="mb-4 font-mono text-sm text-accent">
              <span className="text-muted">{"# "}</span>
              {group.category}
            </h3>
            <motion.ul
              variants={staggerContainer}
              className="flex flex-wrap gap-2"
            >
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  variants={scaleIn}
                  whileHover={{ y: -2 }}
                  className="rounded-md border border-edge bg-surface px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
