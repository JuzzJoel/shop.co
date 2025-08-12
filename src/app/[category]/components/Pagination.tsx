import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-12">
      <button className="px-3 py-2 text-gray-400 hover:text-black">Previous</button>
      {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
        <button
          key={index}
          className={`w-8 h-8 rounded ${page === 1 ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"}`}
        >
          {page}
        </button>
      ))}
      <button className="px-3 py-2 text-gray-600 hover:text-black">Next</button>
    </div>
  );
};

export default Pagination;
