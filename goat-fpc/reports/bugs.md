# Bug Report — Goat FPC Static Site

Generated: 2026-08-07
Files validated: 6 HTML, 5 CSS, 3 JS, 4 config/meta files

---

## CRITICAL — CSS/HTML Class Name Mismatches (site visually broken)

These bugs mean major sections of the site render without styling. The CSS was written with different class names than the HTML uses.

---

### [CRITICAL] components.css:6-138 — Header CSS classes do not match header.html classes

- **File:** `css/components.css` vs `header.html`
- **Lines:** components.css:6-138, header.html:1-23
- **Severity:** critical
- **Issue:** CSS defines `.header`, `.header__inner`, `.header__logo`, `.header__nav`, `.header__links`, `.header__link`, `.header__hamburger`, `.header__mobile-menu`, `.header__mobile-links`, `.header__mobile-link`. HTML uses `site-header`, `container`, `site-logo`, `nav-toggle`, `main-nav`, `main-nav__list`, `main-nav__link`. None of the header CSS selectors match the HTML classes.
- **Fix:** Either rename CSS selectors to match HTML (e.g. `.site-header`, `.site-logo`, `.nav-toggle`, `.main-nav`) or rename HTML classes to match CSS. Updating CSS to match HTML is the shorter path since the HTML is already consumed by JS (`main.js` queries `.nav-toggle`, `.main-nav`, `.main-nav__link`).

---

### [CRITICAL] components.css:141-241 — Footer CSS classes do not match footer.html classes

- **File:** `css/components.css` vs `footer.html`
- **Lines:** components.css:141-241, footer.html:1-50
- **Severity:** critical
- **Issue:** CSS defines `.footer` but HTML uses `site-footer`. Footer background color (`var(--color-soil)`), padding, and text color won't apply. The `<footer>` element renders with no background or spacing.
- **Fix:** Add `.site-footer` selector alongside `.footer` or rename to `.site-footer`.

---

### [CRITICAL] footer.html:11-17,21-27,32-37 — Footer links missing CSS classes

- **File:** `footer.html`
- **Lines:** 12, 13, 14, 15, 16, 22, 23, 24, 25, 26, 33, 34, 35
- **Severity:** critical
- **Issue:** Footer `<a>` tags have no class. CSS targets `.footer__link` for color, opacity, hover state, and font-size. All footer links render unstyled.
- **Fix:** Add `class="footer__link"` to all `<a>` elements inside `.footer__links` ul.

---

### [CRITICAL] footer.html:42 vs components.css:197 — Class name mismatch `footer__copy` vs `footer__copyright`

- **File:** `footer.html:42`, `css/components.css:197`
- **Severity:** critical
- **Issue:** HTML uses `class="footer__copy"`, CSS defines `.footer__copyright`. Copyright text won't get font-size or opacity styling.
- **Fix:** Change HTML class to `footer__copyright` or add CSS rule for `.footer__copy`.

---

### [CRITICAL] footer.html:44-46 — Social links missing `footer__social-link` class

- **File:** `footer.html:44-46`
- **Severity:** critical
- **Issue:** Social `<a>` elements have no class. CSS targets `.footer__social-link` for circle background, size, color, and hover. Social links render as plain text.
- **Fix:** Add `class="footer__social-link"` to each social `<a>` tag.

---

### [CRITICAL] pages.css — Missing styles for trust-ledger section (all pages)

- **File:** `css/pages.css` (absent), referenced in `index.html:108`, `about.html:102`, `services.html:256`, `projects.html:35`, `team.html:35`, `contact.html:35`
- **Severity:** critical
- **Issue:** No CSS rule exists for `.trust-ledger`, `.trust-ledger__grid`, `.trust-ledger__item`, `.trust-ledger__number`, `.trust-ledger__label`. The impact statistics section on every page renders as unstyled text.
- **Fix:** Add trust-ledger styles to pages.css or components.css (dark background bar with 4-column grid, large numbers, centered text).

