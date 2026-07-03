/**
 * Layout wrapper giving every section a consistent max-width, padding,
 * and scroll-anchor id. Purely presentational — no content.
 */
export default function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24 sm:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
