import React from "react";
import StarRating from "./StarRating"; // Assuming StarRating is defined in a separate file

interface DatedReviewCardProps {
  name: string;
  ratings: number;
  comment: string;
  date: string;
  id: string | number;
}

function DatedReviewCard({ name, ratings, comment, date, id }: DatedReviewCardProps) {
  return (
    <>
      <div
        key={id}
        className="w-90 border border-black/10 md:w-100 h-[190px] rounded-[20px] md:h-60 px-6 py-6 md:px-8 md:py-7"
      >
        <div className="flex w-30 h-5 md:w-[140px] md:h-[23px">
          <StarRating rating={ratings} variant="ProductCard" size={20} />{" "}
        </div>
        <div className="flex relative items-center  h-[90px] w-5 md:w-[111px] md:h-6 capitalize  after:content-[url('/images/icons/checkmark.png')]      after:absolute after:w-5 after:h-5 ">
          {name}
        </div>
        <div className="font-secondary text-black/60  text-[14px] leading-[20px] md:text-[16px] md:leading-[22px]">
          {comment}
        </div>
        ({date} && ( ))
      </div>
    </>
  );
}

export default DatedReviewCard;

