/**
 * Your skills, grouped by category. Add/remove groups and items freely —
 * the Skills section and the About-section pills render whatever is here.
 *
 * Example group:
 *   { category: "Cloud & AWS", items: ["Lambda", "DynamoDB", "S3"] }
 */
import type { SkillGroup } from "./types";

// EXAMPLE — replace with your real skills
export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Java", "SQL"],
  },
  {
    category: "Cloud & AWS",
    items: ["Lambda", "API Gateway", "DynamoDB", "S3", "CloudFormation", "IAM"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Redis", "Docker"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub Actions", "Linux", "CI/CD"],
  },
];
