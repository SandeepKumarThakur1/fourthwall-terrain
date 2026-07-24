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
            "./images/ourprocess/stone-procurement.png",
            "./images/ourprocess/stone-procurement2.png",
            "./images/ourprocess/stone-procurement3.png",
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
            "./images/ourprocess/selection-sorting.png",
            "./images/ourprocess/selection-sorting2.png",
            "./images/ourprocess/selection-sorting3.png",
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
            "./images/ourprocess/crafting-refinement.png",
            "./images/ourprocess/crafting-refinement2.png",
            "./images/ourprocess/crafting-refinement3.png",
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
            "./images/ourprocess/finishing-detailing.png",
            "./images/ourprocess/finishing-detailing2.png",
            "./images/ourprocess/finishing-detailing3.png",
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
            "./images/ourprocess/curated-plant-pairing.png",
            "./images/ourprocess/curated-plant-pairing2.png",
            "./images/ourprocess/curated-plant-pairing3.png",
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
            "./images/ourprocess/bringing-life-home.png",
            "./images/ourprocess/bringing-life-home2.png",
            "./images/ourprocess/bringing-life-home3.png",
        ],
        rotations: ["2deg", "-6deg", "4deg"],
        offsets: ["-16px", "8px", "-24px"],
        layout: "down",
    },
];

