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
    demoUrl: "https://example.com",
    // metrics are optional — delete this array if you have no real numbers yet
    metrics: [
      { label: "p99 redirect", value: "42 ms" },
      { label: "Cold start", value: "180 ms" },
      { label: "Cost / 1M reqs", value: "$0.94" },
    ],
  },
  // Compact card projects (no diagram / lighter detail).
  {
    id: "distributed-rate-limiter",
    title: "Distributed Rate Limiter",
    summary:
      "A Redis-backed sliding-window rate limiter exposed as a small gRPC service.",
    description: [
      "A rate limiter that stays consistent across many API nodes using a Redis-backed sliding window.",
    ],
    status: "completed",
    featured: false,
    techStack: ["Go", "Redis", "gRPC", "Docker"],
    githubUrl: "https://github.com/yourusername/distributed-rate-limiter",
    metrics: [{ label: "Throughput", value: "50k rps" }],
  },
  {
    id: "log-pipeline",
    title: "Streaming Log Pipeline",
    summary:
      "Ingests, buffers, and fans out application logs to S3 and OpenSearch in near real time.",
    description: [
      "A log ingestion pipeline that buffers bursts and delivers to cold storage plus a searchable index.",
    ],
    status: "completed",
    featured: false,
    techStack: ["Kafka", "Python", "S3", "OpenSearch"],
    githubUrl: "https://github.com/yourusername/log-pipeline",
  },
  {
    id: "k8s-cost-dashboard",
    title: "Kubernetes Cost Dashboard",
    summary:
      "Surfaces per-namespace cloud spend by joining Prometheus metrics with billing data.",
    description: [
      "A dashboard that attributes cluster cost to teams by correlating resource usage with billing exports.",
    ],
    status: "planned",
    featured: false,
    techStack: ["Kubernetes", "Prometheus", "Grafana", "TypeScript"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    summary:
      "This site — Next.js, React Three Fiber, and a fully data-driven content layer.",
    description: [
      "Built with Next.js App Router, Tailwind CSS, React Three Fiber and Framer Motion. All content lives in typed data files.",
    ],
    status: "completed",
    featured: false,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React Three Fiber"],
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];
