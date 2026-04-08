import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Testimonials | Alex Carpenter Studio",
  description: "What clients say about working with Alex Carpenter Studio.",
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
