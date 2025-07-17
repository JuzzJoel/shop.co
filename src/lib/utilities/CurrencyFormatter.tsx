
import React from 'react';

interface CurrencyFormatterProps {
  value: number;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({ value }) => {
  return <>${Math.floor(value / 100)}</>;
};

export default CurrencyFormatter;