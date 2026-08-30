import { Quote } from "lucide-react";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonial } from "@/lib/content";

export function Testimonial() {
  return (
    <Section>
      <Reveal>
        <SectionLabel>What Clients Say</SectionLabel>
      </Reveal>

      <Reveal delay={0.08}>
        <figure className="relative mt-8 overflow-hidden rounded-5xl bg-surface p-8 shadow-[var(--shadow-soft)] hairline sm:p-14 lg:p-16">
          <div
            aria-hidden="true"
            className="brand-gradient pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full opacity-[0.07] blur-3xl"
          />

          <Quote
            size={36}
            className="text-brand-500/25"
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <blockquote className="relative mt-6 max-w-4xl text-[1.5rem] font-medium leading-[1.28] tracking-[-0.03em] sm:text-[2rem] lg:text-[2.5rem]">
            &ldquo;FrontVA became our entire content engine.{" "}
            <span className="text-ink-soft">
              We focus on our business, they handle everything else.&rdquo;
            </span>
          </blockquote>

          <figcaption className="mt-10 flex items-center gap-4">
            <span className="brand-gradient flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white">
              {testimonial.initials}
            </span>
            <span>
              <span className="block text-[15px] font-semibold text-ink">
                {testimonial.name}
              </span>
              <span className="block text-sm text-ink-soft">
                {testimonial.role}
              </span>
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
