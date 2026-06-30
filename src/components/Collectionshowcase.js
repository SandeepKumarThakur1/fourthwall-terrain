"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const COLLECTIONS = [
    {
        name: "The River Residue",
        description:
            "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
        image: "/images/demoProduct.png",
    },
    {
        name: "Canyon Crust",
        description:
            "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
        image: "/images/demoProduct2.png",
    },
    {
        name: "Roselle Editions",
        description:
            "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
        image: "/images/demoProduct3.png",
    },
    {
        name: "The River Residue",
        description:
            "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
        image: "/images/demoProduct.png",
    },
    {
        name: "Canyon Crust",
        description:
            "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
        image: "/images/demoProduct2.png",
    },
];

const SCROLL_LENGTH_VH = 400;

export default function CollectionShowcase() {
    const wrapperRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const rect = wrapper.getBoundingClientRect();
            const wrapperHeight = wrapper.offsetHeight;
            const viewportHeight = window.innerHeight;

            const scrollableDistance = wrapperHeight - viewportHeight;
            if (scrollableDistance <= 0) return;

            const scrolled = -rect.top;
            const p = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
            setProgress(p);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const trackRef = useRef(null);
    const [maxTranslate, setMaxTranslate] = useState(0);

    useEffect(() => {
        const measure = () => {
            if (trackRef.current) {
                const trackWidth = trackRef.current.scrollWidth;

                const viewportWidth = window.innerWidth;

                // RESPONSIVE FIX: adjust shrink factor on mobile
                const reduceFactor =
                    window.innerWidth < 640 ? 0.85 :
                        window.innerWidth < 1024 ? 0.65 : 0.55;

                setMaxTranslate(Math.max(trackWidth - viewportWidth * reduceFactor, 0));
            }
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const translateX = -(progress * maxTranslate);

    return (
        <section
            ref={wrapperRef}
            className="relative sectionBg"
            style={{ height: `${SCROLL_LENGTH_VH}vh` }}
        >
            <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

                    {/* LEFT */}
                    <div className="flex flex-col justify-center px-5 md:px-16 text-center md:text-left">

                        <h2 className="text-[#634020] tracking-[-5%] leading-[100%] font-subheading
                            text-[34px] sm:text-[60px] md:text-[80px]">
                            Designed to <br/>
                            transform space
                        </h2>

                        <Link
                            href="/collections/all"
                            className="mt-6 md:mt-8 inline-block w-fit btn-cta mx-auto md:mx-0"
                        >
                            View Collection
                        </Link>
                    </div>

                    {/* RIGHT */}
                    <div className="relative h-full overflow-hidden">

                        <div
                            ref={trackRef}
                            className="flex h-full items-center will-change-transform"
                            style={{
                                transform: `translateX(${translateX}px)`,
                                transition: "transform 0.1s linear",
                            }}
                        >

                            {COLLECTIONS.map((item, index) => (
                                <article
                                    key={`${item.name}-${index}`}
                                    className="flex shrink-0 flex-col items-center text-center
                                    w-[260px] sm:w-[320px] md:w-[420px]"
                                >

                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={300}
                                        height={350}
                                        className="object-contain w-[180px] sm:w-[240px] md:w-[300px] h-auto"
                                    />

                                    <h3 className="mt-4 md:mt-6 text-[#1a1a1a] font-subheading
                                        text-[20px] sm:text-[26px] md:text-[30px]">
                                        {item.name}
                                    </h3>

                                    <p className="mt-2 md:mt-3 text-[13px] sm:text-[15px] md:text-[16px] leading-[150%] px-2 md:px-0">
                                        {item.description}
                                    </p>

                                </article>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}