"use client";

import { useState, useContext } from "react";
import { useParams, notFound } from "next/navigation";
import products from "@/data/randomized_products.json";
import StarRating from "@/ui/cards/StarRating";
import Prices from "@/ui/cards/Prices";
import { CartContext } from "@/context/cartContext";
import Image from "next/image";

export default function ProductDetailPage() {
  const params = useParams();
  const path = params?.section ?? [];

  if (!Array.isArray(path) || path.length !== 3) return notFound();

  const [sectionName, clothingType, id] = path;
  const product = products.products.find(
    (p) =>
      p.id.toString() === id &&
      p.section.toLowerCase() === sectionName.toLowerCase() &&
      p.clothingType.toLowerCase() === clothingType.toLowerCase(),
  );

  if (!product) return notFound();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const allImages = [...product.imageUrl];

  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext not found");
  const { addToCart } = context;

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSize || selectedColor < 0) return;

    const cartData = {
      id: product.id,
      name: product.name,
      imageUrl: allImages[selectedImage],
      quantity,
      price: {
        old: product.price.old,
        new: product.price.new,
      },
      discount: product.discount,
      color: [product.colors[selectedColor]?.name],
      size: [selectedSize],
      keywords: product.keywords,
      category: product.section,
    };

    addToCart(cartData);

    try {
      const existingCart = localStorage.getItem("cart");
      let cart = existingCart ? JSON.parse(existingCart) : { products: [] };

      const existingProductIndex = cart.products.findIndex(
        (p: any) => p.id === cartData.id && p.color[0] === cartData.color[0] && p.size[0] === cartData.size[0],
      );

      if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].quantity += cartData.quantity;
      } else {
        cart.products.push(cartData);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.error("Failed to update cart in localStorage:", err);
    }
  };

  return (
    <div className=" w-screen flex items-center justify-center bg-white">
      <section className="container w-9/10  mx-auto max-w-[77.5rem] h-[800px] md:h-[500px] lg:h-[530px]">
        <div className="flex flex-col w-full h-full gap-2 md:flex-row md:gap-8 lg:gap-10">
          {/* Product Images */}
          <div className="h-full flex flex-col md:flex-row w-full gap-3 md:w-1/2">
            {/* Main Image */}
            <div className="relative w-full h-full md:order-2 md:flex-[3] rounded-[20px] overflow-hidden shadow-sm">
              <Image
                src={allImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                width={800}
                height={800}
                priority
                quality={100}
              />

              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -{product.discount}% OFF
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex w-full md:flex-[1]  md:order-1 gap-2 md:flex-col ">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 h-26 lg:w-35 flex-1 rounded-[20px] border overflow-hidden transition-all ${
                    selectedImage === i ? "border-black/10" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                    height={400}
                    width={400}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className=" w-full md:w-1/2">
            <div className=" ">
              <h1 className="text-3xl lg:text-[40px] font-black font-primary uppercase mb-3 text-black">{product.name}</h1>
              <StarRating rating={product.rating} size={25} variant="ProductDetail" />
            </div>

            <div className="">
              <Prices current={product.price.new} old={product.price.old} discount={product.discount} fontSize="text-[32px]"/>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <form onSubmit={handleAddToCart} className="space-y-6">
              {/* Color */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Color: <span className="font-normal text-gray-600">{product.colors[selectedColor]?.name}</span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === i ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-500"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Size: <span className="font-normal text-gray-600">{selectedSize || "Select a size"}</span>
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 hover:border-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!selectedSize}
                  >
                    Add to Cart - ${(product.price.new * quantity).toFixed(2)}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