export default function OurProcess() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const svgWrapRef = useRef(null);
    const bgPathRef = useRef(null);
    const linePathRef = useRef(null);
    const stepRefs = useRef([]);
    const clusterRefs = useRef([]); // refs to each step's photo cluster (the thing the line should touch)

    useEffect(() => {
        if (typeof window === "undefined") return;

        let mm;
        let resizeHandler;

        const initGSAP = async () => {
            const gsap = (await import("gsap")).default;
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            await new Promise((r) => requestAnimationFrame(r));
            await new Promise((r) => requestAnimationFrame(r));

            const track = trackRef.current;
            const section = sectionRef.current;
            if (!track || !section) return;

            // ---------------------------------------------------------------
            // Build the connecting line FROM REAL DOM POSITIONS of each
            // photo cluster, so it always touches image-cluster -> image-cluster
            // no matter how the layout (up/down offsets, widths, breakpoints)
            // changes. This replaces any hardcoded/fixed SVG path.
            // ---------------------------------------------------------------
            const computeLinePath = () => {
                const trackEl = trackRef.current;
                if (!trackEl) return null;

                const trackRect = trackEl.getBoundingClientRect();
                const points = clusterRefs.current
                    .filter(Boolean)
                    .map((el) => {
                        const r = el.getBoundingClientRect();
                        return {
                            // center point of each polaroid cluster, relative to the track
                            x: r.left - trackRect.left + r.width / 2,
                            y: r.top - trackRect.top + r.height / 2,
                        };
                    });

                if (points.length < 2) return null;

                let d = `M ${points[0].x} ${points[0].y}`;
                for (let i = 0; i < points.length - 1; i++) {
                    const p0 = points[i];
                    const p1 = points[i + 1];
                    const midX = (p0.x + p1.x) / 2;
                    // smooth S-curve between each consecutive cluster
                    d += ` C ${midX} ${p0.y} ${midX} ${p1.y} ${p1.x} ${p1.y}`;
                }

                return {
                    d,
                    width: trackEl.scrollWidth,
                    height: trackEl.offsetHeight || trackEl.scrollHeight,
                };
            };

            const applyLinePath = () => {
                const result = computeLinePath();
                const svgEl = svgWrapRef.current;
                const linePath = linePathRef.current;
                const bgPath = bgPathRef.current;
                if (!result || !svgEl || !linePath) return;

                const { d, width, height } = result;

                linePath.setAttribute("d", d);
                if (bgPath) bgPath.setAttribute("d", d);

                svgEl.setAttribute("viewBox", `0 0 ${width} ${height}`);
                svgEl.style.width = `${width}px`;
                svgEl.style.height = `${height}px`;

                const len = linePath.getTotalLength();
                gsap.set(linePath, { strokeDasharray: len, strokeDashoffset: len });
            };

            applyLinePath();

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
                    applyLinePath(); // re-measure now that desktop layout is active
                    const totalScrollWidth = track.scrollWidth - window.innerWidth;
                    const tl = gsap.timeline({ defaults: { ease: "none" } });

                    tl.to(track, { x: -totalScrollWidth }, 0);
                    if (linePathRef.current) tl.to(linePathRef.current, { strokeDashoffset: 0 }, 0);

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
                    // On mobile the section isn't pinned/horizontal, so hide the
                    // connecting line (it's a desktop-only decorative element).
                    return () => { };
                },
            });

            // Recompute the line whenever viewport size changes (breakpoint
            // switch, resize, orientation change) so it always tracks the
            // actual cluster positions.
            let resizeTimeout;
            resizeHandler = () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    applyLinePath();
                    ScrollTrigger.refresh();
                }, 150);
            };
            window.addEventListener("resize", resizeHandler);

            return () => {
                if (resizeHandler) window.removeEventListener("resize", resizeHandler);
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
        <>
            <div
                ref={sectionRef}
                className="relative overflow-hidden bg-[#062400] h-auto md:h-[120vh] z-10"
            >
                <div className="ourprocessWrapper w-full h-full">
                    <div className="py-6 sm:py-8 md:py-10 w-[92%] sm:w-[90%] mx-auto h-full flex flex-col">
                        {/* Eyebrow */}
                        <p className="z-20 text-[12px] sm:text-[13px] md:text-[14px] font-[600] uppercase tracking-[12%] leading-[100%] text-white pt-2 md:pt-[15px]">
                            Our Process
                        </p>

                        {/* Track — horizontal flex + pinned scroll on md+, vertical stack on mobile.
                            Each step is exactly one viewport wide on md+, so only
                            Step 01 is visible before the user starts scrolling. */}
                        <div
                            ref={trackRef}
                            className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center will-change-transform flex-1 md:h-full gap-16 md:gap-0 w-full md:w-max py-20 md:py-0 lg:py-0 pb-20"
                        >
                            {/* Connecting line — lives INSIDE the track so it moves
                                together with it during the GSAP horizontal scroll.
                                Its path is computed at runtime from the real position
                                of each photo cluster, so it always connects
                                image-cluster to image-cluster correctly, and stays
                                perfectly locked to the images as they scroll. */}
                            <svg
                                ref={svgWrapRef}
                                aria-hidden="true"
                                className="pointer-events-none absolute left-0 top-0 z-0 hidden md:block"
                                preserveAspectRatio="none"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    ref={bgPathRef}
                                    className="proc-line-bg"
                                    stroke="#ffffff"
                                    strokeOpacity="0.12"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    ref={linePathRef}
                                    stroke="#7ED321"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeOpacity="0.9"
                                />
                            </svg>

                            {STEPS.map((step, i) => {
                                const isDown = step.layout === "down";
                                return (
                                    <article
                                        key={step.number}
                                        ref={(el) => (stepRefs.current[i] = el)}
                                        className={`relative flex flex-col w-full md:h-full md:w-screen shrink-0 px-1 sm:px-4 md:px-16 lg:px-24 xl:px-32 ${isDown
                                            ? "md:justify-end md:pb-[5vh]"
                                            : "md:justify-start md:pt-[5vh]"
                                            }`}
                                    >
                                        {/* Polaroid cluster */}
                                        <div
                                            ref={(el) => (clusterRefs.current[i] = el)}
                                            className={`proc-photo-cluster relative h-[170px] xs:h-[200px] sm:h-[220px] md:h-[250px] w-full max-w-[280px] sm:max-w-[420px] md:max-w-[560px] mx-auto md:mx-0 ${isDown ? "order-2 mt-6 md:mt-10" : "order-1 mb-6 md:mb-10"
                                                }`}
                                        >
                                            {/* Back-left photo */}
                                            <div
                                                className="proc-photo absolute left-0 top-3 sm:top-4 md:top-6 h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] md:h-[250px] md:w-[250px] bg-[#f3ebdb] p-1.5 sm:p-2 shadow-2xl"
                                                style={{ rotate: step.rotations[0], translateY: step.offsets[0] }}
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={step.images[0]} alt="" className="h-full w-full object-cover pb-3" />
                                            </div>

                                            {/* Center portrait */}
                                            <div
                                                className="proc-photo absolute left-[28%] sm:left-[30%] md:left-[32%] top-0 z-10 h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] md:h-[250px] md:w-[250px] bg-[#f3ebdb] p-1.5 sm:p-2 shadow-2xl"
                                                style={{ rotate: step.rotations[1], translateY: step.offsets[1] }}
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={step.images[1]} alt="" className="h-full w-full object-cover pb-3" />
                                            </div>

                                            {/* Right landscape photo */}
                                            <div
                                                className="proc-photo absolute right-0 top-2 sm:top-3 md:top-5 h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] md:h-[250px] md:w-[250px] bg-[#f3ebdb] p-1.5 sm:p-2 shadow-2xl"
                                                style={{ rotate: step.rotations[2], translateY: step.offsets[2] }}
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={step.images[2]} alt="" className="h-full w-full object-cover pb-3" />
                                            </div>
                                        </div>

                                        {/* Number + title + description */}
                                        <div
                                            className={`proc-meta text-center md:text-left ${isDown ? "order-1" : "order-2"
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
            </div>
        </>
    );
}