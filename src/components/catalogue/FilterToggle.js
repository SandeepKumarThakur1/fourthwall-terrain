// "use client";

// export default function FilterToggle({
//   activeType,
//   setActiveType,
// }) {
//   const filters = ["All", "Indoor", "Outdoor"];

//   return (
//     <section className="py-10">
//       <div className="mx-auto flex max-w-7xl justify-end px-6">
//         <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
//           {filters.map((filter) => {
//             const active = activeType === filter;

//             return (
//               <button
//                 key={filter}
//                 onClick={() => setActiveType(filter)}
//                 className={`rounded-full px-6 py-3 text-sm uppercase tracking-[0.18em] transition-all duration-300 ${
//                   active
//                     ? "bg-[#C9A46B] text-black"
//                     : "text-white/70 hover:text-white"
//                 }`}
//               >
//                 {filter}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export default function FilterToggle({
  activeType,
  setActiveType,
}) {
  return (
    <div className="flex justify-end py-10">
      <div className="inline-flex items-center rounded-full border border-[#4B5A4A] bg-[#132414] p-1">
        <button
          onClick={() => setActiveType("Indoor")}
          className={`min-w-[130px] rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 ${
            activeType === "Indoor"
              ? "bg-[#D5B06A] text-black shadow-lg"
              : "text-white hover:text-[#D5B06A]"
          }`}
        >
          Indoor
        </button>

        <button
          onClick={() => setActiveType("Outdoor")}
          className={`min-w-[130px] rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 ${
            activeType === "Outdoor"
              ? "bg-[#D5B06A] text-black shadow-lg"
              : "text-white hover:text-[#D5B06A]"
          }`}
        >
          Outdoor
        </button>
      </div>
    </div>
  );
}