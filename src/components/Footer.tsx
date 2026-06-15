'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import businessData from '@/config/business-data'

export default function Footer() {
  const year = new Date().getFullYear()
  const { businessName, tagline, phone, email, address, city,
          openingHours, instagramHandle, facebookHandle, whatsappNumber } = businessData

  return (
    <footer style={{ backgroundColor: '#0F1B2D' }}>
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Column 1 — brand */}
          <div>
            <span className="font-sora font-bold text-xl text-white">{businessName}</span>
            <p className="mt-3 font-inter text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {instagramHandle && (
                <a
                  href={`https://instagram.com/${instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-accent)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.08)' }}
                >
                  <Instagram size={16} className="text-white" aria-hidden="true" />
                </a>
              )}
              {facebookHandle && (
                <a
                  href={`https://facebook.com/${facebookHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-accent)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.08)' }}
                >
                  <Facebook size={16} className="text-white" aria-hidden="true" />
                </a>
              )}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 bg-[#25D366]"
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1DAE54' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#25D366' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — quick links */}
          <div>
            <h3 className="font-sora font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home',        href: '/'        },
                { label: 'Services',    href: '/services' },
                { label: 'Gallery',     href: '/gallery'  },
                { label: 'About Us',    href: '/about'    },
                { label: 'Contact',     href: '/contact'  },
                { label: 'Book Appointment', href: '/booking' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — contact + hours */}
          <div>
            <h3 className="font-sora font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                <span className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {address}, {city}, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="flex-shrink-0" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="font-inter text-sm transition-colors"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)' }}
                >
                  {phone}
                </a>
              </li>
              {email && (
                <li className="flex items-center gap-3">
                  <Mail size={14} className="flex-shrink-0" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  <a
                    href={`mailto:${email}`}
                    className="font-inter text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)' }}
                  >
                    {email}
                  </a>
                </li>
              )}
            </ul>
            {openingHours.length > 0 && (
              <div className="mt-5 pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={13} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  <span className="font-sora font-semibold text-xs text-white uppercase tracking-wider">Hours</span>
                </div>
                {openingHours.map((h) => (
                  <p key={h.day} className="font-inter text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.65)' }}>{h.day}:</span> {h.hours}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-inter text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {year} {businessName}. All rights reserved.
          </span>
          <a
            href="https://orayn.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs transition-colors"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.3)' }}
          >
            Built by Orayn Digital Agency
          </a>
        </div>
      </div>
    </footer>
  )
}
