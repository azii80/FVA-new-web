"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionLabel, SectionHeading } from "@/components/ui/Section";
import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolioFilters, portfolioItems } from "@/lib/content";
import { cn } from "@/lib/cn";

export function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <Section id="work">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <SectionLabel>Portfolio</SectionLabel>
          <SectionHeading>
            Real content.
            <br />
            <span className="brand-text-gradient">Real results.</span>
          </SectionHeading>
        </div>

        {/* filter tabs */}
        <LayoutGroup id="portfolio-filters">
          <div
            role="tablist"
            aria-label="Filter portfolio"
            className="-mx-5 flex gap-1.5 overflow-x-auto px-5 pb-1 no-scrollbar sm:mx-0 sm:px-0 lg:justify-end"
          >
            {portfolioFilters.map((filter) => {
              const isActive = filter === active;
              return (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(filter)}
                  className={cn(
                    "relative min-h-[44px] shrink-0 rounded-full px-5 text-[0.9375rem] font-semibold transition-colors duration-300",
                    isActive ? "text-white" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-pill"
                      className="brand-gradient absolute inset-0 rounded-full shadow-[var(--shadow-brand)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{filter}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </AnimatePresence>

        <MoreWorkTile />
      </motion.div>
    </Section>
  );
}

function MoreWorkTile() {
  return (
    <motion.a
      layout
      href="#contact"
      className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-4xl bg-ink p-7 text-white sm:col-span-2 sm:min-h-[400px] lg:col-span-2"
    >
      <div
        aria-hidden="true"
        className="brand-gradient absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
      />
      <p className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
        More projects
      </p>
      <div className="relative">
        <p className="text-2xl font-semibold tracking-[-0.03em]">
          View More Work
        </p>
        <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-ink">
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </motion.a>
  );
}
