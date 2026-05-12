'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Studio', href: '/studio' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'Membership', href: '/membership' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-burgundy-deep/95 backdrop-blur-md border-b border-cream-DEFAULT/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] py-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-[22px] tracking-[0.35em] text-[#F0E6D3] font-light uppercase"
          >
            POSTURE
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 relative group ${
                  pathname === link.href
                    ? 'text-[#F0E6D3]'
                    : 'text-[#F0E6D3]/70 hover:text-[#F0E6D3]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#C8A882] transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Book CTA */}
          <Link
            href="/book"
            className="hidden md:inline-block font-body text-[10px] tracking-[0.2em] uppercase px-6 py-3 border border-[#F0E6D3]/40 text-[#F0E6D3] hover:bg-[#F0E6D3] hover:text-[#3E1010] transition-all duration-500"
          >
            Book a Session
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F0E6D3] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99] bg-[#1A0606] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="font-display text-4xl text-[#F0E6D3] hover:text-[#C8A882] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
            >
              <Link
                href="/book"
                className="font-body text-sm tracking-[0.2em] uppercase px-8 py-4 bg-[#F0E6D3] text-[#3E1010] mt-4 inline-block"
              >
                Book a Session
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}