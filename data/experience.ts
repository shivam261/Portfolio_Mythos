/**
 * Your timeline: work, certifications, education. Newest first.
 *
 * Key fields:
 *   - type:   "work" | "certification" | "education" (sets the icon/label)
 *   - status: "completed" | "in-progress" (in-progress shows a live badge)
 *   - endDate: omit while in progress — the UI shows "Present"
 *
 * Example entry:
 *   {
 *     role: "Software Engineer Intern",
 *     organization: "Acme Corp",
 *     type: "work",
 *     status: "completed",
 *     startDate: "Jun 2024",
 *     endDate: "Dec 2024",
 *     description: "What you did and shipped.",
 *     skills: ["TypeScript", "PostgreSQL"],
 *   }
 */
import type { ExperienceEntry } from "./types";

// EXAMPLE DATA — placeholder timeline so you can preview the layout.
// Replace with your real experience, certifications, and education.
export const experience: ExperienceEntry[] = [
  {
    role: "AWS Certified Developer – Associate",
    organization: "Amazon Web Services",
    type: "certification",
    status: "in-progress",
    startDate: "2026",
    description:
      "Preparing for the DVA-C02 exam — serverless architectures, IAM, CI/CD on AWS, DynamoDB data modeling, and observability with CloudWatch and X-Ray.",
    skills: ["Lambda", "DynamoDB", "IAM", "CloudFormation", "CI/CD"],
  },
    {
    role: "Software Engineer (Consultant)",
    organization: "Larsen and Toubro Mindtree",
    type: "work",
    status: "in-progress",
    startDate: "Aug 2025",

    description:
      "Worked on a scalable distributed system for a platform team: built gRPC-based services for automated environment provisioning, improving service onboarding speed and operational scalability.",
    skills: ["Python", "gRPC", "Langchain", "Langraph", "MCP", "PostgreSQL", "Terraform"],
  },
  {
    role: "Software Engineer Intern",
    organization: "Moonwyre Software Private Limited",
    type: "work",
    status: "completed",
    startDate: "Jun 2025",
    endDate: "Dec 2025",
    description:
      "Built internal tooling for a platform team: shipped a service that automated environment provisioning and cut onboarding time for new services from days to hours.",
    skills: ["TypeScript", "Node.js", "PostgreSQL", "Terraform"],
  },
  {
    role: "Backend Developer (Freelance)",
    organization: "Self-employed",
    type: "work",
    status: "completed",
    startDate: "Jan 2025",
    endDate: "May 2025",
    description:
      "Designed and deployed REST APIs and background job pipelines for small business clients, with a focus on reliability and low hosting cost.",
    skills: ["Python", "FastAPI", "Redis", "Docker"],
  },
  {
    role: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    type: "certification",
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    description:
      "Foundational certification covering core AWS services, the shared responsibility model, pricing, and cloud architecture best practices.",
    skills: ["AWS", "Cloud Fundamentals"],
  },
  {
    role: "B.Tech, Computer Science",
    organization: "Jaypee University of Engineering and Technology",
    type: "education",
    status: "completed",
    startDate: "2021",
    endDate: "2025",
    description:
      "Coursework in distributed systems, computer networks, operating systems, databases, and algorithms.",
  },
];
