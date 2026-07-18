"use client";

const heroVideos = {
  "All Products": "/videos/all-products.mp4",
  "River Residue": "/videos/all-products.mp4",
  "Concrete Finish": "/videos/all-products.mp4",
  "Natural Stone": "/videos/all-products.mp4",
  "Decorative Panels": "/videos/all-products.mp4",
};

// const heroVideos = {
//   "All Products": "/videos/all-products.mp4",
//   "River Residue": "/videos/river-residue.mp4",
//   "Canyon Crust": "/videos/canyon-crust.mp4",
//   "Roselle Editions": "/videos/roselle-editions.mp4",
//   "Sand Dunes": "/videos/sand-dunes.mp4",
//   "Fossil Frost": "/videos/fossil-frost.mp4",
// };


export default function Hero({ category }) {
  const videoSrc =
  heroVideos[category] || heroVideos["All Products"];

  return (
    <section className="relative h-[54vh] min-h-[500px] overflow-hidden">
      {/* Background Video */}
      <video
        key={category}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideos[category]} type="video/mp4" />
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/35" /> */}

      {/* Optional Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}

      {/* Content */}
      {/* <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70">
            Catalogue
          </p>

          <h1 className="text-5xl font-light text-white md:text-7xl">
            {category}
          </h1>
        </div>
      </div> */}
    </section>
  );
}