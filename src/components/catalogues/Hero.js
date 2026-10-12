"use client";

// const heroVideos = {
//   "All Products": "/videos/all-products.mp4",
//   "River Residue": "/videos/all-products.mp4",
//   "Concrete Finish": "/videos/all-products.mp4",
//   "Natural Stone": "/videos/all-products.mp4",
//   "Decorative Panels": "/videos/all-products.mp4",
// };

const heroVideos = {
  "All Products": "/videos/all-products.mp4",
  "River Residue": "/videos/all-products.mp4",
  "Canyon Crust": "/videos/all-products.mp4",
  "Roselle Editions": "/videos/all-products.mp4",
  "Sand Dunes": "/videos/all-products.mp4",
  "Fossil Frost": "/videos/all-products.mp4",
};

// export default function Hero({ category }) {
//   const videoSrc =
//     heroVideos[category] || heroVideos["All Products"];

//   return (
//     <section className="relative h-[54vh] min-h-[500px] overflow-hidden">
//       {/* Background Video */}
//       <video
//         key={category}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//         className="absolute inset-0 h-full w-full object-cover"
//       >
//         <source src={videoSrc} type="video/mp4" />
//       </video>

//       {/* Top Black Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent" />

//       {/* Content */}
//       {/* <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16">
//         <div>
//           <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70">
//             Catalogue
//           </p>

//           <h1 className="text-5xl font-light text-white md:text-7xl">
//             {category}
//           </h1>
//         </div>
//       </div> */}
//     </section>
//   );
// }


export default function Hero({ category }) {
  const videoSrc = heroVideos[category] || heroVideos["All Products"];

  return (
    <section className="relative h-[55vh] min-h-[380px] max-h-[750px] w-full overflow-hidden sm:h-[60vh] sm:min-h-[450px] md:h-[65vh] md:min-h-[500px] lg:h-[70vh]">
      {/* Background Video */}
      <video
        key={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Top Black Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent"
      />

      {/* Content — kept unchanged / commented out */}
      {/* <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-10 sm:px-6 sm:pb-12 md:pb-16">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70">
            Catalogue
          </p>

          <h1 className="text-4xl font-light text-white sm:text-5xl md:text-7xl">
            {category}
          </h1>
        </div>
      </div> */}
    </section>
  );
}