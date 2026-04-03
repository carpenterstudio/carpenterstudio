"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          src="/images/logo/alex-carpenter-studio-vertical-logo-black.svg"
          className="h-48 w-auto"
          alt="Alex Carpenter Studio"
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-xs uppercase tracking-widest text-[#6e6e73] mt-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        Multimedia Digital Artist
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex items-center gap-4 mt-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      >
        <Link
          href="/portfolio"
          className="bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] hover:from-[#357A5C] hover:to-[#235C43] text-white px-6 py-2.5 text-sm rounded-full transition-all"
        >
          View Portfolio
        </Link>
        <Link
          href="/contact"
          className="border border-[#2D6A4F] text-[#2D6A4F] hover:bg-gradient-to-br hover:from-[#2D6A4F] hover:to-[#1B4332] hover:text-white hover:border-transparent px-6 py-2.5 text-sm rounded-full transition-all"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
