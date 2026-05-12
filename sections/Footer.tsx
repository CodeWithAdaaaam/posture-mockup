import Link from 'next/link'

const navLinks = [
  { label: 'Studio', href: '/studio' },
  { label: 'Services', href: '/#services' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'Membership', href: '/membership' },
  { label: 'Journal', href: '/journal' },
  { label: 'Book', href: '/book' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 bg-[#1A0606]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#F0E6D3]/10 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Logo & tagline */}
          <div className="md:col-span-5">
            <Link href="/">
              <h3 className="font-display text-3xl md:text-4xl text-[#F0E6D3] font-light tracking-[0.1em] mb-4">
                POSTURE
              </h3>
            </Link>
            <p className="font-body text-sm text-[#F0E6D3]/50 leading-relaxed max-w-sm">
              A luxury Pilates & wellness studio in Harhoura, Rabat.
              Move. Align. Restore.
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3 md:col-start-7">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F0E6D3]/40 block mb-6">
              Navigate
            </span>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-body text-sm text-[#F0E6D3]/60 hover:text-[#C8A882] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F0E6D3]/40 block mb-6">
              Legal
            </span>
            <div className="space-y-3">
              {legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-body text-sm text-[#F0E6D3]/60 hover:text-[#C8A882] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#F0E6D3]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#F0E6D3]/40">
            © 2025 POSTURE. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#F0E6D3]/40">
            T Gallery · Harhoura · Rabat · Morocco
          </p>
        </div>
      </div>
    </footer>
  )
}