import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Globe2,
  Link2,
  MapPin,
  Palette,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";
import AboutsStrip from "@/components/home/AboutsStrip.jsx";
import StatsRibbon from "@/components/home/StatsRibbon.jsx";

const sectionFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function HomeSections() {
  return (
    <>
      <StatsRibbon />
      <AboutsStrip />
      <WhyGallery />
      <ProgramsGrid />
      <DualBanners />
      <EmpowerBlock />
      <MediaStrip />
      <DisclosureBand />
      <ContactFooter />
    </>
  );
}

function WhyGallery() {
  const cards = [
    {
      title: "Human skills studio",
      sub: "Curiosity coached, not cramped.",
      image: "/hero/hero3.jpg",
      hue: "from-coral via-[#ff7a47] to-coral",
    },
    {
      title: "Imagination engineered",
      sub: "Labs that feel like playgrounds.",
      image: "/hero/hero2.jpeg",
      hue: "from-leaf via-[#66bb6a] to-[#388e3c]",
    },
    {
      title: "Build your wings",
      sub: "Mentorship that listens first.",
      image: "/hero/hero3.jpg",
      hue: "from-sky via-[#64b5f6] to-[#2196f3]",
    },
  ];
  const gallery = [
    "/hero/hero3.jpg",
    "/hero/hero2.jpeg",
    "/hero/hero3.jpg",
    "/hero/hero2.jpeg",
  ];
  return (
    <>
      <section id="why-us" className="mx-auto mt-24 max-w-6xl scroll-mt-28 px-4 sm:px-6 lg:px-10">
        <motion.div {...sectionFade} className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-leaf">Why choose us</p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-[2.25rem]">
              Smart, clever kids ready to fly high.
            </h2>
            <p className="text-ink/65">
              We choreograph challenge with care — small cohorts, restorative circles, and faculty who model
              lifelong learning.
            </p>
          </div>
          <a
            href="#admission"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-coral hover:border-coral"
          >
            Enroll now
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[1.85rem] border border-white/60 bg-white/70 p-4 shadow-[0_18px_40px_-30px_rgba(45,30,23,0.35)] ring-4 ring-white/80 backdrop-blur"
            >
              <div className={`relative overflow-hidden rounded-[1.55rem] bg-gradient-to-br p-[2px] ${c.hue}`}>
                <div className="overflow-hidden rounded-[1.43rem]">
                  <img
                    src={c.image}
                    alt=""
                    className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="mt-5 px-2">
                <h3 className="text-xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-ink/55">{c.sub}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto mt-28 max-w-6xl scroll-mt-28 px-4 sm:px-6 lg:px-10">
        <motion.div {...sectionFade} className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky">Gallery</p>
            <h2 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
              Moments that feel handcrafted.
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {gallery.map((src, i) => (
            <motion.figure
              key={src}
              variants={{
                hidden: { opacity: 0, scale: 0.94 },
                show: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.45 }}
              className={cn(
                "overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-card",
                i === 1 && "sm:translate-y-6",
                i === 3 && "-translate-y-2 sm:-translate-y-4"
              )}
            >
              <img src={src} alt="" className="aspect-[5/6] w-full object-cover transition duration-700 hover:scale-105" />
            </motion.figure>
          ))}
        </motion.div>
      </section>
    </>
  );
}

