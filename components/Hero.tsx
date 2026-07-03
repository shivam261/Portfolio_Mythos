"use client";

/**
 * Hero section. All text/links come from /data/profile.ts.
 * The 3D node-graph background is lazy-loaded via HeroCanvas.
 */
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/animations";
import HeroCanvas from "./three/HeroCanvas";
import MagneticButton from "./MagneticButton";
import { SocialIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <HeroCanvas />

      {/* Soft vignette so text stays readable over the 3D scene */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0a0a0f 100%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-20"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 font-mono text-sm text-accent"
        >
          <span className="text-muted">$</span> whoami
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl font-bold tracking-tight sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="glow-text mt-3 text-2xl font-semibold text-accent sm:text-3xl"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-muted sm:text-base"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
          <MagneticButton href="#projects">
            view projects <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton href={profile.resumeUrl} variant="outline" external>
            resume.pdf
          </MagneticButton>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-5">
          {profile.socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target={link.platform === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted transition-all hover:-translate-y-0.5 hover:text-accent"
            >
              <SocialIcon platform={link.platform} />
            </a>
          ))}
          <span className="h-px w-16 bg-edge" aria-hidden />
          <span className="font-mono text-xs text-muted">
            {profile.location}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block font-mono text-lg"
          aria-hidden
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
