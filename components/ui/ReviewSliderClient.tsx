"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewStars from "./RaitingStars";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: {
    url: string;
  };
}

export default function ReviewSliderClient({ reviews }: { reviews: Review[] }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-16">
      <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-50 p-2 pointer-events-auto">
        <ChevronLeft className="w-8 h-8 text-gray-600" />
      </button>
      <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-50 p-2 pointer-events-auto">
        <ChevronRight className="w-8 h-8 text-gray-600" />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        pagination={{ clickable: true }}
        breakpoints={{ 768: { slidesPerView: 3 } }}
        className="w-[90%] pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="h-auto">
            <div className="p-8 border border-gray-100 shadow-[0_3px_10px_1px_rgba(0,0,0,0.08)] rounded-xl bg-white h-full flex flex-col">
              <div className="flex mb-3 gap-3 items-center">
                <Image 
                  src={review.avatar.url} 
                  alt={review.name} 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shrink-0" 
                />
                <div className="flex flex-col">
                  <ReviewStars rating={review.rating} />
                  <p className="text-md font-medium text-[#676869]">{review.name}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-6">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}