"use client";

/**
 * Experience / certifications / education timeline.
 * Reads /data/experience.ts (newest first) and renders a vertical timeline
 * with a type icon, status badge, date range, and optional skill chips.
 * "in-progress" entries with no endDate show "Present".
 */
import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import type { ExperienceEntry } from "@/data/types";
import { slideInLeft, staggerContainer, viewportOnce } from "@/lib/animations";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import StatusBadge from "./StatusBadge";

const typeLabel: Record<ExperienceEntry["type"], string> = {
  work: "work",
  certification: "cert",
  education: "edu",
};

function TypeIcon({ type }: { type: ExperienceEntry["type"] }) {
  const common = "h-4 w-4";
  if (type === "work")
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  if (type === "certification")
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.6" />
        <path d="m8.5 13-1 7 4.5-2.5L16.5 20l-1-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
      <path d="M12 4 2 9l10 5 8-4v6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 12v4c0 1.1 2.7 3 6 3s6-1.9 6-3v-4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading kicker="experience" title="Work & credentials" />

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative space-y-8 border-l border-edge pl-8"
      >
        {experience.map((entry, i) => (
          <motion.li key={i} variants={slideInLeft} className="relative">
            {/* Timeline node */}
            <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-background text-accent">
              <TypeIcon type={entry.type} />
            </span>

            <div className="glass rounded-xl p-5">
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                  {typeLabel[entry.type]}
                </span>
                <StatusBadge status={entry.status} />
                <span className="ml-auto font-mono text-xs text-muted">
                  {entry.startDate}
                  {" — "}
                  {entry.status === "in-progress"
                    ? "Present"
                    : entry.endDate ?? "Present"}
                </span>
              </div>

              <h3 className="font-semibold text-foreground">{entry.role}</h3>
              <p className="mb-3 font-mono text-sm text-muted">
                {entry.organization}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {entry.description}
              </p>

              {entry.skills && entry.skills.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {entry.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded border border-edge px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
