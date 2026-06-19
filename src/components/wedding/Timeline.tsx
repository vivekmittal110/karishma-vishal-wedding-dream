import { motion } from "framer-motion";

export type EventItem = {
  emoji: string;
  name: string;
  date: string;
  time: string;
  color: string;
};

const EVENTS: EventItem[] = [
  { emoji: "🌼", name: "Haldi Ceremony", date: "Friday, 10 July 2026", time: "5:00 PM", color: "from-yellow-300 to-orange-300" },
  { emoji: "🌿", name: "Mehndi Ceremony", date: "Friday, 10 July 2026", time: "7:00 PM", color: "from-emerald-300 to-lime-300" },
  { emoji: "🎊", name: "Manda & Bhat Ceremony", date: "Saturday, 11 July 2026", time: "10:00 AM", color: "from-rose-300 to-pink-400" },
  { emoji: "🎶", name: "Sangeet Ceremony", date: "Saturday, 11 July 2026", time: "7:15 PM", color: "from-fuchsia-300 to-purple-400" },
  { emoji: "🐎", name: "Baraat Ceremony", date: "Sunday, 12 July 2026", time: "7:00 PM", color: "from-amber-300 to-rose-300" },
  { emoji: "💍", name: "Jaimala Ceremony", date: "Sunday, 12 July 2026", time: "11:00 PM", color: "from-pink-300 to-fuchsia-400" },
];

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-gradient-to-b from-[var(--gold)] via-[var(--rose)] to-[var(--plum)] md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-10">
        {EVENTS.map((e, i) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 * i }}
            className={`relative flex items-start gap-4 pl-16 md:pl-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute top-2 left-4 grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-base shadow-gold ring-4 ring-background md:left-1/2 md:h-10 md:w-10 md:-translate-x-1/2 md:text-xl">
              {e.emoji}
            </div>
            <div className="w-full md:w-1/2 md:px-8">
              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-3xl border border-[var(--gold)]/30 bg-card p-5 shadow-soft sm:p-6`}
              >
                <div className={`mb-3 inline-block h-1 w-12 rounded-full bg-gradient-to-r ${e.color}`} />
                <h3 className="font-display text-xl font-bold text-[var(--plum)] sm:text-2xl">
                  {e.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">{e.date}</p>
                <p className="font-semibold text-[var(--primary)]">{e.time}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
