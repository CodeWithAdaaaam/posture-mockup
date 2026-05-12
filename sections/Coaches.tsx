'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Award } from 'lucide-react'

const coaches = [
  {
    name: 'Sofia Amari',
    role: 'Head Instructor',
    specialty: 'Classical Pilates, Rehabilitation',
    certifications: ['STOTT Certified', 'Polestar Pilates'],
    image: '/images/coach-1.jpg',
    bio: 'With over 12 years of experience, Sofia brings a deeply intuitive approach to movement. Formerly a professional dancer, she guides clients through transformative sessions that honor both precision and flow.',
  },
  {
    name: 'Lina Bennani',
    role: 'Senior Coach',
    specialty: 'Contemporary Pilates, Pre/Post Natal',
    certifications: ['Balanced Body', 'BASI Pilates'],
    image: '/images/coach-2.jpg',
    bio: 'Lina specializes in mindful movement for women at every life stage. Her nurturing yet rigorous style helps clients build sustainable strength while deepening their mind-body connection.',
  },
  {
    name: 'Maya El Fassi',
    role: 'Movement Specialist',
    specialty: 'Athletic Conditioning, Injury Recovery',
    certifications: ['NASM-CPT', 'Pilates Method Alliance'],
    image: '/images/coach-3.jpg',
    bio: 'Maya bridges the gap between traditional Pilates and modern sports science. Her sessions are dynamic and challenging, designed to unlock peak physical performance.',
  },
  {
    name: 'Claire Dubois',
    role: 'Master Practitioner',
    specialty: 'Classical Method, Breathwork',
    certifications: ["Romana's Pilates", 'Franklin Method'],
    image: '/images/coach-4.jpg',
    bio: 'A Pilates purist with 20+ years of teaching, Claire embodies the legacy of Joseph Pilates. Her precise, classical approach delivers profound structural transformation.',
  },
]

function CoachCard({ coach }: { coach: typeof coaches[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const rotate = useTransform(springX, [-100, 100], [-3, 3])

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x: springX, rotate }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-[300px] md:w-[360px] h-[500px] md:h-[580px] overflow-hidden bg-[#1A0606] select-none"
    >
      {/* Image */}
      <motion.img
        src={coach.image}
        alt={coach.name}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0606] via-[#1A0606]/30 to-transparent" />

      {/* Gold overlay on hover */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-[#C8A882]"
      />

      {/* Default content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <motion.div
          initial={false}
          animate={{ y: isHovered ? -20 : 0, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="font-display text-2xl md:text-3xl text-[#F0E6D3] font-light mb-1">
            {coach.name}
          </h3>
          <p className="font-body text-xs tracking-[0.1em] uppercase text-[#F0E6D3]/60">
            {coach.role}
          </p>
        </motion.div>
      </div>

      {/* Hover content */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end"
      >
        <h3 className="font-display text-2xl md:text-3xl text-[#F0E6D3] font-light mb-2">
          {coach.name}
        </h3>
        <p className="font-body text-xs tracking-[0.1em] uppercase text-[#C8A882] mb-4">
          {coach.specialty}
        </p>
        <p className="font-body text-sm text-[#F0E6D3]/80 leading-relaxed mb-4">
          {coach.bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {coach.certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1 font-body text-[10px] tracking-wider uppercase px-2 py-1 border border-[#F0E6D3]/30 text-[#F0E6D3]/70"
            >
              <Award size={10} />
              {cert}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Coaches() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="coaches" ref={sectionRef} className="relative py-24 md:py-40 bg-[#3E1010] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C8A882] block mb-4"
            >
              The Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F0E6D3] font-light"
            >
              Meet Our Coaches
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-xs tracking-[0.15em] uppercase text-[#F0E6D3]/50"
          >
            Drag to explore
          </motion.p>
        </div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}