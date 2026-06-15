'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import businessData from '@/config/business-data'

const EASE = [0.16, 1, 0.3, 1] as const

interface FormState {
  name:    string
  phone:   string
  message: string
}

export default function ContactPage() {
  const { businessName, phone, whatsappNumber, email, address, city, openingHours, mapEmbedUrl } = businessData
  const [form, setForm] = useState<FormState>({ name: '', phone: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return
    const msg = encodeURIComponent(
      `Hello, I found you on your website.\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Nav />
      <main>
        {/* Page hero */}
        <div
          className="relative pt-32 pb-14 px-4"
          style={{ backgroundColor: 'var(--color-primary)', minHeight: '280px' }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage: `radial-gradient(circle, var(--color-accent) 1px, transparent 1px)`,
              backgroundSize: '36px 36px',
            }}
          />
          <div className="relative max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-xs font-inter mb-4" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)' }}
              >Home</Link>
              <ChevronRight size={13} className="text-white/30" aria-hidden="true" />
              <span style={{ color: 'var(--color-accent)' }}>Contact</span>
            </nav>
            <h1 className="font-sora font-bold text-4xl md:text-5xl text-white">Contact Us</h1>
            <p className="mt-3 font-inter text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We would love to hear from you
            </p>
          </div>
        </div>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left — details */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <p className="overline mb-3">Get In Touch</p>
                <h2 className="section-heading mb-6">Reach {businessName}</h2>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196,154,40,0.12)' }}>
                      <MapPin size={16} className="text-[color:var(--color-accent)]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-sora font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Address</p>
                      <p className="font-inter text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>{address}, {city}, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196,154,40,0.12)' }}>
                      <Phone size={16} className="text-[color:var(--color-accent)]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-sora font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Phone</p>
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="font-inter text-sm mt-0.5 block hover:underline" style={{ color: 'var(--color-text-secondary)' }}>{phone}</a>
                    </div>
                  </div>

                  {email && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196,154,40,0.12)' }}>
                        <Mail size={16} className="text-[color:var(--color-accent)]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-sora font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Email</p>
                        <a href={`mailto:${email}`} className="font-inter text-sm mt-0.5 block hover:underline" style={{ color: 'var(--color-text-secondary)' }}>{email}</a>
                      </div>
                    </div>
                  )}

                  {openingHours.length > 0 && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196,154,40,0.12)' }}>
                        <Clock size={16} className="text-[color:var(--color-accent)]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-sora font-semibold text-sm mb-1" style={{ color: 'var(--color-primary)' }}>Opening Hours</p>
                        {openingHours.map((h) => (
                          <p key={h.day} className="font-inter text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            <span className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{h.day}:</span> {h.hours}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-8">
                  <MessageSquare size={17} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Right — form */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                className="rounded-2xl p-6 md:p-8"
                style={{ backgroundColor: 'var(--color-surface)' }}
              >
                <h3 className="font-sora font-semibold text-xl mb-1" style={{ color: 'var(--color-primary)' }}>Send a message</h3>
                <p className="font-inter text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>We will reply via WhatsApp within the hour.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div>
                    <label htmlFor="name" className="block font-inter text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>Your Name</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Full name" required autoComplete="name" className="input-field bg-white" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-inter text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" required autoComplete="tel" className="input-field bg-white" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-inter text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>Message</label>
                    <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="How can we help you?" className="input-field resize-none bg-white" />
                  </div>
                  <button type="submit" className="btn-whatsapp w-full justify-center mt-1">
                    <MessageSquare size={17} aria-hidden="true" />
                    Send via WhatsApp
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-16 rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
            >
              <div className="aspect-[16/7] relative">
                <iframe
                  src={mapEmbedUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${businessName} location on Google Maps`}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
