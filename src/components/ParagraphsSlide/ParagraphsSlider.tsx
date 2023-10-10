"use client"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { v4 } from "uuid"
import { ArrowSvg } from "../ArrowSvg"

const ImagesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const paragraphs = [
    {
      id: v4(),
      text: (
        <div className="space-y-5">
          <h1 className=" text-3xl text-left">
            “We worked with Dawn to completely overhaul our company messaging,
            branding and website and we couldn’t be happier with the result! The
            people at Dawn led us through the process
          </h1>
          <span>
            <p className="font-semibold">Mashami</p>
            <p className="text-white/50">Paccy</p>
          </span>
        </div>
      )
    },
    {
      id: v4(),
      text: (
        <div className="space-y-5">
          <h1 className=" text-3xl text-left">
            “It’s been a pleasure working with Dawn from start to finish. They
            recently created our new brand and website, and since then, we’ve
            seen an increase in enquiries and had multiple compliments on our
            unique identity.”
          </h1>

          <span>
            <p className="font-semibold">Seth</p>
            <p className="text-white/50">Uwimuhwe</p>
          </span>
        </div>
      )
    },
    {
      id: v4(),
      text: (
        <div className="space-y-5">
          <h1 className=" text-3xl ">
            “Dawn didn't just design our website, but dug deep to define who we
            are as a company and business and used that to create the website
            feel and style. We ended up with brand clarity and new logos -
            Uniform, signs, vans, reception, signatures etc.
          </h1>
          <span className="">
            <p className="font-semibold ">Rachel</p>
            <p className="text-white/50">Ndamiwe</p>
          </span>
        </div>
      )
    }
  ]

  const onClickIndicatorHandle = (
    clickHandler: (e: React.MouseEvent<Element, MouseEvent>) => void,
    isSelected: boolean,
    index: number
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()
      clickHandler(e)
    }

    return (
      <span
        onClick={handleClick}
        className={cn(
          "w-2 h-2 rounded-full cursor-pointer p-[5.5px]",
          isSelected ? "bg-white" : "bg-transparent border"
        )}
        key={index}
      ></span>
    )
  }

  const onClickPrevious = () => {
    const newIndex = (currentIndex - 1 + paragraphs.length) % paragraphs.length
    return setCurrentIndex(newIndex)
  }

  const onClickNext = () => {
    const newIndex = (currentIndex + 1) % paragraphs.length
    return setCurrentIndex(newIndex)
  }

  return (
    <div className="w-full h-full cursor-pointer">
      <Carousel
        className="paragraphs-slider"
        infiniteLoop={true}
        interval={5000}
        swipeable={true}
        emulateTouch={true}
        renderIndicator={onClickIndicatorHandle}
      >
        {paragraphs.map((text, index) => (
          <div key={paragraphs[currentIndex].id} className="w-full h-full ">
            <span className="text-left text-white">
              {paragraphs[currentIndex].text}
            </span>
          </div>
        ))}
      </Carousel>

      <span className=" flex gap-2 justify-start items-center group my-1">
        <ArrowSvg
          onClick={onClickPrevious}
          className="-rotate-[135deg] group-hover:-rotate-[135deg] hover:opacity-70"
        />

        <ArrowSvg
          onClick={onClickNext}
          className="rotate-45 hover:opacity-70"
        />
      </span>
    </div>
  )
}

export default ImagesSlider
