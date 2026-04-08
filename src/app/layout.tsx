import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alex Carpenter Studio | Multimedia Digital Artist",
  description:
    "Freelance multimedia digital artist specializing in video production, graphic design, and web design. Based in Colorado, USA.",
  openGraph: {
    title: "Alex Carpenter Studio | Multimedia Digital Artist",
    description:
      "Freelance multimedia digital artist specializing in video production, graphic design, and web design. Based in Colorado, USA.",
    url: "https://carpenterstudio.co",
    siteName: "Alex Carpenter Studio",
    images: [{ url: "https://carpenterstudio.co/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Alex Carpenter Studio",
  "description": "Freelance multimedia digital artist specializing in video production, graphic design, and web design.",
  "url": "https://carpenterstudio.co",
  "address": { "@type": "PostalAddress", "addressRegion": "CO", "addressCountry": "US" },
  "sameAs": [
    "https://www.behance.net/alexcarpenter8",
    "https://www.linkedin.com/in/alexander-carpenter-co/"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
