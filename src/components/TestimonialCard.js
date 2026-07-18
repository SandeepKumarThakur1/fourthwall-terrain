"use client";

import { useRef } from "react";
import Image from "next/image";

export default function TestimonialCard({ item }) {
  const videoRef = useRef(null);

  const handleEnter = async () => {
    try {
      await videoRef.current?.play();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative shrink-0 overflow-hidden rounded-[10px]
      w-[220px] sm:w-[280px] md:w-[340px]
      h-[360px] sm:h-[450px] md:h-[540px]"
    >
      {/* Video (thumbnail = first frame) */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={item.video} type="video/mp4" />
      </video>

      {/* Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/10 to-transparent" />

      {/* User Info */}
      <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center gap-3">
        <Image
          src="/images/userImage.png"
          alt="User"
          width={45}
          height={45}
          className="rounded-full"
        />

        <div>
          <h4 className="text-white font-semibold">
            {item.name}
          </h4>

          <p className="text-white/70">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}