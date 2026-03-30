"use client";

import { motion } from "motion/react";

// Stagger children with a cyberpunk fade-up + glitch feel
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const glitchIn = {
  hidden: { opacity: 0, x: -20, skewX: -5 },
  show: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function AnimatedHero({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export function GlitchIn({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={glitchIn} className={className}>
      {/* Periodic glitch flicker — like circuit interference */}
      <motion.div
        animate={{
          x: [0, -2, 3, -1, 0],
          opacity: [1, 0.8, 1, 0.9, 1],
          skewX: [0, -1, 1.5, -0.5, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function ScaleIn({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={scaleIn} className={className}>
      {children}
    </motion.div>
  );
}

export function PulseGlow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          "0 0 15px rgba(225, 29, 72, 0.3)",
          "0 0 30px rgba(225, 29, 72, 0.6)",
          "0 0 15px rgba(225, 29, 72, 0.3)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
