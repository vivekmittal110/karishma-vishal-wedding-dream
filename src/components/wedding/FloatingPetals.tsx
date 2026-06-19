import { motion } from "framer-motion";
import { useMemo } from "react";

const PETAL_COLORS = ["#f9a8c4", "#fcd34d", "#f472b6", "#fbbf24", "#fda4af"];

export function FloatingPetals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 10,
        size: 12 + Math.random() * 16,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
        rotate: Math.random() * 360,
        drift: (Math.random() - 0.5) * 200,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, x: 0, rotate: p.rotate, opacity: 0 }}
          animate={{
            y: ["−5vh", "105vh"],
            x: [0, p.drift, 0, -p.drift, 0],
            rotate: [p.rotate, p.rotate + 360],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          className="absolute"
        >
          <svg viewBox="0 0 24 24" fill={p.color} className="drop-shadow-sm">
            <path d="M12 2c2 4 6 6 6 10s-3 8-6 10c-3-2-6-6-6-10s4-6 6-10z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
