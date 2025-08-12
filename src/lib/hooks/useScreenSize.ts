"use client";
import { useEffect } from "react";

export function useScreenSize() {
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Determine breakpoint label
      let size = "xs";
      if (width >= 1536) size = "2xl";
      else if (width >= 1280) size = "xl";
      else if (width >= 1024) size = "lg";
      else if (width >= 768) size = "md";
      else if (width >= 640) size = "sm";

      // Set both values
      document.body.setAttribute("data-screen-size", `${size} | ${width}px × ${height}px`);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
}
