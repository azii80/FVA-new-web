"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Lightbulb, Clapperboard, Layers, Workflow as WorkflowIcon, Share2 } from "lucide-react";
import { Section, SectionLabel, SectionHeading } from "@/components/ui/Section";
import { processSteps } from "@/lib/content";

const icons = { Lightbulb, Clapperboard, Layers, Workflow: WorkflowIcon, Share2 };

export function ProcessSteps() {
  const reduce = useReducedMotion();

  return (
    <Section id="process">
      <div className="max-w-2xl">
        <SectionLabel>Our Process</SectionLabel>
        <SectionHeading>
          Five steps.
          <br />
          <span className="text-ink-soft">One system.</span>
        </SectionHeading>
      </div>

      <div className="relative mt-16">
        {/* the line every step sits on */}
        <div
          aria-hidden="true"
          className="absolute left-7 top-6 h-[calc(100%-3rem)] w-px bg-line md:top-7 md:h-px md:w-[calc(80%+1rem)] md:bg-transparent"
        >
          <svg
            className="hidden h-3 w-full md:block"
            viewBox="0 0 1000 3"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1.5"
              x2="1000"
              y2="1.5"
              stroke="#2b6bf3"
              strokeOpacity="0.28"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              className={reduce ? undefined : "animate-flow"}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-5">
          {processSteps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <motion.li
                key={step.num}
                className="flex items-start gap-5 md:block"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface text-brand-600 shadow-[var(--shadow-soft)] hairline">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div className="md:mt-6">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-brand-500">
                    {step.num}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{step.note}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
