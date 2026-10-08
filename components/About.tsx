"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function About() {
  const roles = experience.filter((entry) => entry.type === "work" && entry.impact);

  return (
    <Section id="about">
      <SectionHeading kicker="roles & impact" title="Engineering that moves work forward." subtitle="A snapshot of what I've owned, built, and improved across my roles." />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid gap-5 md:grid-cols-3">
        {roles.map((entry, index) => (
          <motion.article key={`${entry.organization}-${entry.role}`} variants={fadeUp} className="glass flex flex-col rounded-xl p-6">
            <div className="mb-4 flex min-h-7 items-center justify-between gap-2 font-mono text-xs">
              <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
              {entry.status === "in-progress" && (
                <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-accent">Current</span>
              )}
            </div>
            <div className="md:min-h-36">
              <h3 className="text-xl font-semibold leading-snug tracking-tight">{entry.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{entry.organization}</p>
              <p className="mt-3 font-mono text-xs leading-relaxed text-accent">
                {entry.startDate} — {entry.status === "in-progress" ? "Present" : entry.endDate}
              </p>
            </div>
            <div className="mt-5 border-t border-edge pt-5">
              <h4 className="text-base font-semibold text-foreground/90">{entry.impact?.headline}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{entry.impact?.summary}</p>
            </div>
            <div className="mt-auto pt-5">
              <ul className="flex flex-wrap gap-1.5">
                {entry.skills?.slice(0, 3).map((skill) => <li key={skill} className="rounded border border-edge px-2 py-1 font-mono text-[10px] text-accent/80">{skill}</li>)}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
      <div className="mt-10 grid gap-4 border-t border-edge pt-8 text-sm leading-relaxed text-muted md:grid-cols-2 md:gap-10">
        {profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </Section>
  );
}
