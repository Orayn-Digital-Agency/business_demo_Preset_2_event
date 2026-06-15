'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import businessData from '@/config/business-data'

const EASE = [0.16, 1, 0.3, 1] as const

export default function GalleryPage() {
  const { gallery, businessName } = businessData
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const open  = (i: number) => setActiveIndex(i)
  const close = useCallback(() => setActiveIndex(null), [])

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length))
  }, [gallery.length])

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length))
  }, [gallery.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (activeIndex === null) return
      if (e.key === 'Escape')      close()
      if (e.key === 'ArrowLeft')   prev()
      if (e.key === 'ArrowRight')  next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [activeIndex, close, prev, next])

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
              <ChevronRightIcon size={13} className="text-white/30" aria-hidden="true" />
              <span style={{ color: 'var(--color-accent)' }}>Gallery</span>
            </nav>
            <h1 className="font-sora font-bold text-4xl md:text-5xl text-white">Gallery</h1>
            <p className="mt-3 font-inter text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
              A look inside {businessName}
            </p>
          </div>
        </div>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {gallery.length === 0 ? (
              <p className="text-center font-inter text-sm" style={{ color: 'var(--color-text-muted)' }}>
                No gallery images available yet.
              </p>
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {gallery.map((img, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.07 }}
                    onClick={() => open(i)}
                    className="group relative block w-full overflow-hidden rounded-2xl cursor-zoom-in"
                    style={{ breakInside: 'avoid', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
                    aria-label={`View image: ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(15,27,45,0.3)' }}
                      aria-hidden="true"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={close}
              aria-label="Close lightbox"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            {/* Image */}
            <motion.div
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[activeIndex].src}
                alt={gallery[activeIndex].alt}
                width={gallery[activeIndex].width}
                height={gallery[activeIndex].height}
                className="w-full h-auto object-contain max-h-[85vh]"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next image"
            >
              <ChevronRightIcon size={22} aria-hidden="true" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-inter text-xs text-white/50">
              {activeIndex + 1} / {gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
