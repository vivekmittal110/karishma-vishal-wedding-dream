import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#countdown", label: "Countdown" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#venue", label: "Venue" },
  { href: "#rsvp", label: "RSVP" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-[var(--gold)]/20 bg-background/70 px-4 py-3 sm:px-6">
        <a href="#home" className="font-script text-2xl text-gradient-royal sm:text-3xl">
          K &amp; V
        </a>
        <nav className="hidden gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium tracking-wide text-[var(--plum)] transition after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-gradient-gold after:transition-transform hover:text-[var(--primary)] hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full bg-card text-[var(--plum)] shadow-sm md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-1 border-b border-[var(--gold)]/20 bg-background/95 px-6 py-4 md:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-[var(--plum)] hover:bg-[var(--secondary)]"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
