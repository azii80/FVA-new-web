"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

/**
 * ── Dropping in the official logo ────────────────────────────────────────────
 * Set OFFICIAL_LOCKUP to the path of the official FrontVA lockup file placed in
 * /public (e.g. "/brand/frontva-logo.svg"). Every logo on the site then renders
 * that file as-is — untouched proportions, no effects. Leave it null and the
 * component draws the interim mark + wordmark. See public/brand/README.md.
 */
const OFFICIAL_LOCKUP = null;

export function Logo({ className, wordmarkClassName, showWordmark = true }) {
  if (OFFICIAL_LOCKUP) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={asset(OFFICIAL_LOCKUP)}
        alt="FrontVA"
        className={cn("h-8 w-auto sm:h-9", className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span
          className={cn(
            "text-[1.375rem] font-bold tracking-[-0.045em] text-ink",
            wordmarkClassName
          )}
        >
          Front<span className="font-extrabold">VA</span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }) {
  // The mark renders several times per page (navbar, engine core, CTA,
  // footer). A hardcoded gradient id would collide, and every instance would
  // resolve to whichever copy came first in the document — so hiding or
  // unmounting that one blanks all the others.
  // useId() includes punctuation that is not safe inside url(#…), so strip it.
  const gradientId = `fva-mark-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="120"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1E7BF5" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="28" fill={`url(#${gradientId})`} />
      <g fill="#fff">
        <rect x="42" y="30" width="52" height="22" rx="10" />
        <rect x="26" y="44" width="34" height="24" rx="10" />
        <rect x="42" y="60" width="26" height="22" rx="9" />
        <rect x="30" y="74" width="24" height="22" rx="9" />
      </g>
    </svg>
  );
}
