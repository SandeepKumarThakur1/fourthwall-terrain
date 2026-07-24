"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CraftedInStone() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const mapWrapRef = useRef(null);
  const revealRef = useRef(null); // circular reveal that brings the next section in from the center

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mm;

    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const text = textRef.current;
      const mapWrap = mapWrapRef.current;
      const reveal = revealRef.current;
      if (!section || !text || !mapWrap || !reveal) return;

      mm = ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          gsap.set(reveal, { clipPath: "circle(0% at 50% 50%)", opacity: 1 });
          gsap.set(mapWrap, { scale: 1, y: "0%" });

          const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

          tl.to(text, { opacity: 0, y: -40, duration: 0.25, ease: "power1.out" }, 0);

          tl.to(
            mapWrap,
            { scale: 4, y: "-10%", duration: 0.55, ease: "power3.inOut" },
            0
          );

          // Reveal finishes exactly at t = 1 (the very end of the
          // timeline), so it lines up exactly with the end of the pinned
          // scroll distance below — no extra scroll needed after it
          // visually completes.
          tl.to(
            reveal,
            { clipPath: "circle(150% at 50% 50%)", duration: 0.45, ease: "power3.inOut" },
            0.55
          );

          const st = ScrollTrigger.create({
            animation: tl,
            trigger: mapWrap,
            start: "top top",
            end: "+=100%", // shortened from 120% — no dead scroll after the reveal finishes
            pin: section,
            pinSpacing: true,
            // Low scrub = the animation (and the pin release) tracks the
            // scrollbar almost 1:1, instead of trailing behind it. This is
            // what makes "next section" appear together WITH the green,
            // not after it.
            scrub: 0.3,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

          return () => st.kill();
        },
        "(max-width: 767px)": function () {
          gsap.set([text, mapWrap, section], { clearProps: "all" });
          gsap.set(reveal, { opacity: 0, clipPath: "circle(0% at 50% 50%)" });
          return () => { };
        },
      });
    };

    initGSAP();

    return () => {
      if (mm) mm.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-header="light"
      className="relative text-center sectionBg mt-[-3%] md:mt-[-5%] px-4 md:px-0 z-4 overflow-hidden"
    >
      <div ref={textRef}>
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

      <div ref={mapWrapRef} className="mapwrapperImage mt-[-8%] md:mt-[-15%] text-center mb-[-30%] origin-center will-change-transform">
        <Image
          src="/images/map.png"
          alt="map"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
      </div>

      <div
        ref={revealRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 bg-[#062400] hidden md:block"
      />
    </section>
  );
}