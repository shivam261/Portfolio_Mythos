"use client";

/**
 * Compact project card for non-featured projects.
 * Consistent hover tilt + glow via a pointer-tracked 3D transform.
 * All content comes from the passed-in Project (from /data/projects.ts).
 */
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Project } from "@/data/types";
import { fadeUp } from "@/lib/animations";
import StatusBadge from "./StatusBadge";
import TechStack from "./TechStack";
import ProjectLinks from "./ProjectLinks";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group glass flex h-full flex-col rounded-xl p-5 transition-shadow duration-300 hover:border-accent/40 hover:shadow-[0_0_32px_rgba(56,189,248,0.10)]"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-semibold text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="space-y-4">
        <TechStack items={project.techStack} />
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}
