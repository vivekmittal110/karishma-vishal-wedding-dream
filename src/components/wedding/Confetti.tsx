import { motion } from "framer-motion";
import { useMemo } from "react";

const COLORS = ["#fbbf24", "#f472b6", "#a855f7", "#fcd34d", "#fb7185", "#fde68a"];

export function Confetti({ count = 40 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 4,
        color: COLORS[i % COLORS.length],
        size: 6 + Math.random() * 8,
        rot: Math.random() * 360,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -20, opacity: 0, rotate: p.rot }}
          animate={{ y: ["−10%", "120%"], opacity: [0, 1, 1, 0], rotate: p.rot + 540 }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeIn",
          }}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.4,
            background: p.color,
          }}
          className="absolute rounded-sm"
        />
      ))}
    </div>
  );
}
