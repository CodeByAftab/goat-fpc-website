# Goat FPC Design System

## Brand Identity
- **Organization**: Goat Agri Farmer Producer Company Limited
- **Location**: Raipur, Chhattisgarh
- **Focus**: Goat farming, breed improvement, vaccination, farmer training, manure processing, Ajah Fi digital financial protection

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| moss | #5C7A4D | Primary brand, CTAs, nav |
| moss-light | #7A9B68 | Hover states, secondary |
| moss-dark | #3E5632 | Active states, dark accents |
| amber | #C8962E | Accent, highlights, trust ledger |
| amber-light | #D4A94A | Hover accent |
| amber-dark | #A67B1E | Active accent |

### Neutral Colors
| Token | Hex | Usage |
|-------|-----|-------|
| parchment | #F5F0E8 | Page background |
| parchment-dark | #E8E0D2 | Alt background, borders |
| soil | #1B1B14 | Body text, dark sections |
| soil-light | #2E2E22 | Secondary dark |
| white | #FFFFFF | Cards, contrast bg |

### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| success | #3D7A3D | Confirmations, healthy |
| error | #B33D3D | Errors, danger |
| text-muted | #5A5A4A | Secondary text |

## Typography

### Font Stacks
- **Headings**: Fraunces, Georgia, 'Times New Roman', serif
- **Body**: DM Sans, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Mono**: JetBrains Mono, 'Fira Code', Consolas, monospace

### Type Scale (1.25 modular)
| Token | Size | Px |
|-------|------|-----|
| text-xs | 0.75rem | 12 |
| text-sm | 0.875rem | 14 |
| text-base | 1rem | 16 |
| text-md | 1.125rem | 18 |
| text-lg | 1.25rem | 20 |
| text-xl | 1.5rem | 24 |
| text-2xl | 1.875rem | 30 |
| text-3xl | 2.25rem | 36 |
| text-4xl | 3rem | 48 |
| text-5xl | 3.75rem | 60 |

### Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing Scale
| Token | Value | Px |
|-------|-------|-----|
| space-xs | 0.25rem | 4 |
| space-sm | 0.5rem | 8 |
| space-md | 1rem | 16 |
| space-lg | 1.5rem | 24 |
| space-xl | 2rem | 32 |
| space-2xl | 3rem | 48 |
| space-3xl | 4rem | 64 |
| space-4xl | 6rem | 96 |
| space-5xl | 8rem | 128 |

## Layout
- Max width: 1200px
- Narrow max: 800px
- Gutter: 24px (16px on mobile)
- Header height: 72px
- Breakpoints: 1024px, 768px, 480px

## Border Radius
| Token | Value |
|-------|-------|
| radius-sm | 4px |
| radius-md | 8px |
| radius-lg | 12px |
| radius-xl | 16px |
| radius-full | 9999px |

## Shadows
| Token | Value |
|-------|-------|
| shadow-sm | 0 1px 2px rgba(27,27,20,0.06) |
| shadow-md | 0 4px 12px rgba(27,27,20,0.08) |
| shadow-lg | 0 8px 24px rgba(27,27,20,0.10) |
| shadow-xl | 0 16px 48px rgba(27,27,20,0.12) |

## Transitions
- Fast: 150ms ease
- Base: 250ms ease
- Slow: 400ms ease

## Component Patterns

### Buttons
- Primary: moss bg, white text, moss-dark hover
- Secondary: transparent bg, moss border, moss text
- Accent: amber bg, white text, amber-dark hover
- Sizes: sm (32px), md (40px), lg (48px)

### Cards
- White bg, radius-lg, shadow-md
- Hover: shadow-lg, slight translateY(-2px)
- Padding: space-lg

### Forms
- Input height: 48px
- Border: 1px solid var(--color-border)
- Focus: 2px solid moss, ring offset
- Error: 1px solid error color

### Navigation
- Fixed top, white bg, shadow-sm
- Logo left, links center, CTA right
- Mobile: hamburger menu, slide-in drawer

### Footer
- Dark bg (soil), light text
- 4-column grid: About, Quick Links, Services, Contact
- Bottom bar: copyright, social links

## Accessibility
- WCAG 2.1 AA compliant
- Focus-visible outlines (amber, 3px)
- Reduced motion support
- Visually hidden utility class
- Semantic HTML (header, nav, main, footer)
- Alt text on all images
- Color contrast ratios >= 4.5:1

## Image Placeholders
- Use solid color blocks with descriptive text
- Hero: moss gradient overlay
- Gallery: parchment bg with icon
- Team: soil circle avatars with initials
