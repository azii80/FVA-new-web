/**
 * The site is fully static (no route handlers, server actions or next/image),
 * so it can be exported to plain files for GitHub Pages.
 *
 * Export mode is opt-in via env so `npm run dev` and a normal `npm run build`
 * behave exactly as before:
 *   NEXT_EXPORT=1 NEXT_BASE_PATH=/Agency-website- npm run build
 *
 * NEXT_BASE_PATH is needed because Pages serves the repo at a subpath. Leave it
 * unset for a root-domain host (Vercel, Netlify, a custom domain).
 */
const basePath = process.env.NEXT_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(process.env.NEXT_EXPORT === "1"
    ? {
        output: "export",
        basePath,
        // Pages serves /foo/ as a directory, so emit foo/index.html
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
