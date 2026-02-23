

# Wandawega-Inspired Redesign

## Overview
Transform the site from a warm cream "brochure" feel into a dark, cinematic, photo-forward experience inspired by wandawega.com. The result should feel moody, confident, and editorial -- like a beautifully shot camp lookbook.

## Color Palette Shift
- **Background**: Dark charcoal `hsl(30, 8%, 12%)` instead of warm cream
- **Text**: Warm cream/white on dark backgrounds
- **Cards/Sections**: Alternate between dark panels and full-bleed photography
- **Accent**: Warm amber used sparingly for links and highlights
- **Remove**: Linen texture overlay (doesn't work on dark)

## Typography Updates
- Playfair Display stays but gets used **bigger and bolder** -- massive overlaid headlines
- "The Farmhouse" logo in the nav gets an italic serif treatment
- Source Sans 3 stays for body but in lighter weights on dark backgrounds

## Section-by-Section Changes

### Navbar
- Transparent/dark background with white text
- Logo in italic Playfair Display
- Links in light cream, subtle hover

### Hero (100vh)
- Full viewport height, edge-to-edge photo
- Massive bold white serif title directly on image
- Darker gradient overlay for legibility
- Subtitle in italic, smaller
- CTA button subtle or removed -- let the image speak

### About
- Remove postcard card and pin decoration
- Two photos remain in a grid
- Text on dark background below, centered, generous spacing

### Experience
- Remove icon card grid entirely
- Replace with large photo blocks with bold white overlay text
- Keep the 6-photo gallery but tighter gaps, edge-to-edge feel
- Feature descriptions become minimal captions

### Lake
- Full-bleed dock photo, nearly full viewport
- Text overlaid on image with dark gradient, or on dark panel alongside

### Area
- Dark background, clean editorial typography
- Remove icon circles -- just headings and short descriptions
- More like a magazine column

### Details
- Stats in large bold serif numbers on dark background -- no card borders
- House rules as a simple confident list, no "cabin door" styling

### Inquiry
- Dark background, form with subtle light borders
- Warm amber submit button
- Clean, minimal

### Footer
- Dark, minimal, italic property name

### Dividers
- Remove PineDivider from Index.tsx entirely
- Generous spacing and full-bleed photos serve as natural breaks

## Files to Modify

| File | Change |
|------|--------|
| `src/index.css` | Dark palette CSS variables, remove linen-texture, update wave-divider or remove |
| `src/components/Navbar.tsx` | Dark/transparent bg, italic logo, cream text |
| `src/components/HeroSection.tsx` | 100vh, larger type, stronger overlay, subtle/no CTA |
| `src/components/AboutSection.tsx` | Remove card styling, dark bg, flat layout |
| `src/components/ExperienceSection.tsx` | Photo-driven layout with overlay text, remove icon grid |
| `src/components/LakeSection.tsx` | Full-bleed photo, overlay or dark panel text |
| `src/components/AreaSection.tsx` | Dark bg, remove icons, editorial text |
| `src/components/DetailsSection.tsx` | Large numbers on dark bg, simple list |
| `src/components/InquirySection.tsx` | Dark bg form styling |
| `src/components/Footer.tsx` | Dark minimal footer |
| `src/pages/Index.tsx` | Remove PineDivider references |

## What Stays
- All 18 existing photos -- used even more prominently
- Playfair Display + Source Sans 3 fonts
- Single-page smooth-scroll architecture
- Mobile responsive approach
- Inquiry form fields and functionality
- Lucide icons (used minimally)

