// app/studio/page.tsx
'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/sections/Footer'

// ─── DATA ───────────────────────────────────────────────
const stats = [
  { value: 2, label: 'Studios' },
  { value: 6, label: 'Certified Coaches' },
  { value: 1, label: 'Ocean View' },
]

const workshops = [
  { title: 'Intro to Pilates', date: 'June 15, 2025', location: 'Studio A', spots: 4, image: '/images/workshop-1.jpg' },
  { title: 'Posture Reset', date: 'June 22, 2025', location: 'Studio B', spots: 2, image: '/images/workshop-2.jpg' },
]

const partners = [
  { name: 'Lululemon' }, { name: 'Aesop' }, { name: 'Rituals' },
  { name: 'Bamford' }, { name: 'Therabody' },
]

// ─── ANIMATED COUNTER ───────────────────────────────────
function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = value / (1500 / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [value, inView])
  return <span>{count}</span>
}

// ─── PAGE ────────────────────────────────────────────────
export default function StudioPage() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const workshopsRef = useRef<HTMLDivElement>(null)
  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' })
  const workshopsInView = useInView(workshopsRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <>
      <Navbar />
      <main>

        {/* ── ABOUT ── */}
        <section ref={aboutRef} className="relative py-24 md:py-40 bg-wine overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-5xl mb-20 md:mb-32"
            >
              <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-[1.15] tracking-wide">
                We help you move, align and restore the natural balance of your{' '}
                <em className="italic text-gold">body</em> &{' '}
                <em className="italic text-gold">mind</em>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="font-body text-sm md:text-base text-cream/70 leading-relaxed mb-12 max-w-md">
                  POSTURE is a luxury Pilates studio nestled in T Gallery Harhoura, Rabat —
                  where the Atlantic meets the shore. Through expert coaching and mindful
                  movement, we help you reconnect with your body, quiet your mind, and build
                  lasting strength from within.
                </p>
                <div className="flex flex-wrap gap-8 md:gap-12">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                      className="flex flex-col"
                    >
                      <span className="font-display text-4xl md:text-5xl text-cream font-light">
                        <AnimatedCounter value={stat.value} inView={aboutInView} />
                      </span>
                      <span className="font-body text-xs tracking-[0.15em] uppercase text-cream/50 mt-2">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative overflow-hidden aspect-[3/4]"
              >
                <motion.img
                  src="/images/hero-ocean.jpg"
                  alt="Studio"
                  style={{ y: imageY }}
                  className="w-full h-[120%] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/30 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WORKSHOPS & PARTNERS ── */}
        <section ref={workshopsRef} className="relative py-24 md:py-40 bg-wine">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={workshopsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-16 md:mb-24"
            >
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold block mb-4">
                Community
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-light">
                Workshops & Partnerships
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
              {workshops.map((workshop, i) => (
                <motion.div
                  key={workshop.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={workshopsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
                  className="group relative overflow-hidden bg-near-black"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center gap-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-cream/60">
                        <Calendar size={12} />{workshop.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-cream/60">
                        <MapPin size={12} />{workshop.location}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-cream font-light mb-3">
                      {workshop.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs text-cream/50">{workshop.spots} spots left</span>
                      <a href="/book" className="inline-flex items-center gap-2 font-body text-xs tracking-[0.1em] uppercase text-gold hover:text-cream transition-colors group/link">
                        Register <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={workshopsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-10"
            >
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/40 block mb-8">
                Trusted By
              </span>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center justify-center h-24 md:h-32 border border-cream/10 hover:border-gold/50 transition-all duration-500 group"
                >
                  <span className="font-display text-2xl md:text-3xl tracking-[0.2em] text-cream/30 group-hover:text-gold transition-all duration-500">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}