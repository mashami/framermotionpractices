"use client"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"

export default function Home() {
  return (
    <div className="text-white">
      <Hero />
      <div className="md:mt-56 mt-8">
        <Footer />
      </div>
    </div>
  )
}
