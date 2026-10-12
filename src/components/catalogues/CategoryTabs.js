// "use client";

// const categories = [
//     "All Products",
//     "River Residue",
//     "Canyon Crust",
//     "Roselle Editions",
//     "Sand Dunes",
//     "Fossil Frost",
// ];

// export default function CategoryTabs({
//     activeCategory,
//     setActiveCategory,
// }) {
//     return (
//         <section className="mx-auto max-w-[70%] pt-10">
//             <div className="">
//                 <div className="flex items-center justify-between gap-[25px] overflow-x-auto py-5 scrollbar-hide">
//                     {categories.map((category) => {
//                         const isActive = activeCategory === category;

//                         return (
//                             <button
//                                 key={category}
//                                 onClick={() => setActiveCategory(category)}
//                                 className={`font-subheading transition-all duration-300 cursor-pointer font-[400] text-[24px] tracking-[-4%] leading-[150%] ${isActive
//                                     ? "text-white"
//                                     : "text-white/50"
//                                     }`}
//                             >
//                                 {category}
//                             </button>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }






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
    <section className="mx-auto w-full max-w-[70%] pt-10 max-md:max-w-[92%]">
      <div className="w-full">
        <div className="flex items-center justify-between gap-[25px] overflow-x-auto py-5 scrollbar-hide whitespace-nowrap max-md:justify-start">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 whitespace-nowrap font-subheading transition-all duration-300 cursor-pointer font-[400] text-[24px] tracking-[-4%] leading-[150%] ${
                  isActive ? "text-white" : "text-white/50"
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