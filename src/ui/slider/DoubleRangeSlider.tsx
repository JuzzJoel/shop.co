import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MultiRangeSliderProps } from "@/lib/types/types"; // Adjust path as needed

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className="h-11 flex items-center justify-center">
      <div className="relative w-52">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="absolute w-full h-0 outline-none pointer-events-none z-30 appearance-none"
          style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="absolute w-full h-0 outline-none pointer-events-none z-40 appearance-none"
        />

        <div className="relative h-1 bg-gray-medium rounded-sm">
          <div ref={range} className="absolute h-1 bg-black rounded-sm z-20"></div>
        </div>

        <div className=" text-black font-secondary text-sm mt-2">
          <span className="absolute left-1">${minVal}</span>
          <span className="absolute right-0">${maxVal}</span>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: black;
          box-shadow: 0 0 1px 1px #ced4da;
          pointer-events: all;
          margin-top: 4px;
          position: relative;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: black;
          box-shadow: 0 0 1px 1px #ced4da;
          pointer-events: all;
          margin-top: 4px;
          position: relative;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MultiRangeSlider;
