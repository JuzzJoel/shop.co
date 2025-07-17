import React from 'react';
import ProductList from '@/ui/layout/ProductList';
import type { PhotoGalleryProps } from '@/lib/types/types'; // Adjust path as needed



function PhotoGallery({
  idGallery,
  titleGallery,
  data,
  buttonText,
  filterProp,
  filterValue,
  sortProp,
  sortOrder,
  limit,
  random,
  viewAll,
  border,
}: PhotoGalleryProps) {
  return (

    <>
      <section id={idGallery} className="flex items-center justify-center w-screen h-auto mt-13 lg:mt-18">
        <div className={`w-9/10  max-w-[77.5rem] h-full bg-white flex items-center justify-around flex-col ${border}`}>
          <h1 className="text-[32px] uppercase font-black font-primary lg:text-5xl mb-8 md:mb-12">
            {titleGallery}
          </h1>
          <div className="flex w-full mt-4 mb-4">
          <ProductList
  data={data}
              filterProp={filterProp}
  filterValue={filterValue}
  sortProp={sortProp}
  sortOrder={sortOrder}
  limit={limit}
  random={random}
/>





          </div>
          {buttonText && (
            <div className="flex items-center justify-center w-full h-auto mt-6 mb-10 md:mt-9 lg:mb-16">
              <button className="px-[54px] mt-5 capitalize text-center flex items-center justify-center py-[16px] rounded-full bg-white border border-black/10 text-black text-[14px] w-[360px] h-[46px] gap-[12] xl:font-[16px] xl:h-[52px] xl:w-[218px] xl:text-[16px] hover:bg-black/60 hover:text-white transition duration-300 cursor-pointer"
                onClick={viewAll}>
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default PhotoGallery;

