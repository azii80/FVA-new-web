import { cn } from "@/lib/cn";

/** Consistent page rhythm: one place controls every section's spacing + width. */
export function Section({ id, className, children, tight = false }) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24",
        tight ? "py-16 sm:py-20" : "py-20 sm:py-28 lg:py-32",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted",
        className
      )}
    >
      <span className="brand-gradient h-1.5 w-1.5 rounded-full" />
      {children}
    </span>
  );
}

export function SectionHeading({ children, className }) {
  return (
    <h2
      className={cn(
        "mt-5 text-[2rem] leading-[1.05] font-semibold sm:text-5xl lg:text-[3.5rem]",
        className
      )}
    >
      {children}
    </h2>
  );
}
