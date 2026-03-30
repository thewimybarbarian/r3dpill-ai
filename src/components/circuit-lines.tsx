"use client";

import { motion } from "motion/react";

/** Animated circuit board SVG overlay — data pulses flow along traced paths */
export function CircuitLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Glowing red pulse that travels along circuit paths */}
          <linearGradient id="pulse1" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="transparent" />
            <stop offset="50%" stopColor="#e11d48" stopOpacity="0.9" />
            <stop offset="60%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="pulse2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="transparent" />
            <stop offset="50%" stopColor="#fb7185" stopOpacity="0.7" />
            <stop offset="60%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          {/* Glow filter for circuit nodes */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static circuit trace lines (dim base layer) */}
        <g stroke="rgba(225, 29, 72, 0.06)" strokeWidth="1" fill="none">
          {/* Left side circuits */}
          <path d="M 0,200 L 80,200 L 80,280 L 160,280" />
          <path d="M 0,350 L 120,350 L 120,300 L 200,300 L 200,400" />
          <path d="M 60,0 L 60,120 L 140,120 L 140,200" />
          <path d="M 0,500 L 100,500 L 100,450 L 180,450 L 180,520 L 260,520" />
          <path d="M 40,600 L 40,680 L 120,680 L 120,750" />

          {/* Right side circuits */}
          <path d="M 100%,150 L calc(100% - 80),150 L calc(100% - 80),250 L calc(100% - 160),250" />
          <path d="M 100%,400 L calc(100% - 100),400 L calc(100% - 100),340 L calc(100% - 200),340" />
          <path d="M calc(100% - 60),0 L calc(100% - 60),100 L calc(100% - 140),100" />
          <path d="M 100%,550 L calc(100% - 90),550 L calc(100% - 90),480 L calc(100% - 180),480" />

          {/* Center connecting traces */}
          <path d="M 200,0 L 200,60 L 300,60 L 300,140" />
          <path d="M 350,800 L 350,720 L 450,720 L 450,650" />
        </g>

        {/* Circuit junction nodes (small dots at intersections) */}
        <g filter="url(#glow)">
          {[
            [80, 200], [80, 280], [160, 280],
            [120, 350], [120, 300], [200, 300], [200, 400],
            [60, 120], [140, 120], [140, 200],
            [100, 500], [100, 450], [180, 450], [180, 520], [260, 520],
            [40, 680], [120, 680],
            [200, 60], [300, 60], [300, 140],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="2"
              fill="#e11d48"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.6, 0.1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>
      </svg>

      {/* Animated data pulses traveling along paths */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Pulse 1 — left side, downward */}
        <motion.circle
          cx="0"
          cy="0"
          r="3"
          fill="#e11d48"
          filter="url(#glow)"
          opacity={0.8}
          animate={{
            cx: [0, 80, 80, 160],
            cy: [200, 200, 280, 280],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
        />

        {/* Pulse 2 — left zigzag */}
        <motion.circle
          cx="0"
          cy="0"
          r="2.5"
          fill="#fb7185"
          filter="url(#glow)"
          opacity={0.7}
          animate={{
            cx: [0, 120, 120, 200, 200],
            cy: [350, 350, 300, 300, 400],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
            repeatDelay: 3,
          }}
        />

        {/* Pulse 3 — top down */}
        <motion.circle
          cx="0"
          cy="0"
          r="2"
          fill="#e11d48"
          filter="url(#glow)"
          opacity={0.6}
          animate={{
            cx: [60, 60, 140, 140],
            cy: [0, 120, 120, 200],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
            repeatDelay: 4,
          }}
        />

        {/* Pulse 4 — bottom left complex path */}
        <motion.circle
          cx="0"
          cy="0"
          r="2.5"
          fill="#ff2d55"
          filter="url(#glow)"
          opacity={0.7}
          animate={{
            cx: [0, 100, 100, 180, 180, 260],
            cy: [500, 500, 450, 450, 520, 520],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
            repeatDelay: 2,
          }}
        />

        {/* Pulse 5 — center vertical */}
        <motion.circle
          cx="0"
          cy="0"
          r="2"
          fill="#fb7185"
          filter="url(#glow)"
          opacity={0.6}
          animate={{
            cx: [200, 200, 300, 300],
            cy: [0, 60, 60, 140],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
            repeatDelay: 3,
          }}
        />
      </svg>
    </div>
  );
}
