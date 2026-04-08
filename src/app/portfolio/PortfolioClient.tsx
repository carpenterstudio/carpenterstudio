"use client";

import { useState } from "react";
import { projects as realProjects, type Project } from "@/lib/projects";
import FilterBar, { type FilterOption } from "@/components/portfolio/FilterBar";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

// Placeholder projects for when the real array is empty
const placeholderProjects: Project[] = [
  { slug: "p1", title: "Brand Identity System", client: "Sample Client", category: "graphic-design", year: "2025", thumbnail: "", description: "" },
  { slug: "p2", title: "Promotional Video Series", client: "Creative Agency", category: "video", year: "2025", thumbnail: "", description: "" },
  { slug: "p3", title: "Portfolio Website", client: "Independent Artist", category: "web-design", year: "2024", thumbnail: "", description: "" },
  { slug: "p4", title: "Event Recap Film", client: "Local Studio", category: "video", year: "2024", thumbnail: "", description: "" },
  { slug: "p5", title: "E-Commerce Redesign", client: "Retail Brand", category: "web-design", year: "2024", thumbnail: "", description: "" },
  { slug: "p6", title: "Music Video", client: "Indie Artist", category: "video", year: "2023", thumbnail: "", description: "" },
  { slug: "p7", title: "Logo & Brand Guidelines", client: "Startup Co.", category: "graphic-design", year: "2023", thumbnail: "", description: "" },
  { slug: "p8", title: "Agency Landing Page", client: "Marketing Firm", category: "web-design", year: "2023", thumbnail: "", description: "" },
  { slug: "p9", title: "Product Launch Film", client: "Tech Brand", category: "video", year: "2023", thumbnail: "", description: "" },
];

const categoryMap: Record<FilterOption, string | null> = {
  All: null,
  Video: "video",
  "Graphic Design": "graphic-design",
  "Web Design": "web-design",
};

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const allProjects = realProjects.length > 0 ? realProjects : placeholderProjects;

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === categoryMap[activeFilter]);

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Page heading */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-2">
            Portfolio
          </p>
          <h1 className="text-3xl font-light text-[#1d1d1f]">All Work</h1>
        </div>

        {/* Filter bar */}
        <div className="mb-10">
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Grid */}
        <PortfolioGrid projects={filtered} />

        {filtered.length === 0 && (
          <p className="text-sm text-muted text-center py-16">
            No projects found in this category.
          </p>
        )}
      </div>
    </main>
  );
}
