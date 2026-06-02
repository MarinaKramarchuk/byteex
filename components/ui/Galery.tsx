import Image from "next/image";

interface GalleryProps {
  images: { url: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 md:grid-cols-6 lg:grid-cols-11 gap-1">
      {images.map((img, index) => (
        <div key={index} className="aspect-square overflow-hidden">
          <Image
            src={img.url}
            loading="lazy"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
