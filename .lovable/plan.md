

# Match Wandawega's Exact Color Palette

## What Wandawega Uses

From analyzing the live site, Wandawega's palette is:

- **Dark/Black sections**: `#1d1d1d` -- a neutral, cool near-black (not warm-tinted)
- **Cream/Off-white sections**: `#f1ede4` -- a warm parchment cream (used for light "white-bold" sections)
- **Burnt Orange accent**: `#e8552d` -- a bold red-orange used for the "SIGN UP" button border and other CTAs
- **Text on dark**: pure white or near-white
- **Text on light**: dark brown/charcoal `#2b2520` or similar
- **Nav background**: solid black/near-black with white text
- **Borders/dividers**: subtle warm gray, barely visible

This is a significant shift -- Wandawega alternates between **cream** and **dark** sections, whereas your site is currently all-dark with subtle tonal variation.

## Plan

### 1. Update CSS variables in `src/index.css`

Replace current color tokens with Wandawega-matched values:

| Token | Current (warm charcoal) | New (Wandawega) |
|-------|------------------------|-----------------|
| `--background` | `30 8% 12%` | `30 4% 11%` (neutral near-black #1d1d1d) |
| `--foreground` | `36 33% 90%` | `37 30% 92%` (warm cream #f1ede4) |
| `--secondary` (accent) | `30 45% 55%` (honey) | `14 80% 54%` (burnt orange #e8552d) |
| `--accent` | same honey | same burnt orange |
| `--camp-cream` | warm cream | `37 30% 92%` |
| `--camp-honey` | honey | burnt orange |
| `--surface-warm` | `30 10% 14%` | `37 30% 92%` (cream -- for light alternating sections) |
| `--surface-cool` | `200 12% 13%` | `30 4% 11%` (dark -- stays dark) |
| `--surface-pine` | `150 10% 13%` | `30 4% 9%` (slightly darker) |
| `--border` | warm gray | `30 5% 20%` (subtler) |

### 2. Fix text contrast for light sections

Sections using `bg-surface-warm` (About, Area) will now be cream-colored, so text in those sections needs to flip to dark. Update these components:

- **`AboutSection.tsx`**: Change `text-foreground` to dark text classes on the cream background
- **`AreaSection.tsx`**: Same treatment
- **`Navbar.tsx`**: Keep dark bg with white/cream text (matches Wandawega nav exactly)

### 3. Update accent color usage

- The submit button in `InquirySection.tsx` uses `bg-secondary` which will now be burnt orange -- this matches Wandawega's CTA style perfectly
- Stat numbers in `DetailsSection.tsx` use `text-secondary` -- will become orange, matching Wandawega's bold accent approach

### 4. Files to modify

| File | Changes |
|------|---------|
| `src/index.css` | All CSS custom property values updated to Wandawega palette |
| `src/components/AboutSection.tsx` | Dark text on now-cream background |
| `src/components/AreaSection.tsx` | Dark text on now-cream background |
| `src/components/DetailsSection.tsx` | Minor text color adjustments if needed |
| `src/components/InquirySection.tsx` | Text adjustments for contrast |

No structural or layout changes -- just colors swapped to match Wandawega exactly.

