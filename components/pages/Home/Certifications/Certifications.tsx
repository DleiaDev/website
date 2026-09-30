"use client";

import { blurRiseInView } from "@/components/animations";
import BackgroundGrid from "@/components/BackgroundGrid";
import { GRID_BACKDROP, PAGE_GUTTER } from "@/components/constants";
import { cn } from "cn";
import { motion } from "motion/react";
import Image from "next/image";

const BADGE_LINK = "group relative block cursor-pointer";

const BADGE_IMAGE = cn(
  "size-64 sm:size-72 2xl:size-80",
  "transition-transform duration-300 ease-out group-hover:scale-110",
);

export default function Certifications() {
  return (
    <section
      aria-labelledby="certifications-heading"
      className={cn("relative isolate py-20 md:py-28", PAGE_GUTTER)}
    >
      <BackgroundGrid surface="white" className="-z-10" />
      <motion.h2
        {...blurRiseInView(0)}
        id="certifications-heading"
        className="text-center font-black uppercase leading-[90%] text-5xl sm:text-6xl md:text-7xl"
      >
        <span className="text-muted-foreground">My</span> Certifications
      </motion.h2>

      <div
        className={cn(
          "mt-12 md:mt-16 w-fit mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16",
          GRID_BACKDROP,
        )}
      >
        <motion.a
          {...blurRiseInView(0)}
          href="https://www.linkedin.com/feed/update/urn:li:activity:7360631445846999040"
          target="_blank"
          rel="noopener noreferrer"
          className={BADGE_LINK}
        >
          <Image
            src="/AWS_Certified_Solutions_Architect_Associate.webp"
            alt="AWS Certified Solutions Architect – Associate"
            width={600}
            height={600}
            className={BADGE_IMAGE}
          />
        </motion.a>

        {/* No href yet: a placeholder link that never navigates or touches history */}
        <motion.a
          {...blurRiseInView(1)}
          aria-disabled="true"
          className={BADGE_LINK}
        >
          <Image
            src="/AWS_Certified_Solutions_Architect_Professional.png"
            alt="AWS Certified Solutions Architect – Professional (in progress)"
            width={600}
            height={600}
            className={cn(BADGE_IMAGE, "opacity-40")}
          />
          <span className="absolute inset-0 flex items-center justify-center text-center text-2xl 2xl:text-3xl font-black uppercase tracking-wider">
            In Progress
          </span>
        </motion.a>
      </div>
    </section>
  );
}
