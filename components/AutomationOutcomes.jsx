"use client";

import { Section, SectionLabel, SectionHeading } from "@/components/ui/Section";
import { RevealGroup } from "@/components/ui/Reveal";
import { AutomationOutcomeCard } from "@/components/AutomationOutcomeCard";
import { automationOutcomes } from "@/lib/content";

export function AutomationOutcomes() {
  return (
    <Section id="about" className="border-y border-line bg-surface">
      <div className="max-w-2xl">
        <SectionLabel>Automation Outcomes</SectionLabel>
        <SectionHeading>
          The system keeps
          <br />
          <span className="text-ink-soft">working without you.</span>
        </SectionHeading>
      </div>

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {automationOutcomes.map((outcome) => (
          <AutomationOutcomeCard key={outcome.id} outcome={outcome} />
        ))}
      </RevealGroup>
    </Section>
  );
}
