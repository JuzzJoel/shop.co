"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedNumber({
  number,
  style,
  className,
}: {
  number: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const cleanNumber = parseInt(number.replace(/\D/g, ""), 10);
    const duration = 2000;
    const stepTime = cleanNumber > 0 ? Math.floor(duration / cleanNumber) : duration;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === cleanNumber) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  const hasPlus = number.includes("+");

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={style}
      className={`inline-block ${className ?? ""}`}
    >
      {count.toLocaleString()}
      {hasPlus ? "+" : ""}
    </motion.span>
  );
}

export default AnimatedNumber;
