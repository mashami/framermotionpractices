"use client"
import { motion } from "framer-motion"
import {
  BrandSection,
  TestimonialSection,
  WhatWeDoSection,
  WorkSection
} from "."
import InsightSection from "./InsightSection"

const Hero = () => {
  return (
    <div className="pt-[32rem]">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BrandSection />
      </motion.div>
      <div className="w-full border border-white/30 mt-12 "></div>
      <WorkSection />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full border border-white/30 mt-12 "></div>
        <WhatWeDoSection />
      </motion.div>

      <div className="mt-40">
        <div className="w-full border border-white/30 mt-12 "></div>

        <TestimonialSection />
      </div>
      <div className="w-full border border-white/30 mt-12 "></div>
      <InsightSection />
    </div>
  )
}

export default Hero
