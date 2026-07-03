import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-[#132414] transition-all duration-500 hover:border-[#D5B06A]">
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-light text-white">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-7 text-white/60">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-medium text-[#D5B06A]">
            ₹ {product.price.toLocaleString()}
          </span>

          <button className="rounded-full border border-[#D5B06A] px-5 py-2 text-sm text-[#D5B06A] transition hover:bg-[#D5B06A] hover:text-black">
            View
          </button>
        </div>
      </div>
    </div>
  );
}