function ProgramsGrid() {
  const programs = [
    { title: "Foundational Literacy", tier: "Nursery — Grade 2", Icon: BookOpen },
    { title: "Inquiry Labs", tier: "Grades 3 — 8", Icon: FlaskConical },
    { title: "Global Competence", tier: "Middle Years", Icon: Globe2 },
    { title: "Visual Arts Intensive", tier: "Open elective", Icon: Palette },
  ];
  return (
    <section className="mx-auto mt-28 max-w-6xl px-4 sm:px-6 lg:px-10">
      <motion.div {...sectionFade} className="text-center space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">Programs</p>
        <h2 className="text-3xl font-semibold text-ink sm:text-[2.35rem]">
          Shaping the future — one learner arc at a time.
        </h2>
        <p className="mx-auto max-w-2xl text-ink/60">
          Interdisciplinary bursts, multilingual story circles, and AI-safe creativity sprints converge in calendars
          that breathe.
        </p>
      </motion.div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((p, i) => {
          const Icon = p.Icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_22px_50px_-34px_rgba(45,30,23,0.75)] ring-8 ring-[#fff7ec] transition group-hover:-translate-y-2">
                <svg className="pointer-events-none absolute inset-[-10px]" viewBox="0 0 120 120" fill="none" aria-hidden>
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke={`url(#prog-ring-${i})`}
                    strokeWidth="3.5"
                    strokeDasharray="6 10"
                  />
                  <defs>
                    <linearGradient
                      id={`prog-ring-${i}`}
                      x1="0"
                      y1="0"
                      x2="120"
                      y2="120"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#F06529" />
                      <stop offset="0.5" stopColor="#FFC107" />
                      <stop offset="1" stopColor="#4CAF50" />
                    </linearGradient>
                  </defs>
                </svg>
                <Icon className="relative h-10 w-10 text-ink/85" strokeWidth={1.6} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 text-sm text-ink/50">{p.tier}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function DualBanners() {
  return (
    <section id="admission" className="mx-auto mt-28 max-w-6xl scroll-mt-28 px-4 sm:px-6 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.article
          {...sectionFade}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sun via-[#ffd449] to-sun px-8 py-10 shadow-lift ring-8 ring-[#FFF4D4]"
        >
          <div className="pointer-events-none absolute -right-4 top-8 flex text-ink/20">
            <Link2 className="h-24 w-24 -rotate-6" strokeWidth={1.25} aria-hidden />
          </div>
          <p className="text-2xl font-semibold text-ink sm:text-[2.1rem] max-w-[18ch] leading-tight">
            Confidence stitched into brighter futures.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-[#1a211a]"
          >
            Book a walkthrough
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.article>
        <motion.article
          {...sectionFade}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-coral via-[#ff6b35] to-[#e85f25] px-8 py-10 text-white shadow-lift ring-8 ring-orange-50"
        >
          <div className="pointer-events-none absolute right-8 top-12 text-white/25">
            <MapPin className="h-16 w-16" strokeWidth={1.35} aria-hidden />
          </div>
          <p className="text-2xl font-semibold sm:text-[2.1rem] max-w-[17ch] leading-tight">
            Helping learners aim their wildest dreams.
          </p>
          <p className="mt-4 max-w-sm text-sm text-white/85">
            Rolling admissions · sibling care · multilingual counselors on campus.
          </p>
          <a
            href="#media"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/25"
          >
            Learn pathways
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.article>
      </div>
    </section>
  );
}

function EmpowerBlock() {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-4 sm:px-6 lg:px-10">
      <motion.div
        {...sectionFade}
        className="grid items-center gap-12 rounded-[2.25rem] border border-white/70 bg-white/85 p-8 shadow-[0_32px_80px_-52px_rgba(45,30,23,0.55)] backdrop-blur-lg sm:p-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky">Campus ethos</p>
          <h2 className="text-[2rem] font-semibold leading-[1.1] text-ink sm:text-[2.4rem]">
            Empower your kids with calm brilliance.
          </h2>
          <p className="max-w-xl text-ink/65">
            Guided autonomy, multilingual mentors, restorative practices, and cinematic documentation of student work —
            housed in LEED-inspired learning neighborhoods.
          </p>
          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-br from-coral via-coral to-[#e85120] px-8 py-[0.9rem] text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(240,101,41,0.75)] hover:brightness-105"
            >
              Get acquainted
            </a>
          </div>
          <dl className="grid gap-4 pt-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-ink/10 bg-cream px-5 py-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-ink/40">Families</dt>
              <dd className="mt-2 text-3xl font-semibold text-ink">18K+ connected</dd>
            </div>
            <div className="rounded-2xl border border-dashed border-ink/10 bg-cream px-5 py-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-ink/40">Nation states</dt>
              <dd className="mt-2 text-3xl font-semibold text-ink">120+ diaspora links</dd>
            </div>
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <motion.div
            initial={{ rotate: -2 }}
            animate={{ rotate: [-2, -1.2, -2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="relative mx-auto overflow-hidden rounded-[2.75rem] border-[6px] border-white bg-gradient-to-tr from-[#64b5f6] via-sky to-[#1e88e5] p-3 shadow-[0_40px_90px_-50px_rgba(33,150,243,0.8)] organic-blob"
          >
            <div className="organic-blob overflow-hidden ring-8 ring-[#DCEBFF]/90">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=760&q=80"
                alt=""
                className="aspect-[5/7] w-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [-6, 6, -6], x: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 6.5 }}
            className="absolute -left-4 top-[18%] w-[min(11rem,calc(100%-2rem))] rounded-[1.25rem] border border-white/70 bg-white/95 p-4 text-sm shadow-lift backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-ink/40">Momentum</p>
            <p className="text-3xl font-semibold text-ink">45 mini films</p>
            <p className="mt-2 text-xs text-ink/55">Documenting capstone arcs each trimester.</p>
          </motion.div>
          <motion.div
            animate={{ y: [5, -4, 5] }}
            transition={{ repeat: Infinity, duration: 5.5 }}
            className="absolute -right-6 bottom-[12%] w-[min(12rem,calc(100%-2rem))] rounded-[1.25rem] border border-white/70 bg-white/95 p-4 text-sm shadow-lift backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-ink/40">Collaborations</p>
            <p className="text-3xl font-semibold text-ink">150+ creatives</p>
            <p className="mt-2 text-xs text-ink/55">Global guest faculty & parent skill shares.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function MediaStrip() {
  return (
    <section id="media" className="mx-auto mt-28 max-w-6xl scroll-mt-28 px-4 sm:px-6 lg:px-10">
      <motion.div {...sectionFade} className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-coral">Media</p>
          <h2 className="text-[2rem] font-semibold text-ink">Spotlight reels & podcasts</h2>
          <p className="max-w-xl text-sm text-ink/60">
            Listen to learners narrate design sprints · watch athletics morph into kinetic art.
          </p>
        </div>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/[0.1] px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
        >
          <Play className="h-5 w-5 fill-current" />
          Open channel
        </a>
      </motion.div>
      <motion.div {...sectionFade} className="mt-10 rounded-[2rem] border border-white/70 bg-black text-white shadow-lift overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1400&q=80"
          alt=""
          className="aspect-[21/10] min-h-[200px] w-full object-cover opacity-70 sm:aspect-[21/9]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-8 flex flex-col justify-end gap-3 sm:inset-12 pb-12 sm:pb-[4vh] ">
          <p className="text-xs uppercase tracking-[0.3em] text-white/65">Featured short</p>
          <p className="text-3xl leading-tight sm:text-4xl max-w-xl">
            “We built our own weather station!” — Batch of 2033
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function DisclosureBand() {
  const links = [
    "Mandatory Public Disclosure CBSE",
    "Trust deed & PAN",
    "Building safety certificates",
    "Water & fire NOC synopsis",
    "Fee structure FY 2026-27",
    "Annual report · academic audit",
  ];
  return (
    <section id="disclosure" className="mx-auto mt-24 max-w-6xl scroll-mt-28 px-4 pb-16 sm:px-6 lg:px-10">
      <motion.div {...sectionFade} className="rounded-[1.85rem] border border-dashed border-ink/15 bg-[#fcf9f5] px-6 py-8 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/45">Mandatory disclosure</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">Transparent by design.</h2>
            <p className="mt-2 max-w-lg text-sm text-ink/60">
              Download compliance packs or request stamped copies from the registrar — we respond within two working
              days.
            </p>
          </div>
          <ul className="grid gap-2 text-sm text-ink/75 sm:text-right">
            {links.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-coral inline-flex items-center gap-1">
                  {l}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

function ContactFooter() {
  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-10">
        <motion.div
          {...sectionFade}
          className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-sun via-[#ffe082] to-sun px-6 py-10 shadow-lift sm:px-10 sm:py-12 ring-8 ring-[#FFF6D7]"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/25 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="aspect-[5/4] w-full object-cover sm:aspect-[16/11]"
              />
            </div>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/45">Upcoming open day</p>
              <h2 className="text-[2rem] font-semibold leading-tight text-ink sm:text-[2.35rem]">
                Building children at PGKM — one calm conversation at a time.
              </h2>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-ink shadow-sm ring-1 ring-ink/5">
                <span className="h-2 w-2 rounded-full bg-coral animate-pulse-soft" />
                Saturday · 08 March 2026 · 10:00 AM — 1:00 PM
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-ink/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 ring-1 ring-ink/5">
                  <MapPin className="h-4 w-4 text-coral" />
                  Ridge District, Learning Loop 09
                </span>
                <a
                  href="mailto:admissions@pgkm.school"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 font-semibold text-cream hover:bg-coral"
                >
                  RSVP now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
