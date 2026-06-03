import Rating from "../Raiting";
import ReviewSlider from "../ReviewSlider";
import ArrowRight from "../ui/ArrowRight";
import Button from "../ui/Button";
import GalleryWrapper from "../GalleryWrapper";

export default function Fans() {
  return (
    <section className="w-full bg-[#ffffff] pt-10 gap-12 pb-10 md:pt-20 md:pb-14 flex flex-col items-center">
      <div className="max-w-153 mx-auto pt-10 md:pt-20 flex flex-col items-center">
        <div className="flex-1 max-w-6xl mx-auto x-5 md:px-10">
          <h2 className="w-50% mb-4 md:mb-6  text-center md:text-left font-normal text-[26px] md:text-[32px] leading-8 md:leading-11.25 tracking-[0.04em] text-[#01005B]">
            What are our fans saying?
          </h2>
        </div>
        <p className="text-[#6C6C6C] font-normal text-center text-[15px] leading-6 tracking-[0.03em] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>
      <div>
        <GalleryWrapper />
      </div>
      <div>
        <ReviewSlider />
      </div>
      <div>
        <Button className="px-12 py-3 mb-2">
          Customize Your Outfit
          <ArrowRight />
        </Button>
        <Rating rating={5} className="text-[11px] leading-4 text-center" />
      </div>
    </section>
  );
}
