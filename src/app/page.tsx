import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServicesPreview from "@/components/home/ServicesPreview";

export const metadata: Metadata = {
  title: "Alex Carpenter Studio | Multimedia Digital Artist",
  description: "Freelance multimedia digital artist specializing in video production, graphic design, and web design. Based in Colorado, USA.",
  openGraph: {
    title: "Alex Carpenter Studio | Multimedia Digital Artist",
    description: "Freelance multimedia digital artist specializing in video production, graphic design, and web design. Based in Colorado, USA.",
    url: "https://carpenterstudio.co",
    siteName: "Alex Carpenter Studio",
    images: [{ url: "https://carpenterstudio.co/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Alex Carpenter Studio", description: "Freelance multimedia digital artist." },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <ServicesPreview />
    </main>
  );
}
