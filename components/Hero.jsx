"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/Section";
import { ContentEngine } from "@/components/ContentEngine";

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-[104px] sm:pt-[128px]">
      {/* faint grid + brand wash behind the hero only */}
      <div
        aria-hidden="true"
        className="grid-backdrop pointer-events-none absolute inset-0 -z-20 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_20%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-20 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-70 blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(43,107,243,0.12), rgba(79,70,229,0.07) 45%, transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1200px] px-5 pb-20 sm:px-8 sm:pb-24 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10">
          {/* ------------------------------ left ------------------------------ */}
          <div className="max-w-[660px]">
            <motion.div {...rise(0)}>
              <SectionLabel>Content + Automation</SectionLabel>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[3.5rem] xl:text-[4rem]"
            >
              Create once.
              <br />
              <span className="brand-text-gradient">Automate the rest.</span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-6 max-w-[30rem] text-[1.0625rem] leading-relaxed text-ink-muted sm:text-lg"
            >
              Content systems for brands — powered by AI, workflows and
              distribution.
            </motion.p>

            <motion.div
              {...rise(0.24)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="#process" size="lg" className="w-full sm:w-auto">
                See How It Works
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
              <Button
                href="#work"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Play size={16} className="fill-current" />
                View Demo
              </Button>
            </motion.div>

            <motion.dl
              {...rise(0.34)}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-8"
            >
              {[
                ["40+", "Brands scaled"],
                ["10k+", "Assets shipped"],
                ["24/7", "Workflows running"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-bold tracking-[-0.03em] text-ink">
                    {value}
                  </dt>
                  <dd className="mt-0.5 text-[13px] font-medium text-ink-soft">
                    {label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ------------------------------ right ----------------------------- */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <ContentEngine />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
