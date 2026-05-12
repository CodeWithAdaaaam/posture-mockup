'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ height: '100vh', minHeight: '700px', backgroundColor: '#3E1010' }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(122,36,36,0.3) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 20%, rgba(92,26,26,0.4) 0%, transparent 60%)
          `,
        }}
      />

      <div className="absolute bottom-0 left-0 right-0" style={{ opacity: 0.12 }}>
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z" fill="rgba(240,230,211,0.06)" />
          <path d="M0,130 C240,80 480,170 720,130 C960,80 1200,170 1440,130 L1440,200 L0,200 Z" fill="rgba(240,230,211,0.04)" />
        </svg>
      </div>

      <span className="absolute hidden md:block" style={{ bottom: '80px', left: '60px', fontFamily: "'Jost', sans-serif", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(240,230,211,0.4)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
        T Gallery · Harhoura · Rabat
      </span>
      <span className="absolute hidden md:block" style={{ bottom: '80px', right: '60px', fontFamily: "'Jost', sans-serif", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(240,230,211,0.4)', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
        Reformer Pilates · LED Therapy
      </span>

      <svg className="absolute" style={{ right: '8%', bottom: 0, width: '220px', opacity: 0.07 }} viewBox="0 0 200 500" fill="none">
        <ellipse cx="100" cy="60" rx="28" ry="36" fill="#F0E6D3" />
        <path d="M70 96 Q60 160 55 220 Q50 270 65 310 L80 380 Q90 430 100 480 Q110 430 120 380 L135 310 Q150 270 145 220 Q140 160 130 96 Q115 88 100 86 Q85 88 70 96Z" fill="#F0E6D3" />
        <path d="M70 110 Q40 130 30 180 Q25 210 40 220 Q55 225 65 190 Q68 170 70 150Z" fill="#F0E6D3" />
        <path d="M130 110 Q160 130 170 180 Q175 210 160 220 Q145 225 135 190 Q132 170 130 150Z" fill="#F0E6D3" />
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 300, letterSpacing: '0.55em', textIndent: '0.55em', color: '#F0E6D3', textTransform: 'uppercase', lineHeight: 1, marginBottom: '28px' }}
        >
          POSTURE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ width: '1px', height: '48px', background: 'rgba(240,230,211,0.3)', marginBottom: '28px' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(16px, 2.5vw, 24px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(240,230,211,0.75)', letterSpacing: '0.06em', lineHeight: 1.6, maxWidth: '500px', marginBottom: '52px' }}
        >
          Where the body finds its line —<br />
          breathe, lengthen, face the sea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="flex flex-col md:flex-row gap-5 items-center"
        >
          <Link
            href="/book"
            style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', fontWeight: 400, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#3E1010', backgroundColor: '#F0E6D3', padding: '14px 36px', textDecoration: 'none', display: 'inline-block' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FAF6F0'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F0E6D3'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book a Session
          </Link>
          <a
            href="#about"
            style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,230,211,0.7)', padding: '14px 36px', border: '1px solid rgba(240,230,211,0.25)', textDecoration: 'none', display: 'inline-block' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#F0E6D3'; e.currentTarget.style.borderColor = 'rgba(240,230,211,0.6)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(240,230,211,0.7)'; e.currentTarget.style.borderColor = 'rgba(240,230,211,0.25)'; }}
          >
            Discover Posture
          </a>
        </motion.div>
      </div>

      <div className="absolute left-1/2 flex flex-col items-center gap-2" style={{ bottom: '36px', transform: 'translateX(-50%)' }}>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(240,230,211,0.3)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};