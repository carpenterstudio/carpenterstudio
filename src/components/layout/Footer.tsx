import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo/alex-carpenter-studio-vertical-logo-black.svg"
            className="h-12 w-auto brightness-0 invert"
            alt="Alex Carpenter Studio"
          />
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.behance.net/alexcarpenter8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-colors"
          >
            Behance
            <ExternalLink size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-carpenter-co/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 tracking-wide">
          &copy; 2026 Alex Carpenter Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
