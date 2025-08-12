"use client";
import React, { useContext } from "react";
import { useParams } from "next/navigation";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import ProductDisplay from "./components/ProductDisplay";
import products from "@/data/randomized_products.json";
import { CategoryContextValue } from "@/lib/types/types";

const CategoryContext = React.createContext<CategoryContextValue | null>(null);
export const useCategory = (): CategoryContextValue | null => useContext(CategoryContext);

const Page = () => {
  const params = useParams().category;
  const category = Array.isArray(params) ? params[0] : params;
  if (!category) {
    console.error("Section parameter is missing");
    return <h1>LOADING...</h1>;
  }

  const filteredProducts = products.products.filter((product) => product.style.toLowerCase() === category);

  return (
    <CategoryContext.Provider value={{ category, filteredProducts }}>
      <main className="w-screen">
        <section className="min-h-[100rem] w-9/10 mx-auto max-w-[77.5rem] grid grid-rows-[1500px_300px] grid-cols-[300px_1fr]">
          <aside className="row-span-1 col-span-1 flex items-start justify-start h-[80rem] ">
            <Filter />
          </aside>
          <div className="p-1 overflow-y-auto row-span-1 col-span-1">
            <ProductDisplay />
          </div>
          <div className="p-4 text-center col-span-2">
            <Pagination />
          </div>
        </section>
      </main>
    </CategoryContext.Provider>
  );
};

export default Page;
