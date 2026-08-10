# Chhattisgarh Regional Style — Design Decisions

## Color Palette Extension
Added terracotta (#B5651D) and deep forest green (#2D4A2B) as regional accents alongside the core palette (Moss, Amber, Parchment, Soil). Terracotta evokes Chhattisgarh's clay-rich soil and dokra metalwork patina; deep forest green references the dense sal and teak forests of Bastar and Surguja. These are accent-only — they never replace the primary Moss/Amber system, ensuring brand consistency across all pages.

## Border Radius → 0px
Changed --radius-sm/md/lg/xl from 4–16px to 0px. Square edges feel hand-crafted and rooted, referencing the geometric precision of dokra metalwork and the block-printed textiles of Chhattisgarh. The only exception is --radius-full (9999px) for avatars and badges, which need pill shapes for usability. This single change shifts the entire site from "corporate SaaS" to "cooperative artisan."

## Dokra-Inspired SVG Section Dividers
Inline SVG chevron/triangle patterns at section boundaries, inspired by Chhattisgarhi dokra (lost-wax casting) metalwork motifs — repeating triangles and dotted lines. Three color variants (amber, moss, terracotta) rotate across sections to create visual rhythm without images. Pure SVG means zero HTTP requests, infinite scalability, and CSP-safe inline execution.

## Noto Sans Devanagari for Bilingual Pull-Quote
Added Google Fonts Noto Sans Devanagari for one hero pull-quote: "किसान की उम्मीद, बकरी की ताकत" (Farmer's hope, goat's strength). The quote uses lang="hi" for correct screen reader pronunciation. Noto Sans Devanagari was chosen over heavier Devanagari fonts for its excellent readability at display sizes and its visual harmony with Fraunces.

## Fraunces Display Weight 900 + Tight Tracking
Hero headline uses font-weight: 900 with letter-spacing: -0.03em. Fraunces is an optical variable font that gains character at extreme weights — the thick strokes feel bold and agricultural without being aggressive. Tight tracking at 900 weight prevents the letters from looking scattered, which is a common issue with heavy serif display type.

## Square-Edge Cards and Buttons
All cards (service-card, project-card) and buttons use 0px border-radius. This is a deliberate rejection of the rounded-corner corporate aesthetic. The square edges reference Chhattisgarhi woodblock printing and the angular precision of tribal metalwork. Cards gain a subtle 1px border instead of border-radius for definition.

## Seasonal Banner Component
A new .seasonal-banner component highlights Chhattisgarh's goat farming calendar: "Sawan mein vaccination, Poh mein breed camp." This seasonal rhythm is specific to CG's monsoon-winter agricultural cycle. The component uses forest-deep green accents and a simple leaf icon, keeping it grounded without being kitschy.

## Footer Chhattisgarhi Line
"जय छत्तीसगढ़" in the footer uses lang="hi" for proper Hindi rendering. This single line anchors the site's regional identity without over-decorating. It's placed after the copyright in the footer bottom, visible but not dominant.

## Imagery Strategy
Hero image: Chhattisgarh tribal farmer with goats (placeholder: hero-chhattisgarh-goat-farmer.webp). Section images reference Bastar plateau terrain. All images carry bilingual alt text (English + Hindi via /) for accessibility and SEO in both languages. No decorative images — every image earns its place with content value.
