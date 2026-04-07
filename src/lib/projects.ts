export type ProjectCategory = "video" | "graphic-design" | "web-design";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  thumbnail: string;
  description: string;
  videoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "sinaptic-technologies-corporate",
    title: "Corporate Video",
    client: "SiNAPTIC Technologies",
    category: "video",
    year: "2024",
    thumbnail: "/images/portfolio/sinaptic-technologies-corporate.png",
    description:
      "Corporate video production for SiNAPTIC Technologies, showcasing their technology solutions and brand identity.",
    featured: true,
  },
  {
    slug: "papa-barkley-documentary",
    title: "Short Documentary Video",
    client: "Papa & Barkley",
    category: "video",
    year: "2022",
    thumbnail: "/images/portfolio/papa-barkley-documentary.jpg",
    description:
      "Short documentary capturing the story and mission behind Papa & Barkley's wellness products.",
    featured: true,
  },
  {
    slug: "lowtemp-industries-social-media-1",
    title: "Social Media Video",
    client: "LowTemp Industries",
    category: "video",
    year: "2024",
    thumbnail: "/images/portfolio/lowtemp-industries-social-media-1.png",
    description:
      "Social media video content for LowTemp Industries, crafted for maximum engagement across digital platforms.",
    featured: true,
  },
  {
    slug: "nulastin-product-testimonial",
    title: "Product / Testimonial Video",
    client: "NULASTIN®",
    category: "video",
    year: "2022",
    thumbnail: "/images/portfolio/nulastin-product-testimonial.jpg",
    description:
      "Product and testimonial video for NULASTIN® highlighting real customer results and product efficacy.",
    featured: true,
  },
  {
    slug: "colorado-restaurant-association-interview",
    title: "Interview Video",
    client: "Colorado Restaurant Association",
    category: "video",
    year: "2018",
    thumbnail: "/images/portfolio/colorado-restaurant-association-interview.jpg",
    description:
      "Interview-style video for the Colorado Restaurant Association, amplifying industry voices and advocacy.",
    featured: true,
  },
  {
    slug: "purecannalabs-corporate",
    title: "Corporate Video",
    client: "PureCannalabs",
    category: "video",
    year: "2022",
    thumbnail: "/images/portfolio/purecannalabs-corporate.jpg",
    description:
      "Corporate brand video for PureCannalabs presenting their products and company culture.",
  },
  {
    slug: "purepressure-product-1",
    title: "Product Video",
    client: "PurePressure",
    category: "video",
    year: "2021",
    thumbnail: "/images/portfolio/purepressure-product-1.jpg",
    description:
      "Product showcase video for PurePressure demonstrating the quality and craftsmanship of their extraction equipment.",
  },
  {
    slug: "lowtemp-industries-social-media-2",
    title: "Social Media Video",
    client: "LowTemp Industries",
    category: "video",
    year: "2024",
    thumbnail: "/images/portfolio/lowtemp-industries-social-media-2.png",
    description:
      "A second social media video series for LowTemp Industries targeting product awareness campaigns.",
  },
  {
    slug: "final-move-fitness-corporate",
    title: "Corporate Video",
    client: "Final Move Fitness",
    category: "video",
    year: "2019",
    thumbnail: "/images/portfolio/final-move-fitness-corporate.jpg",
    description:
      "Corporate video for Final Move Fitness communicating their training philosophy and studio experience.",
  },
  {
    slug: "blue-parrot-marketing-explainer-1",
    title: "Explainer Video",
    client: "Blue Parrot Marketing",
    category: "video",
    year: "2019",
    thumbnail: "/images/portfolio/blue-parrot-marketing-explainer-1.jpg",
    description:
      "Animated explainer video for Blue Parrot Marketing breaking down complex marketing concepts visually.",
  },
  {
    slug: "renegade-brewing-promotional",
    title: "Promotional Video",
    client: "Renegade Brewing Co",
    category: "video",
    year: "2019",
    thumbnail: "/images/portfolio/renegade-brewing-promotional.png",
    description:
      "Promotional video for Renegade Brewing Co capturing the energy and character of their craft brewery brand.",
  },
  {
    slug: "r-technologies-sidewinder-product",
    title: "Product Video",
    client: "R Technologies / Sidewinder",
    category: "video",
    year: "2019",
    thumbnail: "/images/portfolio/r-technologies-sidewinder-product.png",
    description:
      "Product video for R Technologies' Sidewinder line, highlighting innovation and performance.",
  },
  {
    slug: "purepressure-product-2",
    title: "Product Video",
    client: "PurePressure",
    category: "video",
    year: "2021",
    thumbnail: "/images/portfolio/purepressure-product-2.jpg",
    description:
      "Second product video for PurePressure, focusing on a different product line within their catalog.",
  },
  {
    slug: "blue-parrot-marketing-explainer-2",
    title: "Explainer Video",
    client: "Blue Parrot Marketing",
    category: "video",
    year: "2019",
    thumbnail: "/images/portfolio/blue-parrot-marketing-explainer-2.png",
    description:
      "A follow-up explainer video for Blue Parrot Marketing expanding on their service offerings.",
  },
  {
    slug: "c-winn-designs-sales",
    title: "Sales Video",
    client: "C Winn Designs",
    category: "video",
    year: "2018",
    thumbnail: "/images/portfolio/c-winn-designs-sales.png",
    description:
      "Sales-focused video for C Winn Designs showcasing their design portfolio and converting prospects.",
  },
];
