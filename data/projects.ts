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
    id: "Foody - Microservices Food Ordering Application",
    title: "Foody - Microservices Food Ordering Application",
    summary:
      "A microservices-based food ordering application with a React frontend, Python backend, and Redis for caching.",
    description: [
      "A full-stack food ordering application built using a microservices architecture. The frontend is developed with React, while the backend services are implemented in Python. Redis is used for caching to improve performance and reduce database load.",
    ],
    status: "in-progress",
    featured: false,
    techStack: ["Python", "Redis", "FastAPI", "Docker","AWS Lambda", "React", "PostgreSQL"],
    githubUrl: "https://github.com/shivam261/Food_ordering_Frontend",
    demoUrl: "https://food.shivam-tripathi.com",
   
  },
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

];
