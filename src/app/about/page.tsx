'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import businessData from '@/config/business-data'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const staggerItem = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export default function AboutPage() {
  const { businessName, about, mission, stats, whyUs, city, category } = businessData

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
              <span style={{ color: 'var(--color-accent)' }}>About</span>
            </nav>
            <h1 className="font-sora font-bold text-4xl md:text-5xl text-white">About Us</h1>
            <p className="mt-3 font-inter text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
              The story behind {businessName}
            </p>
          </div>
        </div>

        {/* About + mission */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
                <p className="overline mb-3">Our Story</p>
                <h2 className="section-heading mb-5">Who we are</h2>
                <p className="font-inter text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {about}
                </p>
              </motion.div>

              {mission && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="rounded-2xl p-8 md:p-10"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <p className="overline mb-3">Our Mission</p>
                  <p className="font-sora font-semibold text-2xl leading-snug" style={{ color: 'var(--color-primary)' }}>
                    &ldquo;{mission}&rdquo;
                  </p>
                  <p className="mt-4 font-inter text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    {category} &mdash; {city}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Stats grid */}
            {stats && stats.length > 0 && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={staggerItem}
                    className="text-center p-6 rounded-2xl"
                    style={{ backgroundColor: 'var(--color-surface)' }}
                  >
                    <span className="font-sora font-bold text-3xl md:text-4xl" style={{ color: 'var(--color-accent)' }}>
                      {stat.value}
                    </span>
                    <p className="mt-2 font-inter text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Why work with us */}
        {whyUs && whyUs.length > 0 && (
          <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="text-center max-w-2xl mx-auto mb-12"
              >
                <p className="overline mb-3">Why Work With Us</p>
                <h2 className="section-heading">What sets us apart</h2>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto"
              >
                {whyUs.map((reason) => (
                  <motion.div
                    key={reason}
                    variants={staggerItem}
                    className="flex items-start gap-3 bg-white rounded-2xl p-5"
                    style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
                  >
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'var(--color-accent)' }}
                      aria-hidden="true"
                    />
                    <span className="font-inter text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                      {reason}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
