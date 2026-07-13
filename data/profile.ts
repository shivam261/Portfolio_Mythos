/**
 * Your personal details — name, title, bio, links.
 *
 * This is the only file to edit for: your name/title/tagline, About-section
 * bio, email, resume link, and social icons.
 *
 * Example shape:
 *   tagline: "I build systems that stay up."
 *   bio: ["First paragraph…", "Second paragraph…"]
 *   socialLinks: [{ platform: "github", label: "GitHub", url: "https://github.com/you" }]
 */
import type { Profile } from "./types";

// EXAMPLE — replace every field with your real details
export const profile: Profile = {
  name: "Shivam Tripathi",
  title: "Software Engineer",
  tagline: "Building cloud-native, distributed systems that scale.",
  bio: [
    // EXAMPLE — replace with your real bio. Each string renders as one paragraph.
    "I'm an aspiring software engineer focused on cloud and distributed systems. I care about how systems behave under load, at scale, and when things fail.",
    "Currently preparing for the AWS Certified Developer – Associate certification and building projects that put those patterns into practice.",
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
