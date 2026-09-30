"use client";

import { blurRiseInView } from "@/components/animations";
import BackgroundGrid from "@/components/BackgroundGrid";
import { GRID_BACKDROP, PAGE_GUTTER } from "@/components/constants";
import TimelineRail from "@/components/pages/Home/ExperienceTimeline/TimelineRail";
import { EXPERIENCE } from "@/components/pages/Home/ExperienceTimeline/experience";
import { cn } from "cn";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Mobile: rail | year stacked above content. Desktop: year | rail | content.
const ENTRY_GRID = cn(
  "grid gap-x-4 grid-cols-[1.5rem_1fr]",
  "md:gap-x-6 md:grid-cols-[8rem_1.5rem_1fr]",
  "2xl:gap-x-8 2xl:grid-cols-[12rem_1.5rem_1fr]",
);

// Rail column position shared by the lead-in and every entry
const RAIL_COLUMN = "col-start-1 md:col-start-2";

export default function ExperienceTimeline() {
  const entryRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    // Active entry is the last one whose top has passed the viewport center.
    // Each entry owns the gap below it, so this clamps to the first and last.
    const update = () => {
      frame = 0;
      const center = window.innerHeight / 2;
      let index = 0;
      entryRefs.current.forEach((entry, i) => {
        if (entry && entry.getBoundingClientRect().top <= center) index = i;
      });
      setActiveIndex(index);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={cn("relative isolate py-20 md:py-28", PAGE_GUTTER)}
    >
      <BackgroundGrid surface="white" className="-z-10" />
      <motion.h2
        {...blurRiseInView(0)}
        id="experience-heading"
        className="text-center font-black uppercase leading-[90%] text-5xl sm:text-6xl md:text-7xl"
      >
        <span className="text-muted-foreground">My</span> Experience
      </motion.h2>

      {/* --dot-y centers the dot on the year's line box (leading-none, so half its font size) */}
      <div
        className={cn(
          "mt-12 md:mt-16 w-full md:w-fit md:max-w-3xl 2xl:max-w-5xl md:mx-auto [--dot-y:1.5rem] 2xl:[--dot-y:2.25rem]",
          GRID_BACKDROP,
        )}
      >
        {/* Lead-in line above the first entry */}
        <motion.div {...blurRiseInView(0)} className={cn(ENTRY_GRID, "h-16")}>
          <TimelineRail
            active={false}
            withDot={false}
            className={RAIL_COLUMN}
          />
        </motion.div>

        <ol>
          {EXPERIENCE.map((item, index) => {
            const active = index === activeIndex;
            const isLast = index === EXPERIENCE.length - 1;

            return (
              <motion.li
                key={`${item.year}-${item.company}`}
                {...blurRiseInView(0)}
                ref={(el) => {
                  entryRefs.current[index] = el;
                }}
                aria-current={active ? "step" : undefined}
                className={ENTRY_GRID}
              >
                <TimelineRail
                  active={active}
                  extendToNext={!isLast}
                  className={cn(
                    RAIL_COLUMN,
                    "row-start-1 row-span-2 md:row-span-1",
                  )}
                />

                <p
                  className={cn(
                    "row-start-1 col-start-2",
                    "text-5xl 2xl:text-7xl font-semibold tabular-nums leading-none",
                    "transition-opacity duration-250",
                    "md:col-start-1 md:text-right",
                    active ? "opacity-100" : "opacity-40",
                  )}
                >
                  {item.year}
                </p>

                <div
                  className={cn(
                    "row-start-2 col-start-2 md:row-start-1 md:col-start-3",
                    "mt-3 md:mt-0 pb-16 md:pb-20",
                    "transition-opacity duration-250",
                    active ? "opacity-100" : "opacity-40",
                  )}
                >
                  {/* On desktop, the top margin centers the role's first line on the year's */}
                  <h3 className="text-3xl font-bold leading-9 md:mt-1.5 2xl:text-4xl 2xl:leading-10 2xl:mt-4">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-xl 2xl:text-2xl font-medium uppercase tracking-wider text-primary">
                    {item.company}
                  </p>
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-muted-foreground marker:text-neutral-400 2xl:mt-4 2xl:text-lg">
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 2xl:mt-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-neutral-500 px-2.5 py-1 text-xs font-medium text-white 2xl:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
