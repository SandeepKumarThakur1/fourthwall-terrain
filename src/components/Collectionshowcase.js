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
    image: "/images/demoProduct.png",
  },
  {
    name: "Roselle Editions",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/demoProduct.png",
  },
];

// How many viewport-heights of scroll the whole section should take.
// More height = slower / longer scroll to get through all the cards.
const SCROLL_LENGTH_VH = 250;

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

    // Track travels from 0 to -(track width - viewport width), so the last
    // card ends up flush with the right edge instead of overshooting.
    const trackRef = useRef(null);
    const [maxTranslate, setMaxTranslate] = useState(0);

    useEffect(() => {
        const measure = () => {
            if (trackRef.current) {
                const trackWidth = trackRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                setMaxTranslate(Math.max(trackWidth - viewportWidth * 0.55, 0));
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
                <div className="grid h-full w-full grid-cols-1 md:grid-cols-[minmax(700px,38%)_1fr]">
                    {/* Left — sticky text, stays in place the whole time */}
                    <div className="flex flex-col justify-center px-10 md:px-16">
                        <h2 className="text-[80px] text-[#634020] tracking-[-5%] mb-0 pb-0 lh-[100%] font-subheading">
                            Designed to
                            <br />
                            transform space
                        </h2>
                        <Link
                            href="/collections/all"
                            className="mt-8 inline-block w-fit btn-cta "
                        >
                            View Collection
                        </Link>
                    </div>

                    {/* Right — horizontally translating card track */}
                    <div className="relative h-full overflow-hidden">
                        <div
                            ref={trackRef}
                            className="flex h-full items-center will-change-transform"
                            style={{
                                transform: `translateX(${translateX}px)`,
                                transition: "transform 0.1s linear",
                                paddingLeft: "0",
                                paddingRight: "0",
                            }}
                        >
                            {COLLECTIONS.map((item) => (
                                <article
                                    key={item.name}
                                    className="flex w-[420px] shrink-0 flex-col items-center text-center h-[435px]"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={300}
                                        height={300}
                                        className="object-contain"
                                    />
                                    <h3 className="mt-6 text-[30px] tracking-[-4%] lh-[150%] font-subheading">
                                        {item.name}
                                    </h3>
                                    <p className="mt-3 text-[16px] tracking-[-4%] lh-[150%] font-[500]">
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