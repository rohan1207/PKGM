import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_NAV } from "@/constants/site-nav.js";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "w-full rounded-b-[1.65rem] border-b border-x-0 border-t-0 border-ink/[0.1]",
            "bg-cream px-4 py-4 shadow-none transition-[box-shadow,background-color] duration-300 sm:px-6 lg:rounded-b-[1.85rem] lg:px-8 lg:py-[1rem]",
            scrolled ? "shadow-[0_14px_40px_-28px_rgba(45,30,23,0.28)]" : ""
          )}
        >
          <div className="mx-auto flex max-w-[90rem] items-center gap-3 sm:gap-5 lg:gap-6">
            <a href="#home" className="group flex shrink-0 items-center">
              <img
                src="/logo.png"
                alt="PGKM School"
                width={288}
                height={80}
                className="h-14 w-auto object-contain object-left sm:h-16 lg:h-[4.5rem]"
              />
            </a>

            <nav aria-label="Primary" className="hidden min-w-0 flex-1 justify-center lg:flex">
              <ul className="no-scrollbar flex max-w-full flex-nowrap items-center justify-center gap-x-2 overflow-x-auto py-1 xl:gap-x-3 2xl:gap-x-4">
                {SITE_NAV.map((item) => (
                  <li key={item.href} className="shrink-0">
                    <a
                      href={item.href}
                      className="relative whitespace-nowrap px-2 py-1 text-[13px] font-semibold text-ink/[0.78] transition-colors hover:text-ink group/link lg:text-[14px] xl:text-[15px]"
                    >
                      {item.label}
                      <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-px max-w-[calc(100%-8px)] origin-center scale-x-0 bg-gradient-to-r from-coral via-sun to-leaf opacity-90 transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
              <a
                href="#admission"
                className="hidden rounded-[1rem] border-2 border-ink px-6 py-[0.55rem] text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-cream xl:inline-flex"
              >
                Enquire
              </a>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/[0.12] bg-white text-ink lg:hidden"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X size={22} strokeWidth={1.85} /> : <Menu size={22} strokeWidth={1.85} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/35 lg:hidden"
            onClick={() => setOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="sheet"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            style={{ top: "var(--nav-h)" }}
            className="squircle fixed right-4 z-50 mt-3 flex max-h-[min(70vh,calc(100dvh-var(--nav-h)-2rem))] w-[min(100%,23rem)] flex-col gap-1 overflow-y-auto rounded-2xl border border-ink/[0.1] bg-cream p-4 shadow-xl lg:hidden"
          >
            <div className="mb-2 flex items-center px-3 py-2">
              <img src="/logo.png" alt="" className="h-14 w-auto max-w-[200px] object-contain object-left" />
            </div>
            {SITE_NAV.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                className="rounded-2xl px-4 py-3.5 text-[15px] font-semibold text-ink/80 hover:bg-black/[0.04] hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: SITE_NAV.length * 0.04 }}
              className="mt-3 rounded-full bg-gradient-to-br from-sun via-coral to-coral px-4 py-3.5 text-center text-[15px] font-semibold text-white shadow-[0_12px_32px_-12px_rgba(240,101,41,0.55)]"
              onClick={() => setOpen(false)}
            >
              Enquiry
            </motion.a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
