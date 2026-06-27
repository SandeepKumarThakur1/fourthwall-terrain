"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Stone procurement",
    description:
      "Carefully sourced from riverbeds, natural terrains, and stone-rich regions, each stone is selected for its texture, shape, and unique character.",
    images: [
      "https://images.unsplash.com/photo-1518623001779-7374ec5e0d22?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=500&auto=format&fit=crop",
    ],
  },
  {
    number: "02",
    title: "Selection and sorting",
    description:
      "Every stone is individually inspected and curated based on its form, durability, and aesthetic potential. Only a select few make it into the collection.",
    images: [
      "https://images.unsplash.com/photo-1607968565043-36af90dde238?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565193298357-c5c6a4f9b9a5?q=80&w=500&auto=format&fit=crop",
    ],
  },
  {
    number: "03",
    title: "Crafting and refinement",
    description:
      "The stone is shaped and refined while preserving its natural identity, ensuring every piece retains the raw beauty that makes it unique.",
    images: [
      "https://images.unsplash.com/photo-1567361672830-f7aa808fb5d3?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=500&auto=format&fit=crop",
    ],
  },
  {
    number: "04",
    title: "Finishing and detailing",
    description:
      "Surfaces are finished, textures are enhanced, and every detail is perfected to create a balance between nature and contemporary design.",
    images: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=500&auto=format&fit=crop",
    ],
  },
  {
    number: "05",
    title: "Curated plant pairing",
    description:
      "Each piece is paired with carefully chosen greenery, balancing raw mineral texture with the soft living quality of plants.",
    images: [
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=500&auto=format&fit=crop",
    ],
  },
  {
    number: "06",
    title: "Bringing life home",
    description:
      "What begins as a raw stone from nature becomes a living sculpture in your space — adding warmth, texture, character, and a sense of calm to everyday living.",
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=500&auto=format&fit=crop",
    ],
  },
];

// One distinct squiggly line path per step — each shape is different so the
// line visibly "redraws" into a new form as you move between steps.
const LINE_PATHS = [
  "M10,10 C40,60 -10,120 30,180 C70,240 10,300 40,360 C60,400 30,430 50,460",
  "M10,10 C-20,70 60,110 20,170 C-10,220 70,260 30,320 C10,360 60,410 30,460",
  "M10,10 C50,50 0,100 50,150 C90,190 -10,250 40,300 C70,340 0,400 40,460",
  "M10,10 C30,80 -20,90 30,160 C70,210 20,270 60,320 C80,360 10,420 50,460",
  "M10,10 C-10,60 40,90 0,150 C-30,210 50,260 10,320 C-10,370 40,420 20,460",
  "M10,10 C60,40 10,110 60,160 C100,200 20,260 60,310 C90,350 20,410 60,460",
];

export default function OurProcess() {
  const wrapperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const stepsCount = STEPS.length;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [direction, setDirection] = useState("forward");
  const prevStepRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Total scrollable distance within this section (wrapper height - one viewport,
      // since the last viewport-worth of scroll shows the final step pinned)
      const scrollableDistance = wrapperHeight - viewportHeight;
      if (scrollableDistance <= 0) return;

      // How far we've scrolled into the wrapper (0 at top, scrollableDistance at bottom)
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
      setScrollProgress(progress);

      const index = Math.min(
        Math.floor(progress * stepsCount),
        stepsCount - 1
      );

      if (index !== prevStepRef.current) {
        setDirection(index > prevStepRef.current ? "forward" : "backward");
        prevStepRef.current = index;
        setActiveStep(index);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stepsCount]);

  const step = STEPS[activeStep];

  // Dashed guide line sweeps horizontally across the section as you scroll,
  // travelling from 8% to 92% of the width so it never touches the edges.
  const linePositionPercent = 8 + scrollProgress * 84;

  return (
    <section
      ref={wrapperRef}
      className="relative bg-process-flat"
      style={{ height: `${stepsCount * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Topographic background texture */}
        <div className="process-topo absolute inset-0" aria-hidden="true" />

        {/* Vertical dashed guide line — sweeps left-to-right as you scroll through the section */}
        <div
          className="absolute top-0 bottom-0 w-px border-l-2 border-dashed border-sky-400/60 transition-[left] duration-200 ease-out"
          style={{ left: `${linePositionPercent}%` }}
          aria-hidden="true"
        />

        {/* Eyebrow label */}
        <p className="absolute left-10 top-10 text-[11px] font-semibold uppercase tracking-widest text-arena-200/70 md:left-16 md:top-12">
          Our Process
        </p>

        {/* Animated squiggly progress line, right side */}
        <svg
          className="pointer-events-none absolute right-6 top-1/2 hidden h-[70vh] w-40 -translate-y-1/2 md:right-16 md:block"
          viewBox="0 0 110 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {LINE_PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke="#7ED321"
              strokeWidth="3"
              strokeLinecap="round"
              className="process-line-path"
              style={{ opacity: i === activeStep ? 1 : 0 }}
            />
          ))}
        </svg>

        {/* Photo + text content for the active step — slides in from the
            direction matching scroll direction (forward = enters from right,
            backward = enters from left) */}
        <div className="relative z-10 flex h-full w-full items-center overflow-hidden px-10 md:px-16">
          <div
            key={activeStep}
            data-direction={direction}
            className="process-slide-in grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2"
          >
            {/* Photo cluster */}
            <div className="relative h-[340px] w-full max-w-md">
              {/* Top-left landscape photo */}
              <div className="absolute left-0 top-0 h-[170px] w-[220px] -rotate-3 bg-arena-200 p-2 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.images[0]} alt="" className="h-full w-full object-cover" />
              </div>

              {/* Center portrait photo, overlapping */}
              <div
                className="absolute left-[34%] top-[22%] h-[210px] w-[150px] rotate-2 bg-arena-200 p-2 shadow-2xl"
                style={{ zIndex: 2 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.images[1]} alt="" className="h-full w-full object-cover" />
              </div>

              {/* Right landscape photo */}
              <div className="absolute right-0 top-[6%] h-[170px] w-[220px] rotate-3 bg-arena-200 p-2 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.images[2]} alt="" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* Number + title + description */}
            <div className="pl-0 md:pl-8">
              <span className="font-heading text-6xl text-arena-200">
                {step.number}
              </span>
              <h3 className="mt-4 font-heading text-3xl text-arena-200">
                {step.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-arena-200/65">
                {step.description}
              </p>
            </div>
          </div>
        </div>

        {/* Step progress dots */}
        <div className="absolute bottom-10 left-10 flex gap-2 md:left-16">
          {STEPS.map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-6 rounded-full transition-colors duration-300"
              style={{
                backgroundColor:
                  i === activeStep ? "#9CAA49" : "rgba(243,235,219,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}