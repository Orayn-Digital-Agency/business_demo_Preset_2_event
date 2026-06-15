"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import businessData from "@/config/business-data";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // On homepage, first section is dark — nav starts transparent
  const isDark = isHome && !scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.07)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link
          href="/"
          className="font-sora font-bold text-lg transition-colors duration-300"
          style={{ color: isDark ? "#ffffff" : "var(--color-primary)" }}
          aria-label={`${businessData.businessName} — home`}
        >
          {businessData.logoText}
        </Link>

        {/* Desktop links */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Primary navigation"
        >
          {LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-sm font-medium transition-colors duration-200 relative"
                style={{
                  color: isDark
                    ? isActive
                      ? "#ffffff"
                      : "rgba(255,255,255,0.75)"
                    : isActive
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = isDark
                    ? "#ffffff"
                    : "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = isDark
                    ? isActive
                      ? "#ffffff"
                      : "rgba(255,255,255,0.75)"
                    : isActive
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)";
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ backgroundColor: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
          <Link href="/booking" className="btn-accent py-2.5 px-5 text-sm">
            {businessData.ctaLabel}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          style={{ color: isDark ? "#ffffff" : "var(--color-primary)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white border-t"
            style={{ borderColor: "rgba(0,0,0,0.07)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-inter text-base font-medium py-3.5 px-3 rounded-xl flex items-center justify-between transition-colors duration-150"
                    style={{
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                      backgroundColor: isActive
                        ? "var(--color-surface)"
                        : "transparent",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--color-accent)" }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
              <div
                className="pt-3 mt-1"
                style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
              >
                <Link
                  href="/booking"
                  className="btn-accent w-full justify-center text-sm py-3.5"
                >
                  {businessData.ctaLabel}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
