// "use client";

// import { useRef } from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// export default function ProductCard({ product }) {
//   const swiperRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (swiperRef.current?.autoplay) {
//       swiperRef.current.autoplay.start();
//     }
//   };

//   const handleMouseLeave = () => {
//     if (swiperRef.current?.autoplay) {
//       swiperRef.current.autoplay.stop();
//       swiperRef.current.slideToLoop(0, 300);
//     }
//   };

//   return (
//     <article className="group">
//       <Link href={`/products/${product.slug}`}>
//         <div
//           className="overflow-hidden rounded-xl"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Swiper
//             modules={[Autoplay]}
//             loop
//             speed={600}
//             autoplay={{
//               delay: 1200,
//               disableOnInteraction: false,
//             }}
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;

//               // Stop autoplay initially
//               requestAnimationFrame(() => {
//                 swiper.autoplay.stop();
//               });
//             }}
//           >
//             {product.images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   src={image}
//                   alt={`${product.title} ${index + 1}`}
//                   className="h-[400px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className="py-5">
//           <h3 className="text-xl font-semibold">
//             {product.title}
//           </h3>

//           <p className="mt-3 line-clamp-2 text-sm text-white/80">
//             {product.description}
//           </p>

//           <div className="mt-5 flex items-center justify-between">
//             <span className="text-lg font-semibold">
//               {product.price}
//             </span>
//           </div>
//         </div>
//       </Link>
//     </article>
//   );
// }

// "use client";

// import { useCallback, useRef } from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// export default function ProductCard({ product }) {
//   const swiperRef = useRef(null);

//   const images = product?.images ?? [];
//   const hasMultipleImages = images.length > 1;

//   const handleMouseEnter = useCallback(() => {
//     const swiper = swiperRef.current;
//     // `swiper.destroyed` guards against calling methods on an instance that
//     // has already been torn down (e.g. a fast Link navigation while hovered)
//     if (swiper && !swiper.destroyed && hasMultipleImages) {
//       swiper.autoplay.start();
//     }
//   }, [hasMultipleImages]);

//   const handleMouseLeave = useCallback(() => {
//     const swiper = swiperRef.current;
//     if (swiper && !swiper.destroyed && hasMultipleImages) {
//       swiper.autoplay.stop();
//       swiper.slideToLoop(0, 300);
//     }
//   }, [hasMultipleImages]);

//   if (images.length === 0) return null;

//   return (
//     <article className="group">
//       <Link href={`/products/${product.slug}`}>
//         <div
//           className="overflow-hidden rounded-xl"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Swiper
//             modules={[Autoplay]}
//             loop={hasMultipleImages}
//             speed={600}
//             autoplay={{
//               delay: 1200,
//               disableOnInteraction: false,
//               enabled: false, // starts off — swiper.autoplay.start() enables it on hover, no RAF hack / first-slide flicker needed
//             }}
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//           >
//             {images.map((image, index) => (
//               <SwiperSlide key={`${product.slug}-${index}`}>
//                 <img
//                   src={image}
//                   alt={`${product.title} ${index + 1}`}
//                   loading="lazy"
//                   decoding="async"
//                   className="h-[400px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className="py-5">
//           <h3 className="text-xl font-semibold">{product.title}</h3>

//           <p className="mt-3 line-clamp-2 text-sm text-white/80">
//             {product.description}
//           </p>

//           <div className="mt-5 flex items-center justify-between">
//             <span className="text-lg font-semibold">{product.price}</span>
//           </div>
//         </div>
//       </Link>
//     </article>
//   );
// }





"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ProductCard({ product }) {
  const swiperRef = useRef(null);

  const images = product?.images ?? [];
  const hasMultipleImages = images.length > 1;

  const handleMouseEnter = useCallback(() => {
    const swiper = swiperRef.current;

    if (
      swiper &&
      !swiper.destroyed &&
      hasMultipleImages
    ) {
      swiper.autoplay.start();
    }
  }, [hasMultipleImages]);

  const handleMouseLeave = useCallback(() => {
    const swiper = swiperRef.current;

    if (
      swiper &&
      !swiper.destroyed &&
      hasMultipleImages
    ) {
      swiper.autoplay.stop();
      swiper.slideToLoop(0, 300);
    }
  }, [hasMultipleImages]);

  if (images.length === 0) {
    return null;
  }

  return (
    <article className="group">
      <Link href={`/products/${product.slug}`}>
        <div
          className="overflow-hidden rounded-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            modules={[Autoplay]}
            loop={hasMultipleImages}
            speed={600}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
              enabled: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={`${product.slug}-${index}`}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-[400px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="py-5">
          <h3 className="text-xl font-semibold">
            {product.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm text-white/80">
            {product.description}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-lg font-semibold">
              {product.price}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}