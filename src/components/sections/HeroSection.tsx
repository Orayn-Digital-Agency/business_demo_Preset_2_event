"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, MapPin, Phone, ArrowRight } from "lucide-react";
import businessData from "@/config/business-data";

const EASE = [0.16, 1, 0.3, 1] as const;

function HeroSlideshow({ images }: { images: { src: string; alt: string }[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      5500,
    );
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[active].src}
            alt={images[active].alt}
            fill
            className="object-cover"
            priority={active === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      {/* Gradient overlay — left side darker for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.7) 50%, rgba(15,27,45,0.35) 100%)",
        }}
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, rgba(15,27,45,0.6), transparent)",
        }}
      />
      {/* Slide dots */}
      {images.length > 1 && (
        <div className="absolute bottom-10 left-8 sm:left-16 lg:left-24 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                backgroundColor:
                  i === active
                    ? "var(--color-accent)"
                    : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function HeroSection() {
  const {
    businessName,
    tagline,
    category,
    city,
    ctaLabel,
    ctaSubLabel,
    whatsappNumber,
    phone,
    gallery,
  } = businessData;

  const heroImages = gallery.length > 0 ? gallery : [];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
      aria-label="Hero"
    >
      {/* Background */}
      {heroImages.length > 0 ? (
        <HeroSlideshow images={heroImages} />
      ) : (
        /* Fallback texture */
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(196,154,40,0.16) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
          <div
            className="absolute -top-48 -right-48 w-[640px] h-[640px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle, rgba(196,154,40,0.07), transparent 70%)",
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 md:py-48 w-full">
        <div className="max-w-2xl">
          {/* Category pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-inter font-semibold uppercase tracking-[0.12em] border mb-7"
              style={{
                borderColor: "rgba(196,154,40,0.4)",
                backgroundColor: "rgba(196,154,40,0.1)",
                color: "var(--color-accent)",
              }}
            >
              <MapPin size={10} aria-hidden="true" />
              {category} &middot; {city}
            </span>
          </motion.div>

          {/* Business name */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
            className="font-sora font-bold text-white leading-[1.04] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)" }}
          >
            {businessName}
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.38 }}
            className="mt-3 h-[3px] w-16 origin-left rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
            aria-hidden="true"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
            className="mt-6 font-inter text-lg md:text-xl leading-[1.75]"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            {tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link href="/booking" className="btn-accent">
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
              WhatsApp
            </a>
          </motion.div>

          {/* Sub-label + phone */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="mt-7 flex flex-col gap-2"
          >
            {ctaSubLabel && (
              <p
                className="font-inter text-sm"
                style={{ color: "rgba(255,255,255,0.42)" }}
              >
                {ctaSubLabel}
              </p>
            )}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 font-inter text-sm transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.42)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.42)";
              }}
            >
              <Phone size={13} aria-hidden="true" />
              {phone}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(196,154,40,0.55), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
