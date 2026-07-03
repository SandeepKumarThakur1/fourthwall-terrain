import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}