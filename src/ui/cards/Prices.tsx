import CurrencyFormatter from "@/lib/utilities/CurrencyFormatter"
import React from "react"

function Prices({ current = Number(), old = Number(), discount  = Number() }) {
  return (
    <div className="mt-2 font-bold text-[20px] md:text-[22px] lg:text-[24px]">
      <span className="text-black">
        <CurrencyFormatter value={current} />
      </span>
      <span className="ml-2 line-through text-black/40">
        <CurrencyFormatter value={old} />
      </span>
      <span className="ml-2 text-[10px] bg-red-100 rounded-full px-[14px] py-[6px]  md:text-[11px] lg:text-[12px] text-red-600 text-shadow">
        -{discount}%
      </span>
    </div>
  )
}

export default Prices

