import React, { useContext } from "react";
import ProductCard from "@/ui/cards/ProductCard";
import { useCategory } from "@/app/[category]/page";
import { CategoryContextValue } from "@/lib/types/types";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProductDisplay = () => {
  const { category, filteredProducts } = useCategory() as CategoryContextValue;
  console.log(`these are the ${category} products`, filteredProducts);

  return (
    <section className="w-full ">
      <div className="w-full flex justify-between items-center">
        <span className="text-[32px] capitalize font-bold">{category}</span>
        <div className="fon-secondary flex font-normal gap-2 text-[16px] text-black/60">
          <span>Showing 1- of {filteredProducts.length} Products </span>
          <span className="flex gap-1">
            Sort by:
            <span className="font-bold  text-black flex items-center gap-1">
              Most Popular <ChevronDown size={16} />
            </span>
          </span>
        </div>
      </div>
      <div className=" mx-auto w-full max-w-[77.5rem] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-10 justify-items-center ">
        {filteredProducts.map((p) => (
          <div className="m-5!" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDisplay;
