"use client";

/**
 * A link styled as a button that "magnetically" leans toward the cursor.
 * Used for hero + contact CTAs. Falls back to a plain link on touch devices
 * (no mousemove) and under prefers-reduced-motion (springs snap instantly).
 */
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  /** "solid" = filled accent CTA, "outline" = secondary. */
  variant?: "solid" | "outline";
  external?: boolean;
}

export default function MagneticButton({
  href,
  children,
  variant = "solid",
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 font-mono text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-accent text-background hover:bg-accent/90 glow-ring"
      : "border border-edge text-foreground hover:border-accent/60 hover:text-accent";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}
