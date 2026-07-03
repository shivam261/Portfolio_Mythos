"use client";

/**
 * Full case-study layout for a featured project (featured: true).
 * Renders the description, trade-offs, metrics (only if present), tech stack,
 * links, and — for any project with an `architectureDiagram` — the reusable
 * animated ArchitectureDiagram. All content from /data/projects.ts.
 */
import { motion } from "framer-motion";
import type { Project } from "@/data/types";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import StatusBadge from "./StatusBadge";
import TechStack from "./TechStack";
import ProjectLinks from "./ProjectLinks";
import ArchitectureDiagram from "./ArchitectureDiagram";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="glass glow-ring relative overflow-hidden rounded-2xl p-6 sm:p-8"
    >
      <motion.p
        variants={fadeUp}
        className="mb-4 font-mono text-xs uppercase tracking-wider text-accent"
      >
        featured
      </motion.p>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        {/* Left: narrative */}
        <div>
          <motion.div
            variants={fadeUp}
            className="mb-3 flex flex-wrap items-center gap-3"
          >
            <h3 className="text-2xl font-bold text-foreground">
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </motion.div>

          {project.description.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="mb-3 leading-relaxed text-muted"
            >
              {paragraph}
            </motion.p>
          ))}

          {project.tradeOffs && project.tradeOffs.length > 0 && (
            <motion.div variants={fadeUp} className="mt-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                key trade-offs
              </p>
              <ul className="space-y-2">
                {project.tradeOffs.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1 text-accent" aria-hidden>
                      ▹
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Right: diagram + metrics */}
        <div className="space-y-6">
          {project.architectureDiagram &&
            project.architectureDiagram.length > 0 && (
              <motion.div variants={fadeUp}>
                <ArchitectureDiagram steps={project.architectureDiagram} />
              </motion.div>
            )}

          {project.metrics && project.metrics.length > 0 && (
            <motion.dl
              variants={fadeUp}
              className="grid grid-cols-3 gap-3"
            >
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glass rounded-lg p-3 text-center"
                >
                  <dt className="font-mono text-[11px] text-muted">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 font-mono text-base font-semibold text-accent">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>
      </div>

      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-edge pt-6"
      >
        <TechStack items={project.techStack} />
        <ProjectLinks project={project} />
      </motion.div>
    </motion.article>
  );
}
