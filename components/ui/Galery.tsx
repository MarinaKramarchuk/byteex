"use client";
import Image from "next/image";

interface GalleryProps {
  images: { url: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 lg:grid-cols-11 gap-1 w-full">
      {images.map((img, index) => (
        <div
          key={index}
          className={`relative w-25 h-25 md:w-33 md:h-33 aspect-square overflow-hidden 
            ${index >= 8 ? 'hidden lg:block' : 'block'}`}
        >
          <Image
            src={img.url}
            alt="Gallery"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
