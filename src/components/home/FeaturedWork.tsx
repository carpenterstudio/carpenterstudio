"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";

// Placeholder cards when projects array is empty
const placeholderProjects: Project[] = [
  {
    slug: "placeholder-1",
    title: "Brand Identity System",
    client: "Sample Client",
    category: "graphic-design",
    year: "2025",
    thumbnail: "",
    description: "A comprehensive brand identity system.",
  },
  {
    slug: "placeholder-2",
    title: "Promotional Video Series",
    client: "Creative Agency",
    category: "video",
    year: "2025",
    thumbnail: "",
    description: "A series of promotional videos.",
  },
  {
    slug: "placeholder-3",
    title: "Portfolio Website",
    client: "Independent Artist",
    category: "web-design",
    year: "2024",
    thumbnail: "",
    description: "A minimal portfolio website.",
  },
  {
    slug: "placeholder-4",
    title: "Event Recap Film",
    client: "Local Studio",
    category: "video",
    year: "2024",
    thumbnail: "",
    description: "Event recap short film.",
  },
  {
    slug: "placeholder-5",
    title: "E-Commerce Redesign",
    client: "Retail Brand",
    category: "web-design",
    year: "2024",
    thumbnail: "",
    description: "Full e-commerce redesign.",
  },
];

const categoryLabel: Record<string, string> = {
  video: "Video",
  "graphic-design": "Graphic Design",
  "web-design": "Web Design",
};

interface ProjectCardProps {
  project: Project;
  className?: string;
}

function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div
      className={`group bg-white border border-gray-100 hover:shadow-md transition-shadow overflow-hidden ${className}`}
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-gray-100 overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300" />
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
          {categoryLabel[project.category] ?? project.category}
        </p>
        <h3 className="text-sm font-medium text-primary mb-0.5">
          {project.title}
        </h3>
        <p className="text-xs text-muted">{project.client}</p>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FeaturedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const displayProjects = projects.length > 0 ? projects : placeholderProjects;
  const useBento = displayProjects.length >= 5;

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Selected Work
          </p>
          <h2 className="text-2xl font-light text-primary">Recent Projects</h2>
        </motion.div>

        {/* Grid */}
        {useBento ? (
          <motion.div
            className="grid grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Row 1: large card (col-span-2) + tall card (row-span-2) */}
            <motion.div variants={itemVariants} className="col-span-2">
              <ProjectCard project={displayProjects[0]} className="h-full" />
            </motion.div>
            <motion.div variants={itemVariants} className="row-span-2">
              <ProjectCard project={displayProjects[1]} className="h-full" />
            </motion.div>
            {/* Row 2: two equal cards on the left */}
            <motion.div variants={itemVariants}>
              <ProjectCard project={displayProjects[2]} className="h-full" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectCard project={displayProjects[3]} className="h-full" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {displayProjects.slice(0, 3).map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <Link
            href="/portfolio"
            className="text-xs uppercase tracking-widest text-primary hover:text-gray-500 transition-colors"
          >
            View All Work &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
