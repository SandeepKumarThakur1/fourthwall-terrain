"use client";

import Image from "next/image";

export default function CraftedInStone() {
  return (
    <section className="text-center sectionBg mt-[-3%] md:mt-[-5%] z-1 px-4 md:px-0">
      <div>
        <h3
          className="text-[#634020] tracking-[-5%] mb-0 leading-[100%] font-subheading
          text-[34px] sm:text-[60px] md:text-[90px]"
        >
          Crafted in stone
        </h3>

        <h3
          className="text-[#697A07] tracking-[-5%] mb-0 leading-[100%] font-subheading
          text-[30px] sm:text-[55px] md:text-[80px]"
        >
          from the lands of South India
        </h3>

        <p className="py-6 md:py-10 text-[14px] md:text-[16px] leading-[150%] tracking-[-4%] max-w-[650px] mx-auto text-center">
          Born from the rugged terrains of Andra Pradesh, each piece carries
          the raw beauty of the land it comes from. The textures, curves, and
          imperfections are inspired by natural rock formations shaped over
          time by wind, water, and erosion.
          <br />
          The process is not about hiding the material’s natural character, but
          elevating it, preserving its raw authenticity while refining it into
          something timeless, minimal, and luxurious.
        </p>
      </div>

      <div className="mt-[-8%] md:mt-[-15%] text-center mb-[-30%]">
        <Image
          src="/images/map.png"
          alt="map"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}