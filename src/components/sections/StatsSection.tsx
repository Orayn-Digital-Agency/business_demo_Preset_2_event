"use client";

import { motion } from "framer-motion";
import businessData from "@/config/business-data";

const EASE = [0.16, 1, 0.3, 1] as const;
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function StatsSection() {
  const { stats, whyUs, businessName } = businessData;
  if (!stats || stats.length === 0) return null;

  return (
    <section
      className="py-0"
      style={{ backgroundColor: "var(--color-accent)" }}
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={item}
              className="flex flex-col items-center justify-center py-9 px-4 text-center"
              style={{
                borderRight:
                  i < stats.length - 1 ? "1px solid rgba(0,0,0,0.09)" : "none",
              }}
            >
              <span
                className="font-sora font-bold leading-none"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.6rem)",
                  color: "#0F1B2D",
                }}
              >
                {s.value}
              </span>
              <span
                className="mt-2 font-inter text-[11px] uppercase tracking-[0.12em] font-semibold"
                style={{ color: "rgba(15,27,45,0.55)" }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
