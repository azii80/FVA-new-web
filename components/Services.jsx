"use client";

import { Section, SectionLabel, SectionHeading } from "@/components/ui/Section";
import { RevealGroup } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/content";

export function Services() {
  return (
    <Section id="services" className="border-t border-line bg-surface">
      <div className="max-w-2xl">
        <SectionLabel>What We Do</SectionLabel>
        <SectionHeading>
          Four moves.
          <br />
          <span className="text-ink-soft">Endless output.</span>
        </SectionHeading>
      </div>

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </RevealGroup>
    </Section>
  );
}
