import { ImageCard } from "../ImageCard"

const InsightSection = () => {
  return (
    <div>
      <h1 className="text-6xl text-white font-light mt-4">Insight</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
        <ImageCard
          url="/Brand-Guidelines-Blog.webp"
          description="What are the brand guidelines !"
          date="07.06.23"
        />
        <ImageCard
          url="/Embodiment.webp"
          description="What are brand archetypes? And do they matter?"
          date="07.02.23"
        />
        <ImageCard
          url="/Architecture.webp"
          description="What is Brand Architecture?"
          date="01.04.23"
        />
      </div>
    </div>
  )
}

export default InsightSection
