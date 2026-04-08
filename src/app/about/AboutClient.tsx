"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

/* TODO: update with your actual tools */
const toolCategories = [
  {
    label: "Video",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Cinema 4D", "Adobe Audition"],
  },
  {
    label: "Design",
    tools: ["Adobe Photoshop", "Illustrator", "InDesign", "Figma"],
  },
  {
    label: "Web",
    tools: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
];

const clients = [
  "Papa & Barkley",
  "NULASTIN®",
  "PurePressure",
  "LowTemp Industries",
  "SiNAPTIC Technologies",
  "Colorado Restaurant Association",
  "Renegade Brewing Co",
  "Final Move Fitness",
];

export default function AboutClient() {
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">

          {/* ── Left column (sticky) ── */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl bg-gray-100 aspect-[3/4] w-full flex items-center justify-center overflow-hidden"
            >
              {/* TODO: add photo to /public/images/about/ and replace this placeholder */}
              <p className="text-sm text-[#6e6e73]">Photo coming soon</p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="flex flex-col gap-3"
            >
              <a
                href="https://www.behance.net/alexcarpenter8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#6e6e73] hover:text-[#2D6A4F] transition-colors"
              >
                <ExternalLink size={14} />
                Behance
              </a>
              <a
                href="https://www.linkedin.com/in/alexander-carpenter-co/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#6e6e73] hover:text-[#2D6A4F] transition-colors"
              >
                <ExternalLink size={14} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="space-y-12"
          >
            {/* Heading */}
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-2">About</p>
              <h1 className="text-4xl font-thin text-[#1d1d1f] mb-2">Alex Carpenter</h1>
              <p className="text-sm uppercase tracking-widest text-[#6e6e73]">Multimedia Digital Artist</p>
            </motion.div>

            {/* Bio */}
            {/* TODO: replace with your actual bio */}
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                I&apos;m a freelance multimedia digital artist based in Colorado, specializing in video
                production, graphic design, and web design. I work with brands and businesses to create
                compelling visual content that resonates with their audience.
              </p>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                With over a decade of experience, I&apos;ve had the privilege of working with clients ranging
                from wellness brands to tech companies, breweries to fitness studios. Every project is an
                opportunity to tell a unique story.
              </p>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                My approach is collaborative and detail-oriented — I take the time to understand your brand,
                your goals, and your audience before putting anything on screen or page.
              </p>
            </motion.div>

            {/* Selected Clients */}
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-4">Selected Clients</p>
              <p className="text-sm text-[#6e6e73]">
                {clients.map((client, i) => (
                  <span key={client}>
                    <span className="text-[#1d1d1f] font-medium">{client}</span>
                    {i < clients.length - 1 && <span className="text-[#6e6e73]">, </span>}
                  </span>
                ))}
              </p>
            </motion.div>

            {/* Tools & Skills */}
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-6">Tools &amp; Skills</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {toolCategories.map((cat) => (
                  <div key={cat.label}>
                    <p className="text-xs text-[#6e6e73] mb-3">{cat.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-gray-200 text-xs px-3 py-1 text-[#1d1d1f]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="text-sm text-[#2D6A4F] hover:underline transition-colors"
              >
                Let&apos;s work together &rarr;
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
