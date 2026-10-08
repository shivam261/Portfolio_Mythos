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

export const experience: ExperienceEntry[] = [
  {
    role: "AWS Certified Developer – Associate",
    organization: "Amazon Web Services",
    type: "certification",
    status: "completed",
    startDate: "2026",
    endDate: "2026",
    description:
      "AWS Certified Developer – Associate credential covering serverless architectures, IAM, CI/CD on AWS, DynamoDB data modeling, and observability with CloudWatch and X-Ray.",
    skills: ["Lambda", "DynamoDB", "IAM", "CloudFormation", "CI/CD"],
    badge: {
      src: "/certifications/aws-certified-developer-associate-transparent.png",
      alt: "AWS Certified Developer – Associate badge",
      infoUrl: "https://aws.amazon.com/certification/certified-developer-associate/",
    },
  },
  {
    role: "Software Engineer",
    organization: "Larsen and Toubro Mindtree",
    type: "work",
    status: "in-progress",
    startDate: "Aug 2025",

    description:
      "Worked on a scalable distributed system for a platform team: built gRPC-based services for automated environment provisioning, improving service onboarding speed and operational scalability.",
    skills: ["Python", "gRPC", "Spring Boot", "Java", "MCP", "PostgreSQL", "Terraform"],
  },
  {
    role: "Software Developer Intern",
    organization: "Shree Sanvaliya Green Technology Pvt. Ltd",
    type: "work",
    status: "completed",
    startDate: "Jan 2025",
    endDate: "Jun 2025",
    description:
      "Built internal tooling for a platform team: shipped a service that automated environment provisioning and cut onboarding time for new services from days to hours.",
    skills: ["TypeScript", "Node.js", "PostgreSQL", "Terraform"],
    impact: {
      headline: "From days to hours",
      summary: "Shipped internal provisioning tooling that reduced onboarding time for new services.",
    },
  },
  {
    role: "High Performance Computing Research Intern ",
    organization: "Ramanujan Universe Supercomputing Center",
    type: "work",
    status: "completed",
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    description:
      "Designed and deployed REST APIs and background job pipelines for small business clients, with a focus on reliability and low hosting cost.",
    skills: ["Python", "FastAPI", "Redis", "Docker"],
    impact: {
      headline: "APIs built for real businesses",
      summary: "Designed and deployed REST APIs and background jobs with reliability and hosting cost in mind.",
    },
  },
  {
    role: "AWS Certified AI Practitioner",
    organization: "Amazon Web Services",
    type: "certification",
    status: "completed",
    startDate: "2026",
    endDate: "2026",
    description:
      "Foundational certification covering artificial intelligence and machine learning concepts, generative AI, responsible AI, and AWS AI services.",
    skills: ["AWS", "Artificial Intelligence", "Generative AI"],
    badge: {
      src: "/certifications/aws-certified-ai-practitioner-transparent.png",
      alt: "AWS Certified AI Practitioner badge",
      infoUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/",
    },
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
