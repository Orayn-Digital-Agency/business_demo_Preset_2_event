"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import businessData from "@/config/business-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CTASection() {
  const { businessName, ctaLabel, ctaSubLabel, whatsappNumber, category } =
    businessData;

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-accent)" }}
      aria-label="Call to action"
    >
      {/* Dot texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.4) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />
      {/* Radial bloom */}
      <div
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="max-w-xl"
          >
            <h2
              className="font-sora font-bold leading-tight"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", color: "#0F1B2D" }}
            >
              Experience {businessName} for yourself
            </h2>
            <p
              className="mt-3 font-inter text-base"
              style={{ color: "rgba(15,27,45,0.62)" }}
            >
              {ctaSubLabel}
            </p>
          </motion.div>

          {/* Right — buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0"
          >
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-inter font-semibold text-sm transition-all duration-200"
              style={{ backgroundColor: "#0F1B2D", color: "#ffffff" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#1B2A4A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#0F1B2D";
              }}
            >
              {ctaLabel}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare size={15} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
