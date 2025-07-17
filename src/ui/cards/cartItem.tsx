import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from 'react';
import { CartContext } from '@/context/cartContext';
import CurrencyFormatter from "@/lib/utilities/CurrencyFormatter"
import Image from "next/image";
import type { CartItemProps } from '@/lib/types/types'; // Adjust path as needed

function CartItem({ item }: CartItemProps) {
  const { updateCartItemQuantity, removeCartItem } = useContext(CartContext)!;

  return (
    <div className="flex w-full h-25 sm:h-27 md:h-29 lg:h-31 items-center gap-[14px] justify-between rounded-2xl ">
      <div className="flex items-center h-full gap-4">
        <Image
          src={item?.imageUrl}
          alt={item?.title}
          className="w-[32/100] h-full aspect-square bg-gray-200 bg-blend-multiply rounded-[9px] object-cover"
        />
      </div>
      <div className="flex justify-between h-full w-7/10">
        <div>
          <div className="flex flex-col items-start justify-between font-bold text-black capitalize font-secondary">
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px]">{item?.name}</h3>
            <p className="text-[12px] md:text-[18px] lg:text-[14px]">
              Size: <span className="font-[400]">{item?.size}</span>
            </p>
            <p className="text-[12px] md:text-[13px] lg:text-[14px]">
              Color:<span className="font-light">{item?.color}</span>
            </p>
            <p className="text-[20px]md:text-[22px] lg:text-[24px] mt-3">
              <CurrencyFormatter value={item?.price.new} />
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between gap-4">
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => removeCartItem(item.id)}
          >
            <Trash2 size={20} />
          </button>

                <div className="flex items-center bg-gray-medium rounded-full px-[6px] py-1 w-26 h-8 gap-4">
        <button
          className="text-2xl font-black text-black cursor-pointer hover:font-black"
          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity === 1}
        >
          <Minus size={18} />
        </button>
        <span className="mx-2 font-medium font-secondary text-[14px]">
          {item.quantity}
        </span>
        <button
          className="text-2xl text-black cursor-pointer hover:font-black"
          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
        >
          <Plus size={18} />
        </button>
      </div>

                  </div>

      </div>
    </div>

  );
}

export default CartItem;