"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TimelineCard from "./TimelineCard";
import timelineData from "./timelineData";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const cards = cardsRef.current;

        const totalScroll = cards.scrollWidth - window.innerWidth + 120;

        gsap.to(cards, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${totalScroll}`,
                pin: true,
                scrub: 1,
            },
        });

        gsap.to(progressRef.current, {
            width: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${totalScroll}`,
                scrub: 1,
            },
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#F7F2EA]"
        >
            <div className="h-screen overflow-hidden">

                <div className="pt-20">

                    <h2 className="text-center text-7xl text-[#6A4A2A] mb-16">
                        Our Process
                    </h2>

                    {/* Timeline */}
                    <div className="relative mx-auto mb-20 w-[90%] h-[3px] bg-gray-300">
                        <div
                            ref={progressRef}
                            className="absolute left-0 top-0 h-full w-0 bg-lime-500"
                        />
                    </div>

                    {/* Cards */}
                    <div
                        ref={cardsRef}
                        className="flex gap-24 px-20 w-max"
                    >
                        {timelineData.map((item) => (
                            <TimelineCard
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}