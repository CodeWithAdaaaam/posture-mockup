'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Send, CheckCircle } from 'lucide-react'
import { RiInstagramLine } from 'react-icons/ri'

const fields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel' },
]

export function Booking() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="book" ref={sectionRef} className="relative py-24 md:py-40 bg-[#3E1010]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C8A882] block mb-4">
            Begin Your Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F0E6D3] font-light mb-6">
            Book a Session
          </h2>
          <div className="flex items-center gap-2 text-[#F0E6D3]/60">
            <MapPin size={14} />
            <span className="font-body text-sm">T Gallery · Harhoura · Rabat</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <CheckCircle size={48} className="text-[#C8A882] mb-4" />
                <h3 className="font-display text-2xl text-[#F0E6D3] font-light mb-2">
                  Thank You
                </h3>
                <p className="font-body text-sm text-[#F0E6D3]/60 text-center">
                  We've received your request and will be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {fields.map((field) => (
                  <div key={field.name}>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      placeholder={field.label}
                      className="w-full bg-transparent border-b border-[#F0E6D3]/20 py-3 text-[#F0E6D3] font-body text-sm focus:outline-none focus:border-[#C8A882] transition-colors placeholder:text-[#F0E6D3]/30"
                    />
                  </div>
                ))}

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#F0E6D3]/20 py-3 text-[#F0E6D3] font-body text-sm focus:outline-none focus:border-[#C8A882] transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#3E1010]">Select a Service</option>
                    <option value="group" className="bg-[#3E1010]">Group Class</option>
                    <option value="private" className="bg-[#3E1010]">Private Session</option>
                    <option value="semi" className="bg-[#3E1010]">Semi-Private Session</option>
                    <option value="fundamental" className="bg-[#3E1010]">Fundamental Class</option>
                  </select>
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#F0E6D3]/20 py-3 text-[#F0E6D3] font-body text-sm focus:outline-none focus:border-[#C8A882] transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your goals..."
                    className="w-full bg-transparent border-b border-[#F0E6D3]/20 py-3 text-[#F0E6D3] font-body text-sm focus:outline-none focus:border-[#C8A882] transition-colors resize-none placeholder:text-[#F0E6D3]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 font-body text-xs tracking-[0.15em] uppercase px-8 py-4 bg-[#F0E6D3] text-[#3E1010] hover:bg-[#C8A882] hover:text-[#1A0606] transition-all duration-300"
                >
                  <Send size={14} />
                  Submit Request
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div>
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F0E6D3]/40 block mb-3">
                  Location
                </span>
                <p className="font-display text-xl text-[#F0E6D3] font-light">
                  T Gallery, Harhoura
                </p>
                <p className="font-body text-sm text-[#F0E6D3]/60 mt-1">
                  Avenue de l'Ocean, Rabat, Morocco
                </p>
              </div>

              <div>
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F0E6D3]/40 block mb-3">
                  Hours
                </span>
                <p className="font-body text-sm text-[#F0E6D3]/80">Monday — Friday: 7:00 AM — 8:00 PM</p>
                <p className="font-body text-sm text-[#F0E6D3]/80">Saturday: 8:00 AM — 6:00 PM</p>
                <p className="font-body text-sm text-[#F0E6D3]/60">Sunday: Closed</p>
              </div>

              <div>
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F0E6D3]/40 block mb-3">
                  Contact
                </span>
                <p className="font-body text-sm text-[#F0E6D3]/80">+212 5XX-XXXXXX</p>
                <p className="font-body text-sm text-[#F0E6D3]/80">hello@posture.ma</p>
              </div>
            </div>

            <a
              href="https://instagram.com/posture.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-12 group"
            >
              <div className="w-12 h-12 rounded-full border border-[#F0E6D3]/20 flex items-center justify-center group-hover:border-[#C8A882] group-hover:bg-[#C8A882]/10 transition-all duration-300">
                <RiInstagramLine size={18} className="text-[#F0E6D3]/60 group-hover:text-[#C8A882] transition-colors" />
              </div>
              <span className="font-body text-xs tracking-[0.1em] uppercase text-[#F0E6D3]/60 group-hover:text-[#C8A882] transition-colors">
                Follow @posture.ma
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}