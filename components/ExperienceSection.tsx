"use client";

/**
 * Experience section — split into three separate timelines by entry type:
 * Work, Certifications, and Education. Reads /data/experience.ts (newest
 * first within each group) and renders each entry with a type icon, date
 * range, and optional skill chips. The timeline heading conveys the entry
 * type and "Present" conveys in-progress status, so neither is repeated on
 * the card. Any group with no entries is skipped automatically.
 */
import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import type { ExperienceEntry, ExperienceType } from "@/data/types";
import { fadeUp, slideInLeft, staggerContainer, viewportOnce } from "@/lib/animations";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

// Order the timelines are shown in. `title` is optional — a group with no
// title renders its timeline without a "# heading" (e.g. Work sits directly
// under the section's "Professional Experience" title). `id` adds a scroll
// anchor so a navbar link can jump straight to that timeline.
const groups: { type: ExperienceType; title?: string; id?: string }[] = [
  { type: "work" },
  { type: "certification", title: "Certifications", id: "certifications" },
  { type: "education", title: "Education", id: "education" },
];

function TypeIcon({ type }: { type: ExperienceType }) {
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

function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.li variants={slideInLeft} className="relative">
      {/* Timeline node */}
      <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-background text-accent">
        <TypeIcon type={entry.type} />
      </span>

      <div className="glass rounded-xl p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-semibold text-foreground">{entry.role}</h3>
          <span className="shrink-0 font-mono text-xs text-muted">
            {entry.startDate}
            {" — "}
            {entry.status === "in-progress"
              ? "Present"
              : entry.endDate ?? "Present"}
          </span>
        </div>
        <p className="mb-3 font-mono text-sm text-muted">{entry.organization}</p>
        <p className="text-sm leading-relaxed text-muted">{entry.description}</p>

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
  );
}

function Timeline({
  title,
  entries,
  id,
}: {
  title?: string;
  entries: ExperienceEntry[];
  id?: string;
}) {
  return (
    <div id={id} className={id ? "scroll-mt-24" : undefined}>
      {title && (
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-6 font-mono text-sm text-accent"
        >
          <span className="text-muted">{"# "}</span>
          {title}
        </motion.h3>
      )}

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative space-y-8 border-l border-edge pl-8"
      >
        {entries.map((entry, i) => (
          <TimelineEntry key={i} entry={entry} />
        ))}
      </motion.ol>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading kicker="experience" title="Professional Experience" />

      <div className="space-y-14">
        {groups.map(({ type, title, id }) => {
          const entries = experience.filter((e) => e.type === type);
          if (entries.length === 0) return null;
          return (
            <Timeline key={type} title={title} entries={entries} id={id} />
          );
        })}
      </div>
    </Section>
  );
}
