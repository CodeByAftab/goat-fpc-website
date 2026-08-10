# Goat Agri FPC — Next.js Rebuild Plan

## Project Overview

**Goal:** Rebuild the Goat Agri FPC website (goatfpc.in) from a static HTML/CSS/JS site to a modern Next.js 16 application with pixel-perfect fidelity to the reference designs.

**Tech Stack:**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide Icons
- Framer Motion (for animations)

**Directory:** `D:\Goat FPC` (replacing existing vanilla HTML site)

---

## Phase 1: Project Foundation

**Duration:** ~30 minutes
**Dependencies:** None
**Deliverable:** Working Next.js project with design system

### Tasks:
1. Backup current `goat-fpc/` directory
2. Initialize Next.js 16 project in `D:\Goat FPC`
3. Install dependencies:
   - Tailwind CSS v4
   - shadcn/ui
   - Lucide React
   - Framer Motion
4. Configure TypeScript, ESLint, Prettier
5. Set up design tokens in Tailwind config:
   - Colors: Primary `#1B5E20`, Accent `#C75B12`, Cream `#FDF8F0`
   - Typography: Playfair Display (headings), DM Sans (body)
   - Spacing, shadows, borders
6. Create `src/styles/globals.css` with base styles
7. Create `src/lib/constants.ts` with design tokens

### Exit Criteria:
- `npm run dev` starts successfully
- Design tokens accessible via Tailwind classes
- Typography loaded and rendering

---

## Phase 2: Layout Shell

**Duration:** ~45 minutes
**Dependencies:** Phase 1
**Deliverable:** Header + Footer + Layout wrapper

### Tasks:
1. Create `src/components/layout/Header.tsx`:
   - Sticky header, white bg, shadow on scroll
   - Logo + "Goat Agri" text + subtitle
   - Nav links (Home, About, Services, Membership, Gallery, Contact)
   - "Member Login" button (pill shape, green bg)
   - Active state: green underline
   - Mobile: Hamburger menu with slide-in drawer

2. Create `src/components/layout/Footer.tsx`:
   - Dark green bg `#1B5E20`
   - 4 columns: Logo/Social, Quick Links, Services, Contact
   - Decorative tree of life illustration (right side)
   - Bottom bar: copyright + "Designed with ❤️ for Farmers"

3. Create `src/app/layout.tsx`:
   - Root layout with Header and Footer
   - Body with cream background
   - Main content area

### Exit Criteria:
- Header renders with all nav links
- Footer renders with all columns
- Layout wraps all pages correctly
- Mobile menu toggles properly

---

## Phase 3: Shared UI Components

**Duration:** ~1 hour
**Dependencies:** Phase 1
**Deliverable:** Reusable component library

### Tasks:
1. Create `src/components/ui/Button.tsx`:
   - Primary: green bg, white text, rounded, arrow icon
   - Secondary: outline, green border/text
   - Hover states

2. Create `src/components/ui/Card.tsx`:
   - White bg, rounded corners, shadow
   - Variants: default, bordered, elevated

3. Create `src/components/ui/StatsCard.tsx`:
   - Green circular icon
   - Bold number + label
   - White bg, rounded, shadow

4. Create `src/components/ui/SectionHeading.tsx`:
   - Centered serif heading (dark green)
   - Decorative divider below
   - Optional subtitle

5. Create decorative components:
   - `src/components/decorative/WarliArt.tsx` — SVG tribal illustration
   - `src/components/decorative/GreenWave.tsx` — SVG gradient curve
   - `src/components/decorative/TreeOfLife.tsx` — SVG decorative tree

### Exit Criteria:
- All components render correctly
- Components are importable and usable
- Variants work as expected

---

## Phase 4: Home Page

**Duration:** ~2 hours
**Dependencies:** Phase 2, Phase 3
**Deliverable:** Complete home page matching reference

### Tasks:
1. Create `src/app/page.tsx` — Home page wrapper

2. Create `src/components/sections/HomeHero.tsx`:
   - Two columns: text (55%) + image (45%)
   - Cream bg with Warli art left border
   - Heading: "Empowering Farmers, Enriching Lives"
   - Subtext + CTA buttons
   - Stats row (4 items)
   - Green wave at bottom

