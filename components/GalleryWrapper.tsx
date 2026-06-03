import { getGalleryImages } from "@/lib/hygraph";
import Gallery from "./ui/Galery";

export default async function GalleryWrapper() {
  const images = await getGalleryImages();

  if (!images || images.length === 0) {
    return <p className="text-center p-10">Loading fotos</p>;
  }

  return <Gallery images={images} />;
}
