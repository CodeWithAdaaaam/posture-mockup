'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Crown, Sparkles, Target, Users } from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    icon: Crown,
    label: 'Founding Members Exclusive',
    description: 'Lifetime preferred rates and first access to new offerings.',
  },
  {
    icon: Sparkles,
    label: 'Personalized Wellness Quiz',
    description: 'A tailored assessment to craft your unique movement plan.',
  },
  {
    icon: Target,
    label: 'Move, Align & Restore',
    description: 'Complete access to all class formats and workshops.',
  },
  {
    icon: Users,
    label: 'Limited to 40 Founders',
    description: 'An intimate community of wellness pioneers.',
  },
]

export function Founders() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="founders" ref={sectionRef} className="relative py-24 md:py-40 bg-[#1A0606] overflow-hidden">

      {/* Dot texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#C8A882_1px,transparent_1px)] bg-[length:40px_40px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C8A882] block mb-4"
            >
              Exclusive Access
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F0E6D3] font-light mb-8"
            >
              Become a Founder.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-sm md:text-base text-[#F0E6D3]/60 leading-relaxed mb-12 max-w-md"
            >
              Join a select group of 40 founding members and shape the future of POSTURE.
              Your commitment today unlocks a lifetime of wellness privileges.
            </motion.p>

            {/* Perks */}
            <div className="space-y-6">
              {perks.map((perk, i) => {
                const Icon = perk.icon
                return (
                  <motion.div
                    key={perk.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full border border-[#F0E6D3]/20 flex items-center justify-center group-hover:border-[#C8A882] group-hover:bg-[#C8A882]/10 transition-all duration-300 flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-[#F0E6D3]/60 group-hover:text-[#C8A882] transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={14} className="text-[#C8A882]" strokeWidth={1.5} />
                        <h4 className="font-display text-lg text-[#F0E6D3] font-light">
                          {perk.label}
                        </h4>
                      </div>
                      <p className="font-body text-xs md:text-sm text-[#F0E6D3]/50 leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12"
            >
              <Link
                href="/membership"
                className="inline-flex items-center gap-3 font-body text-xs tracking-[0.15em] uppercase px-8 py-4 bg-[#F0E6D3] text-[#3E1010] hover:bg-[#C8A882] hover:text-[#1A0606] transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative overflow-hidden aspect-[3/4]"
          >
            <img
              src="/images/founders-pool.jpg"
              alt="Founders"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0606]/40 via-transparent to-transparent" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <div className="bg-[#1A0606]/80 backdrop-blur-sm border border-[#F0E6D3]/20 p-4 md:p-6">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#C8A882] block mb-1">
                  Scarcity
                </span>
                <span className="font-display text-xl md:text-2xl text-[#F0E6D3] font-light">
                  Only 40 spots available
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}