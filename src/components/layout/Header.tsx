"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-4xl grid grid-cols-3 items-center h-12 pl-8 pr-2 rounded-full bg-white/80 backdrop-blur-xl saturate-150 border border-black/10 shadow-lg shadow-black/5">
          {/* Logo — left */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo/alex-carpenter-studio-vertical-logo-black.svg"
              className="h-7 w-auto"
              alt="Alex Carpenter Studio"
            />
          </Link>

          {/* Desktop nav — center */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#1d1d1f] hover:text-[#2D6A4F] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact button — right */}
          <div className="hidden md:flex justify-end">
            <Link
              href="/contact"
              className="text-sm text-white px-4 py-1.5 rounded-full bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] hover:from-[#357A5C] hover:to-[#235C43] transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex justify-end col-span-2">
            <button
              className="p-1.5 text-gray-600 hover:text-black transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
