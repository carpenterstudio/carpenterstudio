# Theme — Alex Carpenter Studio

## Framework
- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Tailwind v4: no tailwind.config.ts — all config lives in CSS via `@theme`

## globals.css (complete)

```css
@import "tailwindcss";

@theme {
  --color-primary: #1A1A1A;
  --color-secondary: #F5F5F5;
  --color-accent: #333333;
  --color-background: #FFFFFF;
  --color-muted: #999999;

  --font-sans: var(--font-inter), sans-serif;

  --animate-fade-in: fade-in 0.5s ease-out;
  --animate-slide-up: slide-up 0.5s ease-out;

  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
}

html {
  scroll-behavior: smooth;
}
```

## Tailwind Utility Mappings
- `bg-background` → #FFFFFF
- `text-primary` → #1A1A1A
- `bg-primary` → #1A1A1A
- `text-secondary` → #F5F5F5
- `bg-secondary` → #F5F5F5
- `text-muted` → #999999
- `bg-accent` → #333333
- `font-sans` → Inter (loaded via next/font/google as --font-inter)
- `animate-fade-in` → fade-in 0.5s ease-out
- `animate-slide-up` → slide-up 0.5s ease-out

## Typography
- Body font: Inter (Google Fonts, variable font)
- CSS variable: `--font-inter`
- Applied on `<body>` via `className="font-sans"`
- Heading font: Alex Carpenter signature logo (SVG asset, not a font)
- Body: antialiased

## Brand Aesthetic
- Minimal, sophisticated, high-contrast black & white
- Near-black (#1A1A1A) on white (#FFFFFF)
- Generous whitespace
- Uppercase, letter-spaced navigation text
- Signature script logo as SVG (not text)
