"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Stone procurement",
    description:
      "Carefully sourced from riverbeds, natural terrains, and stone-rich regions, each stone is selected for its texture, shape, and unique character.",
    images: [
      "https://images.unsplash.com/photo-1518623001779-7374ec5e0d22?q=80&w=500",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=500",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=500",
    ],
    rotations: ["-6deg", "2deg", "-2deg"],
    offsets: ["16px", "-8px", "24px"],
    layout: "up",
  },
  {
    number: "02",
    title: "Selection and sorting",
    description:
      "Every stone is individually inspected and curated based on its form, durability, and aesthetic potential. Only a select few make it into the collection.",
    images: [
      "https://images.unsplash.com/photo-1607968565043-36af90dde238?q=80&w=500",
      "https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=500",
    ],
    rotations: ["3deg", "-4deg", "1deg"],
    offsets: ["-8px", "20px", "-16px"],
    layout: "down",
  },
  {
    number: "03",
    title: "Crafting and refinement",
    description:
      "The stone is shaped and refined while preserving its natural identity, ensuring every piece retains the raw beauty that makes it unique.",
    images: [
      "https://images.unsplash.com/photo-1567361672830-f7aa808fb5d3?q=80&w=500",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=500",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=500",
    ],
    rotations: ["-3deg", "5deg", "-1deg"],
    offsets: ["8px", "-20px", "12px"],
    layout: "up",
  },
  {
    number: "04",
    title: "Finishing and detailing",
    description:
      "Surfaces are finished, textures are enhanced, and every detail is perfected to create a balance between nature and contemporary design.",
    images: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=500",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=500",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=500",
    ],
    rotations: ["4deg", "-2deg", "6deg"],
    offsets: ["-12px", "24px", "-4px"],
    layout: "down",
  },
  {
    number: "05",
    title: "Curated plant pairing",
    description:
      "Each piece is thoughtfully paired with carefully chosen greenery, balancing raw mineral texture with the soft living quality of plants.",
    images: [
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=500",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=500",
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=500",
    ],
    rotations: ["-5deg", "3deg", "-4deg"],
    offsets: ["20px", "-12px", "4px"],
    layout: "up",
  },
  {
    number: "06",
    title: "Bringing life home",
    description:
      "What begins as raw stone from nature becomes a living sculpture in your space — adding warmth, texture, character, and calm to everyday living.",
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=500",
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=500",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=500",
    ],
    rotations: ["2deg", "-6deg", "4deg"],
    offsets: ["-16px", "8px", "-24px"],
    layout: "down",
  },
];

// Your actual Vector_10.svg path — single horizontal line across all steps
const VECTOR_PATH =
  "M3.42139 257.132C39.9214 228.132 132.621 178.832 211.421 213.632C309.921 257.132 213.421 444.132 178.421 491.132C143.421 538.132 -69.5786 981.632 647.921 714.632C1365.42 447.632 1241.92 510.132 1413.92 224.132C1585.92 -61.8676 1792.42 -58.3676 2046.92 182.632C2301.42 423.632 2545.92 758.133 3098.92 676.633C3651.92 595.133 3681.42 411.633 3918.92 482.633C4154.55 553.074 4176.59 722.441 4659.35 391.595C4666.78 386.507 4673.18 379.587 4677.8 371.863C4742.14 264.327 4891.44 82.3978 5027.92 132.133C5204.92 196.633 5242.92 361.633 5424.92 482.633C5606.92 603.633 5883.92 678.633 6235.92 694.133";

