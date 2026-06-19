import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Heart, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";

import { Nav } from "@/components/wedding/Nav";
import { FloatingPetals } from "@/components/wedding/FloatingPetals";
import { Countdown } from "@/components/wedding/Countdown";
import { MusicToggle } from "@/components/wedding/MusicToggle";
import { Timeline } from "@/components/wedding/Timeline";
import { Confetti } from "@/components/wedding/Confetti";
import { CeremonyModal, type Ceremony } from "@/components/wedding/CeremonyModal";

import coupleHero from "@/assets/couple-hero.png";
import bride from "@/assets/bride-portrait.png";
import groom from "@/assets/groom-portrait.png";
import haldi from "@/assets/haldi.jpg";
import mehndi from "@/assets/mehndi.jpg";
import manda from "@/assets/manda.jpg";
import sangeet from "@/assets/sangeet.jpg";
import baraat from "@/assets/baraat.jpg";
import jaimala from "@/assets/jaimala.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karishma weds Vishal — Save the Date · 12 July 2026" },
      {
        name: "description",
        content:
          "You're invited to the wedding of Karishma & Vishal on Sunday, 12 July 2026 at Majestic Taj by Kawatras, Rajouri Garden, New Delhi.",
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
    desc: "A sunshine-yellow morning where Karishma's sisters, cousins and aunts lovingly smear haldi on her cheeks — blessing her with glow, joy and good fortune for the days ahead.",
  },
  {
    key: "mehndi",
    emoji: "🌿",
    name: "Mehndi Ceremony",
    date: "Friday, 10 July 2026",
    time: "7:00 PM",
    image: mehndi,
    fx: "mehndi",
    desc: "Intricate henna swirls bloom across the bride's hands while the ladies of the Jindal family laugh, sing and share stories under twinkling lanterns.",
  },
  {
    key: "manda",
    emoji: "🎊",
    name: "Manda & Bhat Ceremony",
    date: "Saturday, 11 July 2026",
    time: "10:00 AM",
    image: manda,
    fx: "manda",
    desc: "The sacred Bhat ritual — Karishma's maternal family arrives with gifts, sweets and blessings to begin the most auspicious day.",
  },
  {
    key: "sangeet",
    emoji: "🎶",
    name: "Sangeet Ceremony",
    date: "Saturday, 11 July 2026",
    time: "7:15 PM",
    image: sangeet,
    fx: "sangeet",
    desc: "Dhol beats, choreographed surprises and the whole family on the dance floor — one big Bollywood night for Karishma & Vishal.",
  },
  {
    key: "baraat",
    emoji: "🐎",
    name: "Baraat Ceremony",
    date: "Sunday, 12 July 2026",
    time: "7:00 PM",
    image: baraat,
    fx: "baraat",
    desc: "Vishal arrives on a regally decorated white horse, surrounded by his loved ones dancing under sparklers and a sky full of fireworks.",
  },
  {
    key: "jaimala",
    emoji: "💍",
    name: "Jaimala Ceremony",
    date: "Sunday, 12 July 2026",
    time: "11:00 PM",
    image: jaimala,
    fx: "jaimala",
    desc: "Under a mandap of marigolds and rose petals, Karishma & Vishal exchange garlands — the moment two families become one forever.",
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

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingPetals />
      <Nav />
      <MusicToggle />
      <CeremonyModal ceremony={openCeremony} onClose={() => setOpenCeremony(null)} />


      {/* HERO */}
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
              Save The Date
            </motion.p>
            <Ornament />
            <h1 className="font-display text-5xl leading-tight font-bold sm:text-7xl">
              <span className="text-gradient-royal">Karishma</span>
              <span className="mx-2 font-script text-4xl text-[var(--gold-deep)] sm:text-5xl">
                &amp;
              </span>
              <span className="text-gradient-royal">Vishal</span>
            </h1>
            <p className="mt-6 flex items-center justify-center gap-2 text-lg text-[var(--plum)] md:justify-start">
              <Calendar className="h-5 w-5" />
              Sunday, 12 July 2026
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground italic sm:text-base md:mx-0">
              "Two souls, one heart, one beautiful journey. With great joy, our families
              request the honour of your presence as we celebrate love, laughter and
              the beginning of forever."
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

      {/* COUNTDOWN */}
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

      {/* BRIDE & GROOM */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
          {[
            { img: bride, name: "Karishma", role: "The Bride", color: "from-pink-200 to-rose-100" },
            { img: groom, name: "Vishal", role: "The Groom", color: "from-amber-100 to-yellow-50" },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-[var(--gold)]/40 bg-gradient-to-b ${p.color} p-6 shadow-soft`}
            >
              <motion.img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={768}
                height={1024}
                className="mx-auto h-80 w-auto object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="mt-4 text-center">
                <p className="font-script text-2xl text-[var(--rose)]">{p.role}</p>
                <h3 className="font-display text-3xl font-bold text-[var(--plum)]">{p.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EVENTS / TIMELINE */}
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

      {/* GALLERY */}
      <section id="gallery" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl font-bold text-gradient-royal sm:text-5xl">
              Moments of Magic
            </h2>
            <Ornament />
            <p className="text-muted-foreground">A glimpse into each celebration</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <motion.figure
                key={g.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-[var(--gold)]/30 bg-card shadow-soft"
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-3 font-display text-lg font-semibold text-white">
                  {g.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section id="venue" className="px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--gold)]/40 bg-card p-8 text-center shadow-soft sm:p-12"
        >
          <MapPin className="mx-auto h-10 w-10 text-[var(--primary)]" />
          <h2 className="mt-4 font-display text-4xl font-bold text-gradient-royal sm:text-5xl">
            The Venue
          </h2>
          <Ornament />
          <p className="font-display text-2xl font-semibold text-[var(--plum)] sm:text-3xl">
            Majestic Taj by Kawatras
          </p>
          <p className="mt-2 text-muted-foreground">Rajouri Garden, New Delhi</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase shadow-gold"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
          </motion.a>
        </motion.div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold text-gradient-royal sm:text-5xl">
            RSVP
          </h2>
          <Ornament />
          <p className="mb-2 font-script text-3xl text-[var(--rose)]">With love, the Jindal Family</p>
          <p className="mb-10 text-muted-foreground">
            We'd be honoured by your presence — please reach out to confirm.
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            {RSVP.map((r, i) => (
              <motion.a
                key={r.phone}
                href={`tel:${r.phone}`}
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
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
            We look forward to celebrating with you
          </p>
          <p className="mt-4 font-display text-2xl">Karishma &amp; Vishal</p>
          <p className="mt-1 text-sm tracking-widest text-white/80 uppercase">12 · 07 · 2026</p>
        </motion.div>
      </footer>
    </div>
  );
}
