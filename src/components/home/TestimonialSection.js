"use client";

import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection({ testimonials }) {
  return (
    <section className="testimonialWrapper relative min-h-[100vh] md:min-h-[160vh] overflow-hidden">
      <Image
        src="/images/testimonialBg.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h3 className="text-white text-[18px] md:text-[34px] font-subheading">
            Exclusive • Timeless • Authentic
          </h3>

          <h2 className="mt-3 text-white text-[24px] md:text-[54px] font-subheading">
            1.2L+ living spaces elevated
          </h2>
        </div>

        <div className="relative mt-16 w-full overflow-hidden">
          <div className="flex w-max gap-8 animate-marquee">
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard
                key={`${item.id}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}