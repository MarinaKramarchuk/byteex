import Button from "./ui/Button";
import CardsSlider from "./ui/CardsSlider";
import ArrowRight from "./ui/ArrowRight";
import Raiting from "./ui/Raiting";

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#ffffff] pt-15  md:pt-18">
      <div className="max-w-7xl mx-auto w-full px-5 md:px-10 ">
        <div className="flex-1 max-w-6xl mx-auto px-5 mb-6 md:mb-12">
          <h2 className="w-50% mb-4  text-center font-normal text-[26px] leading-8  tracking-[0.04em] text-[#01005B]">
            Comfort made easy
          </h2>
        </div>
        <CardsSlider />
        <div className="pt-10 md:pt-14 flex flex-col items-center gap-3">
          <Button className="px-12 py-3 mb-2">
            Customize Your Outfit
            <ArrowRight />
          </Button>
          <Raiting className="text-[12px] leading-5" />
        </div>
      </div>
    </section>
  );
}
