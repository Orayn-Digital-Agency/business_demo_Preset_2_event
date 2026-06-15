"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import businessData from "@/config/business-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function LocationSection() {
  const {
    businessName,
    address,
    city,
    phone,
    email,
    whatsappNumber,
    openingHours,
    mapEmbedUrl,
    ctaLabel,
  } = businessData;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)" }}
      aria-label="Location and contact"
    >
      {/* Vertical rule accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-px pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(196,154,40,0.1), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <h2 className="section-heading">Find us</h2>
          <p className="overline mt-3">Location &amp; Contact</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact grid (3/5) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            {/* Address */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl bg-white"
              style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(196,154,40,0.1)" }}
              >
                <MapPin
                  size={16}
                  style={{ color: "var(--color-accent)" }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p
                  className="font-inter text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Address
                </p>
                <p
                  className="font-inter text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {address}, {city}, Nigeria
                </p>
              </div>
            </div>

            {/* Phone */}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white transition-shadow duration-200 hover:shadow-md"
              style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(196,154,40,0.1)" }}
              >
                <Phone
                  size={16}
                  style={{ color: "var(--color-accent)" }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p
                  className="font-inter text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Phone
                </p>
                <p
                  className="font-inter text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {phone}
                </p>
              </div>
            </a>

            {/* Email */}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white transition-shadow duration-200 hover:shadow-md"
                style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(196,154,40,0.1)" }}
                >
                  <Mail
                    size={16}
                    style={{ color: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p
                    className="font-inter text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Email
                  </p>
                  <p
                    className="font-inter text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {email}
                  </p>
                </div>
              </a>
            )}

            {/* Hours */}
            {openingHours && openingHours.length > 0 && (
              <div
                className="flex items-start gap-4 p-5 rounded-2xl bg-white"
                style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(196,154,40,0.1)" }}
                >
                  <Clock
                    size={16}
                    style={{ color: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p
                    className="font-inter text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Opening Hours
                  </p>
                  {openingHours.map((h) => (
                    <p
                      key={h.day}
                      className="font-inter text-sm mb-0.5"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span
                        className="font-semibold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {h.day}:
                      </span>{" "}
                      {h.hours}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
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
            </div>
          </motion.div>

          {/* Right — map (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="lg:col-span-2 rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 8px 48px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <div className="aspect-[3/4] lg:aspect-auto min-h-[420px] relative">
              <iframe
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${businessName} location`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
