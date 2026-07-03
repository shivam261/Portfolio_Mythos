"use client";

/**
 * Generic, reusable animated flow diagram.
 *
 * Give it any ordered list of steps (e.g. a project's `architectureDiagram`
 * from /data/projects.ts) and it renders labelled nodes connected by lines,
 * with a glowing "packet" pulse traveling along the flow to read as data in
 * motion through a distributed system. One component works for every project —
 * no per-project diagram code.
 */
import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

export default function ArchitectureDiagram({ steps }: { steps: string[] }) {
  if (steps.length === 0) return null;

  return (
    <div className="glass rounded-xl p-5">
      <p className="mb-5 font-mono text-xs uppercase tracking-wider text-muted">
        request flow
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
        {steps.map((step, i) => (
          <div
            key={`${step}-${i}`}
            className="flex flex-col items-stretch sm:flex-1 sm:flex-row sm:items-center"
          >
            {/* Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className="relative flex min-h-[52px] flex-1 items-center justify-center rounded-lg border border-accent/25 bg-accent-dim px-3 py-2 text-center font-mono text-xs text-foreground sm:min-w-0"
            >
              {step}
            </motion.div>

            {/* Connector with traveling pulse (omit after the last node) */}
            {i < steps.length - 1 && <Connector index={i} total={steps.length} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Connector({ index, total }: { index: number; total: number }) {
  // Stagger each segment's pulse so the packet appears to flow end-to-end,
  // then all reset together and flow again.
  const travel = 0.6;
  const cycle = total * travel;
  const delay = index * travel;
  const glow = { boxShadow: "0 0 8px 2px rgba(56,189,248,0.8)" };
  const timing = {
    duration: travel,
    delay,
    repeat: Infinity,
    repeatDelay: cycle - travel,
    ease: "easeInOut" as const,
  };

  return (
    <div
      className="relative flex items-center justify-center self-center py-1 sm:py-0"
      aria-hidden
    >
      {/* Vertical rail on mobile, horizontal on desktop */}
      <div className="h-6 w-px bg-edge sm:h-px sm:w-8 sm:min-w-8" />

      {/* Mobile pulse: travels top → bottom */}
      <motion.span
        className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent sm:hidden"
        style={glow}
        animate={{ top: ["0%", "100%"] }}
        transition={timing}
      />
      {/* Desktop pulse: travels left → right */}
      <motion.span
        className="absolute top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent sm:block"
        style={glow}
        animate={{ left: ["0%", "100%"] }}
        transition={timing}
      />
    </div>
  );
}
