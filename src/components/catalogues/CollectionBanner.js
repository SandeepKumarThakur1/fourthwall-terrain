// "use client";

// const bannerImages = {
//   "All Products": "/images/collection/all-products-banner.png",
//   "River Residue": "/images/collection/river-residue-banner.png",
//   "Concrete Finish": "/images/collection/concrete-finish-banner.png",
//   "Natural Stone": "/images/collection/natural-stone-banner.png",
//   "Decorative Panels": "/images/collection/decorative-panels-banner.png",
// };

// export default function CollectionBanner({
//   activeCategory,
//   children,
// }) {
//   const backgroundImage =
//     bannerImages[activeCategory] ||
//     bannerImages["All Products"];

//   return (
//     <div
//       className="relative min-h-screen bg-cover bg-top bg-no-repeat transition-all duration-500"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );
// }



"use client";
import Image from "next/image";

const bannerImages = {
  "All Products": "/images/collection/all-products-banner.jpeg",
  "River Residue": "/images/collection/river-residue-banner.jpeg",
  "Canyon Crust": "/images/collection/concrete-finish-banner.jpeg",
  "Roselle Editions": "/images/collection/all-products-banner.jpeg",
  "Sand Dunes": "/images/collection/natural-stone-banner.jpeg",
  "Fossil Frost": "/images/collection/decorative-panels-banner.jpeg",
};

// const bannerImages = {
//   "All Products": "/images/collection/all-products-banner.png",
//   "River Residue": "/images/collection/river-residue-banner.png",
//   "Canyon Crust": "/images/collection/concrete-finish-banner.png",
//   "Canyon Crust": "/images/collection/natural-stone-banner.png",
//   "Fossil Frost": "/images/collection/decorative-panels-banner.png",
// };

// const bannerOverlays = {
//   "All Products": "bg-[#04140e]/90",
//   "River Residue": "bg-[#10243D]/90",
//   "Canyon Crust": "bg-[#230E11]/90",
//   "Canyon Crust": "bg-[#2A1E14]/90",
//   "Fossil Frost": "bg-[#040103]/80",
// };


const bannerOverlays = {
  "All Products": "bg-gradient-to-b from-[#000000]/30 via-[#000000]/75 to-[#000000]/90",
  "River Residue": "bg-gradient-to-b from-[#000000]/30 via-[#000000]/75 to-[#000000]/90",
  "Canyon Crust": "bg-gradient-to-b from-[#000000]/30 via-[#000000]/75 to-[#000000]/90",
  "Roselle Editions": "bg-gradient-to-b from-[#000000]/30 via-[#000000]/75 to-[#000000]/90",
  "Sand Dunes": "bg-gradient-to-b from-[#000000]/30 via-[#000000]/75 to-[#000000]/90",
  "Fossil Frost": "bg-gradient-to-b from-[#000000]/30 via-[#000000]/75 to-[#000000]/90",
};


export default function CollectionBanner({
  activeCategory,
  children,
}) {
  const backgroundImage =
    bannerImages[activeCategory] ||
    bannerImages["All Products"];

  const overlay =
    bannerOverlays[activeCategory] ||
    bannerOverlays["All Products"];

  return (
    <div
      className="relative min-h-screen bg-cover bg-top bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Category Based Overlay */}
      <div
        className={`absolute inset-0 ${overlay} transition-all duration-500`}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* ================= WATERMARK ================= */}

      <div
        aria-hidden="true"
        className="relative z-[99] mx-auto max-w-[90%]"
      >

        <Image
          src="/images/ghostWatermark2.svg"
          alt="Ghost Watermark"
          width={1400}
          height={120}
          className="w-full h-20vw brightness-0 invert transition-all duration-700"
        />

      </div>
    </div>
  );
}
