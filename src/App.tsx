import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Animation variants
const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
      duration: 0.8,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
} as const;

const titleLineVariants = {
  hidden: { opacity: 0, y: 60, letterSpacing: "0.15em" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    letterSpacing: "-0.01em",
    transition: {
      duration: 1.1,
      delay: 0.5 + i * 0.15,
      ease: EASE_OUT,
    },
  }),
};

const characterVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 0.2,
      ease: EASE_OUT,
    },
  },
} as const;

// Decorative star icon (like in reference O and I letters)
function StarSparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z" />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function InfoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const characterY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const characterParallax = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <main className="relative bg-slate-950 text-white">
      <section
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden"
      >
        {/* ====== BACKGROUND ZONES ====== */}
        {/* Dark zone (left/top on mobile) */}
        <motion.div
          style={{ y: bgParallax }}
          className="clip-dark-zone absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
          {/* Subtle radial glow top-left */}
          <div className="absolute -left-20 -top-20 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
          {/* Faint architectural/structural lines inspired by reference */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.07]"
            viewBox="0 0 800 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g stroke="white" strokeWidth="1" fill="none">
              <path d="M0 200 L200 100 L400 180 L600 80" />
              <path d="M0 300 L150 220 L350 290 L550 200" />
              <path d="M100 0 L80 200 L120 400" />
              <path d="M300 0 L280 150 L320 350" />
              <path d="M500 0 L480 100 L520 250" />
              <circle cx="150" cy="400" r="80" />
              <circle cx="400" cy="300" r="120" />
              <path d="M0 600 Q200 550 400 600 T800 580" opacity="0.5" />
            </g>
          </svg>
        </motion.div>

        {/* Light zone (right/bottom on mobile) */}
        <motion.div
          style={{ y: bgParallax }}
          className="clip-light-zone absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100" />
          {/* Decorative circular arcs like reference */}
          <div className="absolute -right-32 -top-32 h-[700px] w-[700px] rounded-full border-[2px] border-amber-200/40" />
          <div className="absolute -right-16 -top-16 h-[500px] w-[500px] rounded-full border-[2px] border-amber-300/30" />
          <div className="absolute -right-48 top-32 h-[800px] w-[800px] rounded-full border border-orange-200/30" />
          {/* Warm glow */}
          <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-amber-300/30 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-[250px] w-[400px] rounded-full bg-rose-200/40 blur-[80px]" />
        </motion.div>

        {/* Grain texture overlay across entire hero */}
        <div className="grain-overlay pointer-events-none absolute inset-0 z-10" />

        {/* Subtle vignette */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />

        {/* ====== CHARACTER IMAGE ====== */}
        <motion.div
          style={{ y: characterY }}
          className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={characterVariants}
            style={{ y: characterParallax }}
            className="relative mr-0 flex h-full w-full max-w-[520px] items-end justify-end md:mr-[-4%] md:max-w-[620px] lg:mr-[-2%] lg:max-w-[700px] xl:max-w-[760px]"
          >
            <img
              src="/images/hero-character.png"
              alt="Featured character — a young girl holding a wooden chair, looking back over her shoulder"
              className="h-auto w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
            />
            {/* Warm rim light glow behind character */}
            <div className="absolute bottom-0 right-1/4 h-[60%] w-1/2 rounded-full bg-amber-300/20 blur-[80px]" />
          </motion.div>
        </motion.div>

        {/* ====== MAIN CONTENT GRID ====== */}
        <div className="relative z-30 mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 pb-12 pt-10 sm:px-10 md:px-14 lg:px-20 lg:pt-14">
          {/* Top nav hint / breadcrumb area */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <span className="hidden text-sm font-semibold tracking-wide text-slate-200 sm:inline">
                LUMINOUS
              </span>
            </div>
            <div className="flex items-center gap-6">
              <button className="hidden text-sm font-medium text-slate-300 transition hover:text-white md:inline">
                Browse
              </button>
              <button className="hidden text-sm font-medium text-slate-300 transition hover:text-white md:inline">
                My List
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 ring-2 ring-white/20" />
            </div>
          </motion.div>

          {/* Content container */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-auto flex flex-1 flex-col justify-between gap-10 pt-10 md:pt-16 lg:flex-row lg:gap-6 lg:pt-24"
          >
            {/* ====== LEFT COLUMN — Dark zone content ====== */}
            <div className="flex max-w-2xl flex-col justify-end pb-4 lg:pb-16">
              <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
                <span
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.25em] text-amber-400/90 uppercase"
                >
                  <span className="h-px w-8 bg-amber-400/50" />
                  Featured Film
                  <span className="h-px w-8 bg-amber-400/50" />
                </span>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-3 lg:mb-5">
                <span className="font-serif text-2xl font-light tracking-wider text-slate-300/70 md:text-3xl lg:text-4xl">
                  2024
                </span>
              </motion.div>

              {/* Large cinematic title */}
              <motion.h1 className="mb-6 select-none md:mb-8 lg:mb-10">
                <motion.span
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={titleLineVariants}
                  className="title-glow block font-serif text-[clamp(3rem,11vw,8.5rem)] font-light leading-[0.95] tracking-tight text-white"
                >
                  BEYOND
                </motion.span>
                <motion.span
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={titleLineVariants}
                  className="title-glow flex items-start gap-x-3 font-serif text-[clamp(3rem,11vw,8.5rem)] font-light leading-[0.95] tracking-tight text-transparent md:gap-x-5"
                >
                  <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text">
                    THE GATES
                  </span>
                  <StarSparkle className="mt-[0.15em] h-[0.7em] w-[0.7em] flex-shrink-0 text-amber-400 md:h-[0.6em] md:w-[0.6em]" />
                </motion.span>
              </motion.h1>

              {/* Metadata row (rating, duration, genre) */}
              <motion.div
                variants={itemVariants}
                className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-300 md:mb-10"
              >
                <span className="flex items-center gap-1.5 rounded-md bg-amber-400/15 px-2 py-1 text-xs font-bold tracking-widest text-amber-300 uppercase">
                  PG-13
                </span>
                <span className="font-medium text-slate-400">2h 12m</span>
                <span className="text-slate-500">•</span>
                <span className="font-medium text-slate-400">Anime · Fantasy · Drama</span>
                <span className="text-slate-500">•</span>
                <span className="flex items-center gap-1 font-medium text-amber-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
                  </svg>
                  8.7
                  <span className="text-slate-500">/10</span>
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-white px-7 py-4 text-base font-semibold text-slate-900 shadow-xl shadow-black/30 transition-all hover:shadow-amber-500/20 md:px-8 md:py-4 md:text-lg"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-amber-200 to-amber-400 transition-transform duration-500 group-hover:translate-x-0" />
                  <PlayIcon className="relative h-5 w-5 text-slate-900 md:h-6 md:w-6" />
                  <span className="relative tracking-wide">Watch Now</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.12)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-sm font-medium text-white backdrop-blur-sm transition-colors md:px-6 md:py-4 md:text-base"
                >
                  <PlusIcon className="h-5 w-5" />
                  <span className="hidden sm:inline">My List</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, color: "#fbbf24" }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-1 flex items-center gap-2 rounded-xl px-3 py-4 text-sm font-medium text-slate-300 transition-colors md:px-4"
                >
                  <InfoIcon className="h-5 w-5" />
                  <span className="hidden sm:inline">Details</span>
                </motion.button>
              </motion.div>

              {/* Critics / ratings bar */}
              <motion.div
                variants={itemVariants}
                className="mt-10 flex items-center gap-6 border-t border-white/10 pt-6 md:mt-12"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-serif text-2xl font-semibold text-white md:text-3xl">
                    92
                  </span>
                  <span className="text-xs leading-tight text-slate-400">
                    Rotten<br />Tomatoes
                  </span>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="flex items-center gap-2.5">
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-400">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
                      </svg>
                    ))}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-400/40">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-400">4.2 / 5 (24k)</span>
                </div>
              </motion.div>
            </div>

            {/* ====== RIGHT COLUMN — Light zone content ====== */}
            <div className="flex w-full max-w-md flex-col justify-end self-end pb-4 text-slate-800 lg:pb-16">
              <motion.div variants={itemVariants} className="mb-5 lg:mb-6">
                <p className="font-serif text-lg italic leading-relaxed text-slate-600 md:text-xl lg:text-2xl">
                  <span className="text-3xl leading-none text-amber-500/70">"</span>
                  Some doors are meant to be found, even if they were never meant to be opened.
                  <span className="text-3xl leading-none text-amber-500/70">"</span>
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="mb-6 text-sm leading-relaxed text-slate-700 md:mb-7 md:text-[15px] lg:text-base lg:leading-relaxed"
              >
                A sweeping animated fantasy from the visionary studio behind <em className="font-medium text-slate-900">Starlit Pathways</em>, following a quiet seventeen-year-old named Hina who discovers she alone can seal the ancient interdimensional doorways that threaten the Japanese archipelago. Her journey across rain-soaked countryside and neon-lit cities becomes as much a farewell to childhood as it is a race against catastrophe — a meditation on memory, loss, and the courage to close what must be left behind.
              </motion.p>

              {/* Crew / credits list */}
              <motion.div variants={itemVariants} className="space-y-2.5 text-sm md:text-[15px]">
                <div className="flex items-baseline gap-3">
                  <span className="w-20 flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Director
                  </span>
                  <span className="font-serif text-base font-medium text-slate-900 md:text-lg">
                    Kaito Nakamura
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="w-20 flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Studio
                  </span>
                  <span className="font-medium text-slate-800">
                    Aurora Animation Works
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="w-20 flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Cast
                  </span>
                  <span className="font-medium text-slate-800">
                    Yui Ishikawa, Kensho Ono, Kana Hanazawa
                  </span>
                </div>
              </motion.div>

              {/* Secondary link */}
              <motion.div variants={itemVariants} className="mt-6 md:mt-7">
                <button className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-amber-600">
                  <span className="border-b border-slate-900 pb-0.5 transition-colors group-hover:border-amber-600">
                    Read full synopsis
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade for scroll hint */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-40 h-24 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
      </section>

      {/* Spacer for scroll testing */}
      <section className="bg-slate-950 px-6 py-24 sm:px-10 md:px-14 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl text-white md:text-5xl">
            More Like This
          </h2>
          <p className="text-slate-400">Discover other curated titles hand-picked for your queue.</p>
        </div>
      </section>
    </main>
  );
}
