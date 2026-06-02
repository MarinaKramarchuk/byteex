import { Star } from "lucide-react";

interface RatingProps {
  rating?: number;
  className?: string;
}

export default function RatingStars({ rating = 5 }: RatingProps) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-3 h-3 text-[#FFB801] fill-[#FFB801]" />
      ))}
    </div>
  );
}
