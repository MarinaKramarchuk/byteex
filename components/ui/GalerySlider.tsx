"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Image from "next/image";

export default function GallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const images = ["/girl2.webp", "/girl1.webp", "/girl3.webp", "/girl1.webp", "/girl2.webp", "/girl3.webp"];

  return (
    <div className="w-full max-w-125 mx-auto">
      <div className="relative mb-4 group">
        <Swiper
          modules={[Navigation, Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="w-[90%] aspect-4/5 overflow-hidden"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                src={src}
                className="w-[90%] h-auto object-cover mx-auto"
                alt="Product"
                width={300}
                height={500}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-prev cursor-pointer absolute -left-5 top-1/2 z-10 -translate-y-1/2 p-2 transition-all">
          <ChevronLeft className="w-8 h-8 text-[#676869]" />
        </button>
        <button className="custom-next cursor-pointer absolute -right-5 top-1/2 z-10 -translate-y-1/2 p-2 transition-all">
          <ChevronRight className="w-8 h-8 text-[#676869]" />
        </button>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs, FreeMode]}
        watchSlidesProgress={true}
        slidesPerView={8}
        spaceBetween={5}
        freeMode={true}
        className="w-[80%] mx-auto -mt-15"
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className="w-5 h-5 md:w-8 md:h-8 cursor-pointer "
          >
            <Image
              src={src}
              className="border-2 border-transparent"
              alt="Thumbnail"
              width={20}
              height={20}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
