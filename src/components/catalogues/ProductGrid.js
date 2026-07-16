"use client";

import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  console.log("Products:", products);
  if (!products || products.length === 0) {
    return (
      <section className="py-[27px]">
        <div className="container mx-auto px-4">
          <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50/20">
            <p className="text-lg text-gray-500">
              No products found.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[27px]">
      <div className="">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}