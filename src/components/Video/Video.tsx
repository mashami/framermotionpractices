import { cn } from "@/lib/utils"

interface VideoProps {
  className?: string
}

const Video = ({ className }: VideoProps) => {
  return (
    <video autoPlay className={cn("w-full h-full", className)} loop muted>
      <source src="/DMFA_Logo_Animation.mp4" type="video/mp4" />
      <p> Your browser does not support the video tag.</p>
    </video>
  )
}

export default Video
