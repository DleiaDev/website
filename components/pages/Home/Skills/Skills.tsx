"use client";

import { blurRiseInView, ENTRANCE_TRANSITION } from "@/components/animations";
import BackgroundGrid from "@/components/BackgroundGrid";
import { GRID_BACKDROP, PAGE_GUTTER } from "@/components/constants";
import { cn } from "cn";
import { motion } from "motion/react";
import Image from "next/image";

// Each icon lives in public/skills-icons/<icon>.svg
const SKILLS = [
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Linux", icon: "linux" },
  { name: "Bash", icon: "bash" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "GitHub Actions", icon: "github-actions" },
  { name: "GitLab", icon: "gitlab" },
  { name: "Neovim", icon: "neovim" },
  { name: "Claude Code", icon: "claudecode" },
  { name: "Python", icon: "python" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Vue", icon: "vue" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "PHP", icon: "php" },
  { name: "Laravel", icon: "laravel" },
];

// Tighter than STAGGER_DELAY so a grid this size doesn't take seconds to fill in
const TILE_STAGGER_DELAY = 0.04;

export default function Skills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className={cn("relative isolate py-20 md:py-28", PAGE_GUTTER)}
    >
      <BackgroundGrid surface="white" className="-z-10" />
      <motion.h2
        {...blurRiseInView(0)}
        id="skills-heading"
        className="text-center font-black uppercase leading-[90%] text-5xl sm:text-6xl md:text-7xl"
      >
        <span className="text-muted-foreground">My</span> Skills
      </motion.h2>

      <ul
        className={cn(
          "mt-12 md:mt-16 mx-auto max-w-7xl 2xl:max-w-[96rem] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 md:gap-4",
          GRID_BACKDROP,
        )}
      >
        {SKILLS.map(({ name, icon }, index) => (
          <motion.li
            key={icon}
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              ...ENTRANCE_TRANSITION,
              delay: index * TILE_STAGGER_DELAY,
            }}
            className={cn(
              "group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border bg-card p-3",
              "transition-[border-color,box-shadow,translate] duration-300 ease-out",
              "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl",
            )}
          >
            {/* Soft primary glow that blooms behind the icon on hover */}
            <div className="pointer-events-none absolute inset-0 bg-radial from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {/* Hero-coloured accent bar that sweeps in on hover */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-[#b54220] to-[#ea562c] transition-transform duration-500 ease-out group-hover:scale-x-100" />

            <Image
              src={`/skills-icons/${icon}.svg`}
              alt=""
              width={48}
              height={48}
              className="relative size-10 md:size-12 2xl:size-14 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
            />
            <span className="relative text-center text-xs md:text-sm font-semibold leading-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              {name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
