import React from "react";

function DesktopFigures() {
  return (
    <div>
      <div
        className="flex flex-wrap items-center justify-between md:w-full md:divide-x md:divide-black/10 
                [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center
                [&>*]:w-1/2 md:[&>*]:w-1/3
                [&>*:nth-child(3)]:w-full md:[&>*:nth-child(3)]:w-1/3
                [&>*:nth-child(3)]:translate-x-[10%]
                [&>*:not(:last-child)]:border-r
                [&_div]:flex [&_div]:flex-col [&_div]:items-center [&_div]:justify-center
                [&_div]:w-8/10 [&_div]:h-1/2
                [&_div>div:first-child]:sm:text-[26px] [&_div>div:first-child]:md:text-[30px] [&_div>div:first-child]:lg:text-[40px]
                [&_div>div:first-child]:font-bold [&_div>div:first-child]:font-secondary [&_div>div:first-child]:whitespace-nowrap [&_div>div:first-child]:w-full
                [&_div>div:last-child]:font-secondary [&_div>div:last-child]:whitespace-nowrap [&_div>div:last-child]:text-xs [&_div>div:last-child]:leading-[20px] [&_div>div:last-child]:w-full"
      >
        <div className="md:items-start">
          <div>
            <div>200+</div>
            <div>International Brands</div>
          </div>
        </div>

        <div>
          <div>
            <div>2,000+</div>
            <div>High-Quality Products</div>
          </div>
        </div>

        <div>
          <div>
            <div>30,000+</div>
            <div>Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopFigures;
