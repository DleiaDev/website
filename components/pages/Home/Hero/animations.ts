import type { MotionProps } from "motion/react";

// Shared timing for every hero entrance animation
export const ENTRANCE_TRANSITION = { duration: 1, ease: "easeOut" } as const;

// Seconds between each item of a staggered group starting its entrance
export const STAGGER_DELAY = 0.15;

// Blurred fade that rises into place, delayed by its position in a group
export function blurRiseIn(index: number): MotionProps {
  return {
    initial: { opacity: 0, y: 16, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { ...ENTRANCE_TRANSITION, delay: index * STAGGER_DELAY },
  };
}
