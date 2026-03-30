"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface PillGaugeProps {
  value: number;      // 0-100
  color: string;       // hex color
  label?: string;
  delay?: number;
}

export function PillGauge({ value, color, label, delay = 0 }: PillGaugeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="w-full">
      {/* Scale markers */}
      {label && (
        <div className="flex justify-between mb-1 px-1">
          <span className="font-mono text-[8px] text-cyber-muted/40">0</span>
          <span className="font-mono text-[8px] text-cyber-muted/40">50</span>
          <span className="font-mono text-[8px] text-cyber-muted/40">100</span>
        </div>
      )}
      {/* Outer pill shell */}
      <div className="relative h-7 rounded-full overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1a1a1e 0%, #0e0e10 40%, #141416 100%)',
          boxShadow: `inset 0 2px 4px rgba(0,0,0,0.6), inset 0 -1px 2px rgba(255,255,255,0.04), 0 0 12px ${color}10`,
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Inner track groove */}
        <div className="absolute inset-[3px] rounded-full overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0c0c0e 0%, #151517 50%, #0c0c0e 100%)',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.8)',
          }}
        >
          {/* Animated fill */}
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ width: "0%" }}
            animate={isInView ? { width: `${value}%` } : { width: "0%" }}
            transition={{
              duration: 1.8,
              delay: delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              background: `linear-gradient(180deg,
                ${color}40 0%,
                ${color} 35%,
                ${color}dd 55%,
                ${color}80 100%
              )`,
              boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}15, inset 0 1px 0 ${color}80`,
            }}
          >
            {/* Top highlight reflection */}
            <div
              className="absolute top-[2px] left-2 right-4 h-[5px] rounded-full opacity-40"
              style={{
                background: `linear-gradient(90deg, transparent, ${color}80 20%, white 50%, ${color}80 80%, transparent)`,
              }}
            />
            {/* Leading edge glow */}
            <motion.div
              className="absolute top-0 bottom-0 w-3 right-0"
              style={{
                background: `linear-gradient(90deg, transparent, ${color})`,
                boxShadow: `4px 0 16px ${color}80, 8px 0 32px ${color}40`,
                borderRadius: '0 9999px 9999px 0',
              }}
              animate={isInView ? { opacity: [0.6, 1, 0.6] } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 1.8,
              }}
            />
          </motion.div>
        </div>
        {/* Dot grid overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)',
            backgroundSize: '4px 4px',
          }}
        />
      </div>
    </div>
  );
}
