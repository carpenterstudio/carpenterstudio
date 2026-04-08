import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Alex Carpenter Studio",
  description: "Browse the portfolio of Alex Carpenter Studio — video production, graphic design, and web design projects.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
