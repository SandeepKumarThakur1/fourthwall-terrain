"use client";

import Image from "next/image";

export default function TestimonialSection({ testimonials }) {
  return (
    <section className="testimonialWrapper relative min-h-[100vh] md:min-h-[160vh] overflow-hidden">
      <Image
        src="/images/testimonialBg.png"
        alt="testimonial Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        {/* TEXT */}
        <div className="text-center">
          <h3
            className="text-white font-subheading tracking-[-2%]
            text-[18px] sm:text-[26px] md:text-[34px]"
          >
            Exclusive • Timeless • Authentic
          </h3>

          <h2
            className="mt-2 md:mt-3 text-white font-subheading tracking-[-2%]
            text-[24px] sm:text-[38px] md:text-[54px]"
          >
            1.2L+ living spaces elevated
          </h2>
        </div>

        {/* MARQUEE */}
        <div className="relative mt-10 md:mt-16 w-full overflow-hidden">
          <div className="flex w-max gap-4 md:gap-8 animate-marquee">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="relative shrink-0 overflow-hidden rounded-[10px]
                w-[220px] sm:w-[280px] md:w-[340px]
                h-[360px] sm:h-[450px] md:h-[540px]"
              >
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 right-3 md:right-5 z-20 flex items-center gap-3">
                  <div className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] overflow-hidden rounded-full bg-amber-100">
                    <Image
                      src="/images/userImage.png"
                      alt="User"
                      width={45}
                      height={45}
                    />
                  </div>

                  <div>
                    <h4
                      className="text-white font-[600] leading-[150%]
                      text-[14px] md:text-[18px]"
                    >
                      {item.name}
                    </h4>

                    <p
                      className="text-white/60 leading-[150%]
                      text-[12px] md:text-[18px]"
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}