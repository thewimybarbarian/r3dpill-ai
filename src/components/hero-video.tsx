"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HeroVideoProps {
  /** HLS manifest URL (.m3u8) */
  src?: string;
  /** Direct MP4 fallback URL */
  fallbackSrc?: string;
}

export function HeroVideo({ src, fallbackSrc }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If we have an HLS source, try to use hls.js
    if (src && Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal && fallbackSrc) {
          hls.destroy();
          video.src = fallbackSrc;
          video.play().catch(() => {});
        }
      });
      return () => hls.destroy();
    }

    // Native HLS support (Safari)
    if (src && video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(() => {});
      return;
    }

    // Fallback to MP4
    if (fallbackSrc) {
      video.src = fallbackSrc;
      video.play().catch(() => {});
    }
  }, [src, fallbackSrc]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full h-full object-cover mix-blend-screen opacity-40"
      />
      {/* Gradient overlays to blend video edges into the black background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-transparent to-cyber-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-black/60 via-transparent to-cyber-black/60" />
      {/* Red tint overlay */}
      <div className="absolute inset-0 bg-pill-red/5 mix-blend-overlay" />
    </div>
  );
}
