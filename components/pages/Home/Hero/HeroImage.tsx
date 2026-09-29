"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

const MotionImage = motion.create(Image);

// Fraction of the scroll distance the image trails behind the page
const PARALLAX_FACTOR = 0.3;

// Distance in px the image rises from on page load
const ENTRANCE_OFFSET = 80;

const ENTRANCE_TRANSITION = { duration: 0.5, ease: "easeOut" } as const;

export default function HeroImage({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const entranceY = useMotionValue(ENTRANCE_OFFSET);

  // Parallax and entrance both drive y, so they are summed into one value
  const y = useTransform(
    [scrollY, entranceY],
    ([scroll, entrance]: number[]) => scroll * PARALLAX_FACTOR + entrance,
  );

  useEffect(() => {
    const controls = animate(entranceY, 0, ENTRANCE_TRANSITION);
    return () => controls.stop();
  }, [entranceY]);

  return (
    <MotionImage
      src="/me.png"
      alt="Marko Ilic"
      width={1254}
      height={871}
      loading="eager"
      fetchPriority="high"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={ENTRANCE_TRANSITION}
      style={{ y: prefersReducedMotion ? 0 : y }}
      className={className}
    />
  );
}
