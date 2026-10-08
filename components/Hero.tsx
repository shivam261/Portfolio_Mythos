"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";
import HeroCanvas from "./three/HeroCanvas";
import MagneticButton from "./MagneticButton";
import { SocialIcon } from "./Icons";

export default function Hero() {
  const roles = experience.filter((entry) => entry.type === "work");
  const currentRole = roles.find((entry) => entry.status === "in-progress");
  const certifications = experience.filter((entry) => entry.type === "certification" && entry.status === "completed");
  const overview = [
    { value: roles.length, label: "Engineering roles", detail: "Consulting, internship & freelance", href: "#about" },
    { value: projects.length, label: "Selected projects", detail: "Cloud, microservices & AI", href: "#projects" },
    { value: certifications.length, label: "Certifications", detail: "Cloud development & AI", href: "#certifications" },
  ];
  const developerCertification = certifications.find((entry) => entry.badge);

  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden">
      <HeroCanvas />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0a0a0f 100%)" }} />

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 pt-32 sm:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <div>
            <motion.p variants={fadeUp} className="mb-4 font-mono text-xs text-accent sm:text-sm">
              <span className="text-muted">{"//"}</span> backend & cloud engineer
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">{profile.name}</motion.h1>
            <motion.h2 variants={fadeUp} className="glow-text mt-3 text-2xl font-semibold text-accent sm:text-3xl">{profile.title}</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm leading-relaxed text-foreground/80">{profile.focus}</motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-muted">{profile.tagline}</motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href="#about">explore my impact <span aria-hidden>→</span></MagneticButton>
              <MagneticButton href={profile.resumeUrl} variant="outline" external>resume.pdf</MagneticButton>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-5">
              {profile.socialLinks.map((link) => (
                <a key={link.url} href={link.url} target={link.platform === "email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={link.label} className="text-muted transition-all hover:-translate-y-0.5 hover:text-accent">
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
              <span className="h-px w-8 bg-edge" aria-hidden />
              <span className="font-mono text-xs text-muted">{profile.location}</span>
            </motion.div>
          </div>

          <motion.aside variants={fadeUp} aria-label="Work and skills overview" className="glass overflow-hidden rounded-2xl shadow-[0_0_60px_rgba(56,189,248,0.06)]">
            <div className="flex items-center justify-between border-b border-edge px-6 py-4">
              <p className="font-mono text-xs text-muted">work / overview</p>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden /> At a glance
              </span>
            </div>
            <div className="space-y-6 p-6">
              {currentRole && (
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">Current role</p>
                  <h3 className="text-lg font-semibold">{currentRole.role}</h3>
                  <p className="mt-1 text-sm text-muted">{currentRole.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{currentRole.impact?.summary ?? currentRole.description}</p>
                  <a href="#experience" className="mt-3 inline-block font-mono text-xs text-accent hover:underline">Experience <span aria-hidden>↗</span></a>
                </div>
              )}
              <div className="border-t border-edge pt-5">
                <h3 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">Core toolkit</h3>
                <ul className="flex flex-wrap gap-2">
                  {profile.featuredSkills.map((skill) => <li key={skill} className="rounded-md border border-edge bg-background/50 px-2.5 py-1 font-mono text-xs text-foreground/90">{skill}</li>)}
                </ul>
                <a href="#skills" className="mt-3 inline-block font-mono text-xs text-accent hover:underline">All skills <span aria-hidden>↗</span></a>
              </div>
            </div>
            {developerCertification && (
              <a href="#certifications" className="flex items-center justify-between gap-3 border-t border-accent/20 bg-accent/5 px-6 py-4 text-sm text-accent transition-colors hover:bg-accent/10">
                {developerCertification.role} <span aria-hidden>↗</span>
              </a>
            )}
          </motion.aside>
        </div>

        <motion.div variants={fadeUp} className="mt-12 grid gap-4 border-t border-edge pt-6 sm:grid-cols-3 sm:gap-6">
          {overview.map((item) => (
            <a key={item.href} href={item.href} className="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-accent/5">
              <span className="font-mono text-3xl text-accent/80">{String(item.value).padStart(2, "0")}</span>
              <div>
                <p className="text-sm font-medium group-hover:text-accent">{item.label} <span aria-hidden>↗</span></p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </motion.div>
      <a href="#about" aria-label="Explore roles and impact" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-lg text-muted transition-colors hover:text-accent">↓</a>
    </section>
  );
}
