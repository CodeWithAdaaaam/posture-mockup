'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: 2, label: 'Studios' },
  { value: 6, label: 'Certified Coaches' },
  { value: 1, label: 'Ocean View' },
]

function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, inView])

  return <span>{count}</span>
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-40 bg-[#3E1010] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Main quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-5xl mb-20 md:mb-32"
        >
          <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F0E6D3] font-light leading-[1.15] tracking-wide">
            We help you move, align and restore the natural balance of your{' '}
            <em className="italic text-[#C8A882]">body</em> &{' '}
            <em className="italic text-[#C8A882]">mind</em>.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="font-body text-sm md:text-base text-[#F0E6D3]/70 leading-relaxed mb-12 max-w-md">
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
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className="flex flex-col"
                >
                  <span className="font-display text-4xl md:text-5xl text-[#F0E6D3] font-light">
                    <AnimatedCounter value={stat.value} inView={isInView} />
                  </span>
                  <span className="font-body text-xs tracking-[0.15em] uppercase text-[#F0E6D3]/50 mt-2">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: parallax image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative overflow-hidden aspect-[3/4]"
          >
            <motion.img
              src="/images/hero-ocean.jpg"
              alt="Ocean view"
              style={{ y: imageY }}
              className="w-full h-[120%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E1010]/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}