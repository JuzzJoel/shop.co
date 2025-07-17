import React from 'react'
import reviewsData from '@/data/reviews.json';
import ReviewCard from '@/ui/cards/ReviewCard';
import Image from 'next/image';
function ReviewGallery() {
    const reviews = reviewsData.ratings;

  return (
      <>
          <section className="h-auto w-screen  bg-white flex flex-col gap-4 justify-center items-center">
              <div className="w-9/10 flex items-end justify-between h-15 max-w-[77.5rem]">
                  <h1 className="text-[32px] leading-[36px] md:leading-0 flex items-center  h-full text-left md:text-[40px] uppercase font-primary font-black text-black ">
                  our happy customers
                  </h1>
                  <div className="flex  justify-between gap-4"> 
                      <Image src="/assets/images/icons/arrow-down-bold 2.png" alt="" className='w-6 h-6'         width={100}
  height={100}
    />  
                      <Image src="/assets/images/icons/arrow-down-bold 1.png" alt=""  className='w-6 h-6'          width={100}
  height={100}
  />   
   
              </div>
              </div>
<div className="h-auto flex overflow-x-auto w-screen items-center gap-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
  {reviews
    .filter((review) => review.rating === 5)
    .map((review, index, array) => (
      <div
        key={review.id}
        className={`${
          index === 0 || index === array.length - 1 ? "blur-[2px]" : ""
        }`}
      >
        <ReviewCard
          id={review.id}
          rating={review.rating}
          name={review.name}
          comment={review.comment}
        />
      </div>
    ))}
</div>

              
          </section>
      
    </>
  )
}

export default ReviewGallery
