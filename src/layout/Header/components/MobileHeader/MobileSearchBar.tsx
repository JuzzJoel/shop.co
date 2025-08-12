import React, { useState } from "react";
import SearchBarDisplay from "../SearchBar/SearchBarDisplay";
import SearchBarResults from "../SearchBar/SearchBarResults";
import productList from "@/data/randomized_products.json";
import { type Product, SearchBarDisplayProps } from "@/lib/types/types";

function MobileSearchBar() {
  const [searchItem, setSearchItem] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
    if (Array.isArray(productList.products)) {
      const filteredResults = productList.products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setSearchResults(filteredResults);
    } else if (Array.isArray(productList)) {
      const filteredResults = productList.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setSearchResults(filteredResults);
    } else {
      console.error("productList is not an array");
    }
  };

  return (
    <div className="w-full p-4 bg-white">
      <input
        type="text"
        className="w-full p-2 text-black border border-gray-300 rounded"
        placeholder="Search for products..."
        onChange={handleSearch}
        value={searchItem}
      />
      {searchItem ? (
        <SearchBarResults searchResults={searchResults} />
      ) : (
        <SearchBarDisplay recentSearches={recentSearches} searchResults={searchResults} searchItem={searchItem} />
      )}
    </div>
  );
}

export default MobileSearchBar;
