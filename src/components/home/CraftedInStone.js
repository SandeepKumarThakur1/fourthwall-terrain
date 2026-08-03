  // "use client";

  // import Image from "next/image";
  // import { useEffect, useRef } from "react";

  // export default function CraftedInStone() {
  //   const sectionRef = useRef(null);
  //   const textRef = useRef(null);
  //   const mapWrapRef = useRef(null);
  //   const revealRef = useRef(null); // circular reveal that brings the next section in from the center

  //   // NEW refs for the video-style route/pin/card animation
  //   const routePathRef = useRef(null); // dashed flight-route <path>
  //   const planeRef = useRef(null); // optional plane icon riding the route
  //   const pinRef = useRef(null); // location pin marker
  //   const cardRef = useRef(null); // location card that pops up

  //   useEffect(() => {
  //     if (typeof window === "undefined") return;

  //     let mm;

  //     const initGSAP = async () => {
  //       const gsap = (await import("gsap")).default;
  //       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  //       gsap.registerPlugin(ScrollTrigger);

  //       const section = sectionRef.current;
  //       const text = textRef.current;
  //       const mapWrap = mapWrapRef.current;
  //       const reveal = revealRef.current;
  //       const routePath = routePathRef.current;
  //       const plane = planeRef.current;
  //       const pin = pinRef.current;
  //       const card = cardRef.current;
  //       if (!section || !text || !mapWrap || !reveal) return;

  //       const ctx = gsap.context(() => {
  //         ScrollTrigger.matchMedia({
  //           "(min-width: 768px)": function () {
  //             gsap.set(reveal, { clipPath: "circle(0% at 50% 50%)", opacity: 1 });
  //             gsap.set(mapWrap, { scale: 1, y: "0%" });

  //             // route line starts fully undrawn
  //             let pathLength = 0;
  //             if (routePath) {
  //               pathLength = routePath.getTotalLength();
  //               gsap.set(routePath, {
  //                 strokeDasharray: pathLength,
  //                 strokeDashoffset: pathLength,
  //                 opacity: 1,
  //               });
  //             }
  //             if (pin)
  //               gsap.set(pin, {
  //                 scale: 0,
  //                 opacity: 0,
  //                 transformOrigin: "50% 100%",
  //               });
  //             if (card) gsap.set(card, { scale: 0.8, opacity: 0, y: 10 });
  //             if (plane) gsap.set(plane, { opacity: 0 });

  //             const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  //             // 1. Text fades out first
  //             tl.to(
  //               text,
  //               { opacity: 0, y: -40, duration: 0.25, ease: "power1.out" },
  //               0,
  //             );

  //             // 2. Map zooms in + pans (same feel as original, slightly longer window
  //             //    so the route/pin/card have room to play out while it zooms)
  //             tl.to(
  //               mapWrap,
  //               { scale: 4, y: "-10%", duration: 0.6, ease: "power3.inOut" },
  //               0,
  //             );

  //             // 3. Flight route draws itself in while the map is zooming
  //             if (routePath) {
  //               tl.to(
  //                 routePath,
  //                 { strokeDashoffset: 0, duration: 0.35, ease: "power1.inOut" },
  //                 0.15,
  //               );
  //             }

  //             // 3b. Plane icon fades in and rides along partway through the draw
  //             if (plane) {
  //               tl.to(plane, { opacity: 1, duration: 0.1 }, 0.15).to(
  //                 plane,
  //                 { opacity: 0, duration: 0.1 },
  //                 0.48,
  //               );
  //             }

  //             // 4. Pin drops/bounces in right as the route finishes drawing
  //             if (pin) {
  //               tl.to(
  //                 pin,
  //                 { scale: 1, opacity: 1, duration: 0.18, ease: "back.out(3)" },
  //                 0.42,
  //               );
  //             }

  //             // 5. Location card pops up just after the pin lands
  //             if (card) {
  //               tl.to(
  //                 card,
  //                 {
  //                   scale: 1,
  //                   opacity: 1,
  //                   y: 0,
  //                   duration: 0.18,
  //                   ease: "back.out(2)",
  //                 },
  //                 0.5,
  //               );
  //             }

  //             // 6. Circular reveal finishes at t = 1, matching end of pinned scroll
  //             tl.to(
  //               reveal,
  //               {
  //                 clipPath: "circle(150% at 50% 50%)",
  //                 duration: 0.4,
  //                 ease: "power3.inOut",
  //               },
  //               0.6,
  //             );

  //             const st = ScrollTrigger.create({
  //               animation: tl,
  //               trigger: mapWrap,
  //               start: "top top",
  //               end: "+=20%", // section itself is already 100vh (min-h-screen), so we only need
  //               // a small extra scroll budget to drive the timeline — not another full viewport
  //               pin: section,
  //               pinSpacing: true,
  //               scrub: 0.3,
  //               anticipatePin: 1,
  //               invalidateOnRefresh: true,
  //             });

  //             return () => st.kill();
  //           },
  //           "(max-width: 767px)": function () {
  //             gsap.set([text, mapWrap, section], { clearProps: "all" });
  //             gsap.set(reveal, { opacity: 0, clipPath: "circle(0% at 50% 50%)" });
  //             if (routePath) gsap.set(routePath, { opacity: 0 });
  //             if (pin) gsap.set(pin, { opacity: 0 });
  //             if (card) gsap.set(card, { opacity: 0 });
  //             return () => {};
  //           },
  //         });
  //       }, sectionRef);

  //       return () => {
  //         ctx.revert();
  //       };
  //     };

  //     initGSAP();

  //     return () => {
  //       if (mm) mm.kill();
  //     };
  //   }, []);

  //   return (
  //     <section
  //       ref={sectionRef}
  //       id="about"
  //       data-header="light"
  //       className="relative text-center sectionBg mt-[-3%] md:mt-[-5%] px-4 md:px-0 z-4 overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center"
  //     >
  //       <div ref={textRef}>
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
  //           Born from the rugged terrains of Andra Pradesh, each piece carries the
  //           raw beauty of the land it comes from. The textures, curves, and
  //           imperfections are inspired by natural rock formations shaped over time
  //           by wind, water, and erosion.
  //           <br />
  //           The process is not about hiding the material’s natural character, but
  //           elevating it, preserving its raw authenticity while refining it into
  //           something timeless, minimal, and luxurious.
  //         </p>
  //       </div>

  //       <div
  //         ref={mapWrapRef}
  //         className="mapwrapperImage relative mt-[-8%] md:mt-[-15%] text-center mb-[-30%] origin-center will-change-transform"
  //       >
  //         <Image
  //           src="/images/map.png"
  //           alt="map"
  //           width={1000}
  //           height={1000}
  //           className="w-full h-auto"
  //         />

  //         {/* --- Flight route overlay ---
  //             Adjust the x1/y1/x2/y2 (or full path "d") to the two points on
  //             YOUR map image you want the route to connect. Coordinates are in
  //             the same 0-1000 viewBox space as the 1000x1000 map image above,
  //             so you can eyeball them against the image. */}
  //         <svg
  //           className="pointer-events-none absolute inset-0 w-full h-full"
  //           viewBox="0 0 1000 1000"
  //           preserveAspectRatio="none"
  //         >
  //           <path
  //             ref={routePathRef}
  //             d="M 300 620 Q 500 420 650 380"
  //             fill="none"
  //             stroke="#697A07"
  //             strokeWidth="3"
  //             strokeLinecap="round"
  //             strokeDasharray="6 6"
  //           />
  //         </svg>

  //         {/* plane icon riding the route (optional, remove if not needed) */}
  //         <div
  //           ref={planeRef}
  //           className="absolute"
  //           style={{
  //             left: "62%",
  //             top: "39%",
  //             transform: "translate(-50%, -50%) rotate(-20deg)",
  //           }}
  //         >
  //           <svg width="22" height="22" viewBox="0 0 24 24" fill="#697A07">
  //             <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 2v1.5l3.5-1 3.5 1V21l-2.5-2v-5.5z" />
  //           </svg>
  //         </div>

  //         {/* pin marker at the route's destination point */}
  //         <div
  //           ref={pinRef}
  //           className="absolute"
  //           style={{ left: "65%", top: "38%" }}
  //         >
  //           <svg width="28" height="36" viewBox="0 0 24 32" fill="none">
  //             <path
  //               d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z"
  //               fill="#B33A3A"
  //             />
  //             <circle cx="12" cy="12" r="5" fill="#fff" />
  //           </svg>
  //         </div>

  //         {/* location card that pops up beside the pin */}
  //         <div
  //           ref={cardRef}
  //           className="absolute bg-white rounded-xl shadow-lg px-4 py-2 text-left"
  //           style={{ left: "68%", top: "30%" }}
  //         >
  //           <p className="text-[12px] font-semibold text-[#634020] leading-tight">
  //             Hyderabad
  //           </p>
  //           <p className="text-[10px] text-[#697A07] leading-tight">
  //             Andhra Pradesh
  //           </p>
  //         </div>
  //       </div>

  //       <div
  //         ref={revealRef}
  //         aria-hidden="true"
  //         className="pointer-events-none absolute inset-0 z-30 bg-[#062400] hidden md:block"
  //       />
  //     </section>
  //   );
  // }





