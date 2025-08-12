"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import allproducts from "@/data/randomized_products.json";
import { type Product } from "@/lib/types/types";
import RangeSlider from "@/ui/slider/DoubleRangeSlider";
import CloseSection from "../atoms/CloseSection";
import { LuSlidersVertical } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";

const Filter = () => {
  const [products] = useState<Product[]>(allproducts.products);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 50, max: 200 });
  const [sortBy, setSortBy] = useState("Most Popular");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  // Filtering logic inside useEffect
  useEffect(() => {
    let updatedProducts = [...products];

    // Filter by price
    updatedProducts = updatedProducts.filter(
      (product) => product.price.new >= priceRange.min && product.price.new <= priceRange.max,
    );

    // Filter by selected colors
    if (selectedColors.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedColors.some((color) => product.colors.includes(color)),
      );
    }

    // Filter by selected size
    if (selectedSize) {
      updatedProducts = updatedProducts.filter((product) => product.size === selectedSize);
    }

    // Filter by selected category
    if (selectedCategory) {
      updatedProducts = updatedProducts.filter((product) => product.category === selectedCategory);
    }

    // Sort logic
    switch (sortBy) {
      case "Most Popular":
        updatedProducts = updatedProducts.sort((a, b) => b.salesCount - a.salesCount);
        break;
      case "Price: Low to High":
        updatedProducts = updatedProducts.sort((a, b) => a.price.new - b.price.new);
        break;
      case "Price.new: High to Low":
        updatedProducts = updatedProducts.sort((a, b) => b.price.new - a.price.new);
        break;
    }

    setFilteredProducts(updatedProducts);
  }, [priceRange, selectedColors, selectedSize, sortBy, selectedCategory]);

  const applyFilters = () => {
    // For future use: if you switch to manual filtering (not useEffect)
  };

  const colors = [
    { name: "green", value: "#10B981" },
    { name: "red", value: "#EF4444" },
    { name: "yellow", value: "#F59E0B" },
    { name: "orange", value: "#F97316" },
    { name: "blue", value: "#3B82F6" },
    { name: "purple", value: "#8B5CF6" },
    { name: "pink", value: "#EC4899" },
    { name: "white", value: "#FFFFFF" },
    { name: "black", value: "#000000" },
    { name: "multicolor", value: "#808080" },
  ];

  const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];

  const categories = ["T-Shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];
  const sortOptions = ["Most Popular", "Price: Low to High", "Price: High to Low"];

  const FilterSidebar = () => (
    <div className="overflow-y-auto rounded-[20px] px-6 py-5 border border-black/10 font-secondary">
      <div className="flex items-center justify-between pb-2 mb-4">
        <span className="text-[20px] font-semibold">Filters</span>
        <span className="text-black/40">
          <LuSlidersVertical size={24} />
        </span>
      </div>

      {/* Category Filter */}
      <CloseSection
        name="Categories"
        children={
          <div className="mt-2 space-y-1">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center justify-between text-sm cursor-pointer ${
                  selectedCategory === category ? "text-black font-medium" : "text-gray-600"
                } hover:text-black`}
              >
                <span>{category}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            ))}
          </div>
        }
      />

      {/* Price Range */}
      <CloseSection
        name="Price"
        children={<RangeSlider min={0} max={1000} initialMin={50} initialMax={200} onChange={handleRangeChange} />}
      />

      {/* Color Filter */}
      <CloseSection
        name="Colors"
        children={
          <div className="flex flex-wrap gap-2 mt-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() =>
                  setSelectedColors((prev) =>
                    prev.includes(color.name) ? prev.filter((c) => c !== color.name) : [...prev, color.name],
                  )
                }
                className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color.value }}
              >
                {selectedColors.includes(color.name) && <FaCheck size={10} color="white" />}
              </button>
            ))}
          </div>
        }
      />

      {/* Size Filter */}
      <CloseSection
        name="Size"
        children={
          <div className="grid grid-cols-3 gap-2 mt-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm rounded-full border ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "bg-gray-100 text-gray-700 border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        }
      />

      {/* Dress Style (optional, not functional yet) */}
      <CloseSection
        name="Dress Style"
        children={
          <div className="mt-2 space-y-1">
            {dressStyles.map((style) => (
              <div key={style} className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900">
                <span>{style}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            ))}
          </div>
        }
      />

      {/* Sort Options */}
      <CloseSection
        name="Sort By"
        children={
          <div className="mt-2 space-y-1">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={`text-sm w-full text-left px-3 py-2 rounded-md ${
                  sortBy === option ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        }
      />

      {/* Apply Button */}
      <button
        onClick={applyFilters}
        className="w-full mt-4 flex items-center justify-center gap-2 bg-black text-white text-sm px-5 py-3 rounded-full hover:bg-black/80"
      >
        Apply Filters
      </button>
    </div>
  );

  return (
    <div className="h-screen bg-white overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <FilterSidebar />
      {/* Optionally render filteredProducts here or pass them to a parent component */}
    </div>
  );
};

export default Filter;
