import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Lightbulb, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const sectionFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const pillars = [
  {
    Icon: HeartHandshake,
    title: "Rooted in care",
    body:
      "Restorative rhythms, multilingual mentors, and cohorts small enough that every learner is seen — brilliance stays calm.",
    ring: "from-coral/[0.2] via-white to-leaf/[0.15]",
  },
  {
    Icon: Lightbulb,
    title: "Inquiry & craft",
    body:
      "Literacy studios, STEM labs, and design sprints sit side‑by‑side so curiosity learns to sketch, prototype, and present.",
    ring: "from-sun/[0.35] via-white to-sky/[0.2]",
  },
  {
    Icon: Users,
    title: "Families in the loop",
    body:
      "Humane reporting, storytelling nights, and a living digital gallery keep home and school braided in honest conversation.",
    ring: "from-sky/[0.2] via-white to-coral/[0.15]",
  },
];

const ABOUT_IMAGE ="/hero/hero2.jpeg";

export default function AboutsStrip() {
  return (
    <section
      id="about"
      className="relative z-10 mx-4 mt-20 scroll-mt-28 sm:mx-6 lg:mx-auto lg:mt-24 lg:max-w-6xl lg:px-10"
    >
      <motion.div
        {...sectionFade}
        className="squircle overflow-hidden border border-ink/[0.08] bg-white/92 shadow-[0_32px_80px_-48px_rgba(45,30,23,0.5)] ring-8 ring-[#fff7ec]/90 backdrop-blur-sm"
      >
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.92fr)]">
          <div className="relative space-y-8 p-8 sm:p-10 lg:p-12 lg:pb-12">
            <div className="inline-flex rounded-full border border-coral/25 bg-coral/[0.08] px-4 py-1.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">About us</p>
            </div>
            <div className="space-y-5">
              <h2 className="max-w-xl text-[2rem] font-semibold leading-[1.12] text-ink sm:text-[2.35rem] sm:leading-[1.1]">
                A purposeful campus for{" "}
                <span className="bg-gradient-to-r from-coral via-[#ff7a47] to-leaf bg-clip-text text-transparent">
                  curious, fiercely kind learners
                </span>
                {" "}
                in classrooms that aim high without burning out.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-ink/70">
                PGKM stitches together neuroscience‑informed teaching, maker-minded studios, and outdoor play so every day
                feels structured yet breathable — learners build confidence without the scramble.
              </p>
              <p className="max-w-xl text-base leading-relaxed text-ink/70">
                We partner with families through transparent checkpoints, bilingual community nights, and student-led
                showcases renewed each term — not as performance, but as honest proof of growth.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#why-us"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream",
                  "shadow-[0_14px_36px_-24px_rgba(45,30,23,0.85)] transition hover:bg-coral"
                )}
              >
                Why choose PGKM
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#admission"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border-2 border-ink/[0.12] bg-white px-6 py-[0.7rem]",
                  "text-sm font-semibold text-ink transition hover:border-coral/40 hover:bg-cream"
                )}
              >
                Plan a visit
              </a>
            </div>
          </div>

          <div className="relative min-h-[260px] border-t border-ink/[0.06] bg-gradient-to-br from-cream via-white to-[#eef6ff] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:min-h-0">
            <div className="pointer-events-none absolute right-8 top-8 h-36 w-36 rounded-full bg-gradient-to-br from-coral/20 to-transparent blur-2xl lg:right-12" />
            <div className="pointer-events-none absolute bottom-12 left-6 h-32 w-32 rounded-full bg-gradient-to-tr from-leaf/15 to-transparent blur-2xl" />
            <motion.div
              initial={{ rotate: -1.5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative mx-auto h-full max-w-md lg:absolute lg:inset-6 lg:h-[calc(100%-3rem)] lg:max-w-none",
                "rounded-[clamp(1.25rem,3.5vw,1.85rem)] bg-gradient-to-br p-[3px]",
                "from-coral via-sun to-leaf shadow-[0_28px_60px_-38px_rgba(240,101,41,0.55)]"
              )}
            >
              <div className="squircle h-full overflow-hidden bg-ink/[0.04] ring-4 ring-white/90">
                <img src={ABOUT_IMAGE} alt="" className="h-full min-h-[220px] w-full object-cover lg:min-h-0 lg:aspect-auto" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/[0.25] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-ink/[0.07] bg-gradient-to-b from-cream/65 to-[#fdfaf5] px-6 py-10 sm:px-10 lg:px-12 lg:py-11">
          <p className="mb-8 max-w-2xl text-xs font-semibold uppercase tracking-[0.26em] text-ink/45">
            What anchors daily life here
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.Icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/90 p-6 shadow-[0_20px_50px_-40px_rgba(45,30,23,0.45)]",
                    "ring-2 ring-white/90"
                  )}
                >
                  <div
                    className={cn(
                      "absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-90 blur-2xl",
                      pillar.ring
                    )}
                    aria-hidden
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ink to-[#3d2e26] text-cream shadow-md">
                    <Icon className="h-6 w-6" strokeWidth={1.65} aria-hidden />
                  </div>
                  <h3 className="relative mt-5 text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink/62">{pillar.body}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
