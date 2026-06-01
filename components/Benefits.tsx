import Image from "next/image";
import SliderLogo from "./ui/SliderLogo";
import GallerySlider from "./ui/GalerySlider";
import Button from "./ui/Button";
import ArrowRight from "./ui/ArrowRight";
import Rating from "./ui/Raiting";

export default function Benefits() {
  return (
    <section
      className="w-full bg-white pt-15 md:pt-18"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #F9F0E5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0) 100%)",
      }}
    >
      <p className="text-center text-[#868787] text-[20px] leading-6 tracking-[0.03em] pb-5">
        as seen in
      </p>
      <div className="hidden md:flex max-w-6xl mx-auto items-center justify-between gap-14 mb-28 px-5 md:px-10 ">
        <Image src="/logo1.webp" width={178} height={22} alt="Logo 1" />
        <Image src="/logo2.webp" width={111} height={52} alt="Logo 2" />
        <Image src="/logo3.webp" width={271} height={53} alt="Logo 3" />
        <Image src="/logo4.webp" width={194} height={37} alt="Logo 4" />
        <Image src="/logo5.webp" width={192} height={58} alt="Logo 5" />
      </div>
      <div className="md:hidden max-w-6xl mx-auto px-5 md:px-10 mb-11">
        <SliderLogo />
      </div>

      <div className="flex-1 max-w-6xl mx-auto x-5 md:px-10">
        <h2 className="w-50% mb-4 md:mb-6  text-center md:text-left font-normal text-[26px] md:text-[32px] leading-8 md:leading-11.25 tracking-[0.04em] text-[#01005B]">
          Loungewear you can be proud of.
        </h2>
      </div>
      <div className=" max-w-7xl pb-10 md:pb-16 mx-auto w-full min-h-150 grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-20 items-center px-5 md:px-10 pt-4 md:pt-8 lg:pl-24 lg:pr-8">
        <div className="md:order-1">
          <GallerySlider />
          <p className="text-center font-normal text-[13px] leading-5 tracking-[0.03em] text-[#676869]">
            White Robe
          </p>
        </div>
        <div className=" relative mx-auto w-full flex flex-col items-center md:items-start gap-0">
          <div className="relative flex flex-col items-start gap-6 mb-8 px-5 md:px-0">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
              <Image
                src="/icon-2.svg"
                alt="Social Icon 1"
                width={30}
                height={30}
              />
              <div className="flex flex-col gap-5 md:gap-3">
                <h3 className="text-center md:text-left font-normal text-[20px] md:text-[22px] leading-6 tracking-[0.04em] text-[#01005B]">
                  Ethically sourced.
                </h3>
                <p className="text-[#676869] text-center md:text-left font-normal text-[14px] leading-6 tracking-[0.03em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-[#C4C4C480] md:hidden "></div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
              <Image
                src="/icon-4.svg"
                alt="Social Icon 1"
                width={30}
                height={30}
              />
              <div className="flex flex-col gap-5 md:gap-3">
                <h3 className="text-center md:text-left font-normal text-[20px] md:text-[22px] leading-6 tracking-[0.04em] text-[#01005B]">
                  Responsibly made.
                </h3>
                <p className="text-[#676869] text-center md:text-left font-normal text-[14px] leading-6 tracking-[0.03em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-[#C4C4C480] md:hidden "></div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8 z-1">
              <Image
                src="/icon-1.svg"
                alt="Social Icon 1"
                width={30}
                height={30}
              />
              <div className="flex flex-col gap-5 md:gap-3">
                <h3 className="text-center md:text-left font-normal text-[20px] md:text-[22px] leading-6 tracking-[0.04em] text-[#01005B]">
                  Made for living in.
                </h3>
                <p className="text-[#676869] text-center md:text-left font-normal text-[14px] leading-6 tracking-[0.03em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-[#C4C4C480] md:hidden "></div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8 z-1">
              <Image
                src="/icon-3.svg"
                alt="Social Icon 1"
                width={30}
                height={30}
              />
              <div className="flex flex-col gap-5 md:gap-3">
                <h3 className="text-center md:text-left font-normal text-[20px] md:text-[22px] leading-6 tracking-[0.04em] text-[#01005B]">
                  Unimaginably comfortable.
                </h3>
                <p className="text-[#676869] text-center md:text-left font-normal text-[14px] leading-6 tracking-[0.03em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
            </div>
            <div className="w-full md:hidden z-1">
              <Button>
                Customize Your Outfit
                <ArrowRight />
              </Button>
              <div className=" mt-3 pb-3">
                <Rating rating={5} className="text-[12px] leading-6" />
              </div>
            </div>
            <div
              className="absolute w-screen h-175 z-0 right-0 -left-5 -bottom-3 pointer-none: md:hidden "
              style={{
                background:
                  "linear-gradient(0deg, #F9F0E5 0%, rgba(249, 240, 229, 0) 50%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
