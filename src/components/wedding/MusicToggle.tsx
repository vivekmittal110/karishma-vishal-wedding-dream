import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MUSIC_SRC =
  "https://cdn.pixabay.com/audio/2022/10/30/audio_347d5cf2ea.mp3";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio(MUSIC_SRC);
    a.loop = true;
    a.volume = 0.4;
    audioRef.current = a;
    return () => {
      a.pause();
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch (e) {
        console.warn("audio play blocked", e);
      }
    }
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={playing ? { boxShadow: ["0 0 0 0 rgba(217,119,6,.5)", "0 0 0 12px rgba(217,119,6,0)"] } : {}}
      transition={playing ? { duration: 1.8, repeat: Infinity } : {}}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed right-4 bottom-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-white shadow-gold sm:h-14 sm:w-14"
    >
      {playing ? <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" /> : <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" />}
    </motion.button>
  );
}
