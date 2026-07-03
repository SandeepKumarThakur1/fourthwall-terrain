"use client";

const categories = [
  "All Products",
  "River Residue",
  "Canyon Crust",
  "Roselle Editions",
  "Sand Dunes",
  "Fossil Frost",
];

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl gap-10 overflow-x-auto px-6 scrollbar-hide">
        {categories.map((category) => {
          const active = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative whitespace-nowrap py-6 text-sm uppercase tracking-[0.25em] transition-all duration-300
                ${
                  active
                    ? "text-[#C9A46B]"
                    : "text-white/60 hover:text-white"
                }`}
            >
              {category}

              {/* Underline */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#C9A46B] transition-all duration-300 ${
                  active ? "w-full" : "w-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}