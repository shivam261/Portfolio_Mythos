/**
 * Shared TypeScript interfaces for all portfolio content.
 *
 * Every file in /data exports plain objects/arrays typed with these
 * interfaces. Components only ever read from /data — so editing your
 * portfolio never requires touching JSX.
 */

/** A social/profile link rendered as an icon in the Hero and Footer. */
export interface SocialLink {
  /** Which icon to render. */
  platform: "github" | "linkedin" | "twitter" | "email" | "website";
  label: string;
  url: string;
}

/** Your personal details. Edited in /data/profile.ts */
export interface Profile {
  name: string;
  /** Main title under your name, e.g. "Software Engineer" */
  title: string;
  /** One punchy line shown in the Hero under the title. */
  tagline: string;
  /** Longer paragraph(s) for the About section. Each string = one paragraph. */
  bio: string[];
  location: string;
  email: string;
  /** Path or URL to your resume. Put the file in /public and use "/resume.pdf". */
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export type ProjectStatus = "completed" | "in-progress" | "planned";

/** An optional stat shown on a featured project, e.g. { label: "p99 latency", value: "45ms" } */
export interface ProjectMetric {
  label: string;
  value: string;
}

/** A portfolio project. Edited in /data/projects.ts */
export interface Project {
  /** Unique slug, used as React key — e.g. "url-shortener" */
  id: string;
  title: string;
  /** One-liner shown on compact cards. */
  summary: string;
  /** Longer description; shown only in the featured layout. Each string = one paragraph. */
  description: string[];
  status: ProjectStatus;
  /** true = big case-study layout with diagram/metrics; false = compact card. */
  featured: boolean;
  techStack: string[];
  /**
   * Optional ordered flow steps, e.g. ["Client", "API Gateway", "Lambda", "DynamoDB"].
   * Any project with this populated gets an auto-generated animated
   * architecture flow diagram. Omit it and no diagram renders.
   */
  architectureDiagram?: string[];
  /** Optional "the interesting decisions" bullets, shown on featured projects. */
  tradeOffs?: string[];
  githubUrl?: string;
  demoUrl?: string;
  /** Optional; only rendered if present. Never invent numbers. */
  metrics?: ProjectMetric[];
}

export type ExperienceType = "work" | "certification" | "education";
export type ExperienceStatus = "completed" | "in-progress";

/** A timeline entry (job, certification, or education). Edited in /data/experience.ts */
export interface ExperienceEntry {
  role: string;
  organization: string;
  type: ExperienceType;
  status: ExperienceStatus;
  /** Human-readable, e.g. "Jan 2025". */
  startDate: string;
  /** Omit while status is "in-progress" — the UI shows "Present". */
  endDate?: string;
  description: string;
  skills?: string[];
}

/** A skill group, e.g. { category: "Cloud & AWS", items: ["Lambda", "DynamoDB"] } */
export interface SkillGroup {
  category: string;
  items: string[];
}

/** A navbar link. `href` should be a section anchor like "#projects". */
export interface NavLink {
  label: string;
  href: string;
}
