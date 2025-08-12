import RenderStars from "@/lib/utilities/Ratings";
import React from "react";
import type { ReviewCardProps } from "@/lib/types/types";

function ReviewCard({ id, rating, name, comment }: ReviewCardProps) {
  return (
    <div
      key={id}
      className="flex-shrink-0 w-[95/100] md:w-100! gap-[10px] flex flex-col justify-between h-[186px] rounded-[20px] md:h-60 px-6 py-6 md:px-8 md:py-7  border border-black/10 text-[14px] leading-[20px] md:text-[16px] md:leading-[22px]"
    >
      <div className="flex items-center h-5">
        <RenderStars rating={rating} size={20} />
      </div>
      <div className="font-bold  font-secondary flex  items-center h-6 capitalize after:content-[url('/assets/images/icons/checkmark.png')] after:pl-1 after:w-5 after:h-5 whitespace-nowrap">
        {name}
      </div>
      <div className="font-secondary text-black/60 ">{comment}</div>
    </div>
  );
}

export default ReviewCard;
