/**
 * Status badge shared by project cards and the experience timeline.
 * Text comes straight from the data files — never hardcode a status.
 */
const styles = {
  completed: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "in-progress": "text-accent border-accent/30 bg-accent-dim",
  planned: "text-muted border-edge bg-surface",
} as const;

const labels = {
  completed: "completed",
  "in-progress": "in progress",
  planned: "planned",
} as const;

export default function StatusBadge({
  status,
}: {
  status: keyof typeof styles;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${styles[status]}`}
    >
      {status === "in-progress" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {labels[status]}
    </span>
  );
}
