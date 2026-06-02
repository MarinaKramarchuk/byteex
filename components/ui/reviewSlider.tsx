"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewStars from "./RaitingStars";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReviewSlider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-16">
      <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-50 p-2 pointer-events-auto transition-opacity hover:opacity-70">
        <ChevronLeft className="w-8 h-8 text-gray-600" />
      </button>
      <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-50 p-2 pointer-events-auto transition-opacity hover:opacity-70">
        <ChevronRight className="w-8 h-8 text-gray-600" />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        className="w-[90%] pb-12"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide key={item} className=" h-auto">
            <div className="p-8 border border-gray-100 shadow-[0_3px_10px_1px_rgba(0,0,0,0.08)] rounded-xl bg-white h-full flex flex-col">
              <div className="flex mb-3 gap-3 items-center">
                <div className="w-12 h-12 rounded-full bg-[#1C2E58] shrink-0"></div>
                <div className="flex flex-col">
                  <ReviewStars rating={5} />
                  <p className="text-md font-medium text-[#676869]">Jane, S.</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sollicitudin dolor, non sodales justo. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                sed sollicitudin dolor, non sodales justo.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
