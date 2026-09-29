"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";

const MotionImage = motion.create(Image);

// Fraction of the scroll distance the image trails behind the page
const PARALLAX_FACTOR = 0.3;

export default function HeroImage({ className }: { className?: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => value * PARALLAX_FACTOR);
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionImage
      src="/me.png"
      alt="Marko Ilic"
      width={1254}
      height={871}
      loading="eager"
      fetchPriority="high"
      style={{ y: prefersReducedMotion ? 0 : y }}
      className={className}
    />
  );
}
