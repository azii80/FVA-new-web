/** Tiny class joiner — keeps conditional Tailwind lists readable. */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
