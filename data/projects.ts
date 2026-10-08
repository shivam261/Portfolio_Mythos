/**
 * Your projects. Add / edit / remove entries here — the site updates itself.
 *
 * Key fields:
 *   - featured: true      → big case-study layout (diagram, trade-offs, metrics)
 *   - featured: false     → compact card in the grid
 *   - status              → "completed" | "in-progress" | "planned" (renders a badge)
 *   - architectureDiagram → optional ordered flow steps; if present, an animated
 *                           flow diagram is auto-generated. Omit if not needed.
 *   - metrics             → optional; only rendered if present. Real numbers only.
 *   - githubUrl / demoUrl → optional; buttons only appear for links you provide.
 *
 * Example of a minimal (non-featured) project:
 *   {
 *     id: "my-cli-tool",
 *     title: "My CLI Tool",
 *     summary: "One-liner about it.",
 *     description: ["Longer paragraph, only shown if featured."],
 *     status: "completed",
 *     featured: false,
 *     techStack: ["Go"],
 *     githubUrl: "https://github.com/you/my-cli-tool",
 *   }
 */
import type { Project } from "./types";

// EXAMPLE DATA — all placeholder content so you can preview the layout.
// Replace with your real projects (keep the same shape).
export const projects: Project[] = [
  // Featured project: full case-study treatment with architecture diagram.
  {
    id: "serverless-url-shortener",
    title: "Serverless URL Shortener",
    summary:
      "A globally distributed URL shortener built entirely on AWS serverless primitives.",
    description: [
      "A link-shortening service designed to survive traffic spikes without any server management. Short links resolve from the edge, and writes go through a thin API layer into a single-table DynamoDB design.",
      "The goal was to practice building a system that is cheap at rest, scales to zero, and still returns redirects in single-digit milliseconds from anywhere in the world.",
    ],
    status: "in-progress",
    featured: true,
    techStack: [
      "AWS Lambda",
      "API Gateway",
      "ECS",
      "DynamoDB",
      "CloudFront",
      "TypeScript",
      "CDK",
    ],
    // Ordered flow steps — drives the animated architecture diagram
    architectureDiagram: [
      "Client",
      "CloudFront",
      "API Gateway",
      "Lambda",
      "DynamoDB",
    ],
/*     tradeOffs: [
      "Chose DynamoDB over RDS for single-digit-ms reads and effortless scaling, trading away flexible ad-hoc queries.",
      "On-demand capacity over provisioned: simpler ops and true scale-to-zero, at a slightly higher per-request cost.",
      "CloudFront caching for hot links reduces Lambda invocations, at the cost of a short propagation delay on updates.",
    ], */
    githubUrl: "https://github.com/shivam261/URL_Shortner",
   demoUrl: "https://linksnip.shivam-tripathi.com",
    // metrics are optional — delete this array if you have no real numbers yet
    metrics: [
      { label: "Cache", value: "Redis" },
      { label: "Services", value: "3" },
      { label: "Database", value: "AWS RDS, DynamoDB" },
    ],
  },
  // Compact card projects (no diagram / lighter detail). 
  {
    id: "ERP - Fulfill",
    title: "ERP - Fulfill",
    summary:
      "A ingestion pipeline that buffers bursts and delivers to cold storage plus a searchable index.",
    description: [
      "An enterprise resource planning (ERP) system that includes a data ingestion pipeline capable of handling bursts of incoming data. The pipeline buffers the data and delivers it to cold storage for long-term retention, as well as to a searchable index for quick access and retrieval.",
    ],
    status: "completed",
    featured: false,
    techStack: ["Next.js", "Python", "S3", "Lambda","Redis", "SQS","SNS","Celery", "PostgreSQL"],
    githubUrl: "https://github.com/shivam261/Fulfill_ERP",
    demoUrl: "https://erp.shivam-tripathi.com",
    
  },
   {
    id: "pdf-RAG-pipeline",
    title: "PDF RAG Pipeline",
    summary:
      "RAG pipeline for PDF documents using LangChain, Pinecone, and OpenAI API.",
    description: [
      "A retrieval-augmented generation (RAG) pipeline that processes PDF documents, stores embeddings in Pinecone, and uses LangChain to generate responses based on the content of the PDFs.",
    ],
    status: "completed",
    featured: false,
    techStack: ["Python", "FastAPI", "LangChain", "Pinecone", "OpenAI API"],
    githubUrl: "https://github.com/shivam261/pdf-RAG-pipeline",

  },
    {
    id: "B2B-Healthcare-Platform",
    title: "B2B Healthcare Platform",
    summary:
      "A platform for managing and delivering healthcare services to businesses.",
    description: [
      "A comprehensive platform that streamlines the delivery of healthcare services to businesses, including patient management and telemedicine capabilities.",
    ],
    status: "completed",
    featured: false,
    techStack: ["Firebase", "Next.js", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    githubUrl: "https://github.com/shivam261/B2B-SAAS-DASHBOARD",
    demoUrl: "https://healthcare.shivam-tripathi.com",
  },
  {
    id: "clinic-management-system-api",
    title: "Clinic Management System API",
    summary:
      "A secure clinic management backend built with Go, Gin, PostgreSQL, Redis, and JWT-based access control.",
    description: [
      "Developed a Go REST API for managing doctors, reception staff, and patients using Gin, following clean architecture and the Repository Pattern. The service was structured to keep business logic separated from persistence, making the API easier to extend and maintain.",
      "Implemented JWT-based authentication and role-based access control to protect patient and clinic workflows, and integrated Redis for session caching and API rate limiting to improve scalability and reduce repeated backend load.",
    ],
    status: "completed",
    featured: false,
    techStack: ["Go", "Gin", "PostgreSQL", "Redis", "JWT", "REST API"],
    githubUrl: "https://github.com/shivam261/Makerble",
  },

];
