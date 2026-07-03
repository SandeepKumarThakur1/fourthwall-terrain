"use client";

import Image from "next/image";
import Link from "next/link";

export default function GiftingSection() {
  return (
    <section className="giftingWrapper relative py-[60px] md:py-[124px] px-4">
      <div className="text-center flex flex-col justify-between">
        <h3
          className="text-headline-1 leading-[110%]
          text-[40px] sm:text-[80px] md:text-[130px]"
        >
          The art of gifting
          <br />
          from nature
        </h3>

        <Image
          src="/images/giftImage.png"
          alt="giftImage"
          width={900}
          height={1000}
          className="mx-auto mt-[-40px] md:mt-[-130px] w-full max-w-[500px] md:max-w-[900px] h-auto"
        />

        <div className="text-center mt-6 md:mt-0">
          <Link href="/" className="inline-block btn-cta">
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
}