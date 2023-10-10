import { ParagraphsSlide } from "../ParagraphsSlide"

const TestimonialSection = () => {
  return (
    <div className="w-full">
      <h1 className="text-5xl text-white mt-3 mb-40">Testimonials</h1>
      <div className="w-full border border-white/30 mt-12 "></div>
      <div>
        <span className=" w-full gap-40  flex justify-start items-center mt-3">
          <h1 className="text-white">Don’t just take our word</h1>
          <h1 className="text-white">Testimonials</h1>
        </span>
      </div>
      <div className="pl-[26%] mt-12 space-y-1 pb-32">
        <ParagraphsSlide />
      </div>
    </div>
  )
}

export default TestimonialSection