export default function OurProcess() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const svgWrapRef = useRef(null);
  const linePathRef = useRef(null);
  const stepRefs = useRef([]);
  const [svgWidth, setSvgWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mm;

    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      await new Promise((r) => requestAnimationFrame(r));
      await new Promise((r) => requestAnimationFrame(r));

      const track = trackRef.current;
      const section = sectionRef.current;
      const linePath = linePathRef.current;
      if (!track || !section) return;

      // keep the decorative svg exactly as wide as the track content
      const syncSvgWidth = () => setSvgWidth(track.scrollWidth);
      syncSvgWidth();
      window.addEventListener("resize", syncSvgWidth);

      if (linePath) {
        const lineLen = linePath.getTotalLength();
        gsap.set(linePath, { strokeDasharray: lineLen, strokeDashoffset: lineLen });
      }

      // Entry animation for Step 01 photos + text (runs on all breakpoints)
      const firstStep = stepRefs.current[0];
      if (firstStep) {
        const photos = firstStep.querySelectorAll(".proc-photo");
        const meta = firstStep.querySelector(".proc-meta");
        gsap.set(photos, { opacity: 0, y: 60 });
        gsap.set(meta, { opacity: 0, y: 30 });

        ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(photos, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" });
            gsap.to(meta, { opacity: 1, y: 0, duration: 0.9, delay: 0.3, ease: "power2.out" });
          },
        });
      }

      // Fade-in for steps 2-6 when NOT using pinned horizontal scroll (mobile/tablet)
      const restFadeIns = () => {
        stepRefs.current.slice(1).forEach((el) => {
          if (!el) return;
          const photos = el.querySelectorAll(".proc-photo");
          const meta = el.querySelector(".proc-meta");
          gsap.set(photos, { opacity: 0, y: 40 });
          gsap.set(meta, { opacity: 0, y: 20 });
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(photos, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" });
              gsap.to(meta, { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: "power2.out" });
            },
          });
        });
      };

      // matchMedia: desktop/tablet-landscape gets pinned horizontal scroll,
      // small screens get a normal vertical stack with fade-ins instead.
      mm = ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          const totalScrollWidth = track.scrollWidth - window.innerWidth;
          const tl = gsap.timeline({ defaults: { ease: "none" } });

          tl.to(track, { x: -totalScrollWidth }, 0);
          if (linePath) tl.to(linePath, { strokeDashoffset: 0 }, 0);

          const pinST = ScrollTrigger.create({
            animation: tl,
            trigger: section,
            start: "top top",
            end: () => `+=${totalScrollWidth}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

          return () => pinST.kill();
        },
        "(max-width: 767px)": function () {
          // draw the line progressively as the user scrolls the whole (tall) section instead
          let lineST;
          if (linePath) {
            lineST = ScrollTrigger.create({
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              onUpdate: (self) => {
                gsap.set(linePath, {
                  strokeDashoffset: linePath.getTotalLength() * (1 - self.progress),
                });
              },
            });
          }
          restFadeIns();
          return () => lineST && lineST.kill();
        },
      });

      return () => {
        window.removeEventListener("resize", syncSvgWidth);
      };
    };

    let cleanup;
    initGSAP().then((c) => (cleanup = c));

    return () => {
      if (cleanup) cleanup();
      if (mm) mm.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#062400] h-auto md:h-[120vh] z-10"
    >
      <div className="ourprocessWrapper w-full h-full">
        <div className="py-6 sm:py-8 md:py-10 w-[92%] sm:w-[90%] mx-auto h-full flex flex-col">
          {/* Eyebrow */}
          <p className="z-20 text-[12px] sm:text-[13px] md:text-[14px] font-[600] uppercase tracking-[12%] leading-[100%] text-white pt-2 md:pt-[15px]">
            Our Process
          </p>

          {/* VECTOR_10 SVG LINE — only shown on md+ where the horizontal scroll happens */}
          <svg
            ref={svgWrapRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block"
            style={{ width: svgWidth ? `${svgWidth}px` : "100%", height: "60%" }}
            viewBox="0 0 6237 806"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={VECTOR_PATH}
              stroke="#ffffff"
              strokeOpacity="0.12"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={linePathRef}
              d={VECTOR_PATH}
              stroke="#7ED321"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.9"
            />
          </svg>

          {/* Track — horizontal flex + pinned scroll on md+, vertical stack on mobile */}
          <div
            ref={trackRef}
            className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center will-change-transform flex-1 md:h-full gap-16 md:gap-0 w-full md:w-max"
          >
            {STEPS.map((step, i) => {
              const isDown = step.layout === "down";
              return (
                <article
                  key={step.number}
                  ref={(el) => (stepRefs.current[i] = el)}
                  className={`relative flex flex-col w-full md:h-full md:w-[70vw] lg:w-[65vw] xl:w-[55vw] shrink-0 px-1 sm:px-4 md:px-16 lg:px-20 ${
                    isDown
                      ? "md:justify-end md:pb-[5vh]"
                      : "md:justify-start md:pt-[5vh]"
                  }`}
                >
                  {/* Polaroid cluster */}
                  <div
                    className={`proc-photo-cluster relative h-[170px] xs:h-[200px] sm:h-[220px] md:h-[250px] w-full max-w-[280px] sm:max-w-[420px] md:max-w-[560px] mx-auto md:mx-0 ${
                      isDown ? "order-2 mt-6 md:mt-10" : "order-1 mb-6 md:mb-10"
                    }`}
                  >
                    {/* Back-left photo */}
                    <div
                      className="proc-photo absolute left-0 top-3 sm:top-4 md:top-6 h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] md:h-[250px] md:w-[250px] bg-[#f3ebdb] p-1.5 sm:p-2 shadow-2xl"
                      style={{ rotate: step.rotations[0], translateY: step.offsets[0] }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.images[0]} alt="" className="h-full w-full object-cover" />
                    </div>

                    {/* Center portrait */}
                    <div
                      className="proc-photo absolute left-[28%] sm:left-[30%] md:left-[32%] top-0 z-10 h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] md:h-[250px] md:w-[250px] bg-[#f3ebdb] p-1.5 sm:p-2 shadow-2xl"
                      style={{ rotate: step.rotations[1], translateY: step.offsets[1] }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.images[1]} alt="" className="h-full w-full object-cover" />
                    </div>

                    {/* Right landscape photo */}
                    <div
                      className="proc-photo absolute right-0 top-2 sm:top-3 md:top-5 h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] md:h-[250px] md:w-[250px] bg-[#f3ebdb] p-1.5 sm:p-2 shadow-2xl"
                      style={{ rotate: step.rotations[2], translateY: step.offsets[2] }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.images[2]} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>

                  {/* Number + title + description */}
                  <div
                    className={`proc-meta text-center md:text-left ${
                      isDown ? "order-1" : "order-2"
                    }`}
                  >
                    <p className="mt-2 md:mt-3 font-heading text-[56px] sm:text-[72px] md:text-[90px] lg:text-[100px] font-[400] leading-[100%] text-white">
                      {step.number}
                    </p>
                    <h3 className="mt-2 md:mt-3 font-subheading text-[22px] sm:text-[26px] md:text-[30px] font-[400] tracking-[-4%] leading-[130%] md:leading-[150%] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 md:mt-3 max-w-[380px] mx-auto md:mx-0 text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] tracking-[-4%] text-white font-body">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Decorative side vector — only meaningful on larger screens */}
        <div className="leftvectorProcess hidden lg:block absolute top-0 bottom-0">
          <Image
            src="/images/ourprocessSvg.svg"
            alt="ourprocessSvg"
            width={100}
            height={100}
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}