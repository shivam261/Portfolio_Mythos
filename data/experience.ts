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
    status: "completed",
    startDate: "2026",
    endDate: "2026",
    description:
      "AWS Certified Developer – Associate credential covering serverless architectures, IAM, CI/CD on AWS, DynamoDB data modeling, and observability with CloudWatch and X-Ray.",
    skills: ["Lambda", "DynamoDB", "IAM", "CloudFormation", "CI/CD"],
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
    "Optimized FastAPI response serialization by streamlining data conversion, reducing serialization overhead by 51% and improving API response efficiency; developed Java/Spring Boot REST APIs for worker records and dashboards with Spring Security authentication and role-based access control; wrote JUnit tests for Spring Boot services, achieving 80% unit test coverage; and deployed 6 services on AWS with Amazon SNS and SQS to support asynchronous message processing.",
    skills: ["Python", "FastAPI", "Redis", "Docker", "Java", "Spring Boot", "AWS", "PostgreSQL", "JUnit "],
  },
  {
    role: "High Performance Computing Research Intern ",
    organization: "Ramanujan Universe Supercomputing Center",
    type: "work",
    status: "completed",
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    description:
      "Developed AI agent workflows and orchestration pipelines using LangChain and LangGraph to automate research and operational tasks; collaborated on agent-based tooling for internal platform automation and environment provisioning, improving service onboarding speed and reducing manual effort.",
    skills: ["TypeScript", "Node.js", "PostgreSQL", "Terraform"],
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