3. Create `src/components/sections/ImpactSection.tsx`:
   - Centered heading with divider
   - 5 stat cards in a row

4. Create `src/components/sections/ServicesSection.tsx`:
   - Centered heading with divider
   - 6 service cards

5. Create `src/components/sections/NewsSection.tsx`:
   - Heading + "View All News" button
   - 3 news cards

6. Create `src/components/sections/GalleryPreview.tsx`:
   - Heading + "View Full Gallery" button
   - 5 thumbnail images

### Exit Criteria:
- All 5 sections render correctly
- Layout matches reference design
- Responsive on desktop/tablet/mobile

---

## Phase 5: About Page

**Duration:** ~1.5 hours
**Dependencies:** Phase 2, Phase 3
**Deliverable:** Complete about page matching reference

### Tasks:
1. Create `src/app/about/page.tsx` — About page wrapper

2. Create `src/components/sections/AboutHero.tsx`:
   - Full-width banner
   - Heading: "About Us"
   - Subtext
   - Warli art left border

3. Create `src/components/sections/OrgProfile.tsx`:
   - Two columns: text + image
   - Info table with icons
   - Quote overlay

4. Create `src/components/sections/VisionMission.tsx`:
   - Two columns: Vision card + Mission card
   - Orange border-left decoration
   - Icons + text/lists

5. Create `src/components/sections/OrgStructure.tsx`:
   - Centered heading
   - Org chart (hierarchical tree)
   - 3 levels: Board → Managers → Teams

6. Reuse `StatsSection` from Home page

### Exit Criteria:
- All sections render correctly
- Org chart displays properly
- Layout matches reference

---

## Phase 6: Services Page

**Duration:** ~1.5 hours
**Dependencies:** Phase 2, Phase 3
**Deliverable:** Complete services page matching reference

### Tasks:
1. Create `src/app/services/page.tsx` — Services page wrapper

2. Create `src/components/sections/ServicesHero.tsx`:
   - Two columns: text + image
   - Label: "OUR SERVICES"
   - Heading: "Comprehensive Services for Goat Farmers"
   - Warli art left border

3. Create `src/components/sections/WhatWeOffer.tsx`:
   - Centered heading with divider
   - 5 service cards (Farming, Breeding, Vaccination, Training, Ajah Fi)
   - Each: icon, title, photo, description, feature list

4. Create `src/components/sections/WhyChooseUs.tsx`:
   - Centered heading
   - 5 feature boxes

5. Create `src/components/sections/CTABanner.tsx`:
   - Full-width green bg
   - Phone icon + heading + subtext
   - CTA button
   - Tribal illustration

### Exit Criteria:
- All sections render correctly
- Service cards display properly
- CTA banner is prominent

---

## Phase 7: Membership Page

**Duration:** ~2 hours
**Dependencies:** Phase 2, Phase 3
**Deliverable:** Complete membership page matching reference

### Tasks:
1. Create `src/app/membership/page.tsx` — Membership page wrapper

2. Create `src/components/sections/MembershipHero.tsx`:
   - Two columns: text + image
   - Heading: "Membership"
   - Tagline: "Join Hands. Grow Together."
   - CTA button + farmer stat
   - Warli art left border

3. Create `src/components/sections/BenefitsEligibility.tsx`:
   - Two columns: Benefits grid + Eligibility list
   - 6 benefit cards (3x2 grid)
   - 5 eligibility criteria
   - Tree of life decoration

4. Create `src/components/sections/MembershipProcess.tsx`:
   - Centered heading
   - 6-step horizontal timeline
   - Numbered circles + icons + descriptions

5. Create `src/components/sections/ApplyMembership.tsx`:
   - Two columns: Form + Fee card
   - Form with 3-column layout
   - File upload, checkbox, submit
   - Fee card: Individual ₹1000, Group ₹500

### Exit Criteria:
- All sections render correctly
- Form is functional
- Timeline displays properly

---

## Phase 8: Gallery & News Page

