"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  CalendarCheck,
  UserPlus,
  TrendingUp,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";
import { revealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const icons = { Scissors, CalendarCheck, UserPlus, TrendingUp };

export function AutomationOutcomeCard({ outcome }) {
  const Icon = icons[outcome.icon];

  return (
    <motion.article
      variants={revealItem}
      className="group relative flex flex-col overflow-hidden rounded-4xl bg-surface p-6 shadow-[var(--shadow-soft)] hairline transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] sm:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:brand-gradient group-hover:text-white">
          <Icon size={18} strokeWidth={2} />
        </span>
        <h3 className="text-lg font-semibold tracking-[-0.03em]">
          {outcome.title}
        </h3>
      </div>

      <p className="mb-7 mt-2.5 text-[15px] text-ink-muted">{outcome.text}</p>

      <div className="mt-auto h-[160px] rounded-2xl bg-canvas p-4 hairline">
        <OutcomeVisual kind={outcome.visual} />
      </div>
    </motion.article>
  );
}

function OutcomeVisual({ kind }) {
  if (kind === "clips") return <ClipsFlow />;
  if (kind === "calendar") return <CalendarFlow />;
  if (kind === "leads") return <LeadsFlow />;
  return <AnalyticsFlow />;
}

/** One long video becoming many short clips. */
function ClipsFlow() {
  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <div className="relative h-7 overflow-hidden rounded-lg brand-gradient">
        <div className="absolute inset-y-0 left-3 flex items-center text-[10px] font-semibold text-white">
          Long-form · 42:07
        </div>
      </div>
      <svg viewBox="0 0 200 26" className="h-6 w-full" aria-hidden="true">
        {[24, 76, 124, 176].map((x, i) => (
          <path
            key={x}
            d={`M 100 0 C 100 14, ${x} 10, ${x} 26`}
            fill="none"
            stroke="#2b6bf3"
            strokeOpacity="0.4"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            className="animate-flow"
            style={{ animationDelay: `${i * -0.7}s` }}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <div className="flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-12 flex-1 rounded-lg bg-surface hairline"
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.22,
              ease: "easeInOut",
            }}
          >
            <div className="mx-auto mt-1.5 h-6 w-[62%] rounded bg-gradient-to-b from-brand-500/70 to-indigo-brand-500/40" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Calendar with platform chips. */
function CalendarFlow() {
  const filled = [1, 2, 5, 8, 9, 12, 15, 17];
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 21 }).map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "aspect-square rounded-[5px]",
              filled.includes(i) ? "brand-gradient" : "bg-surface hairline"
            )}
            style={filled.includes(i) ? { opacity: 0.45 + (i % 4) * 0.16 } : undefined}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.018 }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {[Instagram, Youtube, Linkedin].map((P, i) => (
          <span
            key={i}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface text-ink-muted hairline"
          >
            <P size={13} strokeWidth={2} />
          </span>
        ))}
        <span className="ml-auto text-[10px] font-semibold text-brand-600">
          Queued
        </span>
      </div>
    </div>
  );
}

/** Attention → lead → CRM. */
function LeadsFlow() {
  const rows = ["New lead", "Qualified", "Booked"];
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {rows.map((row, i) => (
        <motion.div
          key={row}
          className="flex items-center gap-2.5 rounded-xl bg-surface px-3 py-2.5 hairline"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
        >
          <span className="brand-gradient flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white">
            {i + 1}
          </span>
          <span className="text-[11px] font-semibold text-ink">{row}</span>
          <span className="ml-auto flex items-center gap-1 text-ink-soft">
            {i === 0 ? <Mail size={12} /> : <ArrowRight size={12} />}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/** Weekly performance bars. */
function AnalyticsFlow() {
  const bars = [38, 55, 44, 72, 60, 88, 76];
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold tracking-[-0.03em] text-ink">+62%</span>
        <span className="text-[10px] font-semibold text-brand-600">
          reach / wk
        </span>
      </div>
      <div className="flex h-[86px] items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className={cn(
              "flex-1 rounded-t-md",
              i === bars.length - 2 ? "brand-gradient" : "bg-brand-100"
            )}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
      </div>
    </div>
  );
}
