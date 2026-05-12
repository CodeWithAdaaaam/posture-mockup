// app/page.tsx
import { Navbar } from '@/components/Navbar'
// Supprime CustomCursor et SmoothScrollProvider d'ici
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { Founders } from '@/sections/Founders'
import { Coaches } from '@/sections/Coaches'
import { Workshops } from '@/sections/Workshops'
import { Journal } from '@/sections/Journal'
import { Booking } from '@/sections/Booking'
import { Footer } from '@/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Founders />
        <Coaches />
        <Workshops />
        <Journal />
        <Booking />
      </main>
      <Footer />
    </>
  )
}