/**
 * Prefixes a /public path with the deploy's base path.
 *
 * GitHub Pages serves this repo from a subdirectory, so a bare "/favicon.svg"
 * would 404 there. Set NEXT_PUBLIC_BASE_PATH at build time (the Pages workflow
 * does); leave it unset for a root-domain host and paths pass through unchanged.
 */
export function asset(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
