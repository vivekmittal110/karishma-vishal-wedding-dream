import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-07-12T19:00:00+05:30").getTime();

function diff() {
  const now = Date.now();
  const d = Math.max(WEDDING_DATE - now, 0);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-6">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative rounded-2xl border border-[var(--gold)]/40 bg-card/80 px-2 py-4 text-center shadow-soft backdrop-blur-sm sm:px-4 sm:py-6"
        >
          <div className="font-display text-3xl font-bold text-gradient-royal sm:text-5xl">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs tracking-widest text-[var(--plum)] uppercase sm:text-sm">
            {it.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