**Duration:** ~2 hours
**Dependencies:** Phase 2, Phase 3
**Deliverable:** Complete gallery page matching reference

### Tasks:
1. Create `src/app/gallery/page.tsx` — Gallery page wrapper

2. Create `src/components/sections/GalleryHero.tsx`:
   - Full-width banner
   - Heading: "Gallery & News"
   - Subtext
   - Warli art left border

3. Create `src/components/sections/TabNavigation.tsx`:
   - Horizontal tabs: Photos, Videos, Articles, Events, Stories
   - Active state styling

4. Create `src/components/sections/PhotoGallery.tsx`:
   - Heading + "View All Photos" button
   - 2x4 grid of photos

5. Create `src/components/sections/VideoGallery.tsx`:
   - Heading + "View All Videos" button
   - 4 video cards with play overlay

6. Create `src/components/sections/ArticlesEvents.tsx`:
   - Two columns: Articles + Events
   - 3 article cards
   - 3 event cards with date badges

7. Create `src/components/sections/SuccessStories.tsx`:
   - Carousel with 3 testimonials
   - Navigation arrows + dots

### Exit Criteria:
- All sections render correctly
- Tab navigation works
- Carousel functions properly

---

## Phase 9: Contact Page

**Duration:** ~1.5 hours
**Dependencies:** Phase 2, Phase 3
**Deliverable:** Complete contact page matching reference

### Tasks:
1. Create `src/app/contact/page.tsx` — Contact page wrapper

2. Create `src/components/sections/ContactHero.tsx`:
   - Two columns: text + building photo
   - Heading: "Contact Us"
   - Tagline: "Together we grow, together we prosper."
   - Warli art left border

3. Create `src/components/sections/ContactCards.tsx`:
   - 4 cards in a row
   - Each: circular icon + title + details
   - Cards: Address, Phone, Email, Office Hours

4. Create `src/components/sections/ContactFormMap.tsx`:
   - Two columns: Form + Map
   - Form with 2-column layout
   - reCAPTCHA placeholder
   - Google Maps embed
   - "Get Directions" button

5. Create `src/components/sections/SocialConnect.tsx`:
   - Centered section
   - 5 social icons (Facebook, Instagram, YouTube, WhatsApp, LinkedIn)

### Exit Criteria:
- All sections render correctly
- Form is functional
- Map displays properly

---

## Phase 10: Images & Assets

**Duration:** ~1 hour
**Dependencies:** Phase 4-9
**Deliverable:** All images and assets in place

### Tasks:
1. Source placeholder images from Unsplash/Pexels:
   - Goat farming scenes
   - Farmer portraits
   - Service-specific images
   - Building/office photos

2. Create SVG assets:
   - Logo (circular goat illustration)
   - Warli tribal art decorations
   - Tree of life motif
   - Green wave/curve
   - Section dividers/ornaments

3. Optimize images:
   - Use Next.js Image component
   - Implement lazy loading
   - Serve WebP/AVIF formats

4. Place images in `public/images/`:
   - `/goats/` — goat photos
   - `/farmers/` — farmer photos
   - `/services/` — service-specific images
   - `/hero/` — hero section images

### Exit Criteria:
- All images display correctly
- No broken image links
- Images are optimized

---

## Phase 11: Responsive Design & Polish

**Duration:** ~1.5 hours
**Dependencies:** Phase 4-10
**Deliverable:** Fully responsive site across all breakpoints

### Tasks:
1. Test and adjust for breakpoints:
   - Desktop: 1920px, 1440px, 1280px
   - Tablet: 1024px, 768px
   - Mobile: 390px

2. Mobile-specific adjustments:
   - Hamburger menu functionality
   - Stack all sections vertically
   - Reduce font sizes
   - Adjust spacing/padding
   - Touch-friendly tap targets

3. Tablet adjustments:
   - 2-column grids where appropriate
   - Adjust card layouts

4. Polish:
   - Smooth scroll behavior
   - Hover effects
   - Focus states for accessibility
   - Loading states

### Exit Criteria:
- Site looks correct on all breakpoints
- Mobile menu works properly
- No layout breaking issues

---

## Phase 12: Deployment

