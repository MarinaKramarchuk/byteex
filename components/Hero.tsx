import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import ArrowRight from "./ui/ArrowRight";
import Raiting from "./ui/Raiting";

export default function Hero() {
  return (
    <>
      <div className="bg-[#F9F0E5] w-full min-h-9 flex items-center justify-center text-[#676869] text-[11px] px-4 text-center">
        <span className="hidden md:inline ">
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
        </span>

        <span className="mx-6 hidden md:inline">|</span>

        <span>FREE SHIPPING on orders &gt; $200</span>

        <span className="mx-6 hidden md:inline">|</span>

        <span className="hidden md:inline"> easy 45 day return window.</span>
      </div>

      <section className=" max-w-7xl mx-auto w-full min-h-150 grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-12.5 items-center px-5 md:px-10 pt-4 md:pt-8 lg:pl-24 lg:pr-8">
        <div className=" relative mx-auto w-full flex flex-col items-center md:items-start pb-34 md:pb-43 gap-0">
          <Link href="/">
            <Image
              className="mb-3 md:mb-15.5"
              src="/byteex-logo.png"
              alt="Byteex Logo"
              width={200}
              height={30}
            />
          </Link>
          <div className="flex-1">
            <h1 className="mb-4 md:mb-6  text-center md:text-left font-normal text-[26px] md:text-[38px] leading-8 md:leading-11.25 tracking-[0.04em] text-[#01005B]">
              Don&apos;t apologize for being comfortable.
            </h1>
          </div>
          <div className="relative items-center justify-center gap-4 pb-6 flex md:hidden">
            <div className="absolute left-0 w-17.5 h-25 md:w-33 md:h-48 bg-linear-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/70 -z-10" />
            <div className="absolute right-0 w-17.5 h-25 md:w-33 md:h-48 bg-linear-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/70 -z-10" />

            <div className="relative left-8.75 border-[2.5px] border-white shadow-[0px_3px_10px_1px_#00000014] overflow-hidden">
              <Image
                src="/girl1.webp"
                width={110}
                height={167}
                alt="Girl 1"
                className=" object-cover w-27.5 h-42.5 md:w-52 md:h-79"
              />
            </div>
            <div className="relative z-2 overflow-hidden border-[2.5px] border-white shadow-[0px_3px_10px_1px_#00000014]">
              <Image
                src="/girl2.webp"
                width={136}
                height={221}
                alt="Girl 2"
                className="object-cover w-34 h-55.25 md:w-70 md:h-105"
              />
            </div>
            <div className="relative right-8.75 overflow-hidden border-[2.5px] border-white shadow-[0px_3px_10px_1px_#00000014]">
              <Image
                src="/girl3.webp"
                width={110}
                height={167}
                alt="Girl 3"
                className="object-cover w-27.5 h-42.5 md:w-52 md:h-79"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 mb-8 px-5 md:px-0">
            <div className="flex flex-row items-start gap-2">
              <Image
                src="/icon-1.svg"
                alt="Social Icon 1"
                width={30}
                height={30}
              />
              <p className="text-[#676869] font-normal text-[15px] leading-6 tracking-[0.03em]">
                Beautiful, comfortable loungewear for day or night.
              </p>
            </div>
            <div className="flex flex-row items-start gap-2">
              <Image
                src="/icon-2.svg"
                alt="Social Icon 2"
                width={30}
                height={30}
              />
              <p className="text-[#676869] font-normal text-[15px] leading-6 tracking-[0.03em]">
                No wasteful extras, like tags or plastic packaging.
              </p>
            </div>
            <div className="flex flex-row items-start gap-2">
              <Image
                src="/icon-3.svg"
                alt="Social Icon 3"
                width={30}
                height={30}
              />
              <p className="text-[#676869] font-normal text-[15px] leading-6 tracking-[0.03em]">
                Our signature fabric is incredibly comfortable — unlike anything
                you’ve ever felt.
              </p>
            </div>
          </div>
          <Button>
            Customize Your Outfit
            <ArrowRight />
          </Button>
          <div className="absolute w-full rounded-lg md:w-90 p-4 md:h-43 bg-[#ffffff] -bottom-15 md:-bottom-18 left-0 z-5 border border-[#EDEDED] shadow-[0px_3px_10px_1px_#00000014]">
            <div className="flex flex-row gap-3 mb-3">
              <Image
                src="/foto.webp"
                alt="Social Media Photo"
                width={39}
                height={39}
                className="rounded-full"
              />
              <div className="flex flex-col gap-1">
                <Raiting rating={5} className="text-[11px] leading-4" />
                <p className="text-[#676869] text-left font-normal text-[12px] leading-5 tracking-[0.02em]">
                  Jane, S.
                </p>
              </div>
            </div>

            <p className="text-[#676869] font-normal text-[15px] leading-6 tracking-[0.03em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed sollicitudin dolor, non sodales justo.
            </p>
          </div>
        </div>
        <div>
          <div className="relative items-center justify-center gap-4 py-20 hidden md:flex">
            <div className="absolute left-0 w-17.5 h-25 md:w-33 md:h-48 bg-linear-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/70 -z-10" />
            <div className="absolute right-0 w-17.5 h-25 md:w-33 md:h-48 bg-linear-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/70 -z-10" />

            <div className="relative left-8.75 border-[2.5px] border-white shadow-[0px_3px_10px_1px_#00000014] overflow-hidden">
              <Image
                src="/girl1.webp"
                width={110}
                height={167}
                alt="Girl 1"
                className=" object-cover w-27.5 h-42.5 md:w-52 md:h-79"
              />
            </div>
            <div className="relative z-2 overflow-hidden border-[2.5px] border-white shadow-[0px_3px_10px_1px_#00000014]">
              <Image
                src="/girl2.webp"
                width={136}
                height={221}
                alt="Girl 2"
                className="object-cover w-34 h-55.25 md:w-70 md:h-105"
              />
            </div>
            <div className="relative right-8.75 overflow-hidden border-[2.5px] border-white shadow-[0px_3px_10px_1px_#00000014]">
              <Image
                src="/girl3.webp"
                width={110}
                height={167}
                alt="Girl 3"
                className="object-cover w-27.5 h-42.5 md:w-52 md:h-79"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
