"use client";
import { createContext, useState, useEffect } from "react";
import cartData from "../data/cart.json";
import { CartItem } from "@/lib/types/types";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Start empty

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      try {
        const parsed = JSON.parse(cart);
        setCartItems(parsed.products ?? []);
      } catch (error) {
        console.error("Error parsing cart data:", error);
        // fallback to cartData if parsing fails
        setCartItems(cartData.products ?? []);
      }
    } else {
      // no cart in localStorage — use default data
      setCartItems(cartData.products ?? []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ products: cartItems }));
  }, [cartItems]);

  const addToCart = (product: CartItem) => {
    const match = cartItems.find(
      (item) => item.id === product.id && item.size[0] === product.size[0] && item.color[0] === product.color[0],
    );

    if (match) {
      setCartItems(
        cartItems.map((item) =>
          item.id === match.id && item.size[0] === match.size[0] && item.color[0] === match.color[0]
            ? { ...item, quantity: item.quantity + product.quantity }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const updateCartItemQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return; // Optional guard
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeCartItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
