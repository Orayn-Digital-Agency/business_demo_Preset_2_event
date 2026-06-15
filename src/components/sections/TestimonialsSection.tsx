"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import businessData from "@/config/business-data";

const EASE = [0.16, 1, 0.3, 1] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          style={{ color: "var(--color-accent)" }}
          className={i < rating ? "fill-current" : "opacity-20"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { testimonials } = businessData;
  if (!testimonials || testimonials.length === 0) return null;

  const count = testimonials.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => setActive((i) => (i + 1) % count), 4500);
    return () => clearInterval(id);
  }, [paused, count]);

  function prev() {
    setActive((i) => (i - 1 + count) % count);
  }
  function next() {
    setActive((i) => (i + 1) % count);
  }

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
      aria-label="Testimonials"
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(196,154,40,0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      {/* Bloom */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(196,154,40,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white leading-tight">
            What our clients say
          </h2>
          <p className="overline mt-3" style={{ color: "var(--color-accent)" }}>
            Client Stories
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Mobile — single card */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.38, ease: EASE }}
                className="p-7 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <TestimonialCard t={testimonials[active]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop — 3 visible, centre highlighted */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {[-1, 0, 1].map((offset) => {
              const idx = (active + offset + count) % count;
              const isCenter = offset === 0;
              return (
                <motion.div
                  key={`${active}-${offset}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.38,
                    ease: EASE,
                    delay: Math.abs(offset) * 0.06,
                  }}
                  className="p-7 rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: isCenter
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.03)",
                    border: isCenter
                      ? "1px solid rgba(196,154,40,0.28)"
                      : "1px solid rgba(255,255,255,0.07)",
                    opacity: isCenter ? 1 : 0.55,
                    transform: isCenter ? "scale(1)" : "scale(0.97)",
                  }}
                >
                  <TestimonialCard t={testimonials[idx]} />
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.16)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              <ChevronLeft size={16} className="text-white" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 22 : 7,
                    height: 7,
                    backgroundColor:
                      i === active
                        ? "var(--color-accent)"
                        : "rgba(255,255,255,0.22)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.16)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              <ChevronRight size={16} className="text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
}: {
  t: { name: string; role: string; text: string; rating: number };
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={t.rating} />
        <Quote
          size={20}
          style={{ color: "var(--color-accent)", opacity: 0.55 }}
          aria-hidden="true"
        />
      </div>
      <p
        className="font-inter text-sm leading-[1.85]"
        style={{ color: "rgba(255,255,255,0.72)" }}
      >
        &ldquo;{t.text}&rdquo;
      </p>
      <div
        className="flex items-center gap-3 mt-6 pt-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-sora font-bold text-xs flex-shrink-0"
          style={{ backgroundColor: "var(--color-accent)", color: "#0F1B2D" }}
          aria-hidden="true"
        >
          {t.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-sora font-semibold text-sm text-white">{t.name}</p>
          <p
            className="font-inter text-xs mt-0.5"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            {t.role}
          </p>
        </div>
      </div>
    </>
  );
}
