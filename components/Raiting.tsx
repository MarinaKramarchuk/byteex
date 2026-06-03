import RatingStars from "./ui/RaitingStars";

interface RatingProps {
  rating?: number;
  className?: string;
}

export default function Rating({ rating = 5, className }: RatingProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-0.5">
      <RatingStars rating={rating} />
      <p
        className={`text-[#828282] text-center font-normal tracking-[0.02em] ${className}`}
      >
        Over 500+ 5 Star Reviews Online
      </p>
    </div>
  );
}
