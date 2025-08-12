import React from "react";
import type { CurrencyFormatterProps } from "../types/types";


const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({ value , fontSize = "text-[20px]" }) => {
  return (
    <>
      <span className={fontSize}>${Math.floor(value / 100)}</span>
    </>
  );
};

export default CurrencyFormatter;
