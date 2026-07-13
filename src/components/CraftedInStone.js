// "use client";

// import Image from "next/image";

// export default function CraftedInStone() {
//   return (
//     <section id="about" data-header="light" className="text-center sectionBg mt-[-3%] md:mt-[-5%] px-4 md:px-0 z-4">
//       <div>
//         <h3
//           className="text-[#634020] tracking-[-5%] mb-0 leading-[100%] font-subheading
//           text-[34px] sm:text-[60px] md:text-[90px]"
//         >
//           Crafted in stone
//         </h3>

//         <h3
//           className="text-[#697A07] tracking-[-5%] mb-0 leading-[100%] font-subheading
//           text-[30px] sm:text-[55px] md:text-[80px]"
//         >
//           from the lands of South India
//         </h3>

//         <p className="py-6 md:py-10 text-[14px] md:text-[16px] leading-[150%] tracking-[-4%] max-w-[650px] mx-auto text-center">
//           Born from the rugged terrains of Andra Pradesh, each piece carries
//           the raw beauty of the land it comes from. The textures, curves, and
//           imperfections are inspired by natural rock formations shaped over
//           time by wind, water, and erosion.
//           <br />
//           The process is not about hiding the material’s natural character, but
//           elevating it, preserving its raw authenticity while refining it into
//           something timeless, minimal, and luxurious.
//         </p>
//       </div>

//       <div className="mapwrapperImage mt-[-8%] md:mt-[-15%] text-center mb-[-30%]">
//         <Image
//           src="/images/map.png"
//           alt="map"
//           width={1000}
//           height={1000}
//           className="w-full h-auto"
//         />
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CraftedInStone() {
  const wrapperRef = useRef(null); // tall spacer (scroll distance)
  const boxRef = useRef(null); // the image box that grows

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ctx;

    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      await new Promise((r) => requestAnimationFrame(r));
      await new Promise((r) => requestAnimationFrame(r));

      const wrapper = wrapperRef.current;
      const box = boxRef.current;
      if (!wrapper || !box) return;

      ctx = gsap.context(() => {
        ScrollTrigger.matchMedia({
          "(min-width: 768px)": function () {
            // start: small rounded box centered
            gsap.set(box, {
              width: "50%",
              height: "100%",
              borderRadius: 0,
            });

            gsap.to(box, {
              width: "100%",
              height: "100%",
              borderRadius: 0,
              ease: "none",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });
          },
          // "(max-width: 767px)": function () {
          //   gsap.set(box, {
          //     width: "90vw",
          //     height: "40vh",
          //     borderRadius: 18,
          //   });

          //   gsap.to(box, {
          //     width: "100vw",
          //     height: "70vh",
          //     borderRadius: 0,
          //     ease: "none",
          //     scrollTrigger: {
          //       trigger: wrapper,
          //       start: "top 60%",
          //       end: "bottom bottom",
          //       scrub: 1,
          //       invalidateOnRefresh: true,
          //     },
          //   });
          // },
        });
      }, wrapper);
    };

    initGSAP();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="relative text-center sectionBg px-4 md:px-0 z-[4]  mt-[-3%] md:mt-[-5%]">
      <div className="pt-6 md:pt-10">
        <h3
          className="text-[#634020] tracking-[-5%] mb-0 leading-[100%] font-subheading
          text-[34px] sm:text-[60px] md:text-[90px]"
        >
          Crafted in stone
        </h3>

        <h3
          className="text-[#697A07] tracking-[-5%] mb-0 leading-[100%] font-subheading
          text-[30px] sm:text-[55px] md:text-[80px]"
        >
          from the lands of South India
        </h3>

        <p className="py-6 md:py-10 text-[14px] md:text-[16px] leading-[150%] tracking-[-4%] max-w-[650px] mx-auto text-center">
          Born from the rugged terrains of Andra Pradesh, each piece carries
          the raw beauty of the land it comes from. The textures, curves, and
          imperfections are inspired by natural rock formations shaped over
          time by wind, water, and erosion.
          <br />
          The process is not about hiding the material's natural character, but
          elevating it, preserving its raw authenticity while refining it into
          something timeless, minimal, and luxurious.
        </p>
      </div>

      {/* Tall spacer that creates the scroll distance for the sticky zoom */}
      <div ref={wrapperRef} className="relative h-[120vh] md:h-[250vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div
            ref={boxRef}
            className="relative overflow-hidden will-change-[width,height]"
          >
            <Image
              src="/images/map.png"
              alt="map"
              fill
              sizes="100%"
              className="object-cover h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}