---

### [CRITICAL] pages.css — Missing styles for page-header section (inner pages)

- **File:** `css/pages.css` (absent), referenced in `about.html:72`, `services.html:128`, `projects.html:22`, `team.html:22`, `contact.html:22`
- **Severity:** critical
- **Issue:** No CSS rule exists for `.page-header`. The hero/header area on all inner pages has no background, padding, or text styling. Only `print.css` defines `.page-header` rules, inside `@media print`.
- **Fix:** Add `.page-header` styles to pages.css (dark background, padding, white text, margin-top for header offset).

---

### [CRITICAL] pages.css — Missing styles for service-detail (services.html)

- **File:** `css/pages.css` (absent), referenced in `services.html:143,166,189,212,235`
- **Severity:** critical
- **Issue:** No CSS rules for `.service-detail`, `.service-detail__img`, `.service-detail__content`, `.service-detail__list`. All 5 service sections on services.html render as unstyled stacked content.
- **Fix:** Add service-detail styles (flex row with image left, content right, styled list with checkmarks).

---

### [CRITICAL] pages.css — Missing styles for project-card (projects.html)

- **File:** `css/pages.css` (absent), referenced in `projects.html:66-219`
- **Severity:** critical
- **Issue:** No CSS rules for `.project-card`, `.project-card__img`, `.project-card__body`, `.project-card__tag`, `.project-card__title`, `.project-card__text`, `.project-card__stats`, `.project-card__stat`, `.project-card__stat-value`, `.project-card__stat-label`. All 6 project cards render unstyled.
- **Fix:** Add project-card styles (card with image top, body below, tag badge, stat row).

---

### [CRITICAL] pages.css — Missing styles for team-card (team.html)

- **File:** `css/pages.css` (absent), referenced in `team.html:65-161`
- **Severity:** critical
- **Issue:** No CSS rules for `.team-card`, `.team-card__avatar`, `.team-card__name`, `.team-card__role`, `.team-card__bio`. All 11 team member cards render unstyled.
- **Fix:** Add team-card styles (centered card, circular avatar, name/role/bio).

---

### [CRITICAL] pages.css — Missing styles for value-card (about.html)

- **File:** `css/pages.css` (absent), referenced in `about.html:132-167`
- **Severity:** critical
- **Issue:** No CSS rules for `.value-card`, `.value-card__icon`, `.value-card__title`, `.value-card__text`. All 6 value cards on about.html render unstyled.
- **Fix:** Add value-card styles (card with icon, title, text).

---

### [CRITICAL] pages.css — Missing styles for hero__bg, hero__overlay, hero__badge, hero__desc, hero__actions (index.html)

- **File:** `css/pages.css`, `index.html:90-104`
- **Severity:** critical
- **Issue:** index.html hero uses `.hero__bg`, `.hero__overlay`, `.hero__badge`, `.hero__desc`, `.hero__actions`. CSS defines `.hero__subtitle` (not `.hero__desc`) and `.hero__buttons` (not `.hero__actions`). Also `.hero__bg` and `.hero__overlay` and `.hero__badge` have no CSS rules. The hero image won't have absolute positioning, the gradient overlay won't show, the badge won't be styled, the description and action buttons are unstyled.
- **Fix:** Add CSS rules for `.hero__bg` (position relative, full bleed), `.hero__overlay` (absolute positioned gradient), `.hero__badge` (pill badge), `.hero__desc` (alias for hero__subtitle), `.hero__actions` (alias for hero__buttons). Also note hero section lacks `hero--home` class for flex layout.

---

### [CRITICAL] index.html:89 — Hero section missing `hero--home` class

- **File:** `index.html:89`
- **Severity:** critical
- **Issue:** `<section class="hero">` does not include `hero--home`. Without it, the hero won't get flex layout, `min-height: 60vh`, or gap spacing defined in pages.css `.hero--home`. The hero renders as a basic section.
- **Fix:** Change to `<section class="hero hero--home">`.

