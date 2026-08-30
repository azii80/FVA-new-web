"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Mark the nav link for whichever section is currently on screen.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const onScreen = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (onScreen) setActiveId(`#${onScreen.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-line bg-canvas/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label="FrontVA home" className="shrink-0">
            <Logo />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-200",
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="brand-gradient absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button href="#contact" size="sm" className="px-5">
              Book a Demo
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface hairline text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="sheet"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-[72px] border-b border-line bg-canvas shadow-[var(--shadow-lift)] lg:hidden"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 pb-8 pt-4 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium text-ink transition-colors hover:bg-line-soft"
                >
                  {link.label}
                  <ArrowRight size={18} className="text-ink-soft" />
                </a>
              ))}
              <Button
                href="#contact"
                size="lg"
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
