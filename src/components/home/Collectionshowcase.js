// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// const COLLECTIONS = [
//     {
//         name: "The River Residue",
//         description:
//             "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//         image: "/images/products/river-residue.png",
//     },
//     {
//         name: "Canyon Crust",
//         description:
//             "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//         image: "/images/products/canyon-crust.png",
//     },
//     {
//         name: "Roselle Editions",
//         description:
//             "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//         image: "/images/products/roselle-editions.png",
//     },
//     {
//         name: "Sand Dunes",
//         description:
//             "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//         image: "/images/products/sand-dunes.png",
//     },
//     {
//         name: "Fossil Frost",
//         description:
//             "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//         image: "/images/products/fossil-frost.png",
//     },
// ];

// const SCROLL_LENGTH_VH = 400;

// export default function CollectionShowcase() {
//     const wrapperRef = useRef(null);
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const wrapper = wrapperRef.current;
//             if (!wrapper) return;

//             const rect = wrapper.getBoundingClientRect();
//             const wrapperHeight = wrapper.offsetHeight;
//             const viewportHeight = window.innerHeight;

//             const scrollableDistance = wrapperHeight - viewportHeight;
//             if (scrollableDistance <= 0) return;

//             const scrolled = -rect.top;
//             const p = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
//             setProgress(p);
//         };

//         handleScroll();
//         window.addEventListener("scroll", handleScroll, { passive: true });
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const trackRef = useRef(null);
//     const [maxTranslate, setMaxTranslate] = useState(0);

//     useEffect(() => {
//         const measure = () => {
//             if (trackRef.current) {
//                 const trackWidth = trackRef.current.scrollWidth;

//                 const viewportWidth = window.innerWidth;

//                 // RESPONSIVE FIX: adjust shrink factor on mobile
//                 const reduceFactor =
//                     window.innerWidth < 640 ? 0.85 :
//                         window.innerWidth < 1024 ? 0.65 : 0.55;

//                 setMaxTranslate(Math.max(trackWidth - viewportWidth * reduceFactor, 0));
//             }
//         };

//         measure();
//         window.addEventListener("resize", measure);
//         return () => window.removeEventListener("resize", measure);
//     }, []);

//     const translateX = -(progress * maxTranslate);

//     return (
//         <section
//             ref={wrapperRef}
//             className="relative sectionBg"
//             style={{ height: `${SCROLL_LENGTH_VH}vh` }}
//         >
//             <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

//                     {/* LEFT */}
//                     <div className="flex flex-col justify-center px-5 md:px-16 text-center md:text-left">

//                         <h2 className="text-[#634020] tracking-[-5%] leading-[100%] font-subheading
//                             text-[34px] sm:text-[60px] md:text-[80px]">
//                             Designed to <br />
//                             transform space
//                         </h2>

//                         <Link
//                             href="/collections/all"
//                             className="mt-6 md:mt-8 inline-block w-fit btn-cta mx-auto md:mx-0"
//                         >
//                             View Collection
//                         </Link>
//                     </div>

//                     {/* RIGHT */}
//                     <div className="relative h-full overflow-hidden">

//                         <div
//                             ref={trackRef}
//                             className="flex h-full items-center will-change-transform gap-10"
//                             style={{
//                                 transform: `translateX(${translateX}px)`,
//                                 transition: "transform 0.1s linear",
//                             }}
//                         >

//                             {COLLECTIONS.map((item, index) => (
//                                 <article
//                                     key={`${item.name}-${index}`}
//                                     className="flex shrink-0 flex-col items-center text-center
//                                     w-[260px] sm:w-[320px] md:w-[420px]"
//                                 >

//                                     <Image
//                                         src={item.image}
//                                         alt={item.name}
//                                         width={300}
//                                         height={350}
//                                         className="object-contain w-[180px] sm:w-[240px] md:w-[300px] h-[180px] sm:h-[240px] md:h-[300px]"
//                                     />

//                                     <h3 className="mt-4 md:mt-6 text-[#1a1a1a] font-subheading
//                                         text-[20px] sm:text-[26px] md:text-[30px]">
//                                         {item.name}
//                                     </h3>

