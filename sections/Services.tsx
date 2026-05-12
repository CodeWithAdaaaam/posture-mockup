'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Users, User, UserPlus, GraduationCap, Play, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Group Classes',
    description: 'Small group sessions on premium reformers. Maximum 6 participants for personalized attention.',
    image: '/images/service-group.jpg',
    icon: Users,
  },
  {
    title: 'Private Sessions',
    description: 'One-on-one coaching tailored to your body\'s unique needs and goals.',
    image: '/images/service-private.jpg',
    icon: User,
  },
  {
    title: 'Semi-Private',
    description: 'Shared sessions for 2-3 people. Perfect for couples or close friends.',
    image: '/images/service-semi.jpg',
    icon: UserPlus,
  },
  {
    title: 'Fundamental',
    description: 'Mat-based foundational classes focusing on core principles and breath.',
    image: '/images/service-fundamental.jpg',
    icon: GraduationCap,
  },
]

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: typeof services[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? ['-8%', '8%'] : ['8%', '-8%']
  )

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.15 * index, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group overflow-hidden aspect-[4/5] bg-[#1A0606]"
    >
      {/* Parallax image */}
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0606] via-[#1A0606]/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="flex items-center gap-3 mb-3">
          <Icon size={18} className="text-[#C8A882]" strokeWidth={1.5} />
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#F0E6D3]/60">
            Service
          </span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl text-[#F0E6D3] font-light mb-2">
          {service.title}
        </h3>

        <motion.div
          initial={false}
          animate={{
            clipPath: isHovered ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-body text-sm text-[#F0E6D3]/70 leading-relaxed max-w-xs">
            {service.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-40 bg-[#5C1A1A]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C8A882] block mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F0E6D3] font-light">
            Our Services
          </h2>
          <p className="font-body text-sm md:text-base text-[#F0E6D3]/60 mt-6 max-w-xl leading-relaxed">
            Whether you're stepping onto the mat for the first time or deepening your
            practice, POSTURE offers tailored classes to match your pace and goals.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}

          {/* Video card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative overflow-hidden aspect-[4/5] bg-[#1A0606] group cursor-pointer"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-[#F0E6D3]/40 flex items-center justify-center group-hover:border-[#C8A882] group-hover:scale-110 transition-all duration-500">
                <Play size={20} className="text-[#F0E6D3] ml-1 group-hover:text-[#C8A882] transition-colors" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#F0E6D3]/60 block mb-2">
                Watch
              </span>
              <h3 className="font-display text-xl md:text-2xl text-[#F0E6D3] font-light">
                Class Introduction
              </h3>
            </div>
          </motion.div>

          {/* Book CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="relative overflow-hidden aspect-[4/5] bg-[#1A0606] group flex flex-col items-center justify-center border border-[#F0E6D3]/20 hover:border-[#C8A882]/60 transition-all duration-500"
          >
            <Link href="/book" className="flex flex-col items-center gap-4">
              <span className="font-display text-2xl md:text-3xl text-[#F0E6D3] font-light group-hover:text-[#C8A882] transition-colors">
                Book a Session
              </span>
              <ArrowRight
                size={24}
                className="text-[#F0E6D3]/60 group-hover:text-[#C8A882] group-hover:translate-x-2 transition-all duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}