**Duration:** ~30 minutes
**Dependencies:** Phase 11
**Deliverable:** Live site on Netlify

### Tasks:
1. Build verification:
   - Run `npm run build`
   - Fix any build errors
   - Verify no TypeScript errors

2. Netlify configuration:
   - Update `netlify.toml` for Next.js
   - Configure redirects (clean URLs)
   - Set up environment variables
   - Configure build settings

3. Deploy:
   - Push to GitHub
   - Trigger Netlify build
   - Verify deployment

4. Post-deployment checks:
   - Test all pages live
   - Check performance
   - Verify SSL/HTTPS

### Exit Criteria:
- Site builds successfully
- Deployed to Netlify
- All pages accessible live
- No console errors

---

## Dependencies Summary

```
Phase 1 (Foundation)
    ↓
Phase 2 (Layout) + Phase 3 (Components) — can run in parallel
    ↓
Phase 4-9 (Pages) — can run in parallel after Phase 2+3
    ↓
Phase 10 (Images)
    ↓
Phase 11 (Responsive Polish)
    ↓
Phase 12 (Deployment)
```

---

## Estimated Total Time

| Phase | Duration |
|-------|----------|
| Phase 1: Foundation | 30 min |
| Phase 2: Layout | 45 min |
| Phase 3: Components | 1 hour |
| Phase 4: Home Page | 2 hours |
| Phase 5: About Page | 1.5 hours |
| Phase 6: Services Page | 1.5 hours |
| Phase 7: Membership Page | 2 hours |
| Phase 8: Gallery Page | 2 hours |
| Phase 9: Contact Page | 1.5 hours |
| Phase 10: Images | 1 hour |
| Phase 11: Responsive | 1.5 hours |
| Phase 12: Deployment | 30 min |
| **Total** | **~16 hours** |

---

## File Structure

```
D:\Goat FPC\
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── membership/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HomeHero.tsx
│   │   │   ├── ImpactSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── NewsSection.tsx
│   │   │   ├── GalleryPreview.tsx
│   │   │   ├── AboutHero.tsx
│   │   │   ├── OrgProfile.tsx
│   │   │   ├── VisionMission.tsx
│   │   │   ├── OrgStructure.tsx
│   │   │   ├── ServicesHero.tsx
│   │   │   ├── WhatWeOffer.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── CTABanner.tsx
│   │   │   ├── MembershipHero.tsx
│   │   │   ├── BenefitsEligibility.tsx
│   │   │   ├── MembershipProcess.tsx
│   │   │   ├── ApplyMembership.tsx
│   │   │   ├── GalleryHero.tsx
│   │   │   ├── TabNavigation.tsx
│   │   │   ├── PhotoGallery.tsx
│   │   │   ├── VideoGallery.tsx
│   │   │   ├── ArticlesEvents.tsx
│   │   │   ├── SuccessStories.tsx
│   │   │   ├── ContactHero.tsx
│   │   │   ├── ContactCards.tsx
│   │   │   ├── ContactFormMap.tsx
│   │   │   └── SocialConnect.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   └── SectionHeading.tsx
│   │   └── decorative/
│   │       ├── WarliArt.tsx
│   │       ├── GreenWave.tsx
│   │       └── TreeOfLife.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── goats/
│   │   ├── farmers/
│   │   ├── services/
│   │   ├── hero/
│   │   └── decorative/
│   └── fonts/
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Success Criteria

- [ ] All 6 pages match reference designs pixel-perfectly (99% fidelity)
- [ ] Responsive across all breakpoints (1920px, 1440px, 1280px, 1024px, 768px, 390px)
- [ ] All decorative elements (Warli art, tree of life, green wave) present
- [ ] Typography matches exactly (Playfair Display headings, DM Sans body)
- [ ] Color scheme matches exactly
- [ ] All interactive elements work (nav, buttons, forms, carousel)
- [ ] Build succeeds with no errors
- [ ] Deployed to Netlify successfully
- [ ] No console errors
- [ ] Accessible (keyboard navigation, ARIA labels)

---

## Next Steps

1. Review this plan
2. Approve or suggest modifications
3. Start Phase 1: Project Foundation
