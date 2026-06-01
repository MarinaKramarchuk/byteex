"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function SliderLogo() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <Image src="/logo1.webp" width={126} height={16} alt="Logo 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/logo2.webp" width={73} height={35} alt="Logo 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/logo3.webp" width={145} height={30} alt="Logo 3" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/logo4.webp" width={100} height={17} alt="Logo 4" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/logo5.webp" width={100} height={30} alt="Logo 5" />
      </SwiperSlide>
    </Swiper>
  );
}
