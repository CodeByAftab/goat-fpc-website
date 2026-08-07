# Goat FPC — Task Board

## Status Legend
- [ ] Pending
- [~] In Progress
- [x] Complete
- [!] Blocked

---

## Phase 1: Foundation (No Dependencies)

### T01 — Design Tokens & Base CSS
- **Owner**: CODE-WRITER
- **Status**: [x] Complete
- **Files**: `css/variables.css`, `css/base.css`
- **Notes**: Colors, typography, spacing, reset, layout utilities done

### T02 — Design System Doc
- **Owner**: MANAGER
- **Status**: [x] Complete
- **Files**: `docs/design-system.md`

### T03 — Site Outline Doc
- **Owner**: MANAGER
- **Status**: [x] Complete
- **Files**: `docs/site-outline.md`

---

## Phase 2: Component CSS (Depends: T01)

### T04 — Component Styles
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T01
- **Files**: `css/components.css`
- **Scope**: Header, footer, buttons, cards, forms, badges, alerts
- **Acceptance**: All shared components styled, responsive

### T05 — Page-Specific Styles
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T04
- **Files**: `css/pages.css`
- **Scope**: Hero sections, service grids, membership form, gallery layout, contact layout
- **Acceptance**: All 6 pages have unique section styles

---

## Phase 3: HTML Pages (Depends: T01, T04)

### T06 — Home Page
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T01, T04
- **Files**: `index.html`
- **Scope**: Hero, stats, focus areas, achievements, news preview, gallery preview, CTA, footer
- **Acceptance**: Semantic HTML, all sections present, links to other pages

### T07 — About Page
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T01, T04
- **Files**: `about.html`
- **Scope**: Org profile, vision/mission, structure, focus areas, achievements, timeline
- **Acceptance**: All content sections, consistent header/footer

### T08 — Services Page
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T01, T04
- **Files**: `services.html`
- **Scope**: 6 service detail cards with icons, descriptions, features
- **Acceptance**: All services represented, consistent layout

### T09 — Membership Page
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T01, T04
- **Files**: `membership.html`
- **Scope**: Benefits, eligibility, process steps, application form, FAQ
- **Acceptance**: Form functional with validation, all sections present

### T10 — Gallery Page
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T01, T04
- **Files**: `gallery.html`
- **Scope**: Tab navigation, image grid, news cards, events, stories
- **Acceptance**: Tabs switch content, grid responsive

### T11 — Contact Page
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T01, T04
- **Files**: `contact.html`
- **Scope**: Contact form, info cards, map placeholder, social links
- **Acceptance**: Form validates, info complete, responsive

---

## Phase 4: JavaScript (Depends: T06-T11)

### T12 — Main JS (Navigation & Shared)
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T06
- **Files**: `js/main.js`
- **Scope**: Mobile nav toggle, smooth scroll, active page highlight, scroll-to-top
- **Acceptance**: Nav works on mobile, no console errors

### T13 — Gallery JS
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T10
- **Files**: `js/gallery.js`
- **Scope**: Lightbox, category filtering, lazy loading
- **Acceptance**: Lightbox opens/closes, filters work

### T14 — Form JS
- **Owner**: CODE-WRITER
- **Status**: [ ] Pending
- **Depends**: T09, T11
- **Files**: `js/forms.js`
- **Scope**: Client-side validation, error display, submission feedback
- **Acceptance**: All required fields validated, errors shown inline

---

## Phase 5: Quality (Depends: T06-T14)

### T15 — HTML Validation
- **Owner**: BUG-FIXER
- **Status**: [ ] Pending
- **Depends**: T06-T11
- **Scope**: Validate all 6 HTML files, fix semantic issues
- **Acceptance**: W3C validator passes, no unclosed tags

### T16 — CSS Audit
- **Owner**: BUG-FIXER
- **Status**: [ ] Pending
- **Depends**: T04, T05
- **Scope**: Check for unused rules, inconsistencies, responsive issues
- **Acceptance**: No duplicate rules, all breakpoints work