//   "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";

// export default function CraftedInStone() {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const mapWrapRef = useRef(null);
//   const revealRef = useRef(null); // circular reveal that brings the next section in from the center

//   // refs for the video-style route/pin/card animation
//   const routePathRef = useRef(null); // dashed flight-route <path>
//   const planeRef = useRef(null); // optional plane icon riding the route
//   const pinRef = useRef(null); // location pin marker
//   const cardRef = useRef(null); // location card that pops up

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     let ctx; // will hold the gsap.context instance so we can revert it on cleanup
//     let cancelled = false; // guards against work happening after unmount, since the import below is async

//     const initGSAP = async () => {
//       const gsap = (await import("gsap")).default;
//       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
//       gsap.registerPlugin(ScrollTrigger);

//       // If the component unmounted while these imports were still loading,
//       // bail out before touching any refs/DOM at all.
//       if (cancelled) return;

//       const section = sectionRef.current;
//       const text = textRef.current;
//       const mapWrap = mapWrapRef.current;
//       const reveal = revealRef.current;
//       const routePath = routePathRef.current;
//       const plane = planeRef.current;
//       const pin = pinRef.current;
//       const card = cardRef.current;
//       if (!section || !text || !mapWrap || !reveal) return;

//       ctx = gsap.context(() => {
//         ScrollTrigger.matchMedia({
//           "(min-width: 768px)": function () {
//             gsap.set(reveal, { clipPath: "circle(0% at 50% 50%)", opacity: 1 });
//             gsap.set(mapWrap, { scale: 1, y: "0%" });

