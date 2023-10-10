import { motion } from "framer-motion"
import { useRef } from "react"
import { ArrowSvg } from "../ArrowSvg"
const WhatWeDoSection = () => {
  const scrollRef = useRef(null)
  return (
    <div className="w-full">
      <div className="space-y-28 mt-3">
        <h1 className="text-5xl text-white">What we do</h1>
        <div className="w-full border border-white/30 mt-12 "></div>
      </div>
      <div>
        <span className=" w-full gap-40  flex justify-start items-center mt-3">
          <h1 className="text-white">Wake-up. Rise. Outshine.</h1>
          <h1 className="text-white">Brand. Digital. Motion.</h1>
        </span>
      </div>
      <div ref={scrollRef} style={{ overflow: "scroll" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
          className="pl-[26%] mt-12 space-y-12"
        >
          <h1 className="text-white text-3xl">
            It’s simple, but effective. First, we reveal your brand truth. Then
            we communicate it. So everyone who matters to you, will understand
            exactly why you matter.
          </h1>
          <div className="w-full border border-white/30 mt-12 "></div>
          <span className="flex gap-[28%]">
            <h1 className="text-white text-3xl">Brand</h1>
            <span>
              <p className="text-white/75">
                When the ‘real you’ stands up the world takes notice. But who
                exactly are you and what do you stand for? What do you stand
                against? Is your message, on message, and who is listening?
                We’ll help you figure that out, so you stand out.
              </p>
              <span className=" flex gap-2 justify-start items-center group mt-4 cursor-pointer hover:opacity-70">
                <p className="text-white font-medium">More about Brand</p>
                <ArrowSvg />
              </span>
            </span>
          </span>
          {/* Component for this */}
          <div className="w-full border border-white/30 mt-12 "></div>
          <span className="flex gap-[28%]">
            <h1 className="text-white text-3xl">Digital</h1>
            <span>
              <p className="text-white/75">
                Multi-channel, multimedia, multiverse. Multiple opportunities
                for your brand to shine. Great digital and websites? They just
                feel right. More than simply moving people, we deliver digital
                work that moves people to take action.
              </p>
              <span className=" flex gap-2 justify-start items-center group mt-4 cursor-pointer hover:opacity-70">
                <p className="text-white font-medium">More about Brand</p>
                <ArrowSvg />
              </span>
            </span>
          </span>
          <div className="w-full border border-white/30 mt-12 "></div>
          <span className="flex gap-[28%]">
            <h1 className="text-white text-3xl">Motion</h1>
            <span className="">
              <p className="text-white/75">
                Have you noticed how brands move differently? Some glide… with a
                smooth, calm, effortless serenity. Others stomp. Putting the
                boot in. What’s the emotion of your brand motion? What’s the
                sound of your sonic brand?
              </p>
              <span className=" flex gap-2 justify-start items-center group mt-4 cursor-pointer hover:opacity-70">
                <p className="text-white font-medium">More about Brand</p>
                <ArrowSvg />
              </span>
            </span>
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default WhatWeDoSection