//                                     <p className="mt-2 md:mt-3 text-[13px] sm:text-[15px] md:text-[16px] leading-[150%] px-2 md:px-0">
//                                         {item.description}
//                                     </p>

//                                 </article>
//                             ))}

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

// New Code for card with a different layout and hover effect
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const COLLECTIONS = [
  {
    name: "The River Residue",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/products/river-residue.png",
    url: "/catalogue?category=the-river-residue",
  },
  {
    name: "Canyon Crust",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/products/canyon-crust.png",
    url: "/catalogue?category=canyon-crust",
  },
  {
    name: "Roselle Editions",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/products/roselle-editions.png",
    url: "/catalogue?category=roselle-editions",
  },
  {
    name: "Sand Dunes",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/products/sand-dunes.png",
    url: "/catalogue?category=sand-dunes",
  },
  {
    name: "Fossil Frost",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/products/fossil-frost.png",
    url: "/catalogue?category=fossil-frost",
  },
];

export default function CollectionShowcase() {
  const trackRef = useRef(null);

  const animationRef = useRef();

  const offsetRef = useRef(0);

  const [offset, setOffset] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  // duplicate cards for infinite effect

  const cards = [...COLLECTIONS, ...COLLECTIONS];

  const CARD_WIDTH = 430;

  const GAP = 60;

  const TOTAL_WIDTH = (CARD_WIDTH + GAP) * COLLECTIONS.length;
  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        offsetRef.current += 0.8;

        if (offsetRef.current >= TOTAL_WIDTH) {
          offsetRef.current = 0;
        }

        setOffset(offsetRef.current);

        const center = offsetRef.current + window.innerWidth / 2;

        const current =
          Math.floor(center / (CARD_WIDTH + GAP)) % COLLECTIONS.length;

        setActiveIndex(current);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);
  return (
    <section className="sectionBg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        <div className="flex flex-col justify-center px-5 md:px-16 text-center md:text-left">
          <h2
            className="text-[#634020] tracking-[-5%] leading-[100%] font-subheading
                             text-[34px] sm:text-[60px] md:text-[80px]"
          >
            Designed to <br />
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

        <div
          className="relative h-screen flex items-center overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex items-center gap-0 will-change-transform"
            style={{
              transform: `translate3d(-${offset}px,0,0)`,
            }}
          >
            {cards.map((item, index) => {
              const originalIndex = index % COLLECTIONS.length;

              const active = activeIndex === originalIndex;

              return (
                <article
                  key={index}
                  onClick={() => {
                    const target = originalIndex * (CARD_WIDTH + GAP);

                    offsetRef.current = target;

                    setOffset(target);

                    setActiveIndex(originalIndex);
                  }}
                  className={`
                    shrink-0
                    cursor-pointer
                    flex
                    flex-col
                    items-center
                    text-center
                    transition-all
                    duration-700
                    ease-out
                    ${
                      active ? "scale-90 opacity-100" : "scale-[.78] opacity-50"
                    }
                `}
                >
                  <Link
                    href={item.url}
                    key={index}
                    className={`
    shrink-0
    flex
    flex-col
    items-center
    text-center
    cursor-pointer
    transition-all
    duration-700
    ease-out
    no-underline
    ${
      active
        ? "scale-95 opacity-100"
        : "scale-[.90] opacity-50 hover:opacity-80"
    }
  `}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className={`
      object-contain
      transition-all
      duration-700
      ease-out
      ${
        active
          ? "w-[100px] sm:w-[150px] lg:w-[200px]"
          : "w-[90px] sm:w-[130px] lg:w-[180px]"
      }
    `}
                    />

                    <h3
                      className={`
      mt-5
      font-subheading
      transition-all
      duration-700
      ${active ? "text-[#1a1a1a] text-[34px]" : "text-gray-400 text-[26px]"}
    `}
                    >
                      {item.name}
                    </h3>

                    <p
                      className={`
      mt-4
      max-w-[360px]
      leading-[170%]
      transition-all
      duration-700
      ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
    `}
                    >
                      {item.description}
                    </p>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
