'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/sections/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ArticleDetail() {
  const { slug } = useParams()

  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          
          <Link href="/journal" className="inline-flex items-center gap-2 text-wine/50 hover:text-wine mb-12 transition-colors font-body text-xs uppercase tracking-widest">
            <ArrowLeft size={14} /> Back to Journal
          </Link>

          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-gold font-body text-[10px] tracking-[0.4em] uppercase block mb-6">Article · Practice</span>
            <h1 className="font-display text-4xl md:text-6xl text-wine font-light leading-tight mb-8">
              {slug?.toString().replace(/-/g, ' ')}
            </h1>
            <div className="w-20 h-[1px] bg-gold mx-auto" />
          </motion.header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video bg-wine/10 mb-16 overflow-hidden"
          >
            <img src="/images/hero-ocean.jpg" alt="Header" className="w-full h-full object-cover" />
          </motion.div>

          <div className="font-body text-wine/80 text-lg leading-relaxed space-y-8 max-w-2xl mx-auto">
            <p className="first-letter:text-5xl first-letter:font-display first-letter:text-gold first-letter:mr-3 first-letter:float-left">
              The journey to physical alignment starts with a single, conscious breath. In the serene environment of our Harhoura studio, we witness daily transformations that go beyond the reformer.
            </p>
            <h3 className="font-display text-3xl text-wine mt-12">The Philosophy of Movement</h3>
            <p>
              Pilates is not about how many repetitions you can do, but about the quality of each movement. When you face the Atlantic, the rhythm of the waves often dictates the pace of your session...
            </p>
            <blockquote className="border-l-2 border-gold pl-8 py-4 my-12 italic font-display text-2xl text-wine/70">
              "Physical fitness is the first requisite of happiness." — Joseph Pilates
            </blockquote>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}