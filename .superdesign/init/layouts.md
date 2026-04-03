# Layouts — Alex Carpenter Studio

## Root Layout (src/app/layout.tsx)

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alex Carpenter Studio | Multimedia Digital Artist",
  description: "Freelance multimedia digital artist specializing in video production, graphic design, and web design. Based in Colorado, USA.",
  openGraph: {
    title: "Alex Carpenter Studio | Multimedia Digital Artist",
    description: "Freelance multimedia digital artist specializing in video production, graphic design, and web design. Based in Colorado, USA.",
    url: "https://carpenterstudio.co",
    siteName: "Alex Carpenter Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
```

## Header (stub — src/components/layout/Header.tsx)
Intended design:
- Sticky, transparent → solid white on scroll
- Left: Alex Carpenter signature logo SVG → home
- Right: Home, Services, Portfolio, About, Testimonials, Contact
- Nav text: uppercase, tracking-widest, text-sm, font-medium
- Mobile: hamburger menu (see MobileMenu)

## Footer (stub — src/components/layout/Footer.tsx)
Intended design:
- Dark background (#1A1A1A), light text
- Logo or "Alex Carpenter Studio" text
- Social: Behance, LinkedIn
- Copyright: "© 2026 Alex Carpenter Studio. All Rights Reserved."

## MobileMenu (stub — src/components/layout/MobileMenu.tsx)
Intended design:
- Slide-in from right, full-height overlay
- Semi-transparent black backdrop
- Stacked nav links, close button top-right
