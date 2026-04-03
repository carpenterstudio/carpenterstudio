# Design System — Alex Carpenter Studio

## Brand Identity
**Alex Carpenter Studio** — Freelance multimedia digital artist specializing in video production, graphic design, and web design. Based in Colorado, USA.

## Visual Aesthetic
- Minimal, sophisticated, high-contrast
- Primary palette: black and white with subtle gray accents
- Generous whitespace — clean, deliberate layouts
- Premium creative studio feel
- Modern but timeless — not trendy

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| primary | #1A1A1A | Main text, dark backgrounds, filled buttons |
| secondary | #F5F5F5 | Light backgrounds, subtle fills |
| accent | #333333 | Dark gray — secondary dark elements |
| background | #FFFFFF | Page background |
| muted | #999999 | Subdued text, captions, placeholders |

## Typography
- **Body font:** Inter (Google Fonts, variable font)
- **Heading / Logo:** Alex Carpenter signature script (SVG asset — not a text font)
- **Nav / Labels:** uppercase, letter-spaced (tracking-widest), text-sm
- **Body text:** text-base or text-lg, comfortable line-height

## Spacing
- Generous section padding: py-16 to py-24 on desktop
- Consistent horizontal margins: px-6 (mobile), container max-w-7xl mx-auto (desktop)

## Buttons
- **Filled:** bg-primary text-white, hover:bg-accent, uppercase tracking-wide text-sm
- **Outlined:** border border-primary text-primary, hover:bg-primary hover:text-white
- Both: px-8 py-3, no border-radius (or very subtle: rounded-none or rounded-sm)

## Navigation
- Uppercase, letter-spaced, text-sm, font-medium
- Links: Home, Services, Portfolio, About, Testimonials, Contact
- Logo: signature SVG (left-aligned)
- Mobile: hamburger → slide-in drawer from right

## Imagery Style
- Black & white photography — studio, workspace, atmospheric
- High-contrast, moody
- Portfolio thumbnails: 16/9 ratio, object-cover

## Animation
- Fade-in: opacity 0→1, 0.5s ease-out
- Slide-up: opacity 0→1 + translateY(20px→0), 0.5s ease-out
- Scroll-triggered on section entry
- Subtle hover states: scale-105 on cards, underline on links

## Do Not
- No bright colors or gradients
- No decorative fonts (use the SVG logo, not a script typeface)
- No heavy drop shadows or excessive border-radius
- No cluttered layouts — whitespace is a feature
