import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Alex Carpenter Studio — Video, Graphic Design & Web Design",
  description: "Video production, graphic design, and web design services from Alex Carpenter Studio. Based in Colorado, serving clients nationwide.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
