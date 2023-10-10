"use client"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        "flex justify-between px-14 items-center h-5 max-w-screen py-16 text-white bg-transparent fixed top-0 right-0 left-0 z-10 font-poppins font-light z-40",
        isScrolled && " backdrop-blur-md border-b-[0.5px] border-white/10"
      )}
    >
      <div>
        <h1 className="font-semibold text-white text-2xl cursor-pointer hover:text-white/70 ">
          Dawn
        </h1>
      </div>
      <div
        className={cn(
          `font-light flex gap-2 justify-center items-center ${
            isScrolled ? "transition duration-500 ease-in-out opacity-0" : ""
          }`
        )}
      >
        <h1>MCR.UK.Rise 05.36</h1>
      </div>
      <div className="flex gap-16 cursor-pointer ">
        <ul
          className={cn(
            "flex justify-center items-center gap-16 [&_li]:text-[15px] font-poppins  ",
            `${
              isScrolled ? "opacity-0 transition duration-500 ease-in-out " : ""
            }`
          )}
        >
          <li className="hover:text-white/70">Work</li>
          <li className="hover:text-white/70">Why us</li>
          <li className="hover:text-white/70">What we do +</li>
          <li className="hover:text-white/70">Insight</li>
          <li className="hover:text-white/70">Get in touch</li>
        </ul>
        <span className="flex justify-center items-center gap-3 hover:opacity-70">
          <h1 className="">Menu</h1>
          <span className="border border-white rounded-full fill-white p-[1px]">
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
            </svg>
          </span>
        </span>
      </div>
    </nav>
  )
}

export default NavBar
