import { cn } from "@/lib/utils"
import { useState } from "react"
import { ArrowSvg } from "../ArrowSvg"
import { Button } from "../ui/button"

const Footer = () => {
  const [isInputFocused, setInputFocused] = useState<boolean>(false)
  const [text, setText] = useState<string>("")

  const handleInputFocus = () => {
    setInputFocused(true)
  }

  const handleInputBlur = () => {
    setInputFocused(false)
  }
  return (
    <div className="grid grid-cols-2  gap-48 pr-32 w-full">
      <div className="space-y-16 grid grid-rows-2 w-full">
        <span className="space-y-7">
          <h1 className="text-white text-3xl">
            It all starts here. Let’s build your brand to communicate more
            effectively.
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
        </span>
        <div className=" w-full  pr-20">
          <span className="flex justify-between items-center ">
            <label
              htmlFor=""
              className={cn(
                "relative mt-0 transition",
                isInputFocused && "mt-[-30px]"
              )}
            >
              Enter your message
            </label>
            <ArrowSvg className="rotate-45" />
          </span>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={cn(
              `bg-transparent border-b-[0.5px] ring-0 w-full`,
              isInputFocused && "border-transparent ring-0"
            )}
          />
        </div>
      </div>
      <div className=" grid grid-cols-2 text-[15px] font-light gap-[135px]">
        <div>
          <span className="grid grid-rows-3 gap-8">
            <span>
              <h1>Find us</h1>
              <p className="text-white/70">
                73a Hulme Hall Road, <br /> Cheadle Hulme, Stockport,
                <br /> Greater Manchester, <br />
                SK8 6JZ
              </p>
            </span>
            <span>
              <h1>Connect with us</h1>
              <ul className="text-white/70 font-light">
                <li>016728933</li>
                <li>wakup@gmail.com</li>
              </ul>
            </span>
            <h1>All Right Reseved</h1>
          </span>
        </div>
        <div>
          <span className="grid grid-rows-3 gap-8">
            <span>
              <h1>Follow us</h1>
              <ul className="text-white/70">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </span>
            <span>
              <h1>Legal</h1>
              <ul className="text-white/70">
                <li>Privancy</li>
                <li>Tearms & Conditions</li>
              </ul>
            </span>
            <h1>@ Dawn Creative 2023</h1>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
