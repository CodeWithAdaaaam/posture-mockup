'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Crown, Sparkles, Target, Users, Send, CheckCircle } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/sections/Footer'

const perks = [
  { icon: Crown, label: 'Founding Members Exclusive', description: 'Lifetime preferred rates and first access to new offerings.' },
  { icon: Sparkles, label: 'Personalized Wellness Quiz', description: 'A tailored assessment to craft your unique movement plan.' },
  { icon: Target, label: 'Move, Align & Restore', description: 'Complete access to all class formats and workshops.' },
  { icon: Users, label: 'Limited to 50 Founders', description: 'An intimate community of wellness pioneers.' },
]

export default function MembershipPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const formInView = useInView(formRef, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('https://formspree.io/f/xjgllgar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO TEASER ── */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[#3E1010] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(122,36,36,0.3) 0%, transparent 60%)`,
            }}
          />
          <div className="relative z-10 text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C8A882] mb-6"
            >
              Opening Soon · Harhoura, Rabat
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F0E6D3] font-light tracking-[0.1em] mb-6"
            >
              POSTURE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-display italic text-[#F0E6D3]/70 text-xl md:text-2xl font-light"
            >
              A luxury Pilates studio, facing the Atlantic.
            </motion.p>
          </div>
        </section>

        {/* ── PERKS + IMAGE ── */}
        <section
          ref={sectionRef}
          className="relative py-24 md:py-40 bg-[#1A0606] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#C8A882_1px,transparent_1px)] bg-[length:40px_40px]" />

          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left */}
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
                  Join a select group of 50 founding members and shape the future of POSTURE.
                  Your commitment today unlocks a lifetime of wellness privileges.
                </motion.p>

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
                            <h4 className="font-display text-lg text-[#F0E6D3] font-light">{perk.label}</h4>
                          </div>
                          <p className="font-body text-xs md:text-sm text-[#F0E6D3]/50 leading-relaxed">
                            {perk.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
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
                  alt="Founders membership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0606]/40 via-transparent to-transparent" />
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
                      Only 50 spots available
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FOUNDERS FORM ── */}
        <section ref={formRef} className="relative py-24 md:py-32 bg-[#3E1010]">
          <div className="max-w-[640px] mx-auto px-6 md:px-12 text-center">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C8A882] block mb-4"
            >
              Reserve Your Spot
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl md:text-5xl text-[#F0E6D3] font-light mb-4"
            >
              Join the Founding Members
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={formInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-sm text-[#F0E6D3]/60 leading-relaxed mb-12"
            >
              Leave your details and we'll reach out before opening day.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-12"
              >
                <CheckCircle size={48} className="text-[#C8A882]" />
                <h3 className="font-display text-2xl text-[#F0E6D3] font-light">You're on the list.</h3>
                <p className="font-body text-sm text-[#F0E6D3]/60">
                  We'll be in touch soon. Welcome to POSTURE.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6 text-left"
              >
                {[
                  { name: 'name', label: 'Full Name', type: 'text' },
                  { name: 'email', label: 'Email Address', type: 'email' },
                  { name: 'phone', label: 'Phone (WhatsApp)', type: 'tel' },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    placeholder={field.label}
                    className="w-full bg-transparent border-b border-[#F0E6D3]/20 py-3 text-[#F0E6D3] font-body text-sm focus:outline-none focus:border-[#C8A882] transition-colors placeholder:text-[#F0E6D3]/30"
                  />
                ))}

                <button
                  type="submit"
                  className="w-full mt-4 inline-flex items-center justify-center gap-3 font-body text-xs tracking-[0.2em] uppercase px-8 py-4 bg-[#F0E6D3] text-[#3E1010] hover:bg-[#C8A882] hover:text-[#1A0606] transition-all duration-300"
                >
                  <Send size={14} />
                  Secure My Spot
                </button>
              </motion.form>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}