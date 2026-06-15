"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import businessData from "@/config/business-data";

const EASE = [0.16, 1, 0.3, 1] as const;
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function GallerySection() {
  const { gallery } = businessData;
  if (!gallery || gallery.length === 0) return null;

  // Show first 5 on homepage — full gallery page shows all
  const preview = gallery.slice(0, 5);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-white"
      aria-label="Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="section-heading">Our work</h2>
            <p className="overline mt-3">Gallery</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-inter font-semibold text-sm transition-colors duration-200"
              style={{ color: "var(--color-primary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-primary)";
              }}
            >
              View full gallery
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Masonry grid — 3 columns on desktop */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {preview.map((img, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "sm:row-span-2" : ""
              }`}
              style={{
                aspectRatio: i === 0 ? "auto" : "4/3",
                minHeight: i === 0 ? "480px" : "260px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,27,45,0.7) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
              {/* Caption slides up */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-inter text-sm text-white font-medium leading-snug">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