---

### [CRITICAL] pages.css — Missing styles for contact page layout

- **File:** `css/pages.css` vs `contact.html:61`
- **Severity:** critical
- **Issue:** HTML uses `.contact-grid`, `.contact-form-card`, `.form-success`, `.form-label--required`, `.form-row`, `.contact-info__title`, `.contact-info__item`, `.contact-info__icon`, `.contact-info__label`, `.contact-info__value`. CSS defines `.contact-layout`, `.contact-form`, `.contact-form__title`, `.contact-card`, `.contact-card__icon`, `.contact-card__title`, `.contact-card__text`. Nearly all class names differ. The contact page layout is completely broken.
- **Fix:** Align CSS selectors to match HTML classes. Key mappings: `.contact-grid` needs 2-column grid layout, `.contact-form-card` needs card styling, `.contact-info` needs flex column, `.contact-info__item` needs flex row with icon.

---

## HIGH — Contact Form Bugs

---

### [HIGH] contact.html:77,82,90,105,112 vs components.css:499-509 — Form error messages always visible

- **File:** `contact.html:77,82,90,105,112`
- **Severity:** high
- **Issue:** Error `<p>` elements use `class="form-error"`. No CSS rule hides `.form-error` by default. All 5 error messages ("Please enter your name", "Please enter a valid email", etc.) are visible on page load before any user interaction.
- **Fix:** Add CSS: `.form-error { display: none; }` and `.form-group.has-error .form-error { display: block; }`.

---

### [HIGH] contact.html:68-70 vs CSS — Success message always visible

- **File:** `contact.html:68-70`
- **Severity:** high
- **Issue:** `<div class="form-success" id="form-success">` has no CSS to hide it. No `.form-success` rule exists in any CSS file. The success message "Message sent successfully" is visible on page load. JS adds class `is-visible` on submit, but no CSS defines `.is-visible` either.
- **Fix:** Add CSS: `.form-success { display: none; }` and `.form-success.is-visible { display: block; }`.

---

### [HIGH] contact.html:77,82,90,105,112 vs components.css:499-503 — Form error border styling broken

- **File:** `contact.html` vs `css/components.css:499-503`
- **Severity:** high
- **Issue:** CSS rule `.form-error .form-input { border-color: var(--color-error); }` expects `.form-error` as a PARENT of `.form-input`. In HTML, `.form-error` is a `<p>` SIBLING of the input (both children of `.form-group`). Selector never matches. Additionally, `contact.js:62-63` adds `.has-error` class to `.form-group`, but no CSS targets `.has-error` or `.form-group.has-error`.
- **Fix:** Change CSS selectors to `.form-group.has-error .form-input, .form-group.has-error .form-textarea, .form-group.has-error .form-select { border-color: var(--color-error); }`.

---

### [HIGH] contact.html:73,86 vs CSS — Missing `.form-row` styles

- **File:** `contact.html:73,86`
- **Severity:** high
- **Issue:** `<div class="form-row">` is used to group name/email and phone/subject into 2-column rows. No `.form-row` CSS rule exists anywhere. All form fields stack vertically instead of side-by-side.
- **Fix:** Add CSS: `.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); }` with mobile breakpoint to stack at 768px.

---

### [HIGH] contact.html:75,80,88,93,110 — Missing `.form-label--required` styles

- **File:** `contact.html:75,80,88,93,110`
- **Severity:** high
- **Issue:** `class="form-label form-label--required"` used on required field labels. No `.form-label--required` CSS rule exists. Required fields have no visual indicator (asterisk).
- **Fix:** Add CSS: `.form-label--required::after { content: " *"; color: var(--color-error); }`.

---

## HIGH — CSS Missing Button Variant

---

### [HIGH] index.html:101,198, services.html:286, projects.html:231 — `.btn--outline` undefined

