import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, Plane, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE_POWER = 4;
const DEFAULT_DURATION_MS = 2200;

/** Each stat drives a numeric count-up; renders with suffix/prefix/format */
const STATS = [
  {
    icon: Shield,
    hue: "from-coral to-[#e85a26]",
    numericEnd: 40,
    prefix: "",
    suffix: "+",
    useGrouping: false,
    label: "Partner schools",
    durationMs: DEFAULT_DURATION_MS,
  },
  {
    icon: BadgeCheck,
    hue: "from-sun to-[#ffb300]",
    numericEnd: 9,
    prefix: "",
    suffix: "",
    postfix: "K+",
    useGrouping: false,
    label: "Learners weekly",
    durationMs: DEFAULT_DURATION_MS,
  },
  {
    icon: Plane,
    hue: "from-leaf to-[#43a047]",
    numericEnd: 65,
    prefix: "",
    suffix: "+",
    useGrouping: false,
    label: "Creative labs",
    durationMs: DEFAULT_DURATION_MS,
  },
];

function CountUpFigure({
  numericEnd,
  prefix,
  suffix,
  postfix,
  useGrouping,
  durationMs,
  isInView,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let rafId;
    const start = performance.now();

    const frame = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** EASE_POWER;
      setValue(Math.round(eased * numericEnd));
      if (t < 1) rafId = requestAnimationFrame(frame);
      else setValue(numericEnd);
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, numericEnd, durationMs]);

  const numStr = useGrouping ? value.toLocaleString() : String(value);

  return (
    <span className="tabular-nums">
      {prefix}
      {numStr}
      {suffix}
      {postfix ?? ""}
    </span>
  );
}

export default function StatsRibbon() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.35 });

  return (
    <section ref={containerRef} className="relative z-10 mx-4 mt-14 sm:mx-6 lg:mx-auto lg:mt-20 lg:max-w-6xl lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="squircle relative overflow-hidden bg-ink px-6 py-8 text-cream shadow-lift sm:px-10 sm:py-10"
      >
        <div className="pointer-events-none absolute -right-10 top-0 flex h-24 w-24 items-center justify-center opacity-[0.15]">
          <Plane className="h-14 w-14 rotate-12 text-cream" strokeWidth={1.5} aria-hidden />
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-3"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
          }}
        >
          {STATS.map(
            ({
              icon: Icon,
              hue,
              numericEnd,
              prefix,
              suffix,
              postfix,
              useGrouping,
              label,
              durationMs,
            }) => (
              <motion.article
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="flex items-center gap-4"
              >
                <div
                  className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
                    hue
                  )}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className="text-3xl font-semibold tracking-tight tabular-nums md:text-[1.875rem]">
                    <CountUpFigure
                      numericEnd={numericEnd}
                      prefix={prefix}
                      suffix={suffix}
                      postfix={postfix}
                      useGrouping={useGrouping}
                      durationMs={durationMs}
                      isInView={isInView}
                    />
                  </p>
                  <p className="text-sm text-cream/70">{label}</p>
                </div>
              </motion.article>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
