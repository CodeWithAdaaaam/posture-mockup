'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { RiWhatsappLine } from 'react-icons/ri'

export function WhatsAppBubble() {
  const [isHovered, setIsHovered] = useState(false)

  // Configuration
  const phoneNumber = "212600000000" // Remplace par ton vrai numéro
  const message = encodeURIComponent("Bonjour POSTURE, j'aimerais réserver une séance de Pilates.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      <div className="relative flex items-center justify-center">
        
        {/* Tooltip (RÉSERVER) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-full mr-4 hidden md:block"
            >
              <div className="bg-near-black/90 backdrop-blur-md border border-gold/30 px-4 py-2 shadow-2xl">
                <span className="font-body text-[10px] tracking-[0.4em] text-gold uppercase whitespace-nowrap">
                  Des questions ? Nous sommes là pour y répondre sur WhatsApp !
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Effet de halo qui pulse derrière le bouton */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gold rounded-full"
        />

        {/* Le Bouton Flottant */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1.5 // Apparaît un peu après le chargement
          }}
          className="relative flex items-center justify-center w-14 h-14 bg-wine border border-gold/30 text-gold rounded-full shadow-2xl group overflow-hidden"
        >
          {/* Reflet brillant au survol */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/10 to-transparent translate-x-[-100%]"
            animate={isHovered ? { translateX: '100%' } : { translateX: '-100%' }}
            transition={{ duration: 0.6 }}
          />
          
          <RiWhatsappLine size={28} className="relative z-10" />
        </motion.a>
      </div>
    </div>
  )
}