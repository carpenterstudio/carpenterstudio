"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* TODO: replace with real testimonials */
const testimonials = [
  {
    id: 1,
    quote:
      "Alex brought our vision to life in ways we didn't think possible. The final video exceeded every expectation.",
    name: "Sarah M.",
    role: "Marketing Director",
    company: "[Company Name]",
  },
  {
    id: 2,
    quote:
      "Incredibly talented and easy to work with. The turnaround was fast and the quality was exceptional.",
    name: "James R.",
    role: "Founder",
    company: "[Company Name]",
  },
  {
    id: 3,
    quote:
      "Our brand identity has never looked better. Alex has a gift for translating ideas into stunning visuals.",
    name: "Rachel T.",
    role: "Creative Director",
    company: "[Company Name]",
  },
  {
    id: 4,
    quote:
      "The video content Alex produced for our product launch drove real results. Highly recommend.",
    name: "Mike D.",
    role: "CEO",
    company: "[Company Name]",
  },
  {
    id: 5,
    quote:
      "Professional, creative, and communicative throughout the entire process. Will definitely work together again.",
    name: "Lisa K.",
    role: "Brand Manager",
    company: "[Company Name]",
  },
  {
    id: 6,
    quote:
      "Alex understood our brand from day one and delivered work that truly represents who we are.",
    name: "Tom B.",
    role: "Owner",
    company: "[Company Name]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function TestimonialCard({
  quote,
  name,
  role,
  company,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="text-6xl text-[#2D6A4F] font-serif leading-none mb-4 select-none">&ldquo;</div>
      <p className="text-[#1d1d1f] text-sm leading-relaxed flex-1 mb-6">{quote}</p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-medium text-sm text-[#1d1d1f]">{name}</p>
        <p className="text-xs text-[#6e6e73]">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-2">Kind Words</p>
          <h1 className="text-3xl font-thin text-[#1d1d1f]">Testimonials</h1>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={cardVariants}>
              <TestimonialCard
                quote={t.quote}
                name={t.name}
                role={t.role}
                company={t.company}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}