- **File:** `index.html:101,198`, `services.html:286`, `projects.html:231`
- **Severity:** high
- **Issue:** `.btn--outline` is used 4 times across the site but not defined in components.css. Button variants defined are: `--primary`, `--secondary`, `--accent`, `--ghost`. Outline buttons render with just the base `.btn` styles (transparent background, no visible border since `border: 2px solid transparent`).
- **Fix:** Add CSS: `.btn--outline { background: transparent; color: var(--color-text); border-color: var(--color-border); }` and hover state.

---

## HIGH — Domain Mismatch in Canonical URLs

---

### [HIGH] projects.html:8 — Canonical URL uses goatfpc.in instead of goatfpc.com

- **File:** `projects.html:8`
- **Severity:** high
- **Issue:** `<link rel="canonical" href="https://goatfpc.in/projects.html">` uses `.in` domain. All other pages, sitemap, robots.txt, and schema.org data use `goatfpc.com`. Search engines will see conflicting canonical signals.
- **Fix:** Change to `https://goatfpc.com/projects.html`.

---

### [HIGH] team.html:8 — Canonical URL uses goatfpc.in instead of goatfpc.com

- **File:** `team.html:8`
- **Severity:** high
- **Issue:** `<link rel="canonical" href="https://goatfpc.in/team.html">` uses `.in` domain.
- **Fix:** Change to `https://goatfpc.com/team.html`.

---

### [HIGH] contact.html:8 — Canonical URL uses goatfpc.in instead of goatfpc.com

- **File:** `contact.html:8`
- **Severity:** high
- **Issue:** `<link rel="canonical" href="https://goatfpc.in/contact.html">` uses `.in` domain.
- **Fix:** Change to `https://goatfpc.com/contact.html`.

---

## HIGH — Missing SEO Meta Tags on 3 Pages

---

### [HIGH] projects.html — Missing Open Graph, Twitter Card, favicon, and Schema.org

- **File:** `projects.html`
- **Lines:** 1-17
- **Severity:** high
- **Issue:** No `<link rel="icon">`, no `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:site_name`, `og:locale`, no `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, no Schema.org JSON-LD. Social sharing shows no preview image or description. Missing structured data hurts SEO.
- **Fix:** Add full OG/Twitter meta tags and Organization + BreadcrumbList JSON-LD matching the pattern from index.html/about.html.

---

### [HIGH] team.html — Missing Open Graph, Twitter Card, favicon, and Schema.org

- **File:** `team.html`
- **Lines:** 1-17
- **Severity:** high
- **Issue:** Same as projects.html — no OG tags, no Twitter Card, no favicon, no JSON-LD structured data.
- **Fix:** Same approach as above.

---

### [HIGH] contact.html — Missing Open Graph, Twitter Card, favicon, and Schema.org

- **File:** `contact.html`
- **Lines:** 1-17
- **Severity:** high
- **Issue:** Same as projects.html — no OG tags, no Twitter Card, no favicon, no JSON-LD structured data.
- **Fix:** Same approach as above.

---

## HIGH — CSP Blocks Google Fonts

---

### [HIGH] _headers:2, netlify.toml:7 — Content-Security-Policy blocks Google Fonts stylesheet

- **File:** `_headers:2`, `netlify.toml:7`
- **Severity:** high
- **Issue:** CSP has `style-src 'self' 'unsafe-inline'` but Google Fonts are loaded from `https://fonts.googleapis.com/css2?family=...` via `<link>` tag. External stylesheet is blocked. All custom fonts (Fraunces, DM Sans, JetBrains Mono) fail to load. Site falls back to system fonts.
- **Fix:** Add `https://fonts.googleapis.com` to `style-src`: `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`.

---

## MEDIUM — Heading Hierarchy

---

### [MEDIUM] services.html:148,171,194,217,240 — Section headings use h3 instead of h2

