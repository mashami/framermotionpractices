import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowSvg } from "../ArrowSvg"
import { Video } from "../Video"
import { Button } from "../ui/button"

const WorkSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl text-white mt-3">Work</h1>
      <div className="group ">
        <div className="w-full relative overflow-hidden h-[760px] cursor-pointer mt-24 rounded-xl ">
          <Image
            src={"/WorkImage.webp"}
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-105 group"
            fill
            priority
            style={{ objectFit: "cover" }}
            alt="Product image"
          />

          <div className="absolute top-4 left-4 z-10 space-x-4">
            <Button
              text="Brand"
              variant={"ghost"}
              className="bg-white/25 hover:text-white rounded-full py-1 text-white font-light hover:no-underline hover:bg-white/25"
            />
            <Button
              text="Work"
              variant={"link"}
              className="border rounded-full py-1 text-white font-light hover:no-underline hover:bg-transparent"
            />
          </div>
        </div>
        <span className="mt-3 flex gap-2 justify-start items-center">
          <h1 className="text-white">Calla</h1>
          <ArrowSvg />
        </span>
      </div>
      <div className=" w-full mt-16 grid grid-cols-2 gap-12 relative">
        <div className="space-y-4 cursor-pointer group">
          <div className="relative w-full h-[610px] rounded-xl group overflow-hidden">
            <Image
              src={"/imagework2.webp"}
              className="transform  transition-transform duration-200 ease-in-out group-hover:scale-105"
              fill
              priority
              style={{ objectFit: "cover" }}
              alt="Product image"
            />
          </div>
          <span className="flex gap-2 justify-start items-center">
            <h1 className="text-white">Cadence Partners</h1>
            <ArrowSvg />
          </span>
        </div>
        <div>
          <div className="space-y-3 group">
            <div className=" rounded-xl flex self-start relative cursor-pointer">
              <Video className="rounded-xl" />
              <div className="absolute top-4 left-4 z-10 space-x-4">
                <Button
                  text="Brand"
                  variant={"ghost"}
                  className="bg-white/25 hover:text-white rounded-full py-1 text-white font-light hover:no-underline hover:bg-white/25"
                />
                <Button
                  text="Digital"
                  variant={"ghost"}
                  className="bg-white/25 hover:text-white rounded-full py-1 text-white font-light hover:no-underline hover:bg-white/25"
                />
                <Button
                  text="Motion"
                  variant={"ghost"}
                  className="bg-white/25 hover:text-white rounded-full py-1 text-white font-light hover:no-underline hover:bg-white/25"
                />
                <Button
                  text="Work"
                  variant={"link"}
                  className="border  rounded-full py-1 text-white font-light hover:no-underline hover:bg-transparent hover:text-white"
                />
              </div>
            </div>
            <div className="cursor-pointer">
              <span className="flex justify-start items-center gap-2">
                <h1 className="text-white">DMFA</h1>
                <ArrowSvg />
              </span>
              <h1 className="text-white/50 pl-16 ">
                Rebrand and website for a digital marketing agency specialising
                in Japan and Asia. Bringing the West and Asia closer together
                through technology, local knowledge and closer-knit
                relationships.
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4 z-10 space-x-4">
          <Button
            text="Brand"
            variant={"ghost"}
            className="bg-white/25 hover:text-white rounded-full py-1 text-white font-light hover:no-underline hover:bg-white/25"
          />
          <Button
            text="Motion"
            variant={"ghost"}
            className="bg-white/25 hover:text-white rounded-full py-1 text-white font-light hover:no-underline hover:bg-white/25"
          />
          <Button
            text="Work"
            variant={"link"}
            className="border  rounded-full py-1 text-white font-light hover:no-underline hover:bg-transparent hover:text-white"
          />
        </div>
      </div>
      <div className=" w-full mt-16 grid grid-cols-2 gap-12 relative mb-44">
        <div>
          <div className="space-y-4 cursor-pointer group">
            <div className="relative w-full h-[350px]  rounded-xl group overflow-hidden ">
              <Image
                src={"/Dunphy_Case.webp"}
                className="transform transition-transform duration-200 ease-in-out group-hover:scale-105"
                fill
                priority
                style={{ objectFit: "cover" }}
                alt="Product image"
              />
            </div>

            <div className="flex justify-start items-start">
              <span className="flex justify-start items-center gap-2">
                <h1 className="text-white">Dunphy</h1>
                <ArrowSvg />
              </span>
              <h1 className="text-white/50 pl-16">
                Rebrand and website to re-align the positioning of Dunphy, who
                engineer and build boiler houses for industry worldwide and are
                looking towards a Net Zero future.
              </h1>
            </div>
          </div>
        </div>
        <div className="space-y-3 group">
          <div className=" relative w-full h-[610px] rounded-xl group overflow-hidden cursor-pointer">
            <Image
              src={"/Apadmi_Still.webp"}
              className="transform  transition-transform duration-200 ease-in-out group-hover:scale-105"
              fill
              priority
              style={{ objectFit: "cover" }}
              alt="Product image"
            />
            <div className="absolute top-4 left-4 z-10 space-x-4">
              <Button
                text="Motion"
                variant={"ghost"}
                className="bg-white/25 hover:text-white rounded-full py-1 text-white font-light hover:no-underline hover:bg-white/25"
              />
              <Button
                text="Work"
                variant={"link"}
                className="border  rounded-full py-1 text-white font-light hover:no-underline hover:bg-transparent hover:text-white"
              />
            </div>
          </div>
          <div className="flex justify-start items-start">
            <span className="flex justify-start items-center gap-2">
              <h1 className="text-white">Apadmi</h1>
              <ArrowSvg />
            </span>
            <h1 className="text-white/50 pl-16">
              Dynamic animated showreel for award-winning app developer creating
              ground breaking digital solutions.
            </h1>
          </div>
        </div>

        <div className="absolute top-4 left-4 z-10 space-x-4">
          <Button
            text="Brand"
            variant={"ghost"}
            className="bg-white/25 hover:text-white rounded-full py-1 text-white font-light hover:no-underline hover:bg-white/25"
          />
          <Button
            text="Motion"
            variant={"ghost"}
            className="bg-white/25 hover:text-white rounded-full py-1 text-white font-light hover:no-underline hover:bg-white/25"
          />
          <Button
            text="Work"
            variant={"link"}
            className="border  rounded-full py-1 text-white font-light hover:no-underline hover:bg-transparent hover:text-white"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default WorkSection
