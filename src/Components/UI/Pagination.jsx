import React from "react";

const Pagination = ({
  totalItems = 0,
  limit = 10,
  currentPage = 1,
  onPageChange,
  className = "",
}) => {
  const totalPages = Math.ceil(totalItems / limit);

  if (totalPages <= 1) return null;

  return (
    <div
      className={`flex items-center justify-center gap-6 mt-10 ${className}`}
    >
      {/* PREVIOUS */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 rounded-full border text-sm transition
          ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-black hover:text-white"
          }`}
      >
        Prev
      </button>

      {/* CURRENT PAGE */}
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-sm font-semibold">
        {currentPage}
      </span>

      {/* NEXT */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-4 py-2 rounded-full border text-sm transition
          ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-black hover:text-white"
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
