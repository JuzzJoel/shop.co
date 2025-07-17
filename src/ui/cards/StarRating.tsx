import RenderStars from '@/lib/utilities/Ratings';
import type { StarRatingProps } from '@/lib/types/types';

function StarRating({ rating, variant }: StarRatingProps) {
  const size = variant === 'ProductDetail' ? 26 : 16; // default size for ProductCard

  return (
    <div className="flex items-center">
      <RenderStars rating={rating} size={size} />
      <span className="ml-1 text-xs font-normal md:text-sm font-secondary">
        {rating.toFixed(1)}<span className="font-light">/5</span>
      </span>
    </div>
  );
}

export default StarRating;

