"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Zap,
  CalendarRange,
  Sparkles,
  CheckCheck,
  Send,
  BarChart3,
  RefreshCw,
} from "lucide-react";
import { Section, SectionLabel } from "@/components/ui/Section";
import { automationSteps } from "@/lib/content";

const icons = { Zap, CalendarRange, Sparkles, CheckCheck, Send, BarChart3, RefreshCw };

export function Workflow() {
  const reduce = useReducedMotion();

  return (
    <Section tight className="border-y border-line bg-surface">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionLabel>Automation Layer</SectionLabel>
        <p className="text-sm text-ink-soft">
          Always on. Every step handed to the next.
        </p>
      </div>

      {/* horizontally scrollable rail on small screens */}
      <div className="-mx-5 mt-10 overflow-x-auto px-5 no-scrollbar edge-fade-x sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0">
        <ol className="flex min-w-max items-start gap-0 lg:min-w-0 lg:justify-between">
          {automationSteps.map((step, i) => {
            const Icon = icons[step.icon];
            const last = i === automationSteps.length - 1;
            return (
              <li key={step.label} className="flex items-start">
                <motion.div
                  className="flex w-[92px] flex-col items-center gap-3 text-center lg:w-[104px]"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-canvas text-brand-600 hairline">
                    <Icon size={20} strokeWidth={2} />
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full ring-1 ring-brand-500/40"
                      animate={
                        reduce ? undefined : { opacity: [0, 1, 0], scale: [0.9, 1.18, 1.28] }
                      }
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: i * 0.38,
                        ease: "easeOut",
                      }}
                    />
                  </span>
                  <span className="flex min-h-[2.25rem] items-start justify-center text-[13px] font-semibold leading-tight text-ink">
                    {step.label}
                  </span>
                </motion.div>

                {!last && <Connector index={i} reduce={reduce} />}
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

function Connector({ index, reduce }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 12"
      className="mt-7 h-3 w-8 shrink-0 lg:w-full lg:min-w-[24px]"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="6"
        x2="52"
        y2="6"
        stroke="#2b6bf3"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className={reduce ? undefined : "animate-flow"}
        style={{ animationDelay: `${index * -0.9}s` }}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 52 2.5 L 58 6 L 52 9.5"
        fill="none"
        stroke="#2b6bf3"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
