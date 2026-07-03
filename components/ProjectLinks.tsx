/**
 * Renders GitHub / demo links for a project — but only the ones that exist.
 * Missing links simply don't render, so projects without a demo still look right.
 */
import type { Project } from "@/data/types";
import { SocialIcon } from "./Icons";

export default function ProjectLinks({ project }: { project: Project }) {
  if (!project.githubUrl && !project.demoUrl) return null;

  return (
    <div className="flex items-center gap-4">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          <SocialIcon platform="github" className="h-4 w-4" />
          code
        </a>
      )}
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          <SocialIcon platform="website" className="h-4 w-4" />
          demo
        </a>
      )}
    </div>
  );
}
