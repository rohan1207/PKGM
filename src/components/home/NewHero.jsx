import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const BG_IMAGES = ["/hero/hero1.png", "/hero/hero2.jpeg", "/hero/hero3.jpg"];
const INTERVAL_MS = 7000;
/** Readable on dark overlays — warm highlight, not deep orange */
const ACCENT_LINE = "#FFC857";
const HEADLINE_ACCENT = "#FFEFE4";
const HEADLINE_ACCENT_SHADOW =
  "0 2px 14px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.9), 0 0 40px rgba(255,185,120,0.35)";
/** Primary actions — PGKM coral (better contrast than flat #F55200) */
const BTN_CORAL = "#F06529";
const BTN_CORAL_GLOW = "rgba(240,101,41,0.5)";

export default function NewHero() {
  const [active, setActive] = useState(0);
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    BG_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const next = useMemo(
    () => () => setActive((i) => (i + 1) % BG_IMAGES.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next]);

  const goTo = (i) => setActive(i);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section
        id="home"
        className="relative isolate w-full overflow-hidden"
        style={{ height: "100dvh", minHeight: "600px" }}
      >
        {/* ── Background image stack ── */}
        <div className="absolute inset-0">
          {BG_IMAGES.map((src, i) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{ zIndex: i === active ? 2 : 1 }}
            >
              <motion.img
                src={src}
                alt=""
                className="h-full w-full object-cover object-center"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                initial={false}
                animate={i === active ? { scale: 1.07 } : { scale: 1.0 }}
                transition={{ duration: INTERVAL_MS / 1000 + 1.6, ease: "linear" }}
              />
            </motion.div>
          ))}

          {/* Overlay: top dark strip + bottom heavy gradient + edge vignette */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,3,2,0.60) 0%, rgba(5,3,2,0.08) 28%, rgba(5,3,2,0.08) 52%, rgba(5,3,2,0.70) 78%, rgba(5,3,2,0.92) 100%)",
            }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "radial-gradient(ellipse 110% 100% at 50% 50%, transparent 38%, rgba(5,3,2,0.48) 100%)",
            }}
          />
        </div>

        {/* ── Content — bottom-left anchored ── */}
        <div
          className="relative z-20 flex h-full flex-col justify-end"
          style={{ paddingTop: "var(--nav-h, 5rem)" }}
        >
          <div className="w-full px-8 pb-16 sm:px-14 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex max-w-3xl flex-col gap-5"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span
                  className="block h-[3px] w-9 rounded-full shadow-[0_0_14px_rgba(255,200,87,0.55)]"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT_LINE}, #FFE082)`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.22em",
                    color: "rgba(255,255,255,0.60)",
                    textTransform: "uppercase",
                  }}
                >
                  CBSE Gurukul · Kondhwa, Pune
                </span>
              </div>

              {/* Headline */}
              <div style={{ lineHeight: 1.06 }}>
                <h1
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "white",
                    textShadow: "0 2px 40px rgba(0,0,0,0.55)",
                    margin: 0,
                  }}
                >
                  An Ultra Modern
                </h1>
                <h1
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    textShadow: "0 2px 40px rgba(0,0,0,0.45)",
                    margin: 0,
                  }}
                >
                  <span style={{ color: "white" }}>Gurukul </span>
                  <span style={{ color: HEADLINE_ACCENT, textShadow: HEADLINE_ACCENT_SHADOW }}>
                    for Alpha Generation
                  </span>
                </h1>
              </div>

              {/* Body */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(0.85rem, 1.3vw, 0.96rem)",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.55)",
                  maxWidth: "34rem",
                  margin: 0,
                  textShadow: "0 1px 10px rgba(0,0,0,0.5)",
                }}
              >
                On a mission to prepare your child for life and careers of{" "}
                <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>
                  Viksit Bharat 2047
                </span>{" "}
                and beyond.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-6 pt-1">
                <a
                  href="#contact"
                  onMouseEnter={() => setBtnHovered(true)}
                  onMouseLeave={() => setBtnHovered(false)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    padding: "0.65rem 1.6rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color: "white",
                    background: btnHovered ? BTN_CORAL : "rgba(255,255,255,0.12)",
                    border: `1px solid ${btnHovered ? BTN_CORAL : "rgba(255,255,255,0.26)"}`,
                    backdropFilter: "blur(10px)",
                    boxShadow: btnHovered ? `0 12px 36px -10px ${BTN_CORAL_GLOW}` : "0 1px 0 rgba(255,255,255,0.06) inset",
                    transition: "all 0.25s ease",
                    textDecoration: "none",
                  }}
                >
                  Enquire Now
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path
                      d="M2 11L11 2M11 2H5M11 2V8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="#about"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.83rem",
                    fontWeight: 400,
                    letterSpacing: "0.03em",
                    color: "rgba(255,255,255,0.50)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.50)")}
                >
                  Explore more
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1.5 5.5h8M5.5 1.5l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Slide indicators */}
              <div className="flex items-center gap-2 pt-4">
                {BG_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    style={{
                      height: "2px",
                      width: i === active ? "3rem" : "1.25rem",
                      borderRadius: "9999px",
                      background: i === active ? ACCENT_LINE : "rgba(255,255,255,0.22)",
                      boxShadow:
                        i === active ? "0 0 14px rgba(255,200,87,0.45)" : "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "all 0.35s ease",
                    }}
                  />
                ))}
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.28)",
                    marginLeft: "0.5rem",
                  }}
                >
                  0{active + 1} / 0{BG_IMAGES.length}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}