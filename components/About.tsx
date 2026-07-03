"use client";

/**
 * About section. Bio paragraphs come from /data/profile.ts and the animated
 * skill pills from /data/skills.ts (flattened across categories).
 */
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animations";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function About() {
  const allSkills = skills.flatMap((group) => group.items);

  return (
    <Section id="about">
      <SectionHeading kicker="about" title="Who I am" />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4"
        >
          {profile.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="leading-relaxed text-muted"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
            stack
          </p>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap gap-2"
          >
            {allSkills.map((skill) => (
              <motion.li
                key={skill}
                variants={scaleIn}
                whileHover={{ y: -2 }}
                className="glass rounded-md px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent/50 hover:text-accent"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}
