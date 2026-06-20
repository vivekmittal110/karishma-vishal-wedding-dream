import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import weddingSong from "@/assets/YTDown_Shorts_Top-Songs-for-Wedding-Invitation-Videos_Media_GypRAEBgNzY_008_128k.mp3";

// Wedding song from local assets that loops at medium volume.
// It begins on the first user interaction (browser autoplay policies block audio before any gesture).
const MUSIC_SRC = weddingSong;

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio(MUSIC_SRC);
    a.loop = true;
    a.volume = 0.55; // medium volume
    a.preload = "auto";
    audioRef.current = a;

    // Event listeners to sync state with actual audio playback
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);

    const tryStart = async () => {
      try {
        await a.play();
        cleanup();
      } catch {
        // wait for user gesture
      }
    };
    const onGesture = () => {
      tryStart();
    };
    const cleanup = () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("scroll", onGesture);
      window.removeEventListener("touchstart", onGesture);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
    // Attempt right away; most browsers will block until a gesture
    tryStart();
    window.addEventListener("pointerdown", onGesture, { once: true });
    window.addEventListener("keydown", onGesture, { once: true });
    window.addEventListener("scroll", onGesture, { once: true });
    window.addEventListener("touchstart", onGesture, { once: true });

    return () => {
      cleanup();
      a.pause();
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().catch(e => console.warn("audio play blocked", e));
    } else {
      a.pause();
    }
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={
        playing
          ? {
              boxShadow: [
                "0 0 0 0 rgba(217,119,6,.5)",
                "0 0 0 12px rgba(217,119,6,0)",
              ],
            }
          : {}
      }
      transition={playing ? { duration: 1.8, repeat: Infinity } : {}}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed right-4 bottom-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-white shadow-gold sm:h-14 sm:w-14"
    >
      {playing ? (
        <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
      ) : (
        <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" />
      )}
    </motion.button>
  );
}
