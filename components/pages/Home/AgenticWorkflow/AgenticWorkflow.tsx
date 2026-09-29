"use client";

import { blurRiseInView } from "@/components/animations";
import { PAGE_GUTTER } from "@/components/constants";
import Link from "@/components/Link";
import { cn } from "cn";
import { Boxes, FlaskConical, RefreshCcw, Waypoints } from "lucide-react";
import { motion } from "motion/react";

// Descriptions adapted from the matching skills in mattpocock/skills
const PRACTICES = [
  {
    title: "Pathfinding / Grilling",
    description:
      "I make an LLM relentlessly interview me about a plan or design until all open questions are resolved.",
    Icon: Waypoints,
  },
  {
    title: "Prototyping",
    description:
      "LLM can't think in terms of looks and feel, prototyping is for building a throwaway prototype to answer a design question.",
    Icon: FlaskConical,
  },
  {
    title: "Domain-driven Design (DDD)",
    description:
      "Having a strict common glossary of terms with an LLM improves code quality and brings clarity to documentation.",
    Icon: Boxes,
  },
  {
    title: "Red/Green TDD",
    description:
      "Writing code is done in test-driven development with a red-green-refactor loop. LLM builds features or fixes bugs one vertical slice at a time.",
    Icon: RefreshCcw,
  },
];

export default function AgenticWorkflow() {
  return (
    <section
      aria-labelledby="agentic-workflow-heading"
      className={cn("py-20 md:py-28", PAGE_GUTTER)}
    >
      <motion.h2
        {...blurRiseInView(0)}
        id="agentic-workflow-heading"
        className="text-center font-black uppercase leading-[90%] text-5xl sm:text-6xl md:text-7xl"
      >
        <span className="text-muted-foreground">Agentic</span> Workflow
      </motion.h2>

      <motion.p
        {...blurRiseInView(1)}
        className="mt-6 md:mt-8 mx-auto max-w-2xl 2xl:max-w-3xl text-center text-lg 2xl:text-xl text-muted-foreground"
      >
        I&apos;ve transitioned to agentic engineering because it lets me move
        faster while keeping a higher-level overview of the whole system, so I
        can zoom into any individual component when I have to. My workflow is
        built on{" "}
        <Link
          href="https://github.com/mattpocock/skills"
          className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4"
        >
          mattpocock/skills
        </Link>
        .
      </motion.p>

      <ul className="mt-12 md:mt-16 mx-auto max-w-7xl 2xl:max-w-[96rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {PRACTICES.map(({ title, description, Icon }, index) => (
          <motion.li
            key={title}
            {...blurRiseInView(index)}
            className={cn(
              "group relative overflow-hidden rounded-2xl border bg-card p-6 2xl:p-8",
              "transition-[border-color,box-shadow] duration-300",
              "hover:border-primary/40 hover:shadow-xl",
            )}
          >
            {/* Hero-coloured accent bar that sweeps in on hover */}
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#b54220] to-[#ea562c] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            {/* Soft glow in the corner behind the icon */}
            <div className="pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex items-start justify-between">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden />
              </div>
              <span className="text-sm font-semibold tabular-nums text-muted-foreground/60">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="relative mt-6 text-xl 2xl:text-2xl font-bold leading-tight">
              {title}
            </h3>
            <p className="relative mt-2 text-muted-foreground 2xl:text-lg">
              {description}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
