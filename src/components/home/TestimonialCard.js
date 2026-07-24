"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function TestimonialCard({ item }) {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const playVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.log(err);
    }
  };

  const pauseVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = async (e) => {
    e.stopPropagation();

    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      await playVideo();
    } else {
      pauseVideo();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();

    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleEnter = async () => {
    await playVideo();
  };

  const handleLeave = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    videoRef.current.muted = true;
    setIsMuted(true);
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative shrink-0 overflow-hidden rounded-[10px]
      w-[220px] sm:w-[280px] md:w-[340px]
      h-[360px] sm:h-[450px] md:h-[540px]"
    >
      {/* Video */}
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

      {/* Controls */}
      <div className="absolute inset-0 z-20">
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="absolute left-1/2 top-1/2 flex h-16 w-16
          -translate-x-1/2 -translate-y-1/2
          items-center justify-center rounded-full
          bg-black/40 backdrop-blur-md
          border border-white/30 text-white
          transition-all duration-300 hover:scale-110 hover:bg-black/60"
        >
          {isPlaying ? (
            <Pause size={28} fill="currentColor" />
          ) : (
            <Play size={28} fill="currentColor" className="ml-1" />
          )}
        </button>

        {/* Mute / Unmute */}
        <button
          onClick={toggleMute}
          className="absolute right-4 top-4 flex h-11 w-11
          items-center justify-center rounded-full
          bg-black/40 backdrop-blur-md
          border border-white/30 text-white
          transition-all duration-300 hover:scale-110 hover:bg-black/60"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* User Info */}
      <div className="absolute bottom-5 left-5 right-5 z-30 flex items-center gap-3">
        <Image
          src="/images/userImage.png"
          alt="User"
          width={45}
          height={45}
          className="rounded-full"
        />

        <div>
          <h4 className="text-white font-semibold">{item.name}</h4>
          <p className="text-white/70">{item.role}</p>
        </div>
      </div>
    </div>
  );
}