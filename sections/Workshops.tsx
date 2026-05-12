'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const workshops = [
  {
    title: 'Intro to Pilates',
    date: 'June 15, 2025',
    location: 'Studio A',
    spots: 4,
    image: '/images/workshop-1.jpg',
  },
  {
    title: 'Posture Reset',
    date: 'June 22, 2025',
    location: 'Studio B',
    spots: 2,
    image: '/images/workshop-2.jpg',
  },
]

const partners = [
  { name: 'Lululemon' },
  { name: 'Aesop' },
  { name: 'Rituals' },
  { name: 'Bamford' },
  { name: 'Therabody' },
]

function PartnerLogo({ partner, index }: { partner: typeof partners[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-center h-24 md:h-32 border border-[#F0E6D3]/10 hover:border-[#C8A882]/50 transition-all duration-500"
    >
      <span
        className={`font-display text-2xl md:text-3xl tracking-[0.2em] transition-all duration-500 ${
          isHovered ? 'text-[#C8A882]' : 'text-[#F0E6D3]/30'
        }`}
      >
        {partner.name}
      </span>
    </motion.div>
  )
}

export function Workshops() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="workshops" ref={sectionRef} className="relative py-24 md:py-40 bg-[#5C1A1A]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C8A882] block mb-4">
            Community
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F0E6D3] font-light">
            Workshops & Partnerships
          </h2>
        </motion.div>

        {/* Workshops grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
          {workshops.map((workshop, i) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
              className="group relative overflow-hidden bg-[#1A0606]"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0606] via-[#1A0606]/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-[#F0E6D3]/60">
                    <Calendar size={12} />
                    {workshop.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-[#F0E6D3]/60">
                    <MapPin size={12} />
                    {workshop.location}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-[#F0E6D3] font-light mb-3">
                  {workshop.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-[#F0E6D3]/50">
                    {workshop.spots} spots left
                  </span>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 font-body text-xs tracking-[0.1em] uppercase text-[#C8A882] hover:text-[#F0E6D3] transition-colors group/link"
                  >
                    Register
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-10"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F0E6D3]/40 block mb-8">
            Trusted By
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {partners.map((partner, i) => (
            <PartnerLogo key={partner.name} partner={partner} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}