import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_NAV } from "@/constants/site-nav.js";
import { cn } from "@/lib/utils";

const fadeBlock = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate mt-14 text-cream sm:mt-20">
      {/* Bookend stripe — echoes coral / sun / leaf elsewhere */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-coral via-sun to-leaf",
          "opacity-95 shadow-[0_0_28px_-4px_rgba(240,101,41,0.45)]"
        )}
      />
      <div className="squircle relative overflow-hidden rounded-t-[clamp(1.5rem,4vw,2.25rem)] bg-ink shadow-[0_-40px_100px_-60px_rgba(45,30,23,0.55)] md:rounded-t-none">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% -10%, rgba(240,101,41,0.45), transparent 42%), radial-gradient(circle at 92% 20%, rgba(255,193,7,0.35), transparent 38%), radial-gradient(circle at 50% 120%, rgba(76,175,80,0.25), transparent 45%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-[3.35rem] sm:px-6 sm:pb-11 sm:pt-14 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
            <motion.div {...fadeBlock} transition={{ ...fadeBlock.transition, delay: 0.02 }}>
              <a href="#home" className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="PGKM School"
                  width={288}
                  height={80}
                  className="h-[3.25rem] w-auto object-contain object-left brightness-0 invert"
                />
              </a>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/[0.72]">
                A calm, ambitious CBSE-aligned campus focused on humane pedagogy — where families, faculty, and learners
                grow together with clarity and care.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#admission"
                  className="inline-flex items-center rounded-full border border-cream/25 bg-white/[0.07] px-5 py-2.5 text-sm font-semibold text-cream backdrop-blur-sm transition hover:border-coral/50 hover:bg-coral/15"
                >
                  Admissions
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-transparent bg-gradient-to-br from-sun via-coral to-[#e85a26] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_-20px_rgba(240,101,41,0.65)] transition hover:brightness-105"
                >
                  Reach us
                </a>
              </div>
            </motion.div>

            <motion.nav {...fadeBlock} transition={{ ...fadeBlock.transition, delay: 0.08 }} aria-label="Footer">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40">Explore</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {SITE_NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex py-1 text-sm font-semibold text-cream/80 transition hover:text-cream"
                    >
                      <span className="bg-gradient-to-r from-transparent to-transparent bg-[length:0%_2px] bg-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 hover:bg-gradient-to-r hover:from-coral hover:to-sun hover:bg-[length:100%_2px]">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div {...fadeBlock} transition={{ ...fadeBlock.transition, delay: 0.14 }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40">Contact</p>
              <ul className="mt-6 space-y-4 text-sm text-cream/75">
                <li>
                  <a
                    href="mailto:admissions@pgkm.school"
                    className="group flex items-start gap-3 transition-colors hover:text-cream"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/10">
                      <Mail className="h-4 w-4 text-sun opacity-95" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-cream/40">Email</span>
                      admissions@pgkm.school
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+911800000000" className="group flex items-start gap-3 transition-colors hover:text-cream">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/10">
                      <Phone className="h-4 w-4 text-leaf opacity-95" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-cream/40">Phone</span>
                      +91 1800-000-000
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 pt-1">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/10">
                    <MapPin className="h-4 w-4 text-coral opacity-95" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-cream/40">Campus</span>
                    <span className="leading-snug">
                      Visiting address shared on confirmation · Ridge District, Learning Loop 09
                    </span>
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            {...fadeBlock}
            transition={{ ...fadeBlock.transition, delay: 0.06 }}
            className="mt-12 flex flex-col gap-5 border-t border-white/[0.1] pt-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
          >
            <p className="text-sm text-cream/[0.62]">
              © {year} PGKM. <span className="hidden sm:inline">All rights reserved.</span>
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-cream/[0.7]">
              <a href="#disclosure" className="transition hover:text-coral">
                Mandatory disclosure
              </a>
              <a href="#gallery" className="transition hover:text-coral">
                Gallery
              </a>
              <a href="#contact" className="transition hover:text-coral">
                Registrar
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeBlock}
            transition={{ ...fadeBlock.transition, delay: 0.1 }}
            className="mx-auto mt-10 max-w-2xl text-center border-t border-white/[0.08] pt-8"
          >
            <p className="text-[13px] text-cream/50 sm:text-sm">
              Designed &amp; developed by <span className="text-cream/35">&nbsp;—&nbsp;</span>
              <span className="font-semibold tracking-tight text-cream/[0.88]">TheSocialKollab</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
