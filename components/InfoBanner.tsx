import Accordion from "./ui/Accordion";
import Image from "next/image";

export default function InfoBanner() {
  return (
    <section className="bg-[#F0EEEF] py-10">
      <div className="flex flex-col items-center justify-center gap-4 max-w-200 mx-auto px-5 md:px-10">
        <h2 className="w-50% mb-4 md:mb-6  text-center md:text-left font-normal text-[26px] leading-8 md:leading-11.25 tracking-[0.04em] text-[#01005B]">
          Our total green impact
        </h2>
        <div className="flex flex-row">
          <div className="flex flex-col justify-center items-center py-3 px-10">
            <Image
              src="/green_icon1.svg"
              alt="Carbon Footprint Icon"
              width={42}
              height={42}
              className="mb-3"
            />
            <p className="text-[22px] mb-1 leading-5 text-center tracking-[0.02em] font-semibold text-[#01005B]">
              3,927 kg
            </p>
            <p className="text-[14px] mb-1 leading-5 text-center tracking-[0.03em]  text-[#01005B]">
              of CO2 saved
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-3 px-10 border-r border-l border-[#C4C4C480]">
            <Image
              src="/green_icon2.svg"
              alt="Carbon Footprint Icon"
              width={42}
              height={42}
              className="mb-3"
            />
            <p className="text-[22px] mb-1 leading-5 text-center tracking-[0.02em] font-semibold text-[#01005B]">
              2,546,167 days
            </p>
            <p className="text-[14px] mb-1 leading-5 text-center tracking-[0.03em]  text-[#01005B]">
              of drinking water saved
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-3 px-10">
            <Image
              src="/green_icon3.svg"
              alt="Carbon Footprint Icon"
              width={42}
              height={42}
              className="mb-3"
            />
            <p className="text-[22px] mb-1 leading-5 text-center tracking-[0.02em] font-semibold text-[#01005B]">
              7,321 kWh
            </p>
            <p className="text-[14px] mb-1 leading-5 text-center tracking-[0.03em]  text-[#01005B]">
              of energy saved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
