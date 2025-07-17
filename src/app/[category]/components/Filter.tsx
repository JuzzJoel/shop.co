'use client';
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Star, Filter } from 'lucide-react';
import products from '@/data/randomized_products.json';


const ShopCoStore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('@/data/randomized_products.json')
        .then(response => response.json())
        .then(data => {
          const formattedProducts = data.products.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price.new,
            originalPrice: product.price.old,
            rating: product.rating,
            reviews: product.salesCount,
            image: product.imageUrl,
            colors: product.colors.map(color => color.name),
          }));
          setProducts(formattedProducts);
        })
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    
  const [isMobile, setIsMobile] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('Large');
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 50, max: 200 });
  const [sortBy, setSortBy] = useState('Most Popular');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isDressStyleOpen, setIsDressStyleOpen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);



  const colors = [
    { name: 'green', value: '#10B981' },
    { name: 'red', value: '#EF4444' },
    { name: 'yellow', value: '#F59E0B' },
    { name: 'orange', value: '#F97316' },
    { name: 'blue', value: '#3B82F6' },
    { name: 'purple', value: '#8B5CF6' },
    { name: 'pink', value: '#EC4899' },
    { name: 'white', value: '#FFFFFF' },
    { name: 'black', value: '#000000' },
    { name: 'multicolor', value: '#808080' }
  ];

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
  const categories = ['T-Shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
  const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

  useEffect(() => {
    let updatedProducts = [...products];

    // Filter by price range
    updatedProducts = updatedProducts.filter((product) => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Filter by selected colors
    if (selectedColors.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedColors.some(color => product.colors.includes(color))
      );
    }

    // Filter by selected size
    if (selectedSize) {
      updatedProducts = updatedProducts.filter((product) => product.size === selectedSize);
    }

    // Sort products
    switch (sortBy) {
      case 'Price: Low to High':
        updatedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        updatedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'Newest':
        updatedProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        // Most Popular (no sorting, keep original order)
        break;
    }

    setFilteredProducts(updatedProducts);
  }, [priceRange, selectedColors, selectedSize, sortBy]);

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}/5</span>
      </div>
    );
  };

  const FilterSidebar = ({ isOpen, onClose }) => (
    <div className={`${isMobile ? 'fixed inset-0 z-50 bg-white p-4' : 'w-64'} ${isMobile && !isOpen ? 'hidden' : ''} overflow-y-auto h-screen`}>
      {isMobile && (
        <div className="flex items-center justify-between pb-2 mb-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <X size={24} onClick={onClose} className="cursor-pointer" />
        </div>
      )}
      
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3
            className="flex items-center justify-between text-sm font-medium text-gray-700 cursor-pointer"
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            Categories
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`}
            />
          </h3>
          {isCategoriesOpen && (
            <div className="mt-2 space-y-1">
              {categories.map((category) => (
                <div key={category} className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900">
                  <span>{category}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div>
          <h3
            className="flex items-center justify-between text-sm font-medium text-gray-700 cursor-pointer"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            Price
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform ${isPriceOpen ? 'rotate-180' : ''}`}
            />
          </h3>
          {isPriceOpen && (
            <div className="mt-2">
              <div className="relative">
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
                />
{/* <PriceSlider
  priceRange={priceRange}
  setPriceRange={setPriceRange}
  min={50}
  max={200}
/> */}
                <div className="flex justify-between mt-4 text-xs text-gray-500">
                  <span>${priceRange.min}</span>
                  <span>${priceRange.max}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Colors */}
        <div>
          <h3
            className="flex items-center justify-between text-sm font-medium text-gray-700 cursor-pointer"
            onClick={() => setIsColorsOpen(!isColorsOpen)}
          >
            Colors
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform ${isColorsOpen ? 'rotate-180' : ''}`}
            />
          </h3>
          {isColorsOpen && (
            <div className="flex flex-wrap gap-2 mt-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setSelectedColors((prev) =>
                      prev.includes(color.name)
                        ? prev.filter((c) => c !== color.name)
                        : [...prev, color.name]
                    );
                  }}
                  className="flex items-center justify-center w-6 h-6 border rounded-full"
                  style={{ backgroundColor: color.value, borderColor: selectedColors.includes(color.name) ? '#000' : '#e5e7eb' }}
                >
                  {selectedColors.includes(color.name) && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Size */}
        <div>
          <h3
            className="flex items-center justify-between text-sm font-medium text-gray-700 cursor-pointer"
            onClick={() => setIsSizeOpen(!isSizeOpen)}
          >
            Size
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform ${isSizeOpen ? 'rotate-180' : ''}`}
            />
          </h3>
          {isSizeOpen && (
            <div className="grid grid-cols-3 gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 text-sm rounded-full border ${
                    selectedSize === size ? 'bg-black text-white border-black' : 'bg-gray-100 text-gray-700 border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dress Style */}
        <div>
          <h3
            className="flex items-center justify-between text-sm font-medium text-gray-700 cursor-pointer"
            onClick={() => setIsDressStyleOpen(!isDressStyleOpen)}
          >
            Dress Style
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform ${isDressStyleOpen ? 'rotate-180' : ''}`}
            />
          </h3>
          {isDressStyleOpen && (
            <div className="mt-2 space-y-1">
              {dressStyles.map((style) => (
                <div key={style} className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900">
                  <span>{style}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="w-full py-2 mt-4 text-sm text-white bg-black rounded-full"
          onClick={() => setIsFilterOpen(false)}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          {!isMobile && <FilterSidebar />}
          
          {/* Mobile Overlay */}
          {isMobile && isFilterOpen && (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)}>
              <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">Casual</h1>
                {isMobile && (
                  <Filter size={20} className="cursor-pointer" onClick={() => setIsFilterOpen(true)} />
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Showing 1-10 of 100 Products</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm bg-transparent border-none cursor-pointer focus:outline-none"
                  >
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-3'} gap-6 mb-12`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="cursor-pointer group">
                  <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.originalPrice && (
                      <div className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full top-3 right-3">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  <h3 className="mb-2 text-sm font-medium transition-colors group-hover:text-gray-600">
                    {product.name}
                  </h3>
                  <div className="mb-2">
                    {renderStars(product.rating)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mb-12">
              <button className="px-3 py-2 text-gray-400 hover:text-black">Previous</button>
              {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded ${
                    page === 1 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-2 text-gray-600 hover:text-black">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCoStore;