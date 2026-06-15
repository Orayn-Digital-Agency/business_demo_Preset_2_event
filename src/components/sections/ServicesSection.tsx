"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Utensils,
  Users,
  Briefcase,
  Truck,
  Coffee,
  ClipboardCheck,
  Heart,
  Star,
  Paintbrush,
  Scissors,
  Wrench,
  Hammer,
  Home,
  Zap,
  Sun,
  ShieldCheck,
  Leaf,
  Award,
  BookOpen,
  Stethoscope,
  Camera,
  ShoppingBag,
  Package,
  Settings,
  BarChart2,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import businessData from "@/config/business-data";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; style?: React.CSSProperties }>
> = {
  Utensils,
  Users,
  Briefcase,
  Truck,
  Coffee,
  ClipboardCheck,
  Heart,
  Star,
  Paintbrush,
  Scissors,
  Wrench,
  Hammer,
  Home,
  Zap,
  Sun,
  ShieldCheck,
  Leaf,
  Award,
  BookOpen,
  Stethoscope,
  Camera,
  ShoppingBag,
  Package,
  Settings,
  BarChart2,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
};

function ServiceIcon({ name, size = 20 }: { name?: string; size?: number }) {
  const C = name ? ICON_MAP[name] : undefined;
  if (!C)
    return <CheckCircle size={size} style={{ color: "var(--color-accent)" }} />;
  return <C size={size} style={{ color: "var(--color-accent)" }} />;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function ServicesSection() {
  const { services, category, city, ctaLabel } = businessData;

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-white"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="max-w-xl"
          >
            <h2 className="section-heading">Our services</h2>
            <p className="overline mt-3">What We Offer</p>
            <p
              className="mt-5 font-inter text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Professional {category.toLowerCase()} in {city}. Every service
              delivered with precision and care.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/booking" className="btn-accent flex-shrink-0">
              {ctaLabel}
              <ChevronRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className={`grid gap-4 ${
            services.length <= 4
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              variants={staggerItem}
              className="group relative p-7 rounded-2xl border bg-white transition-all duration-200 cursor-default"
              style={{
                borderColor: "rgba(0,0,0,0.06)",
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 44px rgba(0,0,0,0.09)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-7 bottom-7 w-[3px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"
                style={{ backgroundColor: "var(--color-accent)" }}
                aria-hidden="true"
              />

              {/* Top row: icon + index */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(196,154,40,0.08)",
                    border: "1px solid rgba(196,154,40,0.14)",
                  }}
                >
                  <ServiceIcon name={service.icon} size={19} />
                </div>
                <span
                  className="font-sora font-bold text-4xl leading-none"
                  style={{ color: "var(--color-primary)", opacity: 0.05 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Name */}
              <h3
                className="font-sora font-semibold text-lg leading-snug"
                style={{ color: "var(--color-primary)" }}
              >
                {service.name}
              </h3>

              {/* Description */}
              <p
                className="mt-2 font-inter text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {service.description}
              </p>

              {/* Price badge */}
              {service.price && (
                <div className="mt-4">
                  <span
                    className="inline-block font-inter text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(196,154,40,0.1)",
                      color: "var(--color-accent)",
                      border: "1px solid rgba(196,154,40,0.18)",
                    }}
                  >
                    {service.price}
                  </span>
                </div>
              )}

              {/* Enquire link */}
              <div
                className="mt-5 flex items-center gap-1 font-inter text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "var(--color-accent)" }}
              >
                <Link href="/booking" className="hover:underline">
                  Enquire now
                </Link>
                <ChevronRight size={12} aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
