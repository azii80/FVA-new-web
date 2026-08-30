import { cn } from "@/lib/cn";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-[0.9375rem] font-semibold " +
  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] " +
  "min-h-[48px] px-6 whitespace-nowrap";

const variants = {
  primary:
    "brand-gradient text-white shadow-[var(--shadow-brand)] hover:shadow-[0_18px_40px_-12px_rgb(43_107_243/0.55)] hover:-translate-y-0.5",
  secondary:
    "bg-surface text-ink hairline hover:bg-white hover:shadow-[var(--shadow-soft)] hover:-translate-y-0.5",
  ghost: "text-ink hover:text-brand-600",
  inverse:
    "bg-white text-ink hover:shadow-[0_18px_40px_-12px_rgb(0_0_0/0.35)] hover:-translate-y-0.5",
};

export function Button({
  as: Tag = "a",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        base,
        variants[variant],
        size === "lg" && "min-h-[56px] px-8 text-base",
        size === "sm" && "min-h-[42px] px-5 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
