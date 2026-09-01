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
    href: "/collections/the-river-residue",
  },
  {
    name: "Canyon Crust",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/products/canyon-crust.png",
    href: "/collections/canyon-crust",
  },
  {
    name: "Roselle Editions",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/products/roselle-editions.png",
    href: "/collections/roselle-editions",
  },
  {
    name: "Sand Dunes",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/products/sand-dunes.png",
    href: "/collections/sand-dunes",
  },
  {
    name: "Fossil Frost",
    description:
      "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
    image: "/images/products/fossil-frost.png",
    href: "/collections/fossil-frost",
  },
];

export default function CollectionShowcase() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(null);
  const isHoveredRef = useRef(false);
  const loopWidthRef = useRef(0);

  const [isReady, setIsReady] = useState(false);

  // Speed - increase/decrease as required
  const SPEED = 50;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calculateWidth = () => {
      /*
       * We duplicate the collection.
       * So half of the track width = one complete set.
       */
      loopWidthRef.current = track.scrollWidth / 2;

      setIsReady(true);
    };

    calculateWidth();

    const resizeObserver = new ResizeObserver(calculateWidth);
    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const animate = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      // Don't move while hovering
      if (!isHoveredRef.current && loopWidthRef.current > 0) {
        positionRef.current -= (SPEED * delta) / 1000;

        /*
         * When first set has completely moved away,
         * jump back by exactly one set width.
         *
         * Because both sets are identical,
         * the jump is invisible.
         */
        if (Math.abs(positionRef.current) >= loopWidthRef.current) {
          positionRef.current += loopWidthRef.current;
        }

        if (trackRef.current) {
          trackRef.current.style.transform =
            `translate3d(${positionRef.current}px, 0, 0)`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      lastTimeRef.current = null;
    };
  }, [isReady]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    lastTimeRef.current = null;
  };

  return (
    <section className="relative sectionBg  overflow-hidden md:py-[10px] py-[60px]">

      <div className="flex w-full items-center justify-center min-h-auto md:min-h-screen overflow-hidden">

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

          {/* LEFT */}
          <div className="flex flex-col justify-center px-5 md:px-16 text-center md:text-left">

            <h2
              className="
                                text-[#634020]
                                tracking-[-5%]
                                leading-[100%]
                                font-subheading
                                text-[12vw]
                                md:text-[5vw]
                            "
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
          {/* <div
            className="
            relative
            overflow-hidden
            before:absolute
            before:left-0
            before:top-0
            before:z-10
            before:h-full
            before:w-[140px]
            before:pointer-events-none
            before:bg-gradient-to-r
            before:from-[#FFFAF0]
            before:via-[#FFFAF0]/80
            before:to-transparent
          "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          > */}
          <div
            className="productsSide relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >

            <div
              ref={trackRef}
              className="
                                flex
                                w-max
                                items-center
                                gap-10
                                will-change-transform
                            "
            >

              {/* FIRST SET */}
              {COLLECTIONS.map((item, index) => (
                <article
                  key={`first-${item.name}-${index}`}
                  className="
                                        flex
                                        shrink-0
                                        flex-col
                                        items-center
                                        text-center
                                        w-[260px]
                                        sm:w-[320px]
                                        md:w-[420px]
                                    "
                >

                  <Link
                    href={item.href}
                    className="
        flex shrink-0 flex-col items-center text-center
        w-[260px] sm:w-[320px] md:w-[420px]
        cursor-pointer
        group
    "
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={350}
                      className="
            object-contain
            w-[180px] sm:w-[240px] md:w-[300px]
            h-[180px] sm:h-[240px] md:h-[300px]
            transition-transform duration-500
            group-hover:scale-105
        "
                    />

                    <h3
                      className="
            mt-4 md:mt-6
            text-[#1a1a1a]
            font-subheading
            text-[20px] sm:text-[26px] md:text-[30px]
        "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
            mt-2 md:mt-3
            text-[13px] sm:text-[15px] md:text-[16px]
            leading-[150%]
            px-2 md:px-0
        "
                    >
                      {item.description}
                    </p>
                  </Link>

                </article>
              ))}

              {/* DUPLICATE SET FOR INFINITE LOOP */}
              {COLLECTIONS.map((item, index) => (
                <article
                  key={`second-${item.name}-${index}`}
                  className="
                                        flex
                                        shrink-0
                                        flex-col
                                        items-center
                                        text-center
                                        w-[260px]
                                        sm:w-[320px]
                                        md:w-[420px]
                                    "
                  aria-hidden="true"
                >

                  <Link
                    key={`second-${item.name}-${index}`}
                    href={item.href}
                    aria-hidden="true"
                    tabIndex={-1}
                    className="
        flex shrink-0 flex-col items-center text-center
        w-[260px] sm:w-[320px] md:w-[420px]
        cursor-pointer
        group
    "
                  >
                    <Image
                      src={item.image}
                      alt=""
                      width={300}
                      height={350}
                      className="
            object-contain
            w-[180px] sm:w-[240px] md:w-[300px]
            h-[180px] sm:h-[240px] md:h-[300px]
            transition-transform duration-500
            group-hover:scale-105
        "
                    />

                    <h3
                      className="
            mt-4 md:mt-6
            text-[#1a1a1a]
            font-subheading
            text-[20px] sm:text-[26px] md:text-[30px]
        "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
            mt-2 md:mt-3
            text-[13px] sm:text-[15px] md:text-[16px]
            leading-[150%]
            px-2 md:px-0
        "
                    >
                      {item.description}
                    </p>
                  </Link>

                </article>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}






// New Code for card with a different layout and hover effect
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// const COLLECTIONS = [
//   {
//     name: "The River Residue",
//     description:
//       "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//     image: "/images/products/river-residue.png",
//     url: "/catalogue?category=the-river-residue",
//   },
//   {
//     name: "Canyon Crust",
//     description:
//       "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//     image: "/images/products/canyon-crust.png",
//     url: "/catalogue?category=canyon-crust",
//   },
//   {
//     name: "Roselle Editions",
//     description:
//       "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//     image: "/images/products/roselle-editions.png",
//     url: "/catalogue?category=roselle-editions",
//   },
//   {
//     name: "Sand Dunes",
//     description:
//       "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//     image: "/images/products/sand-dunes.png",
//     url: "/catalogue?category=sand-dunes",
//   },
//   {
//     name: "Fossil Frost",
//     description:
//       "Stone sourced from the right lands used and curated for inner peace and people with the eye of luxury.",
//     image: "/images/products/fossil-frost.png",
//     url: "/catalogue?category=fossil-frost",
//   },
// ];

// export default function CollectionShowcase() {
//   const trackRef = useRef(null);

//   const animationRef = useRef();

//   const offsetRef = useRef(0);

//   const [offset, setOffset] = useState(0);

//   const [isPaused, setIsPaused] = useState(false);

//   const [activeIndex, setActiveIndex] = useState(0);

//   // duplicate cards for infinite effect

//   const cards = [...COLLECTIONS, ...COLLECTIONS];

//   const CARD_WIDTH = 430;

//   const GAP = 60;

//   const TOTAL_WIDTH = (CARD_WIDTH + GAP) * COLLECTIONS.length;
//   useEffect(() => {
//     const animate = () => {
//       if (!isPaused) {
//         offsetRef.current += 0.8;

//         if (offsetRef.current >= TOTAL_WIDTH) {
//           offsetRef.current = 0;
//         }

//         setOffset(offsetRef.current);

//         const center = offsetRef.current + window.innerWidth / 2;

//         const current =
//           Math.floor(center / (CARD_WIDTH + GAP)) % COLLECTIONS.length;

//         setActiveIndex(current);
//       }

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationRef.current);
//   }, [isPaused]);
//   return (
//     <section className="sectionBg overflow-hidden">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
//         <div className="flex flex-col justify-center px-5 md:px-16 text-center md:text-left">
//           <h2
//             className="text-[#634020] tracking-[-5%] leading-[100%] font-subheading
//                              text-[34px] sm:text-[60px] md:text-[80px]"
//           >
//             Designed to <br />
//             transform space
//           </h2>

//           <Link
//             href="/collections/all"
//             className="mt-6 md:mt-8 inline-block w-fit btn-cta mx-auto md:mx-0"
//           >
//             View Collection
//           </Link>
//         </div>

//         {/* RIGHT */}

//         <div
//           className="relative h-screen flex items-center overflow-hidden"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div
//             ref={trackRef}
//             className="flex items-center gap-0 will-change-transform"
//             style={{
//               transform: `translate3d(-${offset}px,0,0)`,
//             }}
//           >
//             {cards.map((item, index) => {
//               const originalIndex = index % COLLECTIONS.length;

//               const active = activeIndex === originalIndex;

//               return (
//                 <article
//                   key={index}
//                   onClick={() => {
//                     const target = originalIndex * (CARD_WIDTH + GAP);

//                     offsetRef.current = target;

//                     setOffset(target);

//                     setActiveIndex(originalIndex);
//                   }}
//                   className={`
//                     shrink-0
//                     cursor-pointer
//                     flex
//                     flex-col
//                     items-center
//                     text-center
//                     transition-all
//                     duration-700
//                     ease-out
//                     ${
//                       active ? "scale-90 opacity-100" : "scale-[.78] opacity-50"
//                     }
//                 `}
//                 >
//                   <Link
//                     href={item.url}
//                     key={index}
//                     className={`
//     shrink-0
//     flex
//     flex-col
//     items-center
//     text-center
//     cursor-pointer
//     transition-all
//     duration-700
//     ease-out
//     no-underline
//     ${
//       active
//         ? "scale-95 opacity-100"
//         : "scale-[.90] opacity-50 hover:opacity-80"
//     }
//   `}
//                   >
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={200}
//                       height={200}
//                       className={`
//       object-contain
//       transition-all
//       duration-700
//       ease-out
//       ${
//         active
//           ? "w-[100px] sm:w-[150px] lg:w-[200px]"
//           : "w-[90px] sm:w-[130px] lg:w-[180px]"
//       }
//     `}
//                     />

//                     <h3
//                       className={`
//       mt-5
//       font-subheading
//       transition-all
//       duration-700
//       ${active ? "text-[#1a1a1a] text-[34px]" : "text-gray-400 text-[26px]"}
//     `}
//                     >
//                       {item.name}
//                     </h3>

//                     <p
//                       className={`
//       mt-4
//       max-w-[360px]
//       leading-[170%]
//       transition-all
//       duration-700
//       ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//     `}
//                     >
//                       {item.description}
//                     </p>
//                   </Link>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
