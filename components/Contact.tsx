"use client";

/**
 * Contact / footer. Email, social links, and location all come from
 * /data/profile.ts. The CTA is a mailto to the profile email.
 */
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import { SocialIcon } from "./Icons";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Section id="contact" className="py-24 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <SectionHeading kicker="contact" title="Let's build something" />

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-8 max-w-md text-muted"
          >
            I&apos;m open to internships, new-grad roles, and interesting
            systems problems. The fastest way to reach me is email.
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center">
            <MagneticButton href={`mailto:${profile.email}`}>
              {profile.email}
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center justify-center gap-5"
          >
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
          </motion.div>
        </motion.div>
      </Section>

      <div className="border-t border-edge">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {year} {profile.name}
          </p>
          <p className="font-mono text-xs text-muted">
            <span className="text-accent">{"<"}</span>
            built with Next.js + Three.js
            <span className="text-accent">{" />"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
