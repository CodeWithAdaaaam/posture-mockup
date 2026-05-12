'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/sections/Footer'
import { Booking } from '@/sections/Booking'

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="bg-wine pt-20">
        <Booking />
      </main>
      <Footer />
    </>
  )
}