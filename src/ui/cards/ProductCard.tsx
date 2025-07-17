import StarRating from "./StarRating";
import Prices from "./Prices";
import Link from "next/link";
import Image from "next/image";
import type {  ProductCardProps } from '@/lib/types/types';





const ProductCard = ({ product }: ProductCardProps) => {  return (
<>
    <Link href={`/shop/${product.section}/${product.clothingType}/${product.id}`} className="flex flex-col items-center justify-center w-full h-full">
      <div className=" w-50 md:w-75 font-secondary hover:scale-[1.01] cursor-pointer">
        <Image
          src={product.imageUrl[0]}
          alt={product.name}
          className="object-cover w-full bg-product-card bg-blend-multiply aspect-square rounded-[14px] md:rounded-[20px]"
          width={300} // specify width
          height={300} // specify height
        />

     
      <div className="">
        <h3 className="mb-1 text-[16px] md:text-[18px] lg:text-[20px] font-bold line-clamp-1">
          {product.name}
        </h3>
        
        <div className="flex">
          <StarRating
              rating={product.rating}
              variant="ProductCard"
              size={16}
          />
        </div>
        
        <div className="flex"><Prices
          current={product.price.new}
          old={product.price.old}
          discount={product.discount}
        /></div>
      </div>
      </div>
      </Link>
      </>
  );
};

export default ProductCard;