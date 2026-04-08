"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesClient() {
  const videoProjects = projects.filter((p) => p.category === "video").slice(0, 6);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-2">What I Do</p>
          <h1 className="text-3xl font-thin text-[#1d1d1f]">Services</h1>
        </motion.div>

        {/* ── Service 1: Video Production ── text left, grid right */}
        <ServiceRow
          flip={false}
          label="01"
          title="Video Production"
          types={[
            "Corporate Videos",
            "Product Videos",
            "Social Media Content",
            "Documentaries",
            "Explainer / Animated Videos",
            "Testimonial Videos",
            "Promotional Videos",
          ]}
          description="From concept to final cut, I craft compelling video content that tells your brand's story. Whether it's a polished corporate piece or dynamic social media content, every frame is intentional."
          ctaLabel="View Video Work"
          ctaHref="/portfolio?category=video"
          visual={
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-3"
            >
              {videoProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={fadeUp}
                  className="aspect-video relative rounded-xl overflow-hidden bg-gray-100"
                >
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          }
        />

        <Divider />

        {/* ── Service 2: Graphic Design ── visual left, text right */}
        <ServiceRow
          flip={true}
          label="02"
          title="Graphic Design"
          types={[
            "Branding",
            "Logos",
            "Marketing Materials",
            "Social Media Graphics",
            "Print Design",
          ]}
          description="Visual identity that makes an impression. I design brand systems and marketing materials that communicate your values with clarity and style."
          ctaLabel="View Design Work"
          ctaHref="/portfolio?category=graphic-design"
          visual={
            /* TODO: Replace with actual graphic design portfolio items */
            <div className="grid grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xl bg-gray-100 ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
                />
              ))}
            </div>
          }
        />

        <Divider />

        {/* ── Service 3: Web Design ── text left, visual right */}
        <ServiceRow
          flip={false}
          label="03"
          title="Web Design"
          types={[
            "Website Design",
            "Landing Pages",
            "UI/UX Design",
          ]}
          description="Clean, purposeful web experiences built with modern tools. I design and develop sites that are as functional as they are beautiful."
          ctaLabel="View Web Work"
          ctaHref="/portfolio?category=web-design"
          visual={
            /* TODO: Replace with actual web design portfolio screenshots */
            <div className="rounded-2xl bg-gray-100 w-full aspect-[4/3] flex items-center justify-center">
              <p className="text-sm text-[#6e6e73]">Portfolio items coming soon</p>
            </div>
          }
        />

        {/* ── CTA ── */}
        <SectionReveal>
          <div className="bg-[#F5F5F5] rounded-3xl p-16 text-center mt-24">
            <h2 className="text-3xl font-thin text-[#1d1d1f] mb-4">Ready to start a project?</h2>
            <p className="text-[#6e6e73] mb-8">Let&apos;s create something great together.</p>
            <Link
              href="/contact"
              className="inline-block text-white text-sm uppercase tracking-widest px-8 py-3 rounded-full bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] hover:from-[#357A5C] hover:to-[#235C43] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </SectionReveal>

      </div>
    </main>
  );
}

/* ── Sub-components ── */

function Divider() {
  return <div className="border-t border-gray-100 my-20" />;
}

interface ServiceRowProps {
  flip: boolean;
  label: string;
  title: string;
  types: string[];
  description: string;
  ctaLabel: string;
  ctaHref: string;
  visual: React.ReactNode;
}

function ServiceRow({ flip, label, title, types, description, ctaLabel, ctaHref, visual }: ServiceRowProps) {
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-80px" });
  const visualRef = useRef(null);
  const visualInView = useInView(visualRef, { once: true, margin: "-80px" });

  const textCol = (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0, y: 24 }}
      animate={textInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className="flex flex-col justify-center"
    >
      <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-2">{label}</p>
      <h2 className="text-3xl font-thin text-[#1d1d1f] mb-6">{title}</h2>

      <ul className="flex flex-wrap gap-2 mb-6">
        {types.map((t) => (
          <li
            key={t}
            className="text-xs px-3 py-1 rounded-full border border-gray-200 text-[#1d1d1f]"
          >
            {t}
          </li>
        ))}
      </ul>

      <p className="text-sm text-[#6e6e73] leading-relaxed mb-8">{description}</p>

      <Link
        href={ctaHref}
        className="self-start text-sm px-6 py-2.5 rounded-full border border-[#2D6A4F] text-[#2D6A4F] hover:bg-gradient-to-br hover:from-[#2D6A4F] hover:to-[#1B4332] hover:text-white hover:border-transparent transition-all"
      >
        {ctaLabel}
      </Link>
    </motion.div>
  );

  const visualCol = (
    <motion.div
      ref={visualRef}
      initial={{ opacity: 0, y: 24 }}
      animate={visualInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 }}
    >
      {visual}
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {flip ? (
        <>
          {visualCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {visualCol}
        </>
      )}
    </div>
  );
}
