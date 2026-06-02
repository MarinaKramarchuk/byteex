import Accordion from "./ui/Accordion";
import Image from "next/image";

export default function FAQ() {
  return (
    <section className="pb-20">
      <div className="flex flex-row gap-20 max-w-6xl mx-auto px-5 md:px-10">
        <div className="flex w-full flex-col items-start justify-start ">
          <div>
            <h2 className="w-50% mb-4 md:mb-6  text-center md:text-left font-normal text-[26px] md:text-[32px] leading-8 md:leading-11.25 tracking-[0.04em] text-[#01005B]">
              What are our fans saying?
            </h2>
          </div>
          <Accordion />
        </div>
        <div className="relative w-[70%] h-140 hidden md:block">
          <div className="flex items-center justify-center gap-4 py-20 ">
            <div className="absolute left-8 w-36 h-45 bg-linear-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/70 -z-10" />
            <div className="absolute right-14 w-36 h-45 bg-linear-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/70 -z-10" />

            <div className="absolute w-55 h-40 left-0 bottom-0 shadow-[0px_3px_10px_1px_#00000014] overflow-hidden">
              <Image
                src="/girl3.webp"
                width={216}
                height={159}
                alt="Girl 1"
                className=" object-cover w-full h-full"
              />
            </div>
            <div className="relative z-2 top-5 overflow-hidden shadow-[0px_3px_10px_1px_#00000014]">
              <Image
                src="/girl1.webp"
                width={227}
                height={335}
                alt="Girl 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute right-0 top-0 overflow-hidden  shadow-[0px_3px_10px_1px_#00000014]">
              <Image
                src="/girl5.webp"
                width={167}
                height={253}
                alt="Girl 3"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
