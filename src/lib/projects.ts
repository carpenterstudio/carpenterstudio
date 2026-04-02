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
}

export const projects: Project[] = [];
