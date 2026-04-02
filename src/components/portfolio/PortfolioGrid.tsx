"use client";

import { motion, AnimatePresence } from "framer-motion";
import { type Project } from "@/lib/projects";
import PortfolioCard from "./PortfolioCard";

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
