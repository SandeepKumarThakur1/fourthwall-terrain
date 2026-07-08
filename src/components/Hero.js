"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        textRef.current,
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.6 }
      ).fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[90vh] md:min-h-[220vh] w-full items-center overflow-hidden bg-slate">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./images/bannerHero.png')",
        }}
      />

      <div
        ref={textRef}
        className="absolute top-[20%] lg:top-[12%] md:top-[15%] left-[4%] md:left-[4%] z-0 will-change-transform"
      >
        <h1
          className="text-headline-1 text-white leading-[100%]
          text-[50px] sm:text-[70px] md:text-[120px] lg:text-[150px]"
        >
          Bringing life
          <br />
          <span className="pl-[10px] md:pl-[40px]">
            into your space
          </span>
        </h1>
      </div>

      <div
        ref={ctaRef}
        className="absolute bottom-[18%] md:bottom-[28%] left-[50%] -translate-x-1/2 text-center z-3"
      >
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
        className="terrain-edge w-full h-auto z-2"
      />

      <Image
        src="/images/mountainHero.png"
        alt="Mountain hero"
        width={1500}
        height={1500}
        className="z-1 absolute bottom-0 right-0 w-full h-[155vh] fit-cover hidden  md:block"
      />
    </section>
  );
}