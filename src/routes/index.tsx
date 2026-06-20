import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Heart,
  Calendar,
  Sparkles,
  Navigation,
  Clock3,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { Nav } from "@/components/wedding/Nav";
import { FloatingPetals } from "@/components/wedding/FloatingPetals";
import { Countdown } from "@/components/wedding/Countdown";
import weddingSong from "@/assets/YTDown_Shorts_Top-Songs-for-Wedding-Invitation-Videos_Media_GypRAEBgNzY_008_128k.mp3";
import { Timeline } from "@/components/wedding/Timeline";
import { Confetti } from "@/components/wedding/Confetti";
import { CeremonyModal, type Ceremony } from "@/components/wedding/CeremonyModal";

import coupleHero from "@/assets/couple-hero.png";
import coupleMain from "@/assets/maincouplepic.png";
import haldi from "@/assets/haldi.png";
import mehndi from "@/assets/mehndi.png";
import manda from "@/assets/manda.png";
import sangeet from "@/assets/sangeet.png";
import baraat from "@/assets/baraat.png";
import jaimala from "@/assets/jaimala.png";
import venue from "@/assets/venue.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karishma & Vishal are getting married! 💕" },
      {
        name: "description",
        content:
          "Join us to celebrate the love story of Karishma & Vishal on 12 July 2026! ✨",
      },
    ],
  }),
  component: Index,
});

const GALLERY: Ceremony[] = [
  {
    key: "haldi",
    emoji: "🌼",
    name: "Haldi Ceremony",
    date: "Friday, 10 July 2026",
    time: "5:00 PM",
    image: haldi,
    fx: "haldi",
    desc: "Getting all glowy and yellow! Surrounded by our favorite people, lots of laughter, and endless blessings! 🌞",
  },
  {
    key: "mehndi",
    emoji: "🌿",
    name: "Mehndi Ceremony",
    date: "Friday, 10 July 2026",
    time: "7:00 PM",
    image: mehndi,
    fx: "mehndi",
    desc: "Pretty henna designs, music, and giggles all night! Can you spot each other's names hidden in the patterns? 💕",
  },
  {
    key: "manda",
    emoji: "🎊",
    name: "Manda & Bhat Ceremony",
    date: "Saturday, 11 July 2026",
    time: "10:00 AM",
    image: manda,
    fx: "manda",
    desc: "Blessings, love, and lots of sweets! A cozy morning with family to kickstart our wedding celebrations! 🎁",
  },
  {
    key: "sangeet",
    emoji: "🎶",
    name: "Sangeet Ceremony",
    date: "Saturday, 11 July 2026",
    time: "7:15 PM",
    image: sangeet,
    fx: "sangeet",
    desc: "Dance floor, music, and full-on masti! Get ready to show off your best moves! 💃🕺",
  },
  {
    key: "baraat",
    emoji: "🐎",
    name: "Baraat Ceremony",
    date: "Sunday, 12 July 2026",
    time: "7:00 PM",
    image: baraat,
    fx: "baraat",
    desc: "The groom is here! Dancing his way to his bride with all the baraat vibes! 🎉",
  },
  {
    key: "jaimala",
    emoji: "💍",
    name: "Jaimala Ceremony",
    date: "Sunday, 12 July 2026",
    time: "11:00 PM",
    image: jaimala,
    fx: "jaimala",
    desc: "The moment we've been waiting for! Exchanging garlands and hearts under the twinkling lights! ✨",
  },
];

const RSVP = [
  { name: "Sunil Jindal", phone: "8287710147" },
  { name: "Rajesh Jindal", phone: "8700039001" },
  { name: "Sumit Jindal", phone: "9354955960" },
];

function Ornament() {
  return (
    <div className="my-6 flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--gold-deep)]" />
      <Sparkles className="h-4 w-4 text-[var(--gold-deep)]" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--gold-deep)]" />
    </div>
  );
}

