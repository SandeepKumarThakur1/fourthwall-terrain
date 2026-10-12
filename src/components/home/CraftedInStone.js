// "use client";

// import Image from "next/image";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function CraftedInStone() {
//   const mapWrapperRef = useRef(null);

//   useEffect(() => {
//     const mm = gsap.matchMedia();

//     mm.add("(min-width: 768px)", () => {
//       // ye animation sirf tab chalega jab screen width >= 768px ho
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: mapWrapperRef.current,
//           start: "center bottom",
//           end: "bottom top",
//           scrub: 1.2,
//         },
//       });

//       tl.fromTo(
//         mapWrapperRef.current,
//         { scale: 1 },
//         {
//           scale: 400,
//           ease: "power2.out",
//           duration: 7,
//         },
//         0
//       );

//       tl.to(
//         mapWrapperRef.current,
//         {
//           scale: 400,
//           duration: 0.4,
//         },
//         7
//       );

//       return () => {
//         gsap.set(mapWrapperRef.current, {
//           clearProps: "scale",
//         });
//       };
//     });

//     return () => mm.revert();
//   }, []);

//   return (
//     <section
//       id="about"
//       data-header="light"
//       className="
//         relative
//         text-center
//         sectionBg
//         mt-[-3%]
//         md:mt-[-5%]
//         px-4
//         md:px-0
//         z-4
//         md:min-h-screen
//         md:flex
//         md:flex-col
//         md:justify-center
//       "
//     >
//       <div className="overflow-hidden">
//         <div className="craftedBg"></div>

//         <div className="relative z-10">
//           <h3
//             className="
//             text-[#634020]
//             tracking-[-5%]
//             mb-0
//             leading-[100%]
//             font-subheading
//             text-[7vw]
//             h-auto
//           "
//           >
//             Crafted in stone
//           </h3>

//           <h3
//             className="
//             text-[#697A07]
//             tracking-[-5%]
//             mb-0
//             leading-[100%]
//             font-subheading
//             text-[6vw]
//             h-auto
//           "
//           >
//             from the lands of South India
//           </h3>

//           <p
//             className="
//             py-6
//             md:py-10
//             text-[3vw]
//             md:text-[1.1vw]
//             leading-[150%]
//             tracking-[-4%]
//             max-w-[100vw]
//             lg:max-w-[45vw]
//             mx-auto
//             text-center
//           "
//           >
//             Born from the rugged terrains of Andra Pradesh, each piece carries
//             the raw beauty of the land it comes from. The textures, curves, and
//             imperfections are inspired by natural rock formations shaped over
//             time by wind, water, and erosion.
//             <br />
//             The process is not about hiding the material&apos;s natural
//             character, but elevating it, preserving its raw authenticity while
//             refining it into something timeless, minimal, and luxurious.
//           </p>
//         </div>

//         <div
//           ref={mapWrapperRef}
//           className="
//           mapwrapperImage
//           relative
//           mt-[-8%]
//           md:mt-[-15%]
//           text-center
//           mb-[-30%]
//           origin-center
//           z-20
//         "
//         >
//           <Image
//             src="/images/map.svg"
//             alt="map"
//             width={1000}
//             height={400}
//             className="w-full h-auto"
//           />
//         </div>

//         <div
//           className="
//         pointer-events-none
//         absolute
//         bottom-0
//         left-0
//         w-full
//         h-[40%]
//         z-50
//         bg-gradient-to-b
//         from-transparent
//         via-[#14310f]/40
//         to-[#14310f]
//       "
//         />
//       </div>

//       <div className="terrain-edge">
//         <Image
//           src="/images/terrainEdge.svg"
//           alt="Jagged terrain edge"
//           width={1440}
//           height={120}
//           className="w-full h-auto z-2"
//         />
//       </div>
//     </section>
//   );
// }










"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CraftedInStone() {
  const mapWrapperRef = useRef(null);

  useEffect(() => {
    const element = mapWrapperRef.current;

    if (!element) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Keep the initial state consistent.
      gsap.set(element, {
        scale: 1,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      // Animate smoothly in both scroll directions.
      const animation = gsap.to(element, {
        scale: 400,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: element,
          start: "center bottom",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
          fastScrollEnd: false,
        },
      });

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();

        gsap.set(element, {
          clearProps: "transform",
        });
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="about"
      data-header="light"
      className="
        relative
        text-center
        sectionBg
        mt-[-3%]
        md:mt-[-5%]
        px-4
        md:px-0
        z-4
        md:min-h-screen
        md:flex
        md:flex-col
        md:justify-center
      "
    >
      <div className="overflow-hidden">
        <div className="craftedBg"></div>

        <div className="relative z-10">
          <h3
            className="
              text-[#634020]
              tracking-[-5%]
              mb-0
              leading-[100%]
              font-subheading
              text-[7vw]
              h-auto
            "
          >
            Crafted in stone
          </h3>

          <h3
            className="
              text-[#697A07]
              tracking-[-5%]
              mb-0
              leading-[100%]
              font-subheading
              text-[6vw]
              h-auto
            "
          >
            from the lands of South India
          </h3>

          <p
            className="
              py-6
              md:py-10
              text-[3vw]
              md:text-[1.1vw]
              leading-[150%]
              tracking-[-4%]
              max-w-[100vw]
              lg:max-w-[45vw]
              mx-auto
              text-center
            "
          >
            Born from the rugged terrains of Andra Pradesh, each piece carries
            the raw beauty of the land it comes from. The textures, curves, and
            imperfections are inspired by natural rock formations shaped over
            time by wind, water, and erosion.
            <br />
            The process is not about hiding the material&apos;s natural
            character, but elevating it, preserving its raw authenticity while
            refining it into something timeless, minimal, and luxurious.
          </p>
        </div>

        <div
          ref={mapWrapperRef}
          className="
            mapwrapperImage
            relative
            mt-[-8%]
            md:mt-[-15%]
            text-center
            mb-[-30%]
            origin-center
            z-20
          "
        >
          <Image
            src="/images/map.svg"
            alt="map"
            width={1000}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            w-full
            h-[40%]
            z-50
            bg-gradient-to-b
            from-transparent
            via-[#14310f]/40
            to-[#14310f]
          "
        />
      </div>

      <div className="terrain-edge">
        <Image
          src="/images/terrainEdge.svg"
          alt="Jagged terrain edge"
          width={1440}
          height={120}
          className="w-full h-auto z-2"
        />
      </div>
    </section>
  );
}