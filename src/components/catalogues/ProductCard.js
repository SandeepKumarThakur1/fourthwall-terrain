"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ProductCard({ product }) {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
      swiperRef.current.slideToLoop(0, 300);
    }
  };

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
            loop
            speed={600}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;

              // Stop autoplay initially
              requestAnimationFrame(() => {
                swiper.autoplay.stop();
              });
            }}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
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