import { type Project } from "@/lib/projects";

const categoryLabel: Record<string, string> = {
  video: "Video",
  "graphic-design": "Graphic Design",
  "web-design": "Web Design",
};

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <article className="group bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300" />
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-transparent group-hover:bg-[#2D6A4F]/90 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Project
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            {categoryLabel[project.category] ?? project.category}
          </p>
          <p className="text-xs text-muted">{project.year}</p>
        </div>
        <h3 className="text-sm font-medium text-primary mb-0.5">
          {project.title}
        </h3>
        <p className="text-xs text-muted">{project.client}</p>
      </div>
    </article>
  );
}
