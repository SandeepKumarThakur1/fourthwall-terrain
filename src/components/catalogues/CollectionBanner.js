"use client";

const bannerImages = {
  "All Products": "/images/collection/all-products-banner.png",
  "River Residue": "/images/collection/river-residue-banner.png",
  "Concrete Finish": "/images/collection/concrete-finish-banner.png",
  "Natural Stone": "/images/collection/natural-stone-banner.png",
  "Decorative Panels": "/images/collection/decorative-panels-banner.png",
};

export default function CollectionBanner({
  activeCategory,
  children,
}) {
  const backgroundImage =
    bannerImages[activeCategory] ||
    bannerImages["All Products"];

  return (
    <div
      className="relative min-h-screen bg-cover bg-top bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}