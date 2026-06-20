import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, Clock } from "lucide-react";
import { useEffect } from "react";

export type Ceremony = {
  key: string;
  emoji: string;
  name: string;
  date: string;
  time: string;
  image: string;
  desc: string;
  /** which mini-animation to play on top of the image */
  fx:
    | "haldi"
    | "mehndi"
    | "manda"
    | "sangeet"
    | "baraat"
    | "jaimala";
};

function FxLayer({ fx }: { fx: Ceremony["fx"] }) {
  // Each ceremony gets its own themed animated overlay on top of the cartoon image
  switch (fx) {
    case "haldi":
      // Yellow haldi splashes/handprints appearing rhythmically (everyone applying haldi)
      return (
        <>
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 0.85, 0] }}
              transition={{
                duration: 2,
                delay: (i * 0.25) % 3,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
              className="absolute h-10 w-10 rounded-full blur-[2px]"
              style={{
                left: `${15 + ((i * 37) % 70)}%`,
                top: `${20 + ((i * 53) % 60)}%`,
                background:
                  "radial-gradient(circle, #fde047 0%, #facc15 50%, transparent 75%)",
              }}
            />
          ))}
        </>
      );
    case "mehndi":
      // Henna swirls drawing in
      return (
        <svg className="pointer-events-none absolute inset-0 h-full w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M ${30 + i * 60} ${300 + (i % 2) * 40} q 40 -60 80 0 t 80 0 t 80 0`}
              stroke="#7c2d12"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.4,
                repeat: Infinity,
              }}
            />
          ))}
        </svg>
      );
    case "manda":
      // Floating laddoos & marigolds rising
      return (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: [-50, -250], opacity: [0, 1, 0] }}
              transition={{
                duration: 5,
                delay: i * 0.4,
                repeat: Infinity,
              }}
              className="absolute text-2xl"
              style={{ left: `${(i * 13) % 90}%`, bottom: "0%" }}
            >
              {i % 2 === 0 ? "🟡" : "🌼"}
            </motion.div>
          ))}
        </>
      );
    case "sangeet":
      // Bouncing music notes & disco confetti
      return (
        <>
          {["🎵", "🎶", "🪘", "✨", "🎵", "🎶", "💃", "🕺"].map((n, i) => (
            <motion.span
              key={i}
              initial={{ y: 200, opacity: 0, rotate: 0 }}
              animate={{
                y: [200, -50, 200],
                opacity: [0, 1, 0],
                rotate: [0, 30, -30, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
              }}
              className="absolute text-3xl"
              style={{ left: `${10 + i * 11}%`, bottom: "10%" }}
            >
              {n}
            </motion.span>
          ))}
        </>
      );
    case "baraat":
      // Fireworks bursts and sparkles
      return (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 2.5], opacity: [1, 0] }}
              transition={{
                duration: 1.8,
                delay: i * 0.4,
                repeat: Infinity,
              }}
              className="absolute h-3 w-3 rounded-full"
              style={{
                left: `${10 + i * 11}%`,
                top: `${10 + (i % 3) * 15}%`,
                background:
                  "radial-gradient(circle, #fde68a, #fb7185, transparent)",
                boxShadow: "0 0 30px #fde047",
              }}
            />
          ))}
        </>
      );
    case "jaimala":
      // Falling rose petals
      return (
        <>
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ y: -30, x: 0, opacity: 0, rotate: 0 }}
              animate={{
                y: ["0%", "120%"],
                x: [0, 30, -30, 0],
                opacity: [0, 1, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5 + (i % 4),
                delay: i * 0.18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute text-xl"
              style={{ left: `${(i * 7) % 100}%`, top: "-5%" }}
            >
              🌹
            </motion.span>
          ))}
        </>
      );
  }
}

export function CeremonyModal({
  ceremony,
  onClose,
}: {
  ceremony: Ceremony | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!ceremony) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orig;
    };
  }, [ceremony]);

  return (
    <AnimatePresence>
      {ceremony && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-y-auto rounded-3xl border-2 border-[var(--gold)] bg-card shadow-2xl max-h-[90vh]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={ceremony.image}
                alt={ceremony.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0">
                <FxLayer fx={ceremony.fx} />
              </div>
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="font-script text-3xl text-[var(--cream)]">
                  {ceremony.emoji} {ceremony.name}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--rose)]/15 px-4 py-2 font-semibold text-[var(--plum)]">
                  <Calendar className="h-4 w-4" /> {ceremony.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/20 px-4 py-2 font-semibold text-[var(--plum)]">
                  <Clock className="h-4 w-4" /> {ceremony.time}
                </span>
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {ceremony.desc}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
