"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function CardsSlider() {
  return (
    <div className="w-90% mx-auto max-w-6xl px-4 relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        allowTouchMove={
          typeof window !== "undefined" ? window.innerWidth < 768 : true
        }
        simulateTouch={false}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="w-full my-slider-class"
      >
        <SwiperSlide>
          <div className="max-w-70% md:w-full ms-auto flex flex-col justify-center items-center gap-3 md:gap-4 px-8 py-18 md:px-9 md:py-19 bg-[#F0EEEF] border rounded-lg border-[#EDEDED]">
            <Image src="/card_icon1.svg" width={51} height={51} alt="icon" />
            <h4 className="text-[#01005B] text-[22px] leading-10 tracking-[0.04em] font-medium">
              You save.
            </h4>
            <p className="text-[#676869] text-[15px] text-center leading-6 tracking-[0.03em]">
              Browse our comfort sets and save 15% when you bundle.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-3 md:gap-4 px-8 py-18 md:px-9 md:py-19 bg-[#F9F0E6] border rounded-lg border-[#EDEDED]">
            <Image src="/card_icon2.svg" width={51} height={51} alt="icon" />
            <h4 className="text-[#01005B] text-[22px] leading-10 tracking-[0.04em] font-medium">
              We ship.
            </h4>
            <p className="text-[#676869] text-[15px] text-center leading-6 tracking-[0.03em]">
              We ship your items within 1-2 days of receiving your order.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-3 md:gap-4 px-8 py-18 md:px-9 md:py-19 bg-[#F0EEEF] border rounded-lg border-[#EDEDED]">
            <Image src="/card_icon3.svg" width={51} height={51} alt="icon" />
            <h4 className="text-[#01005B] text-[22px] leading-10 tracking-[0.04em] font-medium">
              You enjoy!
            </h4>
            <p className="text-[#676869] text-[15px] text-center leading-6 tracking-[0.03em]">
              Wear hernest around the house, out on the town, or in bed.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="custom-prev md:hidden absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-2">
        <ChevronLeft className="w-8 h-8 text-[#676869]" />
      </button>
      <button className="custom-next md:hidden absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-2 ">
        <ChevronRight className="w-8 h-8 text-[#676869]" />
      </button>
    </div>
  );
}
