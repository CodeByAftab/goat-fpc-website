# Goat FPC Site Outline

## Pages (6 public pages)

### 1. Home (index.html)
- **Hero**: Split layout — text left, image/illustration right
  - Headline: "Empowering Goat Farmers Across Chhattisgarh"
  - Subheadline: Organization description
  - CTA buttons: "Become a Member" + "Our Services"
- **Stats Bar**: 4 key numbers
  - 120+ Shareholders | 1,500+ Farmers | 30,000+ Goats | 40+ Adopted Farms
- **Focus Areas**: 6-card grid
  - Integrated Goat Farming, Breed Improvement, Veterinary Support, Farmer Training, Manure Processing, Ajah Fi Protection
- **About Preview**: Brief org description + "Learn More" link
- **Achievements**: 3-column highlight
  - Farmer Integration, Livestock Management, Value Addition
- **Latest News**: 3-card grid (from JS data or static)
- **Gallery Preview**: 4-image grid + "View Gallery" link
- **CTA Banner**: Join/membership call-to-action
- **Footer**: 4-column (About, Quick Links, Services, Contact)

### 2. About (about.html)
- **Page Hero**: "About Us" with breadcrumb
- **Organization Profile**: Registration details, history
- **Vision & Mission**: Two-column layout
- **Structure**: FPC governance, board, team
- **Focus Areas**: Detailed descriptions (6 areas)
- **Achievements**: Stats with icons
- **Timeline**: Company milestones
- **CTA**: Contact/join

### 3. Services (services.html)
- **Page Hero**: "Our Services" with breadcrumb
- **Service Cards**: 6 detailed service blocks
  1. Integrated Goat Farming
  2. Breed Improvement Program
  3. Veterinary & Vaccination Support
  4. Farmer Training & Capacity Building
  5. Manure Processing & Value Addition
  6. Ajah Fi Digital Financial Protection
- Each card: icon, title, description, key features list, CTA

### 4. Membership (membership.html)
- **Page Hero**: "Join Our FPC" with breadcrumb
- **Benefits**: Grid of membership advantages
- **Eligibility**: Requirements list
- **Process Steps**: 4-step visual timeline
  1. Application 2. Review 3. Approval 4. Onboarding
- **Application Form**: Full form
  - Fields: Name, Phone, Email, Address, Village, District, Goat Count, Experience, Message
  - Validation: client-side JS
- **FAQ**: Accordion-style common questions

### 5. Gallery & News (gallery.html)
- **Page Hero**: "Gallery & News" with breadcrumb
- **Tab Navigation**: Gallery | News | Events | Stories
- **Gallery Grid**: Masonry-style image grid
  - Categories: Farming, Training, Events, Livestock
  - Lightbox on click
- **News Section**: Article cards
  - Title, date, excerpt, read more
- **Events**: Upcoming events list
- **Success Stories**: Farmer testimonials

### 6. Contact (contact.html)
- **Page Hero**: "Contact Us" with breadcrumb
- **Two-column layout**:
  - Left: Contact form (Name, Email, Phone, Subject, Message, Submit)
  - Right: Contact info cards
    - Address: Raipur, Chhattisgarh
    - Phone: +91 XXXXX XXXXX
    - Email: info@goatfpc.org
    - Hours: Mon-Sat 9AM-6PM
- **Map placeholder**: Embedded or static map area
- **Social Links**: Facebook, Twitter, Instagram, YouTube

## Shared Components

### Header/Nav
- Logo (text-based: "Goat Agri FPC")
- Nav links: Home, About, Services, Membership, Gallery, Contact
- Mobile: hamburger toggle, dropdown menu
- Active page highlight

### Footer
- 4-column grid
- Quick links, services, contact info
- Social media icons
- Copyright: "2026 Goat Agri Farmer Producer Company Limited"
- Registration: U01441CT2026PTC019871

## File Structure
```
goat-fpc/
  index.html
  about.html
  services.html
  membership.html
  gallery.html
  contact.html
  css/
    variables.css      (design tokens)
    base.css           (reset, typography, layout)
    components.css     (header, footer, buttons, cards)
    pages.css          (page-specific styles)
  js/
    main.js            (nav, shared functionality)
    gallery.js         (lightbox, filtering)
    forms.js           (validation, submission)
  images/
    (placeholder SVGs or solid-color blocks)
  docs/
    design-system.md
    site-outline.md
  reports/
    (agent reports)
  todo.md
```

## Performance Targets
- Page load < 3 seconds
- Lighthouse score > 90
- Mobile responsive (375px+)
- No external dependencies (no CDN, no npm)
- Google Fonts loaded async

## SEO Requirements
- Unique title + meta description per page
- Open Graph tags
- Structured data (Organization, LocalBusiness)
- Semantic HTML (h1-h6 hierarchy)
- Alt text on images
- sitemap.xml
- robots.txt
