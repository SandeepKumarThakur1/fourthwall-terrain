// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function GiftingSection() {
//   return (
//     <section className="giftingWrapper relative py-[60px] md:py-[124px] px-4">
//       <div className="text-center flex flex-col justify-between">
//         <h3
//           className="text-headline-1 leading-[110%]
//           text-[12vw] md:text-[9vw] text-white"
//         >
//           The art of gifting
//           <br />
//           from nature
//         </h3>

//         <Image
//           src="/images/giftImage.png"
//           alt="giftImage"
//           width={7500}
//           height={1000}
//           className="mx-auto mt-[-40px] md:mt-[-130px] w-full max-w-[70vw] md:max-w-[49vw] h-auto"
//         />

//         <div className="text-center mt-6 md:mt-0">
//           <Link href="/" className="inline-block btn-cta">
//             Explore Collection
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GiftingSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(headingRef.current, {
        y: 0,
        opacity: 1,
      });

      gsap.set(imageRef.current, {
        y: 0,
        scale: 1,
      });

      // Scroll-based animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -10%",
          end: "top 50%",
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false, // Set to true for debugging
        },
      });

      // Text moves slightly up and fades
      tl.to(
        headingRef.current,
        {
          y: -35,
          opacity: 0.35,
          ease: "none",
        },
        0
      );

      // Image moves slightly up and becomes smaller
      tl.to(
        imageRef.current,
        {
          y: -25,
          scale: 0.95,
          ease: "none",
        },
        0
      );

      // Button remains unchanged
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="giftingWrapper relative py-[60px] md:py-[124px] px-4"
    >
      <div className="text-center flex flex-col justify-between">
        <h3
          ref={headingRef}
          className="text-headline-1 leading-[110%] text-[12vw] md:text-[9vw] text-white"
        >
          The art of gifting
          <br />
          from nature
        </h3>

        <div
          ref={imageRef}
          className="relative mx-auto mt-[-40px] md:mt-[-130px] w-full max-w-[70vw] md:max-w-[49vw] will-change-transform"
        >
          <Image
            src="/images/giftImage.png"
            alt="giftImage"
            width={7500}
            height={1000}
            className="w-full h-auto"
          />
        </div>

        <div className="text-center mt-6 md:mt-0">
          <Link href="/" className="inline-block btn-cta">
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

