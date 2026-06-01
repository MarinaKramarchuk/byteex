import { Star } from "lucide-react";

interface RatingProps {
  rating?: number;
  className?: string;
}

export default function Rating({ rating = 5, className }: RatingProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-0.5">
      <div className="flex gap-0.5">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-[#FFB801] fill-[#FFB801]" />
        ))}
      </div>
      <p className={`text-[#828282] text-center font-normal tracking-[0.02em] ${className}`}>
        Over 500+ 5 Star Reviews Online
      </p>
    </div>
  );
}
