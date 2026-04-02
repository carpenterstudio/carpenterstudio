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
        className="text-xs uppercase tracking-widest text-gray-400 mt-6"
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
          className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-xs uppercase tracking-widest transition-colors"
        >
          View Portfolio
        </Link>
        <Link
          href="/contact"
          className="border border-black text-black hover:bg-black hover:text-white px-8 py-3 text-xs uppercase tracking-widest transition-all"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
