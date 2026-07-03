"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
    // alternate vertical placement: "up" = photos on top, text below
    //                                "down" = text on top, photos below
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
  const linePathRef = useRef(null); // animated (colored) line ref
  const stepRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let killAll = () => { };

    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Wait two frames — ensures DOM is painted and scrollWidth is measured correctly
      await new Promise((r) => requestAnimationFrame(r));
      await new Promise((r) => requestAnimationFrame(r));

      const track = trackRef.current;
      const section = sectionRef.current;
      const linePath = linePathRef.current;
      if (!track || !section) return;

      // ── 1. Entry animation for Step 01 photos + text ────────────────────
      const firstStep = stepRefs.current[0];
      if (firstStep) {
        const photos = firstStep.querySelectorAll(".proc-photo");
        const meta = firstStep.querySelector(".proc-meta");
        gsap.set(photos, { opacity: 0, y: 80 });
        gsap.set(meta, { opacity: 0, y: 40 });

        ScrollTrigger.create({
          trigger: section,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(photos, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" });
            gsap.to(meta, { opacity: 1, y: 0, duration: 0.9, delay: 0.35, ease: "power2.out" });
          },
        });
      }

      // ── 2. Colored line: hidden at start, base (faded) line always visible ──
      if (linePath) {
        const lineLen = linePath.getTotalLength();
        gsap.set(linePath, {
          strokeDasharray: lineLen,
          strokeDashoffset: lineLen,
        });
      }

      // ── 3. PIN + HORIZONTAL SCROLL + LINE DRAW (all tied to one ST) ────
      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({ defaults: { ease: "none" } });

      // Horizontal track move
      tl.to(track, { x: -totalScrollWidth }, 0);

      // Colored line draw — runs in parallel (same duration, position 0)
      if (linePath) {
        tl.to(linePath, { strokeDashoffset: 0 }, 0);
      }

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

      killAll = () => {
        pinST.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    initGSAP();
    return () => killAll();
  }, []);

  return (
    <section ref={sectionRef} className=" relative overflow-hidden bg-[#062400] h-[120vh] z-10">
      <div className="ourprocessWrapper w-full h-full">
        <div className=" py-10 w-[90%] mx-auto">
          {/* Eyebrow */}
          <p className="z-20 text-[14px] font-[600] uppercase tracking-[12%] leading-[100%] text-white uppercase pt-[15px]">
            Our Process
          </p>

          {/*
          ── VECTOR_10 SVG LINE ────────────────────────────────────────────
          Two paths sharing the same "d": a faded base track that is always
          fully visible, and a colored path on top whose strokeDashoffset is
          animated by GSAP from full length -> 0 as you scroll. This gives
          the "line is faded from the start, color fills in on scroll" look.
        */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-10"
            style={{ width: `${STEPS.length * 30}vw`, height: "60%" }}
            viewBox="0 0 6237 806"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* always-visible faded track */}
            <path
              d={VECTOR_PATH}
              stroke="#ffffff"
              strokeOpacity="0.12"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* colored progress line — drawn in on scroll */}
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

          {/* Scrolling track — GSAP translates this left as user scrolls */}
          <div
            ref={trackRef}
            className="relative z-10 flex items-center will-change-transform h-full"
            style={{ width: `${STEPS.length * 35}vw` }}
          >
            {STEPS.map((step, i) => {
              const isDown = step.layout === "down";
              return (
                <article
                  key={step.number}
                  ref={(el) => (stepRefs.current[i] = el)}
                  className={`relative flex h-full w-[75vw] shrink-0 flex-col px-16 md:px-20 ${isDown
                    ? "justify-end pb-[5vh]"
                    : "justify-start pt-[5vh]"
                    }`}
                >
                  {/* Polaroid cluster */}
                  <div
                    className={`proc-photo-cluster relative h-[250px] w-full max-w-[560px] ${isDown ? "order-2 mt-10" : "order-1 mb-10"
                      }`}
                  >
                    {/* Back-left photo */}
                    <div
                      className="proc-photo absolute left-0 top-6 h-[250px] w-[250px] bg-[#f3ebdb] p-2 shadow-2xl"
                      style={{ rotate: step.rotations[0], translateY: step.offsets[0] }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.images[0]} alt="" className="h-full w-full object-cover" />
                    </div>

                    {/* Center portrait */}
                    <div
                      className="proc-photo absolute left-[32%] top-0 z-10 h-[250px] w-[250px] bg-[#f3ebdb] p-2 shadow-2xl"
                      style={{ rotate: step.rotations[1], translateY: step.offsets[1] }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.images[1]} alt="" className="h-full w-full object-cover" />
                    </div>

                    {/* Right landscape photo */}
                    <div
                      className="proc-photo absolute right-0 top-5 h-[250px] w-[250px] bg-[#f3ebdb] p-2 shadow-2xl"
                      style={{ rotate: step.rotations[2], translateY: step.offsets[2] }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.images[2]} alt="" className="h-full w-full object-cover" />
                    </div>
                  </div>

                  {/* Number + title + description */}
                  <div className={`proc-meta ${isDown ? "order-1" : "order-2"}`}>
                    <p className="mt-3 font-heading text-[100px] font-[400] leading-[100%] text-white">
                      {step.number}
                    </p>
                    <h3 className="mt-3 font-subheading text-[30px] font-[400] tracking-[-4%] leading-[150%] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[380px] text-[16px] leading-[150%] tracking-[-4%] text-white font-body">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="leftvectorProcess absolute top-0 bottom-0">
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