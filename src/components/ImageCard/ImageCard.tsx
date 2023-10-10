import Image from "next/image"
import { ArrowSvg } from "../ArrowSvg"
import { Button } from "../ui/button"
interface ImageProps {
  url: string
  description: string
  date: string
}
const ImageCard = ({ url, description, date }: ImageProps) => {
  return (
    <div className=" grid gap-3 cursor-pointer group transition duration-100 ease-in-out">
      <div className="w-full relative overflow-hidden h-96 cursor-pointer mt-24 rounded-xl">
        <Image
          src={url}
          className="transform transition-transform duration-300 ease-in-out group-hover:scale-105"
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
            text="Article"
            variant={"link"}
            className="border rounded-full py-1 text-white font-light hover:no-underline hover:bg-transparent"
          />
        </div>
      </div>
      <span className=" text-white space-y-2 ">
        <p>{description}</p>
        <p className="opacity-70">{date}</p>
      </span>
      <span className="flex flex-auto justify-start items-center gap-3 cursor-pointer text-white ">
        <h1 className="group-hover:opacity-70">Read more </h1>
        <ArrowSvg />
      </span>
    </div>
  )
}

export default ImageCard
