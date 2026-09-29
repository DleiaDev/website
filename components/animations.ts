import type { MotionProps } from "motion/react";

// Shared timing for every entrance animation
export const ENTRANCE_TRANSITION = { duration: 1, ease: "easeOut" } as const;

// Seconds between each item of a staggered group starting its entrance
export const STAGGER_DELAY = 0.15;

const BLUR_RISE_HIDDEN = { opacity: 0, y: 16, filter: "blur(8px)" };
const BLUR_RISE_VISIBLE = { opacity: 1, y: 0, filter: "blur(0px)" };

// Blurred fade that rises into place, delayed by its position in a group
export function blurRiseIn(index: number): MotionProps {
  return {
    initial: BLUR_RISE_HIDDEN,
    animate: BLUR_RISE_VISIBLE,
    transition: { ...ENTRANCE_TRANSITION, delay: index * STAGGER_DELAY },
  };
}

// Same as blurRiseIn, but plays once the element first scrolls into view
export function blurRiseInView(index: number): MotionProps {
  return {
    initial: BLUR_RISE_HIDDEN,
    whileInView: BLUR_RISE_VISIBLE,
    viewport: { once: true, amount: 0.3 },
    transition: { ...ENTRANCE_TRANSITION, delay: index * STAGGER_DELAY },
  };
}
