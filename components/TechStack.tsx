/**
 * Small monospace tech-stack chips. Shared by compact + featured project
 * layouts so the styling stays consistent.
 */
export default function TechStack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded border border-edge px-2 py-0.5 font-mono text-[11px] text-muted"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
