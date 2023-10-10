"use client"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"

export default function Home() {
  return (
    <div className="text-white">
      <Hero />
      <div className="mt-56">
        <Footer />
      </div>
    </div>
  )
}
