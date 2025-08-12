"use client";
import StarRating from "./StarRating";
import Prices from "./Prices";
import Link from "next/link";
import Image from "next/image";
import { motion as m } from "framer-motion";
import type { ProductCardProps } from "@/lib/types/types";

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <Link
        href={`/shop/${product.section}/${product.clothingType}/${product.id}`}
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <m.div
          className=" w-50 md:w-75 font-secondary cursor-pointer"
          animate={{}}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src={product.imageUrl[0]}
            alt={product.name}
            className="object-cover w-full bg-product-card bg-blend-multiply aspect-square rounded-[14px] md:rounded-[20px]"
            width={300} // specify width
            height={300} // specify height
          />

          <div className="">
            <h3 className="mb-1 text-[16px] md:text-[18px] lg:text-[20px] font-bold line-clamp-1">{product.name}</h3>

            <div className="flex">
              <StarRating rating={product.rating} variant="ProductCard" size={16} />
            </div>

            <div className="flex">
              <Prices current={product.price.new} old={product.price.old} discount={product.discount}  fontSize="text-[20px] md:text-[22px] lg:text-[24px]"/>
            </div>
          </div>
        </m.div>
      </Link>
    </>
  );
};

export default ProductCard;
