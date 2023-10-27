import { cn } from "@/lib/utils"

interface ArrowSvgProp {
  className?: string
  onClick?: () => void
}
const ArrowSvg = ({ className, onClick }: ArrowSvgProp) => {
  return (
    <span
      className={cn(
        "border border-white fill-white rounded-full p-[1px] group-hover:rotate-45 transition duration-200 ease-in-out",
        className
      )}
      onClick={onClick}
    >
      <svg
        className="w-4 h-4 -rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
      </svg>
    </span>
  )
}

export default ArrowSvg
