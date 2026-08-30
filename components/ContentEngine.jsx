"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Mic,
  Youtube,
  Package,
  Lightbulb,
  Clapperboard,
  Film,
  LayoutGrid,
  MessageSquare,
  FileText,
} from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { engineInputs, engineOutputs } from "@/lib/content";
import { cn } from "@/lib/cn";

const icons = {
  Mic,
  Youtube,
  Package,
  Lightbulb,
  Clapperboard,
  Film,
  LayoutGrid,
  MessageSquare,
  FileText,
};

/* Output card centre points in a 0–100 coordinate space (desktop fan). */
const positions = [
  { x: 14, y: 41 }, // Shorts
  { x: 86, y: 41 }, // Reels
  { x: 11, y: 67 }, // Carousels
  { x: 89, y: 67 }, // YouTube
  { x: 29, y: 89 }, // Social posts
  { x: 71, y: 89 }, // Blogs
];

const CORE = { x: 50, y: 41 };

/** Curved connector from the engine core out to an output card. */
function connectorPath(to) {
  const dx = to.x - CORE.x;
  const dy = to.y - CORE.y;
  const c1 = { x: CORE.x + dx * 0.42, y: CORE.y + dy * 0.1 };
  const c2 = { x: CORE.x + dx * 0.78, y: CORE.y + dy * 0.72 };
  return `M ${CORE.x} ${CORE.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${to.x} ${to.y}`;
}

export function ContentEngine() {
  const reduce = useReducedMotion();
  const [inputIndex, setInputIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setInputIndex((i) => (i + 1) % engineInputs.length),
      2600
    );
    return () => clearInterval(id);
  }, [reduce]);

  const activeInput = engineInputs[inputIndex];

  return (
    <div className="relative w-full">
      <AmbientGlow />
      <EngineDesktop
        activeInput={activeInput}
        inputIndex={inputIndex}
        reduce={reduce}
      />
      <EngineMobile
        activeInput={activeInput}
        inputIndex={inputIndex}
        reduce={reduce}
      />
    </div>
  );
}

/* ------------------------------- shared bits ------------------------------ */

function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.55] blur-[80px]"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, rgba(43,107,243,0.16) 0%, rgba(79,70,229,0.10) 38%, transparent 68%)",
      }}
    />
  );
}

function InputCard({ activeInput, inputIndex, className }) {
  const Icon = icons[activeInput.icon];
  return (
    <div
      className={cn(
        "rounded-2xl bg-surface px-4 py-3 shadow-[var(--shadow-soft)] hairline",
        className
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
        Your Idea
      </p>
      <div className="mt-1.5 flex h-6 items-center gap-2 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={inputIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <Icon size={15} className="text-brand-500" strokeWidth={2.2} />
            {activeInput.label}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

function EngineCore({ size = "lg" }) {
  return (
    <div className="relative">
      {/* soft rotating halo */}
      <motion.div
        aria-hidden="true"
        className="brand-gradient absolute -inset-3 rounded-[2rem] opacity-[0.16] blur-xl"
        animate={{ scale: [1, 1.07, 1], opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className={cn(
          "relative rounded-[1.5rem] bg-surface shadow-[var(--shadow-lift)] hairline",
          size === "lg" ? "w-[200px] p-4" : "w-[178px] p-3.5"
        )}
      >
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8 shrink-0" />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-bold leading-tight tracking-[-0.02em] text-ink">
              FrontVA Engine
            </p>
            <p className="text-[10px] font-medium text-ink-soft">
              Processing content
            </p>
          </div>
        </div>

        <div className="mt-3.5 space-y-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-1.5 overflow-hidden rounded-full bg-line-soft">
              <motion.div
                className="brand-gradient h-full rounded-full"
                initial={{ width: "12%" }}
                animate={{ width: ["12%", "92%", "12%"] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.45,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-600">
            Live
          </span>
        </div>
      </div>
    </div>
  );
}

function OutputChip({ item, compact = false }) {
  const Icon = icons[item.icon];
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-xl bg-surface shadow-[var(--shadow-soft)] hairline",
        compact ? "px-2.5 py-2" : "px-3 py-2.5"
      )}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon size={14} strokeWidth={2.2} />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[12px] font-semibold leading-tight text-ink">
          {item.label}
        </span>
        <span className="block text-[10px] font-medium text-ink-soft">
          {item.stat}
        </span>
      </span>
    </div>
  );
}

/* --------------------------------- desktop -------------------------------- */

function EngineDesktop({ activeInput, inputIndex, reduce }) {
  return (
    <div className="relative hidden aspect-[10/9] w-full max-w-[560px] sm:block">
      {/* connectors */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fva-wire" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2b6bf3" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* idea → core */}
        <path
          d={`M ${CORE.x} 12 L ${CORE.x} ${CORE.y}`}
          stroke="url(#fva-wire)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="4 4"
          className={reduce ? undefined : "animate-flow"}
          vectorEffect="non-scaling-stroke"
        />

        {positions.map((p, i) => (
          <path
            key={i}
            d={connectorPath(p)}
            stroke="url(#fva-wire)"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="4 4"
            className={reduce ? undefined : "animate-flow"}
            style={{ animationDelay: `${i * -1.4}s` }}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* idea input */}
      <div className="absolute left-1/2 top-0 w-[176px] -translate-x-1/2">
        <InputCard activeInput={activeInput} inputIndex={inputIndex} />
      </div>

      {/* engine core */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${CORE.x}%`, top: `${CORE.y}%` }}
      >
        <EngineCore />
      </div>

      {/* outputs */}
      {engineOutputs.map((item, i) => {
        const p = positions[i];
        return (
          <motion.div
            key={item.label}
            className="absolute w-[138px] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.25 + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -7, 0] }}
              transition={{
                duration: 4.4 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <OutputChip item={item} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* --------------------------------- mobile --------------------------------- */

function EngineMobile({ activeInput, inputIndex, reduce }) {
  return (
    <div className="relative mx-auto w-full max-w-[380px] sm:hidden">
      <div className="flex flex-col items-center">
        <InputCard
          activeInput={activeInput}
          inputIndex={inputIndex}
          className="w-[176px]"
        />

        {/* idea → core */}
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="h-8 w-full"
          aria-hidden="true"
        >
          <path
            d="M 50 0 L 50 40"
            stroke="#2b6bf3"
            strokeOpacity="0.5"
            strokeWidth="1"
            strokeDasharray="4 4"
            className={reduce ? undefined : "animate-flow"}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <EngineCore size="sm" />

        {/* core → outputs fan */}
        <svg
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
          className="h-7 w-full"
          aria-hidden="true"
        >
          {[17, 50, 83].map((x, i) => (
            <path
              key={x}
              d={`M 50 0 C 50 14, ${x} 12, ${x} 30`}
              stroke="#4f46e5"
              strokeOpacity="0.45"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
              className={reduce ? undefined : "animate-flow"}
              style={{ animationDelay: `${i * -1.2}s` }}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        <div className="grid w-full grid-cols-2 gap-2.5 xs:grid-cols-3">
          {engineOutputs.map((item) => (
            <OutputChip key={item.label} item={item} compact />
          ))}
        </div>
      </div>
    </div>
  );
}
