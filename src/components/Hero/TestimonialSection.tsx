import { ParagraphsSlide } from "../ParagraphsSlide"

const TestimonialSection = () => {
  return (
    <div className="w-full">
      <h1 className="md:text-5xl text-4xl text-white mt-3 md:mb-40 mb-16">
        Testimonials
      </h1>
      <div className="w-full border border-white/30 md:mt-12 mt-5"></div>
      <div>
        <span className=" w-full md:gap-40  flex md:justify-start justify-between items-center mt-3">
          <h1 className="text-white">Don’t just take our word</h1>
          <h1 className="text-white">Testimonials</h1>
        </span>
      </div>
      <div className="md:pl-[26%] pl-0  md:mt-12 mt-8 space-y-1 md:pb-32 pb-5">
        <ParagraphsSlide />
      </div>
    </div>
  )
}

export default TestimonialSection
