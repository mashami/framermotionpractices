"use client"

import { Button } from "../ui/button"
const BrandSection = () => {
  return (
    <div className="w-full">
      <h1 className=" w-full md:w-3/4 md:leading-[60px] leading-[45px]  text-[35px] md:text-[60px] text-white">
        The brand you need, for the business you want to be.
      </h1>
      <div className="w-full border border-white/30 md:mt-8 mt-4"></div>
      <div className="flex justify-between w-full md:w-[40%] text-white/80 mt-3">
        <h1>Brand. Digital. Motion.</h1>
        <h1>Wake-up. Rise. Outshine.</h1>
      </div>
      <div className="md:pl-[26%] pl-[13%] pt-12 md:text-3xl text-2xl text-white space-y-8 mb-16">
        <h1>
          When you can be anyone – be you. We’ll help you challenge the
          conventions, provoke the assumptions and celebrate your uniqueness to
          win hearts, minds and new business.
        </h1>
        <Button
          text="Get in touch"
          className="bg-white rounded-full group px-5 py-6 font-poppins font-medium text-base"
          icon={
            <svg
              className="w-[17px] h-[17px] text-[17px] group-hover:rotate-45 duration-300 ease-in-out "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 17"
            >
              <path
                id="Exclusion_1"
                data-name="Exclusion 1"
                d="M8.5,17A8.5,8.5,0,1,1,17,8.5,8.51,8.51,0,0,1,8.5,17ZM6.146,4.859h0L4.933,6.072h5.373L4.577,11.8l.9.9,5.729-5.729v5.374l1.214-1.214V4.859H6.146Z"
                fill="#1c0005"
              />
            </svg>
          }
        />
      </div>
    </div>
  )
}

export default BrandSection
