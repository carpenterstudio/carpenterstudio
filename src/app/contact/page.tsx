"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });

  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ── Left: info ── */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="space-y-8 lg:sticky lg:top-32"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-2">Get in Touch</p>
              <h1 className="text-4xl font-thin text-[#1d1d1f] mb-4">Let&apos;s work together.</h1>
              <p className="text-sm text-[#6e6e73] leading-relaxed max-w-sm">
                Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll
                get back to you within 24 hours.
              </p>
            </div>

            {/* Email — TODO: update with real email */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-2">Email</p>
              <a
                href="mailto:hello@carpenterstudio.co"
                className="text-sm text-[#1d1d1f] hover:text-[#2D6A4F] transition-colors"
              >
                hello@carpenterstudio.co
              </a>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#6e6e73] mb-3">Follow</p>
              <div className="flex flex-col gap-3">
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
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, y: 24 }}
            animate={rightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </main>
  );
}
