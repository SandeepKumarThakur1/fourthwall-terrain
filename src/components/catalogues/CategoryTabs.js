"use client";

// const categories = [
//   "All Products",
//   "Stone Collection",
//   "River Collection",
//   "Granite Collection",
//   "Natural Collection",
// ];
const categories = [
  "All Products",
  "River Residue",
  "Concrete Finish",
  "Natural Stone",
  "Decorative Panels",
];

export default function CategoryTabs({
    activeCategory,
    setActiveCategory,
}) {
    return (
        <section className="mx-auto max-w-[70%] pt-10">
            <div className="">
                <div className="flex items-center justify-between gap-[40px] overflow-x-auto py-5 scrollbar-hide">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`font-subheading transition-all duration-300 cursor-pointer font-[400] text-[24px] tracking-[-4%] leading-[150%] ${isActive
                                    ? "text-white"
                                    : "text-white/60"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}