"use client";

/**
 * Fixed glass navbar. Links come from /data/navigation.ts,
 * the logo text from /data/profile.ts — nothing hardcoded.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const firstName = profile.name.split(" ")[0];

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="glass mx-auto mt-3 flex max-w-5xl items-center justify-between rounded-xl px-4 py-2.5 sm:px-6">
        <a href="#" className="font-mono text-sm text-foreground">
          <span className="text-accent">~/</span>
          {firstName.toLowerCase()}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                <span className="text-accent/60">./</span>
                {link.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="glass mx-auto mt-2 max-w-5xl space-y-1 rounded-xl p-3 sm:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 font-mono text-sm text-muted transition-colors hover:bg-accent-dim hover:text-accent"
                >
                  <span className="text-accent/60">./</span>
                  {link.label.toLowerCase()}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
