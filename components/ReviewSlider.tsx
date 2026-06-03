import { getReviews } from "@/lib/hygraph"; 
import ReviewSliderClient from "./ui/ReviewSliderClient";

export default async function ReviewSlider() {
  const reviews = await getReviews();

  return <ReviewSliderClient reviews={reviews} />;
}