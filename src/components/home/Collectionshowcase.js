"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { COLLECTIONS } from "../../data/collections";

const MARQUEE_SPEED = 50;
const COLLECTION_TITLE_ID = "collection-showcase-title";

const CARD_STYLES = {
  wrapper:
    "flex w-[260px] shrink-0 flex-col items-center text-center sm:w-[320px] md:w-[420px]",
  link: "group flex w-[260px] shrink-0 cursor-pointer flex-col items-center text-center sm:w-[320px] md:w-[420px]",
  image:
    "h-[180px] w-[180px] object-contain transition-transform duration-500 group-hover:scale-105 sm:h-[240px] sm:w-[240px] md:h-[300px] md:w-[300px]",
  title:
    "mt-4 font-subheading text-[20px] text-[#1a1a1a] sm:text-[26px] md:mt-6 md:text-[30px]",
  description:
    "mt-2 px-2 text-[13px] leading-[150%] sm:text-[15px] md:mt-3 md:px-0 md:text-[16px]",
};

const IMAGE_SIZES =
  "(max-width: 640px) 180px, (max-width: 768px) 240px, 300px";

const GRADIENT_STYLE = {
  background: "linear-gradient(to bottom, #fff9ed 0%, #ffffff 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, black 55%, transparent 100%)",
  maskImage: "linear-gradient(to right, black 55%, transparent 100%)",
};

/**
 * Collection card component.
 *
 * @param {{
 *   item: {
 *     name: string;
 *     description: string;
 *     image: string;
 *     href: string;
 *   };
 *   isDuplicate?: boolean;
 * }} props
 */
function CollectionCard({ item, isDuplicate = false }) {
  return (
    <article
      className={CARD_STYLES.wrapper}
      aria-hidden={isDuplicate}
    >
      <Link
        href={item.href}
        tabIndex={isDuplicate ? -1 : undefined}
        aria-hidden={isDuplicate}
        className={CARD_STYLES.link}
      >
        <Image
          src={item.image}
          alt={isDuplicate ? "" : item.name}
          width={300}
          height={300}
          sizes={IMAGE_SIZES}
          className={CARD_STYLES.image}
          loading={isDuplicate ? "lazy" : "eager"}
        />

        <h3 className={CARD_STYLES.title}>{item.name}</h3>

        <p className={CARD_STYLES.description}>{item.description}</p>
      </Link>
    </article>
  );
}

export default function CollectionShowcase() {
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(null);
  const loopWidthRef = useRef(0);
  const isHoveredRef = useRef(false);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const updateLoopWidth = () => {
      loopWidthRef.current = track.scrollWidth / 2;
      setIsReady(true);
    };

    updateLoopWidth();

    const resizeObserver = new ResizeObserver(updateLoopWidth);
    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const track = trackRef.current;

    if (!track) return;

    const animate = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isHoveredRef.current && loopWidthRef.current > 0) {
        positionRef.current -= (MARQUEE_SPEED * deltaTime) / 1000;

        if (Math.abs(positionRef.current) >= loopWidthRef.current) {
          positionRef.current += loopWidthRef.current;
        }

        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = null;
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
    <section
      aria-labelledby={COLLECTION_TITLE_ID}
      className="sectionBg relative overflow-hidden py-[60px] md:py-[10px]"
    >
      <div className="flex min-h-auto w-full items-center justify-center overflow-hidden md:min-h-screen">
        <div className="grid w-full grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center px-5 text-center md:px-16 md:text-left">
            <h2
              id={COLLECTION_TITLE_ID}
              className="
                font-subheading
                text-[12vw]
                leading-[100%]
                tracking-[-5%]
                text-[#634020]
                md:text-[5vw]
              "
            >
              Designed to
              <br />
              transform space
            </h2>

            <Link
              href="/collections/all"
              className="btn-cta mx-auto mt-6 inline-block w-fit md:mx-0 md:mt-8"
            >
              View Collection
            </Link>
          </div>

          {/* Product Marquee */}
          <div
            className="productsSide relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Gradient Fade */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-10
                h-full
                w-[60px]
                sm:w-[90px]
                md:w-[130px]
              "
              style={GRADIENT_STYLE}
            />

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
              {COLLECTIONS.map((item) => (
                <CollectionCard
                  key={`original-${item.name}`}
                  item={item}
                />
              ))}

              {COLLECTIONS.map((item) => (
                <CollectionCard
                  key={`duplicate-${item.name}`}
                  item={item}
                  isDuplicate
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}