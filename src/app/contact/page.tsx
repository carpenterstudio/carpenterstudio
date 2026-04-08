import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Alex Carpenter Studio",
  description: "Get in touch with Alex Carpenter Studio to start your next video, design, or web project.",
};

export default function ContactPage() {
  return <ContactClient />;
}
