"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import CartItem from "@/ui/cards/cartItem";
import { BiCartDownload } from "react-icons/bi";

export default function CartSummary() {
  const { cartItems, updateCartItemQuantity, removeCartItem } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="h-auto border border-black/10 rounded-[20px] w-full p-4 lg:gap-[16px] lg:px-6 lg:py-5">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Your cart is empty</h2>
          <p className="text-gray-600">Add some items to your cart to continue shopping.</p>
          <BiCartDownload className=" text-[3rem] md:text-[5rem]  lg:text-[20rem] mx-auto" />{" "}
        </div>
      </div>
    );
  }

  return (
    <div className="h-auto border border-black/10 rounded-[20px] w-full p-4 lg:gap-[16px] lg:px-6 lg:py-5">
      <div className="max-w-2xl mx-auto space-y-4">
        {cartItems.map((item, index) => (
          <React.Fragment key={`${item.id}-${item.color[0]}-${item.size[0]}`}>
            <CartItem item={item} updateCartItemQuantity={updateCartItemQuantity} removeCartItem={removeCartItem} />
            {index < cartItems.length - 1 && <div className="my-4 border-b border-gray-200" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
