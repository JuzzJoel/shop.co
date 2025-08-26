"use client";
import React, { useState } from "react";
import SearchBarDisplay from "./SearchBarDisplay";
import SearchBarResults from "./SearchBarResults";
import productList from "../../../../data/randomized_products.json";
import type { Product } from "@/lib/types/types"; // Adjust path as needed
import Image from "next/image";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchItem(value);

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const products: Product[] = Array.isArray(productList.products)
      ? productList.products
      : Array.isArray(productList)
        ? productList
        : [];

    const filteredResults = products.filter((product: Product) =>
      product.name.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchResults(filteredResults);

    if (value && !recentSearches.includes(value)) {
      setRecentSearches([value, ...recentSearches.slice(0, 4)]);
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setTimeout(() => setIsFocused(false), 200); // delay for click events

  return (
    <div className="relative flex items-center justify-center h-full ml-1 rounded-full w-16/20">
      <input
        type="text"
        className="w-full h-full px-2 py-4 text-black border-none rounded-full indent-15 bg-black/24 focus:outline-none md:h-[8/24]"
        placeholder="Search for products..."
        onChange={handleSearch}
        value={searchItem}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Image
        src="/assets/images/Icons/search-lg.png"
        alt="search icon"
        className="absolute left-10 aspect-square "
        width={20}
        height={10}
      />

      {isFocused && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-240">
          {searchItem ? (
            <SearchBarResults searchResults={searchResults} />
          ) : (
            <SearchBarDisplay
              searchItem={searchItem}
              setSearchItem={setSearchItem}
              recentSearches={recentSearches}
              searchResults={searchResults}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
