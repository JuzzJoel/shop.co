import CurrencyFormatter from "@/lib/utilities/CurrencyFormatter";
import React from "react";

function Prices({ current = Number(), old = Number(), discount = Number(), fontSize = "text-[20px]" }) {
  return (
    <div className="mt-2 font-bold flex items-center">
      <span className="text-black">
        <CurrencyFormatter value={current} fontSize={fontSize} />
      </span>
      <span className="ml-2 line-through border w-full h-full text-black/40">
        <CurrencyFormatter value={old} fontSize={fontSize} />
      </span>
      <span className="ml-2 text-[10px] bg-red-100 rounded-full px-[14px] py-[6px]  md:text-[11px] lg:text-[12px] text-red-600 text-shadow">
        -{discount}%
      </span>
    </div>
  );
}

export default Prices;
