import { Star } from 'lucide-react';

export default function Rating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className="w-3 h-3 text-[#FFB801] fill-[#FFB801]" 
        />
      ))}
    </div>
  );
}