//             // route line starts fully undrawn
//             let pathLength = 0;
//             if (routePath) {
//               pathLength = routePath.getTotalLength();
//               gsap.set(routePath, {
//                 strokeDasharray: pathLength,
//                 strokeDashoffset: pathLength,
//                 opacity: 1,
//               });
//             }
//             if (pin)
//               gsap.set(pin, {
//                 scale: 0,
//                 opacity: 0,
//                 transformOrigin: "50% 100%",
//               });
//             if (card) gsap.set(card, { scale: 0.8, opacity: 0, y: 10 });
//             if (plane) gsap.set(plane, { opacity: 0 });

//             const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

//             // 1. Text fades out first
//             tl.to(
//               text,
//               { opacity: 0, y: -40, duration: 0.25, ease: "power1.out" },
//               0,
//             );

//             // 2. Map zooms in + pans
//             tl.to(
//               mapWrap,
//               { scale: 4, y: "-10%", duration: 0.6, ease: "power3.inOut" },
//               0,
//             );

//             // 3. Flight route draws itself in while the map is zooming
//             if (routePath) {
//               tl.to(
//                 routePath,
//                 { strokeDashoffset: 0, duration: 0.35, ease: "power1.inOut" },
//                 0.15,
//               );
//             }

//             // 3b. Plane icon fades in and rides along partway through the draw
//             if (plane) {
//               tl.to(plane, { opacity: 1, duration: 0.1 }, 0.15).to(
//                 plane,
//                 { opacity: 0, duration: 0.1 },
//                 0.48,
//               );
//             }

//             // 4. Pin drops/bounces in right as the route finishes drawing
//             if (pin) {
//               tl.to(
//                 pin,
//                 { scale: 1, opacity: 1, duration: 0.18, ease: "back.out(3)" },
//                 0.42,
//               );
//             }

