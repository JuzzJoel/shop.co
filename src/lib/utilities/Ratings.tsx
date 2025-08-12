import { Star, StarHalf } from "lucide-react";
import React from "react";
import type { RenderStarsProps } from "@/lib/types/types";

function RenderStars({ rating, size }: RenderStarsProps) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} size={size} fill="currentColor" className="text-yellow-400" />);
  }

  // Render half star (if needed)
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" size={size} fill="currentColor" className="text-yellow-400" />);
  }

  return <div className="flex gap-0.5">{stars}</div>;
}

export default RenderStars;
