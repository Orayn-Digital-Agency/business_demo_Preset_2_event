"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import businessData from "@/config/business-data";

const EASE = [0.16, 1, 0.3, 1] as const;

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

export default function BookingPage() {
  const {
    businessName,
    phone: bizPhone,
    whatsappNumber,
    bookingPageTitle,
    bookingPageSub,
    bookingFields,
    services,
    ctaLabel,
  } = businessData;

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function buildMessage() {
    const lines = [
      `Hello ${businessName}, I would like to make a request.`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      bookingFields.showService && form.service
        ? `Service: ${form.service}`
        : null,
      bookingFields.showDate && form.date
        ? `${bookingFields.dateLabel}: ${form.date}`
        : null,
      bookingFields.showTime && form.time
        ? `${bookingFields.timeLabel}: ${form.time}`
        : null,
      bookingFields.showGuests && form.guests
        ? `${bookingFields.guestLabel}: ${form.guests}`
        : null,
      form.notes ? `${bookingFields.notesLabel}: ${form.notes}` : null,
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSending(true);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${buildMessage()}`,
      "_blank",
      "noopener,noreferrer",
    );
    setTimeout(() => setSending(false), 1500);
  }

  return (
    <>
      <Nav />
      <main
        className="min-h-screen pt-24 pb-20"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-inter text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-text-secondary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text-secondary)";
              }}
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Back to home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-8"
          >
            <h1
              className="font-sora font-bold text-3xl md:text-4xl"
              style={{ color: "var(--color-primary)" }}
            >
              {bookingPageTitle}
            </h1>
            <p className="overline mt-3">{businessName}</p>
            <p
              className="mt-4 font-inter text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {bookingPageSub}
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="bg-white rounded-2xl p-7 md:p-9"
            style={{
              boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="bk-name"
                  className="block font-inter text-xs font-semibold mb-1.5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Full Name{" "}
                  <span style={{ color: "var(--color-accent)" }}>*</span>
                </label>
                <input
                  id="bk-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  autoComplete="name"
                  className="input-field"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="bk-phone"
                  className="block font-inter text-xs font-semibold mb-1.5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Phone Number{" "}
                  <span style={{ color: "var(--color-accent)" }}>*</span>
                </label>
                <input
                  id="bk-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  required
                  autoComplete="tel"
                  className="input-field"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="bk-email"
                  className="block font-inter text-xs font-semibold mb-1.5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Email Address
                </label>
                <input
                  id="bk-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Optional"
                  autoComplete="email"
                  className="input-field"
                />
              </div>

              {/* Service dropdown — only when showService: true */}
              {bookingFields.showService && services && services.length > 0 && (
                <div>
                  <label
                    htmlFor="bk-service"
                    className="block font-inter text-xs font-semibold mb-1.5"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Service
                  </label>
                  <select
                    id="bk-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Date + Time row */}
              {(bookingFields.showDate || bookingFields.showTime) && (
                <div
                  className={`grid gap-4 ${bookingFields.showDate && bookingFields.showTime ? "grid-cols-2" : "grid-cols-1"}`}
                >
                  {bookingFields.showDate && (
                    <div>
                      <label
                        htmlFor="bk-date"
                        className="block font-inter text-xs font-semibold mb-1.5"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {bookingFields.dateLabel}
                      </label>
                      <input
                        id="bk-date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  )}
                  {bookingFields.showTime && (
                    <div>
                      <label
                        htmlFor="bk-time"
                        className="block font-inter text-xs font-semibold mb-1.5"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {bookingFields.timeLabel}
                      </label>
                      <input
                        id="bk-time"
                        name="time"
                        type="time"
                        value={form.time}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Guests — only when showGuests: true */}
              {bookingFields.showGuests && (
                <div>
                  <label
                    htmlFor="bk-guests"
                    className="block font-inter text-xs font-semibold mb-1.5"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {bookingFields.guestLabel}
                  </label>
                  <input
                    id="bk-guests"
                    name="guests"
                    type="number"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="e.g. 4"
                    min="1"
                    className="input-field"
                  />
                </div>
              )}

              {/* Notes */}
              <div>
                <label
                  htmlFor="bk-notes"
                  className="block font-inter text-xs font-semibold mb-1.5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {bookingFields.notesLabel}
                </label>
                <textarea
                  id="bk-notes"
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Any additional details..."
                  className="input-field resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="btn-whatsapp w-full justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <MessageSquare size={16} aria-hidden="true" />
                {sending ? "Opening WhatsApp..." : bookingFields.submitLabel}
              </button>

              <p
                className="font-inter text-xs text-center mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                Your request will be sent via WhatsApp. We respond within the
                hour.
              </p>
            </form>
          </motion.div>

          {/* Alternate contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex items-center justify-center gap-6"
          >
            <a
              href={`tel:${bizPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 font-inter text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-text-secondary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text-secondary)";
              }}
            >
              <Phone size={14} aria-hidden="true" />
              Call us instead
            </a>
            <span
              style={{ color: "var(--color-text-muted)" }}
              aria-hidden="true"
            >
              ·
            </span>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-text-secondary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#25D366";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text-secondary)";
              }}
            >
              <MessageSquare size={14} aria-hidden="true" />
              WhatsApp us
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