//             // 5. Location card pops up just after the pin lands
//             if (card) {
//               tl.to(
//                 card,
//                 {
//                   scale: 1,
//                   opacity: 1,
//                   y: 0,
//                   duration: 0.18,
//                   ease: "back.out(2)",
//                 },
//                 0.5,
//               );
//             }

//             // 6. Circular reveal finishes at t = 1, matching end of pinned scroll
//             tl.to(
//               reveal,
//               {
//                 clipPath: "circle(150% at 50% 50%)",
//                 duration: 0.4,
//                 ease: "power3.inOut",
//               },
//               0.6,
//             );

//             ScrollTrigger.create({
//               animation: tl,
//               trigger: mapWrap,
//               start: "top top",
//               end: "+=20%",
//               pin: section,
//               pinSpacing: true,
//               scrub: 0.3,
//               anticipatePin: 1,
//               invalidateOnRefresh: true,
//             });

//             // No need to manually kill this ScrollTrigger here — it was created
//             // inside gsap.context(), so ctx.revert() (called on unmount below)
//             // will kill it and clean up the pin spacer for us automatically.
//           },
//           "(max-width: 767px)": function () {
//             gsap.set([text, mapWrap, section], { clearProps: "all" });
//             gsap.set(reveal, { opacity: 0, clipPath: "circle(0% at 50% 50%)" });
//             if (routePath) gsap.set(routePath, { opacity: 0 });
//             if (pin) gsap.set(pin, { opacity: 0 });
//             if (card) gsap.set(card, { opacity: 0 });
//           },
//         });
//       }, sectionRef);
//     };

//     initGSAP();

//     // This is the actual fix: we capture `ctx` in closure above and revert it
//     // here. ctx.revert() kills every ScrollTrigger/matchMedia/tween created
//     // inside gsap.context(), removes pin spacers, and restores inline styles
//     // — in the correct order, before React does its own DOM cleanup. That's
//     // what prevents the "removeChild" race.
//     return () => {
//       cancelled = true;
//       if (ctx) {
//         ctx.revert();
//       }
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       data-header="light"
//       className="relative text-center sectionBg mt-[-3%] md:mt-[-5%] px-4 md:px-0 z-4 overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center"
//     >
//       <div ref={textRef}>
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
//           Born from the rugged terrains of Andra Pradesh, each piece carries the
//           raw beauty of the land it comes from. The textures, curves, and
//           imperfections are inspired by natural rock formations shaped over time
//           by wind, water, and erosion.
//           <br />
//           The process is not about hiding the material’s natural character, but
//           elevating it, preserving its raw authenticity while refining it into
//           something timeless, minimal, and luxurious.
//         </p>
//       </div>

//       <div
//         ref={mapWrapRef}
//         className="mapwrapperImage relative mt-[-8%] md:mt-[-15%] text-center mb-[-30%] origin-center will-change-transform"
//       >
//         <Image
//           src="/images/map.png"
//           alt="map"
//           width={1000}
//           height={1000}
//           className="w-full h-auto"
//         />

//         {/* --- Flight route overlay ---
//             Adjust the x1/y1/x2/y2 (or full path "d") to the two points on
//             YOUR map image you want the route to connect. Coordinates are in
//             the same 0-1000 viewBox space as the 1000x1000 map image above,
//             so you can eyeball them against the image. */}
//         <svg
//           className="pointer-events-none absolute inset-0 w-full h-full"
//           viewBox="0 0 1000 1000"
//           preserveAspectRatio="none"
//         >
//           <path
//             ref={routePathRef}
//             d="M 300 620 Q 500 420 650 380"
//             fill="none"
//             stroke="#697A07"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="6 6"
//           />
//         </svg>

//         {/* plane icon riding the route (optional, remove if not needed) */}
//         <div
//           ref={planeRef}
//           className="absolute"
//           style={{
//             left: "62%",
//             top: "39%",
//             transform: "translate(-50%, -50%) rotate(-20deg)",
//           }}
//         >
//           <svg width="22" height="22" viewBox="0 0 24 24" fill="#697A07">
//             <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 2v1.5l3.5-1 3.5 1V21l-2.5-2v-5.5z" />
//           </svg>
//         </div>

