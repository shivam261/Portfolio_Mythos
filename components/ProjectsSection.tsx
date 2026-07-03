"use client";

/**
 * Projects section. Reads /data/projects.ts, renders every `featured: true`
 * project as a full case study and the rest as a responsive grid of compact
 * cards. Add/remove projects in the data file — this section adapts.
 */
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const compact = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeading
        kicker="projects"
        title="Things I've built"
        subtitle="A mix of shipped work and systems I'm exploring. Each card links to the source where available."
      />

      <div className="space-y-8">
        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}

        {compact.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {compact.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </Section>
  );
}
