import { motion } from "framer-motion";
import { ArrowUpRight, Check, Paperclip, Zap } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[7.25rem] sm:pt-[7.75rem] lg:pt-[8.75rem]"
    >
      <div className="pointer-events-none absolute -left-32 top-12 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sun/30 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-[18%] h-[340px] w-[340px] rounded-full bg-gradient-to-bl from-sky/35 via-transparent to-transparent blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-10">
        <motion.div {...fade} className="relative space-y-6 lg:col-span-5">
          <p className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-ink/50 shadow-[0_1px_0_rgba(45,30,23,0.06)] ring-1 ring-ink/[0.06]">
            Gen PGKM Learning · Pre-K to Grade 12
          </p>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.75rem] sm:leading-[1.06] lg:text-[2.85rem] xl:text-[3.05rem]">
            Putting your child&apos;s{" "}
            <span className="relative inline-flex">
              Future
              <svg
                className="pointer-events-none absolute -bottom-1 left-0 w-full opacity-95"
                viewBox="0 0 200 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 11C54 6 146 13 192 9"
                  stroke="url(#h1u)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="h1u" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F06529" />
                    <stop offset="0.5" stopColor="#FFC107" />
                    <stop offset="1" stopColor="#4CAF50" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            in great motion.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-ink/65">
            Crafted curricula, fearless creativity, and a campus built for joyful rigor —
            designed for curious minds growing up digital-native.
          </p>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/70">
            {["No Admission Fee*", "Flexible Start Dates", "Scholarships For Merit"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-leaf/15 text-leaf ring-4 ring-white/80">
                  <Check className="h-4 w-4" strokeWidth={2.75} />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="flex w-full max-w-md flex-row items-stretch gap-3">
            <motion.a
              href="#admission"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="group inline-flex min-h-[2.5rem] flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-[#ff7936] via-coral to-[#ea4e1f] px-3 py-2 text-center text-xs font-semibold text-white shadow-[0_12px_32px_-14px_rgba(240,101,41,0.55)] sm:min-h-[2.625rem] sm:px-4 sm:text-[13px]"
            >
              Get started
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px] sm:h-[1.65rem] sm:w-[1.65rem]">
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.25} />
              </span>
            </motion.a>
            <a
              href="#about"
              className="inline-flex min-h-[2.5rem] flex-1 items-center justify-center rounded-full border border-ink/[0.14] bg-white px-3 py-2 text-center text-xs font-semibold text-ink shadow-sm transition hover:border-ink/25 hover:bg-cream sm:min-h-[2.625rem] sm:px-4 sm:text-[13px]"
            >
              About us
            </a>
          </div>
          <p className="text-xs text-ink/45">*T&amp;Cs apply · seats limited per cohort</p>
        </motion.div>

        <div className="relative lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto grid max-w-lg grid-cols-2 gap-4 pb-8 sm:gap-6 lg:max-w-none"
          >
            <HeroCard
              accent="leaf"
              image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=560&q=80"
              caption="Confidence that grows gently"
              decor="Organic study circle"
              delay={0.05}
            />
            <HeroCard
              accent="sun"
              image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=560&q=80"
              caption="Dreams anchored in empathy"
              decor="Arts & athletics balance"
              delay={0.12}
              offset
            />
          </motion.div>

          <motion.span
            className="pointer-events-none absolute -left-8 top-[10%] hidden h-14 w-14 rounded-[1.75rem] bg-gradient-to-br from-sky to-[#2196f3] text-white shadow-lg lg:flex lg:items-center lg:justify-center"
            animate={{ y: [-4, 4, -4], rotate: [-8, -4, -8] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <Paperclip className="h-7 w-7" strokeWidth={2} aria-hidden />
          </motion.span>
          <motion.span
            className="pointer-events-none absolute -right-2 bottom-[28%] flex h-16 w-16 items-center justify-center rounded-[2rem] bg-gradient-to-tr from-[#ffb300] via-sun to-[#ffd54f] text-white shadow-lg sm:right-8 lg:right-[-1rem]"
            animate={{ scale: [1, 1.06, 1], rotate: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity }}
            aria-hidden
          >
            <Zap className="h-8 w-8" strokeWidth={2.25} aria-hidden />
          </motion.span>
        </div>
      </div>
    </section>
  );
}

function HeroCard({ accent, image, caption, decor, delay, offset }) {
  const accents = {
    leaf: "from-leaf to-[#2e7d32]",
    sun: "from-[#ffd54f] to-sun",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={offset ? "translate-y-6 sm:translate-y-10 lg:translate-y-12" : "translate-y-0"}
    >
      <div
        className={`relative overflow-hidden p-[3px] organic-blob-alt bg-gradient-to-br ${accents[accent]} shadow-[0_24px_50px_-30px_rgba(45,30,23,0.45)]`}
      >
        <div className="organic-blob-alt overflow-hidden bg-cream ring-8 ring-white/90">
          <img
            src={image}
            alt=""
            className="aspect-[4/5] h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent" />
        </div>
      </div>
      <div className="mt-5 space-y-1 px-1">
        <p className="text-sm font-semibold text-ink">{caption}</p>
        <p className="text-xs leading-relaxed text-ink/50">{decor}</p>
      </div>
    </motion.div>
  );
}