//         {/* pin marker at the route's destination point */}
//         <div
//           ref={pinRef}
//           className="absolute"
//           style={{ left: "65%", top: "38%" }}
//         >
//           <svg width="28" height="36" viewBox="0 0 24 32" fill="none">
//             <path
//               d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z"
//               fill="#B33A3A"
//             />
//             <circle cx="12" cy="12" r="5" fill="#fff" />
//           </svg>
//         </div>

//         {/* location card that pops up beside the pin */}
//         <div
//           ref={cardRef}
//           className="absolute bg-white rounded-xl shadow-lg px-4 py-2 text-left"
//           style={{ left: "68%", top: "30%" }}
//         >
//           <p className="text-[12px] font-semibold text-[#634020] leading-tight">
//             Hyderabad
//           </p>
//           <p className="text-[10px] text-[#697A07] leading-tight">
//             Andhra Pradesh
//           </p>
//         </div>
//       </div>

//       <div
//         ref={revealRef}
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-30 bg-[#062400] hidden md:block"
//       />
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";

// useLayoutEffect's cleanup runs synchronously in React's commit/mutation
// phase, BEFORE React removes this component's DOM nodes. useEffect's
// cleanup runs AFTER — by which point GSAP's pin-spacer wrapper has already
// changed this element's real parent, so React's removeChild call targets
// a stale parent and throws. On the server useLayoutEffect just warns, so
// we fall back to useEffect there (this file is client-only anyway).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function CraftedInStone() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const mapWrapRef = useRef(null);
  const revealRef = useRef(null); // circular reveal that brings the next section in from the center

  // refs for the video-style route/pin/card animation
  const routePathRef = useRef(null); // dashed flight-route <path>
  const planeRef = useRef(null); // optional plane icon riding the route
  const pinRef = useRef(null); // location pin marker
  const cardRef = useRef(null); // location card that pops up

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    let ctx; // will hold the gsap.context instance so we can revert it on cleanup
    let cancelled = false; // guards against work happening after unmount, since the import below is async

    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // If the component unmounted while these imports were still loading,
      // bail out before touching any refs/DOM at all.
      if (cancelled) return;

      const section = sectionRef.current;
      const text = textRef.current;
      const mapWrap = mapWrapRef.current;
      const reveal = revealRef.current;
      const routePath = routePathRef.current;
      const plane = planeRef.current;
      const pin = pinRef.current;
      const card = cardRef.current;
      if (!section || !text || !mapWrap || !reveal) return;

      ctx = gsap.context(() => {
        ScrollTrigger.matchMedia({
          "(min-width: 768px)": function () {
            gsap.set(reveal, { clipPath: "circle(0% at 50% 50%)", opacity: 1 });
            gsap.set(mapWrap, { scale: 1, y: "0%" });

            // route line starts fully undrawn
            let pathLength = 0;
            if (routePath) {
              pathLength = routePath.getTotalLength();
              gsap.set(routePath, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
                opacity: 1,
              });
            }
            if (pin)
              gsap.set(pin, {
                scale: 0,
                opacity: 0,
                transformOrigin: "50% 100%",
              });
            if (card) gsap.set(card, { scale: 0.8, opacity: 0, y: 10 });
            if (plane) gsap.set(plane, { opacity: 0 });

            const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

            // 1. Text fades out first
            tl.to(
              text,
              { opacity: 0, y: -40, duration: 0.25, ease: "power1.out" },
              0,
            );

            // 2. Map zooms in + pans
            tl.to(
              mapWrap,
              { scale: 4, y: "-10%", duration: 0.6, ease: "power3.inOut" },
              0,
            );

            // 3. Flight route draws itself in while the map is zooming
            if (routePath) {
              tl.to(
                routePath,
                { strokeDashoffset: 0, duration: 0.35, ease: "power1.inOut" },
                0.15,
              );
            }

            // 3b. Plane icon fades in and rides along partway through the draw
            if (plane) {
              tl.to(plane, { opacity: 1, duration: 0.1 }, 0.15).to(
                plane,
                { opacity: 0, duration: 0.1 },
                0.48,
              );
            }

            // 4. Pin drops/bounces in right as the route finishes drawing
            if (pin) {
              tl.to(
                pin,
                { scale: 1, opacity: 1, duration: 0.18, ease: "back.out(3)" },
                0.42,
              );
            }

            // 5. Location card pops up just after the pin lands
            if (card) {
              tl.to(
                card,
                {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  duration: 0.18,
                  ease: "back.out(2)",
                },
                0.5,
              );
            }

            // 6. Circular reveal finishes at t = 1, matching end of pinned scroll
            tl.to(
              reveal,
              {
                clipPath: "circle(150% at 50% 50%)",
                duration: 0.4,
                ease: "power3.inOut",
              },
              0.6,
            );

            ScrollTrigger.create({
              animation: tl,
              trigger: mapWrap,
              start: "top top",
              end: "+=20%",
              pin: section,
              pinSpacing: true,
              scrub: 0.3,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            });

            // No need to manually kill this ScrollTrigger here — it was created
            // inside gsap.context(), so ctx.revert() (called on unmount below)
            // will kill it and clean up the pin spacer for us automatically.
          },
          "(max-width: 767px)": function () {
            gsap.set([text, mapWrap, section], { clearProps: "all" });
            gsap.set(reveal, { opacity: 0, clipPath: "circle(0% at 50% 50%)" });
            if (routePath) gsap.set(routePath, { opacity: 0 });
            if (pin) gsap.set(pin, { opacity: 0 });
            if (card) gsap.set(card, { opacity: 0 });
          },
        });
      }, sectionRef);
    };

    initGSAP();

    // This is the actual fix: we capture `ctx` in closure above and revert it
    // here. ctx.revert() kills every ScrollTrigger/matchMedia/tween created
    // inside gsap.context(), removes pin spacers, and restores inline styles
    // — in the correct order, before React does its own DOM cleanup. That's
    // what prevents the "removeChild" race.
    return () => {
      cancelled = true;
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-header="light"
      className="relative text-center sectionBg mt-[-3%] md:mt-[-5%] px-4 md:px-0 z-4 overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center"
    >
      <div ref={textRef}>
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
          Born from the rugged terrains of Andra Pradesh, each piece carries the
          raw beauty of the land it comes from. The textures, curves, and
          imperfections are inspired by natural rock formations shaped over time
          by wind, water, and erosion.
          <br />
          The process is not about hiding the material’s natural character, but
          elevating it, preserving its raw authenticity while refining it into
          something timeless, minimal, and luxurious.
        </p>
      </div>

      <div
        ref={mapWrapRef}
        className="mapwrapperImage relative mt-[-8%] md:mt-[-15%] text-center mb-[-30%] origin-center will-change-transform"
      >
        <Image
          src="/images/map.png"
          alt="map"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />

        {/* --- Flight route overlay ---
            Adjust the x1/y1/x2/y2 (or full path "d") to the two points on
            YOUR map image you want the route to connect. Coordinates are in
            the same 0-1000 viewBox space as the 1000x1000 map image above,
            so you can eyeball them against the image. */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            ref={routePathRef}
            d="M 300 620 Q 500 420 650 380"
            fill="none"
            stroke="#697A07"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="6 6"
          />
        </svg>

        {/* plane icon riding the route (optional, remove if not needed) */}
        <div
          ref={planeRef}
          className="absolute"
          style={{
            left: "62%",
            top: "39%",
            transform: "translate(-50%, -50%) rotate(-20deg)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#697A07">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 2v1.5l3.5-1 3.5 1V21l-2.5-2v-5.5z" />
          </svg>
        </div>

        {/* pin marker at the route's destination point */}
        <div
          ref={pinRef}
          className="absolute"
          style={{ left: "65%", top: "38%" }}
        >
          <svg width="28" height="36" viewBox="0 0 24 32" fill="none">
            <path
              d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z"
              fill="#B33A3A"
            />
            <circle cx="12" cy="12" r="5" fill="#fff" />
          </svg>
        </div>

        {/* location card that pops up beside the pin */}
        <div
          ref={cardRef}
          className="absolute bg-white rounded-xl shadow-lg px-4 py-2 text-left"
          style={{ left: "68%", top: "30%" }}
        >
          <p className="text-[12px] font-semibold text-[#634020] leading-tight">
            Hyderabad
          </p>
          <p className="text-[10px] text-[#697A07] leading-tight">
            Andhra Pradesh
          </p>
        </div>
      </div>

      <div
        ref={revealRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 bg-[#062400] hidden md:block"
      />
    </section>
  );
}