"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Film, Pen, Monitor } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Production",
    description:
      "From concept to final cut — promotional films, event recaps, and branded content.",
    href: "/services",
  },
  {
    icon: Pen,
    title: "Graphic Design",
    description:
      "Brand identities, print collateral, and visual systems that make a lasting impression.",
    href: "/services",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Clean, fast, and purposeful digital experiences built for conversion and clarity.",
    href: "/services",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-secondary py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Capabilities
          </p>
          <h2 className="text-2xl font-light text-primary">What I Do</h2>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <div className="mb-4">
                  <Icon size={22} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted mb-5 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-xs uppercase tracking-widest text-primary hover:text-gray-500 transition-colors"
                >
                  View Work &rarr;
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
