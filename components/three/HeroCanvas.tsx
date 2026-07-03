"use client";

/**
 * Lazy-loading wrapper for the 3D hero scene.
 * - Loads the WebGL bundle client-side only (no SSR weight)
 * - Skips 3D entirely for prefers-reduced-motion users
 * - Drops to a low-power scene on small/low-core devices
 * The static glow fallback keeps the layout identical either way.
 */
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <StaticGlow />,
});

function StaticGlow() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 60% 45% at 50% 45%, rgba(56,189,248,0.14), transparent 70%)",
      }}
    />
  );
}

export default function HeroCanvas() {
  const [mode, setMode] = useState<"pending" | "static" | "3d">("pending");
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    // Deferred a frame so the static fallback paints first
    const id = requestAnimationFrame(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reducedMotion) {
        setMode("static");
        return;
      }
      const cores = navigator.hardwareConcurrency ?? 4;
      setLowPower(cores <= 4 || window.innerWidth < 768);
      setMode("3d");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (mode !== "3d") return <StaticGlow />;

  return (
    <div aria-hidden className="absolute inset-0">
      <StaticGlow />
      <HeroScene lowPower={lowPower} />
    </div>
  );
}
