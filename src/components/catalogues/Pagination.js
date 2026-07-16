"use client";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const pages = [...Array(totalPages)].map((_, index) => index + 1);

  return (
    <div className="mt-16 flex items-center justify-center gap-3">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
          currentPage === 1
            ? "cursor-not-allowed border-gray-300 text-gray-300"
            : "border-black hover:bg-black hover:text-white"
        }`}
      >
        ←
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
            currentPage === page
              ? "border-black bg-black text-white"
              : "border-gray-300 text-gray-700 hover:border-black hover:bg-black hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
          currentPage === totalPages
            ? "cursor-not-allowed border-gray-300 text-gray-300"
            : "border-black hover:bg-black hover:text-white"
        }`}
      >
        →
      </button>
    </div>
  );
}