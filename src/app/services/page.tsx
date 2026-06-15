'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Sparkles, Flower2, Crown, Gem, Heart, Paintbrush,
  Scissors, Wrench, Zap, Sun, Home, ShieldCheck,
  ClipboardCheck, Factory, Stethoscope, BookOpen,
  Scale, Briefcase, Truck, Coffee, Utensils,
  Camera, Music, ShoppingBag, Settings, Users,
  CheckCircle, ChevronRight,
} from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import businessData from '@/config/business-data'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles, Flower2, Crown, Gem, Heart, Paintbrush,
  Scissors, Wrench, Zap, Sun, Home, ShieldCheck,
  ClipboardCheck, Factory, Stethoscope, BookOpen,
  Scale, Briefcase, Truck, Coffee, Utensils,
  Camera, Music, ShoppingBag, Settings, Users, CheckCircle,
}
function ServiceIcon({ name }: { name?: string }) {
  const C = name ? ICON_MAP[name] : undefined
  if (!C) return <CheckCircle size={24} className="text-[color:var(--color-accent)]" />
  return <C size={24} className="text-[color:var(--color-accent)]" />
}

const EASE = [0.16, 1, 0.3, 1] as const

export default function ServicesPage() {
  const { services, businessName } = businessData

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
              >
                Home
              </Link>
              <ChevronRight size={13} className="text-white/30" aria-hidden="true" />
              <span style={{ color: 'var(--color-accent)' }}>Services</span>
            </nav>
            <h1 className="font-sora font-bold text-4xl md:text-5xl text-white">Our Services</h1>
            <p className="mt-3 font-inter text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Everything {businessName} has to offer
            </p>
          </div>
        </div>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-default"
                  style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
                >
                  <div
                    className="absolute left-0 top-7 bottom-7 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'rgba(196,154,40,0.1)' }}
                  >
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h2 className="font-sora font-semibold text-xl" style={{ color: 'var(--color-primary)' }}>
                    {service.name}
                  </h2>
                  <p className="mt-2 font-inter text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {service.description}
                  </p>
                  {service.price && (
                    <p className="mt-4 font-sora font-bold text-sm" style={{ color: 'var(--color-accent)' }}>
                      {service.price}
                    </p>
                  )}
                  <div className="mt-5">
                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold transition-colors"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      Book this service <ChevronRight size={13} aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/booking" className="btn-accent">
                {businessData.ctaLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
