import Button from "../ui/Button";
import Rating from "../Raiting";
import Image from "next/image";
import ArrowRight from "../ui/ArrowRight";

export default function FinalSection() {
  return (
    <section className="w-full bg-[#ffffff] bg-linear-to-t from-[#F9F0E5] via-[#F9F0E5]/18 to-transparent pt-10 pb-10 md:pt-20 md:pb-14 gap-14 flex flex-col items-center">
      <div className="max-w-153 mx-auto flex flex-col items-center px-5 md:px-10">
        <div className="flex-1 max-w-6xl mx-auto ">
          <h2 className="w-50% mb-4 md:mb-6  text-center font-normal text-[26px] md:text-[32px] leading-8 md:leading-11.25 tracking-[0.04em] text-[#01005B]">
            Find something you love.
          </h2>
        </div>
        <p className="text-[#6C6C6C] md:hidden font-normal text-center text-[15px] leading-6 tracking-[0.03em] mb-4">
          Click below to browse our collection!{" "}
        </p>
        <p className="text-[#6C6C6C] hidden md:inline font-normal text-center text-[15px] leading-6 tracking-[0.03em] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.
        </p>

        <div className="relative w-full md:w-203 h-53 md:h-93 mb-16">
          <div className="flex items-center justify-center gap-4 py-4 ">
            <div className="absolute left-0  w-17 h-23 md:w-35 md:h-49 bg-linear-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/70 z-1" />
            <div className="absolute right-0  w-17 h-23 md:w-35 md:h-49 bg-linear-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/70 z-1" />

            <div className="absolute z-2 w-24 h-36 md:w-52 md:h-80 left-6 md:left-16  shadow-[0px_3px_10px_1px_#00000014] overflow-hidden">
              <Image
                src="/girl5.webp"
                width={216}
                height={159}
                alt="Girl 1"
                className=" object-cover w-full h-full"
              />
            </div>
            <div className="relative z-3 w-35 h-53 md:w-62 md:h-93  overflow-hidden shadow-[0px_3px_10px_1px_#00000014]">
              <Image
                src="/girl6.webp"
                width={227}
                height={335}
                alt="Girl 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute z-2 right-6 md:right-16 overflow-hidden w-24 h-36 md:w-52 md:h-80  shadow-[0px_3px_10px_1px_#00000014]">
              <Image
                src="/girl1.webp"
                width={167}
                height={253}
                alt="Girl 3"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <Button className="px-12 py-3 mb-2">
          Customize Your Outfit
          <ArrowRight />
        </Button>
        <div className="hidden md:flex flex-row gap-2 items-center">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.8501 2.75H4.9501V5.5H7.7001V6.6H3.8501V2.75Z"
              fill="#1FAD40"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 5.5C11 8.53754 8.53754 11 5.5 11C2.46243 11 0 8.53754 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53754 0 11 2.46243 11 5.5ZM9.9 5.5C9.9 7.93007 7.93007 9.9 5.5 9.9C3.06995 9.9 1.1 7.93007 1.1 5.5C1.1 3.06995 3.06995 1.1 5.5 1.1C7.93007 1.1 9.9 3.06995 9.9 5.5Z"
              fill="#1FAD40"
            />
          </svg>
          <p className="text-[#1FAD40] text-[10px] leading-3 tracking-[0.04em] ">
            Ships in 1-2 Days
          </p>
          <div className="w-0.5 h-4 bg-[#C4C4C440]"></div>
          <Image
            src="/payments.png"
            width={243}
            height={22}
            alt="Girl 3"
            className="object-contain "
          />
        </div>
        <div className="md:hidden">
          <Rating className="text-[11px] leading-4 text-center" />
        </div>
        <div className="w-150 mt-6 hidden md:flex flex-row items-center">
          <div className="flex flex-row items-center gap-1 py-1.5 px-4">
            <Image src={"/CTA_icon1.svg"} width={33} alt="icon" height={33} />

            <p className="text-[#676869] text-[14px] leading-5 tracking-[0.03em]">
              FREE Shipping on Orders over $200
            </p>
          </div>
          <div className="flex flex-row items-center gap-1 py-1.5 px-4">
            <Image src={"/CTA_icon2.svg"} width={33} alt="icon" height={33} />

            <p className="text-[#676869] text-[14px] leading-5 tracking-[0.03em]">
              Over 500+ 5 Star Reviews Online
            </p>
          </div>
          <div className="flex flex-row items-center gap-1 py-1.5 px-4">
            <Image src={"/CTA_icon3.svg"} width={33} alt="icon" height={33} />

            <p className="text-[#676869] text-[14px] leading-5 tracking-[0.03em]">
              Made ethically and responsibly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
