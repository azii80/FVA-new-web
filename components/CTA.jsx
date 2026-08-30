import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/Logo";

export function CTA() {
  return (
    <Section id="contact" tight>
      <Reveal>
        <div className="brand-gradient relative overflow-hidden rounded-5xl px-7 py-16 text-center sm:px-14 sm:py-24">
          {/* light shaping so the flat gradient reads as a lit surface */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(255,255,255,0.45),transparent_58%)]"
          />
          <div
            aria-hidden="true"
            className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.09] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000,transparent)]"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <LogoMark className="h-9 w-9" />
            </span>

            <h2 className="mt-8 text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.5rem]">
              Ready to build your
              <br />
              content engine?
            </h2>

            <p className="mx-auto mt-5 max-w-md text-[1.0625rem] text-white/70">
              Create once. We&rsquo;ll automate the rest.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                href="mailto:hello@frontva.com"
                variant="inverse"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a Demo
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
