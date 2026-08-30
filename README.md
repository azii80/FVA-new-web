# FrontVA — Content + Automation Studio

Marketing site for **FrontVA**, built around the positioning
_"Create once. Automate the rest."_

Next.js (App Router) · React · Tailwind CSS v4 · Framer Motion · Lucide icons.

---

## ⚠️ Brand asset — read this first

The official FrontVA logo file was **not available in the build environment**, so
the site currently renders an interim geometric mark that matches the real
logo's construction and colours. It is a one-line swap:

1. Drop the official lockup into `public/brand/frontva-logo.svg` (PNG works too).
2. In `components/Logo.jsx`, set:
   ```js
   const OFFICIAL_LOCKUP = "/brand/frontva-logo.svg";
   ```

Every logo on the site (navbar, mobile menu, footer) then renders the official
file as-is — original proportions, no effects, no redraw. See
[`public/brand/README.md`](public/brand/README.md) for details.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Brand palette

Sampled from the logo mark's azure → indigo gradient. Defined once as CSS
custom properties in `app/globals.css` under `@theme`:

| Token | Value | Used for |
| --- | --- | --- |
| `--color-brand-500` | `#2b6bf3` | primary accent, CTAs, active states |
| `--color-indigo-brand-500` | `#4f46e5` | gradient end, secondary accent |
| `--color-ink` | `#121317` | near-black typography |
| `--color-canvas` | `#fbfbfd` | off-white page ground |
| `--color-surface` | `#ffffff` | cards |
| `--color-line` | `#ececf1` | hairline borders |

If the official logo uses different shades, update `--color-brand-500` and
`--color-indigo-brand-500` and the entire site follows — buttons, highlighted
text, icon accents, workflow connectors, gradients and hover states all read
from these two tokens.

## Structure

```
app/
  layout.jsx           fonts, metadata, global CSS
  page.jsx             section composition
  globals.css          design tokens, base styles, utilities, keyframes
components/
  Navbar.jsx           sticky nav, scroll-spy active state, mobile sheet
  Hero.jsx             headline + Content Engine
  ContentEngine.jsx    the hero illustration (separate desktop / mobile builds)
  Workflow.jsx         AUTOMATION LAYER rail
  ProcessSteps.jsx     01–05 process
  Services.jsx         + ServiceCard.jsx
  PortfolioGrid.jsx    + PortfolioCard.jsx (filter tabs, animated grid)
  AutomationOutcomes.jsx + AutomationOutcomeCard.jsx
  Testimonial.jsx
  CTA.jsx
  Footer.jsx
  Logo.jsx             LOGO SWAP POINT
  ui/                  Section, Button, Reveal primitives
lib/
  content.js           all copy and data — edit here, not in markup
  cn.js
public/brand/          logo assets
```

### Editing content

Everything textual — nav links, engine inputs/outputs, workflow steps, process
steps, services, portfolio items and filters, automation outcomes, the
testimonial and social links — lives in `lib/content.js`. Components map over
those arrays, so adding a portfolio item or a workflow step is a one-line data
change.

Portfolio thumbnails are generated from CSS and inline SVG (keyed by each
item's `kind`), so there is no stock imagery and nothing to download. To use
real thumbnails, swap the `Thumb` component in `components/PortfolioCard.jsx`
for an `next/image` and add an `image` field to each item.

## Responsive & motion notes

- Breakpoints: `xs` 400px, then Tailwind defaults (`sm` 640 · `md` 768 ·
  `lg` 1024 · `xl` 1280).
- The Content Engine ships as two intentional layouts — a fanned desktop
  composition and a simplified stacked mobile one — rather than a shrunk
  desktop illustration.
- The automation rail scrolls horizontally below `lg` with a faded edge, and
  sits inline above it.
- All interactive targets are at least 44–48px tall.
- Every scroll reveal goes through `components/ui/Reveal.jsx`, and the whole
  page honours `prefers-reduced-motion` (reveals render in place, connector
  and float animations stop).
