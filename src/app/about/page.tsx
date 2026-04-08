import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Alex Carpenter Studio",
  description: "Learn about Alex Carpenter — freelance multimedia digital artist based in Colorado specializing in video, design, and web.",
};

export default function AboutPage() {
  return <AboutClient />;
}
