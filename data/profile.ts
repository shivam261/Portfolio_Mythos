/**
 * Your personal details — name, title, bio, links.
 *
 * This is the only file to edit for: your name/title/tagline, About-section
 * bio, email, resume link, and social icons.
 * Example shape:
 *   tagline: "I build systems that stay up."
 *   bio: ["First paragraph…", "Second paragraph…"]
 *   socialLinks: [{ platform: "github", label: "GitHub", url: "https://github.com/you" }]
 */
import type { Profile } from "./types";

export const profile: Profile = {
  name: "Shivam Tripathi",
  title: "Software Engineer",
  tagline: "I build backend services, automate platform workflows, and turn cloud architecture into working products.",
  focus: "Backend engineering · Cloud platforms · Distributed systems",
  featuredSkills: ["Python", "TypeScript", "AWS", "gRPC", "PostgreSQL", "Terraform", "Docker", "FastAPI"],
  bio: [
    "I'm a software engineer focused on backend and cloud systems. Across consulting, an internship, and freelance work, I've built provisioning services, internal tooling, REST APIs, and background job pipelines.",
    "I'm an AWS Certified Developer – Associate. My projects span serverless applications, microservices, data pipelines, and retrieval-augmented generation, with a focus on reliability, practical architecture, and operating cost.",
  ],
  location: "Pune, India",
  email: "shivam.tripathi.codes@gmail.com",
  // Put your resume PDF in /public and point to it here, e.g. "/resume.pdf"
  resumeUrl: "/resume.pdf",
  socialLinks: [
    // EXAMPLE — replace URLs; delete any platform you don't use
    { platform: "github", label: "GitHub", url: "https://github.com/shivam261" },
    { platform: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/iamtripathi/" },
    { platform: "email", label: "Email", url: "mailto:shivam.tripathi.codes@gmail.com" },
  ],
};
