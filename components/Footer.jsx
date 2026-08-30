import { Instagram, Youtube, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { brand, navLinks, socialLinks } from "@/lib/content";

const icons = { Instagram, Youtube, Linkedin };

/** lucide has no X mark, so the wordmark ships as a small inline glyph. */
function XIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
              {brand.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] font-medium text-ink-muted transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Follow
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => {
                const Icon = icons[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-canvas text-ink-muted transition-all duration-300 hairline hover:-translate-y-0.5 hover:text-brand-600"
                    >
                      {Icon ? <Icon size={17} strokeWidth={2} /> : <XIcon />}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={`mailto:${brand.email}`}
              className="mt-6 inline-block text-[15px] font-semibold text-ink transition-colors hover:text-brand-600"
            >
              {brand.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-soft">
            &copy; {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-[13px] font-medium text-ink-soft">
            {brand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