### T17 — JS Error Check
- **Owner**: BUG-FIXER
- **Status**: [ ] Pending
- **Depends**: T12-T14
- **Scope**: Console errors, undefined references, edge cases
- **Acceptance**: Zero console errors, all features functional

### T18 — Link Check
- **Owner**: BUG-FIXER
- **Status**: [ ] Pending
- **Depends**: T06-T11
- **Scope**: Verify all internal links, no broken references
- **Acceptance**: All href paths resolve correctly

---

## Phase 6: Security (Depends: T06-T14)

### T19 — Security Headers
- **Owner**: SECURITY
- **Status**: [ ] Pending
- **Depends**: T06
- **Scope**: CSP meta tags, X-Frame-Options, referrer-policy, permissions-policy
- **Acceptance**: All security meta tags present in HTML head

### T20 — Input Sanitization
- **Owner**: SECURITY
- **Status**: [ ] Pending
- **Depends**: T14
- **Scope**: XSS prevention in form handling, no innerHTML with user input
- **Acceptance**: No XSS vectors in JS form handling

### T21 — Vulnerability Scan
- **Owner**: SECURITY
- **Status**: [ ] Pending
- **Depends**: T06-T14
- **Scope**: Check for exposed secrets, unsafe practices, dependency-free integrity
- **Acceptance**: No external dependencies, no hardcoded secrets

---

## Phase 7: SEO (Depends: T06-T14)

### T22 — Meta Tags
- **Owner**: SEO
- **Status**: [ ] Pending
- **Depends**: T06-T11
- **Scope**: Title, description, Open Graph, Twitter cards per page
- **Acceptance**: Each page has unique, descriptive meta tags

### T23 — Structured Data
- **Owner**: SEO
- **Status**: [ ] Pending
- **Depends**: T06-T11
- **Scope**: JSON-LD for Organization, LocalBusiness, WebSite
- **Acceptance**: Valid JSON-LD in each page head

### T24 — Sitemap & Robots
- **Owner**: SEO
- **Status**: [ ] Pending
- **Depends**: T06-T11
- **Files**: `sitemap.xml`, `robots.txt`
- **Acceptance**: All pages listed, robots allows crawling

### T25 — Semantic HTML Audit
- **Owner**: SEO
- **Status**: [ ] Pending
- **Depends**: T06-T11
- **Scope**: Heading hierarchy, landmark regions, alt text
- **Acceptance**: Single h1 per page, proper h2-h6 nesting

---

## Phase 8: Final Verification (Depends: All)

### T26 — Full Site Verification
- **Owner**: MANAGER
- **Status**: [ ] Pending
- **Depends**: T15-T25
- **Scope**: All files exist, all links work, no errors
- **Acceptance**: 6 HTML, 4 CSS, 3 JS, sitemap, robots

### T27 — Final Commit
- **Owner**: MANAGER
- **Status**: [ ] Pending
- **Depends**: T26
- **Message**: "release: Goat FPC v1.0"

---

## Dependency Graph
```
T01 ─┬─> T04 ─> T05
     │    │
     └────┼─> T06 ─> T12 ─┐
          ├─> T07          │
          ├─> T08          ├─> T15
          ├─> T09 ─> T14 ─┤   T16
          ├─> T10 ─> T13 ─┤   T17
          └─> T11 ────────┘   T18
                              │
                    T19 ──────┤
                    T20 ──────┤
                    T21 ──────┤
                    T22 ──────┤
                    T23 ──────┤
                    T24 ──────┤
                    T25 ──────┘
                              │
                         T26 ─┤
                              T27
```

## Agent Assignments
| Agent | Tasks | Focus |
|-------|-------|-------|
| CODE-WRITER | T01, T04-T14 | HTML, CSS, JS building |
| BUG-FIXER | T15-T18 | Validation, errors, links |
| SECURITY | T19-T21 | Headers, XSS, vulnerabilities |
| SEO | T22-T25 | Meta, structured data, sitemap |
| MANAGER | T02, T03, T26, T27 | Orchestration, verification |
