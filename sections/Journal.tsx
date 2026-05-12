'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    title: 'Tips for maintaining a consistent practice',
    excerpt: 'Building a sustainable Pilates routine requires patience, intention, and the right environment. Here\'s how to make movement a non-negotiable part of your day.',
    image: '/images/journal-1.jpg',
    readTime: '5 min read',
    slug: 'consistent-practice',
  },
  {
    title: 'How to integrate wellness into your daily routine',
    excerpt: 'Small, mindful shifts in your daily habits can transform your overall wellbeing. Discover simple practices that create lasting change.',
    image: '/images/journal-2.jpg',
    readTime: '7 min read',
    slug: 'daily-wellness',
  },
]

export function Journal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="journal" ref={sectionRef} className="relative py-24 md:py-40 bg-[#1A0606]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#C8A882] block mb-4">
            Insights
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F0E6D3] font-light">
              Journal
            </h2>
            <p className="font-body text-sm md:text-base text-[#F0E6D3]/60 max-w-md leading-relaxed">
              Stories, insights, and tips to inspire your wellness journey.
            </p>
          </div>
        </motion.div>

        {/* Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
              className="group cursor-pointer"
            >
              <Link href={`/journal/${article.slug}`}>
                <div className="relative overflow-hidden aspect-[16/10] mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0606]/60 via-transparent to-transparent" />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-[#F0E6D3]/50">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-[#F0E6D3] font-light mb-3 group-hover:text-[#C8A882] transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="font-body text-sm text-[#F0E6D3]/50 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.1em] uppercase text-[#C8A882] group-hover:text-[#F0E6D3] transition-colors">
                  Read More
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/journal"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-[#F0E6D3]/60 border border-[#F0E6D3]/20 px-8 py-4 hover:border-[#C8A882] hover:text-[#C8A882] transition-all duration-300"
          >
            View All Articles
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}