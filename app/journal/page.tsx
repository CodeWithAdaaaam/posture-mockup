'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/sections/Footer'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'

const allArticles = [
  {
    title: 'Tips for maintaining a consistent practice',
    excerpt: 'Building a sustainable Pilates routine requires patience, intention, and the right environment.',
    image: '/images/journal-1.jpg',
    readTime: '5 min read',
    category: 'Practice',
    slug: 'consistent-practice',
  },
  {
    title: 'How to integrate wellness into your daily routine',
    excerpt: 'Small, mindful shifts in your daily habits can transform your overall wellbeing.',
    image: '/images/journal-2.jpg',
    readTime: '7 min read',
    category: 'Lifestyle',
    slug: 'daily-wellness',
  },
  {
    title: 'The science of breath in Reformer Pilates',
    excerpt: 'Understanding how diaphragmatic breathing enhances muscle engagement and mental clarity.',
    image: '/images/hero-ocean.jpg',
    readTime: '6 min read',
    category: 'Science',
    slug: 'science-of-breath',
  },
]

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 border-b border-wine/10 pb-12"
          >
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold block mb-4">Insights & Wisdom</span>
            <h1 className="font-display text-6xl md:text-8xl text-wine font-light italic">Journal</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allArticles.map((article, i) => (
              <motion.article 
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/journal/${article.slug}`}>
                  <div className="aspect-[4/5] overflow-hidden bg-wine/5 mb-6 relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-gold font-body text-[10px] tracking-widest uppercase">{article.category}</span>
                    <span className="text-wine/40 font-body text-[10px] flex items-center gap-1">
                      <Clock size={10} /> {article.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl text-wine group-hover:text-gold transition-colors duration-300 leading-snug mb-4">
                    {article.title}
                  </h2>
                  <p className="font-body text-sm text-wine/60 line-clamp-2 mb-6">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-wine font-body text-[10px] tracking-widest uppercase border-b border-wine/20 pb-1 group-hover:border-gold transition-all">
                    Read Story <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}