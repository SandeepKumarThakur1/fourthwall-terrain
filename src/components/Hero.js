"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] md:min-h-[220vh] w-full items-center overflow-hidden bg-slate">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./images/bannerHero.png')",
        }}
      />

      <div className="absolute top-[12%] md:top-[15%] left-[5%] md:left-[4%]">
        <h1
          className="text-headline-1 text-white leading-[100%]
          text-[40px] sm:text-[70px] md:text-[120px] lg:text-[150px]"
        >
          Bringing life
          <br />
          <span className="pl-[10px] md:pl-[40px]">
            into your space
          </span>
        </h1>
      </div>

      <div className="absolute bottom-[18%] md:bottom-[28%] left-[50%] -translate-x-1/2 text-center">
        <Link
          href="/"
          className="inline-block btn-cta text-sm md:text-base px-4 md:px-0"
        >
          Discover Terrains
        </Link>
      </div>

      <Image
        src="/images/terrainEdge.svg"
        alt="Jagged terrain edge"
        width={1440}
        height={120}
        className="terrain-edge w-full h-auto"
      />
    </section>
  );
}