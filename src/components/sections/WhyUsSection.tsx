'use client'

import { motion } from 'framer-motion'
import businessData from '@/config/business-data'

const EASE = [0.16, 1, 0.3, 1] as const
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }
const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export default function WhyUsSection() {
  const { whyUs } = businessData
  if (!whyUs || whyUs.length === 0) return null

  return (
    <section
      id="why-us"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-label="Why choose us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="section-heading">The difference you can feel</h2>
          <p className="overline mt-3">Why Choose Us</p>
          <p className="mt-5 font-inter text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            We have built our reputation on doing the details right, every single time.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {whyUs.map((reason, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative p-7 rounded-2xl bg-white"
              style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)' }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.03)', transition: { duration: 0.2 } }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-7 right-7 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: 'var(--color-accent)' }}
                aria-hidden="true"
              />
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(196,154,40,0.09)', border: '1px solid rgba(196,154,40,0.16)' }}
              >
                <span className="font-sora font-bold text-xs" style={{ color: 'var(--color-accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="font-inter text-sm leading-relaxed font-medium" style={{ color: 'var(--color-text-primary)' }}>
                {reason}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
