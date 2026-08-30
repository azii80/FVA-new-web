"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Scissors, TrendingUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

export function PortfolioCard({ item }) {
  const wide = item.span === "wide";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex overflow-hidden rounded-4xl bg-surface hairline",
        "min-h-[360px] sm:col-span-2 sm:min-h-[400px] lg:col-span-2",
        wide && "lg:col-span-4"
      )}
    >
      <a
        href="#contact"
        className="flex w-full flex-col"
        aria-label={`${item.title} — view project`}
      >
        {/* thumbnail — flexes so cards in a row share one height */}
        <div className="relative flex-1 overflow-hidden bg-canvas">
          <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]">
            <Thumb kind={item.kind} />
          </div>

          {/* hover veil + arrow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 shadow-[var(--shadow-soft)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </span>
        </div>

        {/* meta — category and stat share a row so the title never truncates */}
        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-500">
              {item.category}
            </p>
            {item.stat && (
              <span className="shrink-0 rounded-full bg-canvas px-3 py-1.5 text-[12px] font-semibold text-ink-muted hairline">
                {item.stat}
              </span>
            )}
          </div>
          <h3 className="mt-2 text-lg font-semibold leading-tight tracking-[-0.03em] sm:text-xl">
            {item.title}
          </h3>
        </div>
      </a>
    </motion.article>
  );
}

/* ------------------------------- thumbnails ------------------------------- */

function Thumb({ kind }) {
  const map = {
    clips: ClipsThumb,
    chart: ChartThumb,
    campaign: CampaignThumb,
    player: PlayerThumb,
    reels: ReelsThumb,
    grid: GridThumb,
  };
  const C = map[kind] ?? PlayerThumb;
  return <C />;
}

function Canvas({ children, tint = "from-brand-50 to-white" }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", tint)}>
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      {children}
    </div>
  );
}

/** Podcast → 15 shorts: one bar splitting into a shelf of vertical clips. */
function ClipsThumb() {
  return (
    <Canvas>
      <div className="absolute inset-0 flex flex-col justify-center gap-[7%] p-6 sm:p-8">
        <div className="relative h-[16%] min-h-[36px] overflow-hidden rounded-xl brand-gradient">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.4),transparent_60%)]" />
          <div className="absolute inset-y-0 left-4 flex items-center gap-2 text-[11px] font-semibold text-white">
            <Scissors size={13} /> 58:14 source
          </div>
        </div>

        <div className="flex h-[46%] min-h-[64px] gap-2 sm:gap-2.5">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex h-full flex-1 flex-col rounded-lg bg-white p-1.5 shadow-[var(--shadow-soft)]"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
            >
              <div
                className="mx-auto w-[74%] flex-1 rounded bg-gradient-to-b from-brand-500/80 to-indigo-brand-500/50"
                style={{ opacity: 0.45 + i * 0.08 }}
              />
              <div className="mx-auto mt-1.5 h-1 w-[56%] shrink-0 rounded-full bg-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </Canvas>
  );
}

/** YouTube strategy: a rising retention curve. */
function ChartThumb() {
  return (
    <Canvas tint="from-white to-brand-50">
      <div className="absolute inset-0 p-6 sm:p-8">
        <div className="flex h-full flex-col justify-between rounded-2xl bg-white/85 p-4 shadow-[var(--shadow-soft)] backdrop-blur-sm">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-ink-muted">
            <TrendingUp size={14} className="text-brand-500" />
            Watch time
          </div>
          <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="fva-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#2b6bf3" stopOpacity="0.28" />
                <stop offset="1" stopColor="#2b6bf3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 70 L26 62 L52 66 L78 48 L104 52 L130 32 L156 24 L182 10 L200 6 L200 80 L0 80 Z"
              fill="url(#fva-area)"
            />
            <motion.path
              d="M0 70 L26 62 L52 66 L78 48 L104 52 L130 32 L156 24 L182 10 L200 6"
              fill="none"
              stroke="#2b6bf3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
          <div className="flex gap-1.5">
            {["Hook", "Retention", "Packaging"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-brand-50 px-2 py-1 text-[10px] font-semibold text-brand-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Canvas>
  );
}

/** SaaS launch: a campaign board of stacked asset chips. */
function CampaignThumb() {
  return (
    <Canvas>
      <div className="absolute inset-0 grid grid-cols-3 gap-2 p-6 sm:p-7">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl bg-white shadow-[var(--shadow-soft)]"
            style={{ opacity: 1 - i * 0.045 }}
          >
            <div
              className={cn(
                "m-2 h-[52%] rounded-md",
                i % 3 === 0
                  ? "brand-gradient"
                  : i % 3 === 1
                    ? "bg-brand-100"
                    : "bg-line-soft"
              )}
            />
            <div className="mx-2 h-1 rounded-full bg-line" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-ink shadow-[var(--shadow-soft)]">
        <Sparkles size={12} className="text-brand-500" /> Launch week
      </div>
    </Canvas>
  );
}

/** Product demo: a clean 16:9 player. */
function PlayerThumb() {
  return (
    <Canvas tint="from-brand-50 to-indigo-50">
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl brand-gradient shadow-[var(--shadow-lift)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_15%,rgba(255,255,255,0.4),transparent_60%)]" />
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg">
            <Play size={16} className="ml-0.5 fill-current" />
          </span>
          <div className="absolute inset-x-4 bottom-4">
            <div className="h-1 rounded-full bg-white/30">
              <motion.div
                className="h-full rounded-full bg-white"
                animate={{ width: ["18%", "82%", "18%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Canvas>
  );
}

/** Instagram reels: three vertical frames, the middle one lifted. */
function ReelsThumb() {
  return (
    <Canvas>
      <div className="absolute inset-0 flex items-center justify-center gap-3 p-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn(
              "aspect-[9/16] w-[24%] overflow-hidden rounded-xl bg-white shadow-[var(--shadow-soft)]",
              i === 1 && "w-[28%] shadow-[var(--shadow-lift)]"
            )}
            animate={{ y: i === 1 ? [-6, -12, -6] : [0, -5, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            <div
              className={cn(
                "h-[74%] w-full",
                i === 1
                  ? "brand-gradient"
                  : "bg-gradient-to-b from-brand-200 to-brand-100"
              )}
            />
            <div className="mx-2 mt-2 h-1 rounded-full bg-line" />
            <div className="mx-2 mt-1 h-1 w-[60%] rounded-full bg-line-soft" />
          </motion.div>
        ))}
      </div>
    </Canvas>
  );
}

/** Social management: a content calendar wall. */
function GridThumb() {
  return (
    <Canvas tint="from-white to-brand-50">
      <div className="absolute inset-0 p-6 sm:p-8">
        <div className="grid h-full grid-cols-7 gap-1.5 sm:gap-2">
          {Array.from({ length: 21 }).map((_, i) => {
            const filled = [1, 3, 4, 8, 10, 12, 15, 17, 18, 20].includes(i);
            return (
              <motion.div
                key={i}
                className={cn(
                  "rounded-md",
                  filled ? "brand-gradient" : "bg-white shadow-[var(--shadow-soft)]"
                )}
                style={filled ? { opacity: 0.35 + (i % 5) * 0.14 } : undefined}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
              />
            );
          })}
        </div>
      </div>
    </Canvas>
  );
}
