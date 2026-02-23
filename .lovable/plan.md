

# Match Wandawega's Exact Color Palette

## Summary

Update the site's color palette to match Wandawega's exact colors: neutral near-black (#1d1d1d), warm parchment cream (#f1ede4), and burnt orange accent (#e8552d). Cream-background sections get dark text for proper contrast.

## Changes

### 1. `src/index.css` - Update all CSS custom properties

Replace color tokens with Wandawega-matched HSL values:

- `--background`: neutral near-black (30 4% 11%)
- `--foreground`: warm cream (37 30% 92%)
- `--secondary` and `--accent`: burnt orange (14 80% 54%)
- `--surface-warm`: cream (37 30% 92%) for alternating light sections
- `--surface-cool`: near-black (30 4% 11%)
- `--surface-pine`: slightly darker (30 4% 9%)
- `--border`: subtle warm gray (30 5% 20%)

### 2. `src/components/AboutSection.tsx` - Dark text on cream

Change heading and body text from `text-foreground` to dark charcoal (`text-[#2b2520]`) since this section now has a cream background.

### 3. `src/components/AreaSection.tsx` - Dark text on cream

Same treatment: headings and body text flip to dark charcoal for contrast on cream.

### 4. No changes needed for:

- **DetailsSection / InquirySection**: These sit on dark backgrounds, so existing light text works
- **Navbar**: Already dark bg with light text, matches Wandawega nav
- **HeroSection / LakeSection**: Image-based sections, unaffected

## Technical Details

All color changes are CSS variable swaps in `src/index.css`. The two cream-background components (About, Area) get hardcoded dark text colors (`#2b2520`) since the design token `--foreground` is cream (for dark sections). No structural or layout changes.