function Index() {
  const mapsUrl = "https://maps.app.goo.gl/UdqSWV7Yq2gL5PJz7";
  const [openCeremony, setOpenCeremony] = useState<Ceremony | null>(null);
  const [songStarted, setSongStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(weddingSong);
    a.loop = true;
    a.volume = 0.55;
    a.preload = "auto"; // Preload the entire audio file
    audioRef.current = a;

    return () => {
      a.pause();
    };
  }, []);

  const startSong = async () => {
    if (songStarted || !audioRef.current) return;
    try {
      await audioRef.current.play();
      setSongStarted(true);
    } catch (e) {
      console.error("Error playing song:", e);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Overlay to start song */}
      {!songStarted && (
        <div
          onClick={startSong}
          onTouchStart={startSong}
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div className="text-center text-white">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="mx-auto h-12 w-12 text-[var(--rose)]" />
            </motion.div>
            <h2 className="mt-4 font-script text-4xl">Tap Anywhere to Start the Music 🎵</h2>
            <p className="mt-2 text-white/80">Welcome to our wedding celebration!</p>
          </div>
        </div>
      )}

      <FloatingPetals />
      <Nav />
      <CeremonyModal ceremony={openCeremony} onClose={() => setOpenCeremony(null)} />

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16"
      >
        <Confetti />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,oklch(0.95_0.05_350),transparent_60%),radial-gradient(circle_at_bottom_right,oklch(0.92_0.08_85),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-script text-3xl text-[var(--rose)] sm:text-4xl"
            >
              We're tying the knot! 💍
            </motion.p>
            <Ornament />
            <h1 className="font-display text-5xl leading-tight font-bold sm:text-7xl">
              <span className="text-gradient-royal">Karishma</span>
              <span className="mx-2 font-script text-4xl text-[var(--gold-deep)] sm:text-5xl">
                ❤️
              </span>
              <span className="text-gradient-royal">Vishal</span>
            </h1>
            <p className="mt-6 flex items-center justify-center gap-2 text-lg text-[var(--plum)] md:justify-start">
              <Calendar className="h-5 w-5" />
              Sunday, 12 July 2026
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground italic sm:text-base md:mx-0">
              "From the moment we met, we knew it was forever. With all our love, we invite you to
              celebrate our special day with us! ✨"
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#events"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-royal px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase shadow-soft"
            >
              <Heart className="h-4 w-4" />
              View Celebrations
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-[var(--gold)]/50"
            />
            <motion.img
              src={coupleHero}
              alt="Cartoon illustration of Karishma and Vishal"
              width={1024}
              height={1024}
              className="relative w-full drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      <section id="countdown" className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-gradient-royal sm:text-5xl"
          >
            Counting Down to Forever
          </motion.h2>
          <Ornament />
          <p className="mb-10 text-muted-foreground">Until we say "I Do"</p>
          <Countdown />
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--gold)]/35 bg-card shadow-soft">
          <div className="grid items-stretch md:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[420px] overflow-hidden"
            >
              <img
                src={coupleMain}
                alt="Karishma and Vishal together"
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--plum)]">
                  Our Favorite Picture! ❤️
                </span>
                <span className="rounded-full bg-[var(--gold)]/90 px-3 py-1 text-xs font-semibold text-white">
                  Family Celebration
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center p-6 sm:p-8 md:p-10"
            >
              <p className="font-script text-3xl text-[var(--rose)] sm:text-4xl">Our Little Love Story 💕</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-gradient-royal sm:text-5xl">
                Karishma &amp; Vishal
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                From shy hellos to forever promises, every moment with you feels like a dream come true! We can't wait to start our happily ever after together! ✨
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--gold)]/25 bg-background/60 p-4">
                  <p className="text-xs font-semibold tracking-[0.24em] text-[var(--rose)] uppercase">
                    Main Celebration
                  </p>
                  <p className="mt-2 font-display text-xl text-[var(--plum)]">A real-love first impression</p>
                </div>
                <div className="rounded-2xl border border-[var(--gold)]/25 bg-background/60 p-4">
                  <p className="text-xs font-semibold tracking-[0.24em] text-[var(--rose)] uppercase">
                    Warm & Premium
                  </p>
                  <p className="mt-2 font-display text-xl text-[var(--plum)]">Luxury Indian wedding mood</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="events" className="px-4 py-20">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-gradient-royal sm:text-5xl"
          >
            Wedding Festivities
          </motion.h2>
          <Ornament />
          <p className="text-muted-foreground">Six days of love, music, colour & tradition</p>
        </div>
        <Timeline />
      </section>

      <section id="gallery" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl font-bold text-gradient-royal sm:text-5xl">
              Moments of Magic
            </h2>
            <Ornament />
            <p className="text-muted-foreground">Tap any celebration to open the real memory</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <motion.button
                type="button"
                onClick={() => setOpenCeremony(g)}
                key={g.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-[var(--gold)]/30 bg-card text-left shadow-soft focus:ring-2 focus:ring-[var(--gold)] focus:outline-none"
              >
                <img
                  src={g.image}
                  alt={g.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-3 font-display text-lg font-semibold text-white">
                  <span className="mr-1">{g.emoji}</span>
                  {g.name}
                </figcaption>
                <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[var(--plum)] uppercase opacity-0 transition group-hover:opacity-100">
                  Open Memory
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="venue" className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-[var(--gold)]/40 bg-card p-8 shadow-soft sm:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,140,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(225,89,134,0.12),transparent_38%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-background/70 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[var(--rose)] uppercase">
                <BadgeCheck className="h-4 w-4" />
                Wedding Destination
              </div>
              <h2 className="mt-5 font-display text-4xl font-bold text-gradient-royal sm:text-5xl">
                The Venue
              </h2>
              <Ornament />
              <p className="font-display text-2xl font-semibold text-[var(--plum)] sm:text-3xl">
                Majestic Taj by Kawatras
              </p>
              <p className="mt-2 text-muted-foreground">Rajouri Garden, New Delhi</p>
              <p className="mt-5 leading-relaxed text-muted-foreground italic">
                "Two souls, one heart, one beautiful journey. With great joy, our families request the honour of your presence as we celebrate love, laughter, and the beginning of forever." ✨
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--gold)]/25 bg-background/70 p-4">
                  <MapPin className="h-5 w-5 text-[var(--primary)]" />
                  <p className="mt-3 font-display text-lg text-[var(--plum)]">Grand Arrival</p>
                  <p className="mt-1 text-sm text-muted-foreground">A premium wedding setting for ceremony and family gathering.</p>
                </div>
                <div className="rounded-2xl border border-[var(--gold)]/25 bg-background/70 p-4">
                  <Clock3 className="h-5 w-5 text-[var(--primary)]" />
                  <p className="mt-3 font-display text-lg text-[var(--plum)]">Wedding Day</p>
                  <p className="mt-1 text-sm text-muted-foreground">Sunday, 12 July 2026 · Celebration begins from the evening onward.</p>
                </div>
                <div className="rounded-2xl border border-[var(--gold)]/25 bg-background/70 p-4">
                  <Navigation className="h-5 w-5 text-[var(--primary)]" />
                  <p className="mt-3 font-display text-lg text-[var(--plum)]">Easy Directions</p>
                  <p className="mt-1 text-sm text-muted-foreground">Open the live map instantly and navigate straight to the venue.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase shadow-gold"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Maps
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="#rsvp"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/35 bg-background/75 px-6 py-3 text-sm font-semibold tracking-wider text-[var(--plum)] uppercase"
                >
                  <Phone className="h-4 w-4" />
                  Contact Family
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-[var(--gold)]/35 bg-card shadow-soft"
          >
            <div className="relative h-full min-h-[360px]">
              <img
                src={venue}
                alt="Wedding celebration ambiance"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6 sm:p-8">
                <p className="font-script text-3xl text-[var(--cream)]">A royal evening awaits</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90">
                  From the baraat welcome to the varmala moment, the venue is set to feel warm, festive, and unforgettable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="rsvp" className="px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-bold text-gradient-royal sm:text-5xl">
            RSVP
          </h2>
          <Ornament />
          <p className="mb-2 font-script text-3xl text-[var(--rose)]">With love, the Jindal Family</p>
          <p className="mb-10 text-muted-foreground">
            We'd be honoured by your presence — call directly or send a quick WhatsApp message.
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            {RSVP.map((r, i) => (
              <motion.div
                key={r.phone}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-[var(--gold)]/40 bg-card p-6 shadow-soft transition-all hover:shadow-gold"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-[var(--plum)]">{r.name}</h3>
                <p className="mt-1 text-[var(--primary)]">+91 {r.phone}</p>
                <div className="mt-5 grid gap-3">
                  <a
                    href={`tel:${r.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-royal px-4 py-3 text-sm font-semibold tracking-wider text-white uppercase"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/91${r.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold)]/35 bg-background/75 px-4 py-3 text-sm font-semibold tracking-wider text-[var(--plum)] uppercase"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-gradient-royal px-4 py-16 text-center text-white">
        <Confetti count={20} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl"
        >
          <Heart className="mx-auto h-8 w-8 text-[var(--gold)]" />
          <p className="mt-4 font-script text-4xl text-[var(--cream)] sm:text-5xl">
            Can't wait to celebrate with our favorite people! 🥳
          </p>
          <p className="mt-4 font-display text-2xl">Karishma ❤️ Vishal</p>
          <p className="mt-1 text-sm tracking-widest text-white/80 uppercase">12 · 07 · 2026</p>
        </motion.div>
      </footer>
    </div>
  );
}
