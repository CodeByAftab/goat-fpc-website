# Goat Agri FPC

**Farmer Producer Company Limited** — Empowering farmers through integrated goat farming, breed improvement, veterinary care, manure processing, and farmer empowerment across Chhattisgarh, India.

🌐 **Live:** [goatfpc.in](https://goatfpc.in)

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — hero, impact stats, services, news, gallery, CTA |
| `about.html` | Organization profile, vision/mission, org structure |
| `services.html` | Farming, breeding, vaccination, training, Ajah Fi |
| `membership.html` | Benefits, eligibility, 6-step process, application form |
| `gallery.html` | Photos, videos, articles, events, success stories |
| `contact.html` | Contact info, form, map, social media |

## Tech Stack

- **Static HTML/CSS/JS** — no framework, no build step
- **Google Fonts** — Playfair Display (headings), DM Sans (body)
- **Deployed on** Netlify

## Structure

```
goat-fpc/
├── index.html
├── about.html
├── services.html
├── membership.html
├── gallery.html
├── contact.html
├── header.html          # Header partial (loaded via JS)
├── footer.html          # Footer partial (loaded via JS)
├── css/
│   ├── variables.css    # Design tokens
│   ├── base.css         # Reset, typography, layout
│   ├── components.css   # Header, footer, buttons, cards, forms
│   └── pages.css        # Page-specific styles
├── js/
│   └── main.js          # Nav toggle, scroll animations, partial loader
├── images/              # Image assets
├── netlify.toml         # Netlify config
├── robots.txt
└── sitemap.xml
```

## Design System

| Token | Value |
|-------|-------|
| Primary | `#1B4332` (dark green) |
| Accent | `#C8962E` (amber) |
| Background | `#F8F4EE` (cream) |
| Heading font | Playfair Display |
| Body font | DM Sans |
| Border radius | 14px |

## License

© 2026 Goat Agri Farmer Producer Company Limited. All Rights Reserved.