- **File:** `services.html:148,171,194,217,240`
- **Severity:** medium
- **Issue:** After `<h1>Our Services</h1>` (line 135), the main section titles (Breed Improvement, Vaccination, Training, Manure, Ajah Fi) use `<h3>` instead of `<h2>`. Heading hierarchy skips from h1 to h3. This hurts accessibility (screen readers) and SEO (heading structure signals).
- **Fix:** Change all 5 `<h3>` section titles to `<h2>`.

---

## MEDIUM — OG Image References

---

### [MEDIUM] index.html:15,22, about.html:15,22, services.html:15,22 — OG images reference non-existent files

- **File:** `index.html:15,22`, `about.html:15,22`, `services.html:15,22`
- **Severity:** medium
- **Issue:** OG/Twitter image URLs reference `og-home.webp`, `og-about.webp`, `og-services.webp` in `/images/`. These files don't exist. Social sharing will show broken images.
- **Fix:** Create OG images (1200x630px) or use the og-image.html template to generate them, then save as the referenced filenames.

---

## MEDIUM — Title Tag Inconsistency

---

### [MEDIUM] projects.html:7, team.html:7, contact.html:7 vs index.html:6 — Title separator inconsistency

- **File:** `projects.html:7`, `team.html:7`, `contact.html:7`
- **Severity:** medium
- **Issue:** projects.html, team.html, contact.html use em-dash separator (` — `) in titles. index.html, about.html, services.html use pipe separator (` | `). Inconsistent title formatting across pages.
- **Fix:** Standardize to one separator. Pipe `|` is more common for SEO.

---

## LOW — CSS Unused Definitions

---

### [LOW] pages.css — Large volume of unused CSS selectors

- **File:** `css/pages.css`
- **Severity:** low
- **Issue:** pages.css defines styles for many components not used in any HTML file: `.hero--home` (hero lacks the class), `.hero__image`, `.hero--inner`, `.hero--dark`, `.stats-bar`, `.focus-areas`, `.service-card`, `.benefits__grid`, `.process-steps`, `.gallery-grid`, `.news-card`, `.faq`, `.cta-banner`, `.tabs`, `.testimonial`, `.event-list`. These add ~400 lines of unused CSS.
- **Fix:** Remove unused selectors or add the missing HTML components that use them.

---

## LOW — Footer Social Links Placeholder

---

### [LOW] footer.html:44-46 — Social links use href="#"

- **File:** `footer.html:44-46`
- **Severity:** low
- **Issue:** Facebook, Instagram, YouTube links all point to `#`. No real social media URLs.
- **Fix:** Replace with actual social media profile URLs.

---

## LOW — Accessibility: Form Error Announcements

---

### [LOW] contact.html:72 — Form uses `novalidate` without accessible error messaging

- **File:** `contact.html:72`
- **Severity:** low
- **Issue:** Form has `novalidate` and custom JS validation, but error messages lack `aria-live` or `aria-describedby` attributes. Screen readers won't automatically announce validation errors when they appear.
- **Fix:** Add `aria-describedby="[field]-error"` to each input and `aria-live="polite"` to the error container or each error message.

---

## Summary

| Severity | Count | Category |
|----------|-------|----------|
| CRITICAL | 14 | CSS/HTML class mismatches — major sections unstyled |
| HIGH | 8 | Contact form bugs, missing button CSS, domain mismatch, missing SEO, CSP |
| MEDIUM | 3 | Heading hierarchy, missing OG images, title inconsistency |
| LOW | 3 | Unused CSS, placeholder links, accessibility |
| **Total** | **28** | |

**Root cause of most CRITICAL bugs:** The CSS files define one set of class names (BEM with `header__`, `footer__`, etc.) while the HTML files use different class names (`site-header`, `main-nav__link`, `contact-grid`, etc.). The CSS was likely written before the HTML structure was finalized. Aligning CSS selectors to match the HTML is the fix path, since JS already depends on the HTML class names.
