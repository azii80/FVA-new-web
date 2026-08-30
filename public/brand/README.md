# Brand assets

`frontva-mark.svg` and `frontva-logo.svg` in this folder are **interim stand-ins**.
The official FrontVA logo file was not available in the build environment, so the
site ships with a geometric placeholder that matches the real mark's construction
and colours.

## Dropping in the official logo

1. Replace `frontva-logo.svg` with the official horizontal lockup
   (mark + "FrontVA" wordmark). PNG/SVG both work — keep the filename or update
   `OFFICIAL_LOCKUP` in `components/Logo.jsx`.
2. In `components/Logo.jsx`, set:

   ```js
   const OFFICIAL_LOCKUP = "/brand/frontva-logo.svg";
   ```

   That single line switches every logo on the site (navbar, mobile menu,
   footer) over to the official file. Nothing else needs to change.
3. Optionally replace `frontva-mark.svg` with the icon-only version and swap
   `public/favicon.svg` for it.

The site palette in `app/globals.css` (`--color-brand-500` azure and
`--color-indigo-brand-500` indigo) is sampled from the logo's gradient — if the
official file uses different shades, update those two tokens and the whole
site follows.
