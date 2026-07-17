## Design QA Checklist — Nylor Tech marketing site

**Date:** 2026-07-17
**Method:** No `.planning/design/` spec existed for this project — it's an already-built site (design system lives in `app/globals.css` + `lib/brand.ts`, screens are the actual React components), so that code was used as the spec. Checked live via browser automation (`next dev`) against Home, Services, Work, Contact, Privacy, and the 404 page, at 375px / 768px / 1440px.

### Typography
- [x] Real display + body webfonts loaded (Bricolage Grotesque + Public Sans via `next/font/google`) — no fallback-to-system-font gap
- [x] Font sizes follow a consistent scale (`text-sm` → `text-7xl`) across pages
- [x] Mono utility face (JetBrains Mono) used consistently for eyebrows/labels/index numbers

### Colors
- [x] Documented contrast ratios verified computationally — matched the CSS comment exactly: ink/cloud 13.36:1, ember-deep/cloud 4.75:1, steel/cloud 3.46:1, ember/cloud 2.54:1 (ember correctly restricted to decorative/dark-surface use only, never as light-surface text)
- [x] Single accent color (ember) used consistently for interactive states site-wide
- [x] No raw hex in components — all colors reference the `@theme` tokens in `globals.css`

### Spacing & Layout
- [x] No horizontal scroll at 375px, 768px, or 1440px on any of the 6 routes checked
- [x] `viewport` meta present (Next.js default, not disabled)

### Components
- [x] Buttons: primary CTA measures 44-46px tall (meets touch minimum)
- [x] All decorative SVG art (`LogoMark`, `AbstractRings`, `OrbitField`) marked `aria-hidden`, so screen readers skip it correctly
- [x] Zero `<img>` tags in the codebase — everything is inline SVG, so there's no alt-text gap to begin with

### Touch & Interaction — 2 issues found and fixed
- [x] ~~Nav "Menu" trigger button was 24px tall on mobile (needs 44px minimum)~~ → **Fixed**: added `py-3 -my-3` to [Nav.tsx](../../components/layout/Nav.tsx), now 48px tall, no visual shift
- [x] ~~Footer links (Work/Services/Contact/Privacy) were 16px tall~~ → **Fixed**: added `inline-block py-3 -my-3` to [Footer.tsx](../../components/layout/Footer.tsx), now 44px tall each

### Animation
- [x] `prefers-reduced-motion: reduce` zeroes all animation/transition durations globally (`globals.css`)
- [x] `OrbitField`'s cursor-parallax additionally checks `matchMedia('(prefers-reduced-motion: reduce)')` and `(pointer: coarse)` in JS before attaching listeners — belt-and-suspenders on top of the CSS rule
- [x] Scroll-reveal has a 1500ms forced-visible fallback so content can never get stuck invisible if the IntersectionObserver never fires

### Forms & Feedback (Contact page)
- [x] All fields have real `<label htmlFor>` — not placeholder-only
- [x] Submit button disables + shows "Sending…" during submission
- [x] Success and error states both coded (verified in source; not live-triggered here since a real submission would send an actual email through the configured Gmail account)

### Not independently verified in this pass
- **Keyboard focus-visible outline color** — the CSS rule (`:focus-visible { outline: 2px solid var(--color-ember) }`) is present, unique, and resolves the correct hex; a genuine hardware Tab-key check is recommended manually since this session's browser automation couldn't reliably drive real keyboard-focus-visible state (synthetic Tab keypresses didn't consistently trigger it) — everything I *could* verify said in the browser cross-checked clean, but flag this as unverified live.

### Known gaps (not fixed — need your input, not a code bug)
- Custom 404 exists (`app/not-found.tsx`) and privacy page (`app/privacy/page.tsx`) — both added in the pre-deploy pass
- `metadataBase` domain still placeholder (`nylor.tech`) pending your confirmation
- No real case studies beyond Atlas yet (content gap, not a design gap)
