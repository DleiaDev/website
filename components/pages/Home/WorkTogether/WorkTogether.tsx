"use client";

import { blurRiseInView } from "@/components/animations";
import { CV_HREF, PAGE_GUTTER } from "@/components/constants";
import Link from "@/components/Link";
import LinkedinIcon from "@/components/LinkedinIcon";
import BackgroundGrid from "@/components/BackgroundGrid";
import { cn } from "cn";
import { ArrowDown, ArrowUpRight, FileText, Mail } from "lucide-react";
import { motion } from "motion/react";

const EMAIL = "marko97.ilic97@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/markoilicdev";

// Glassy tile on the gradient that inverts to solid white on hover
const ACTION_CARD = cn(
  "group relative flex h-full items-center gap-4 rounded-2xl p-5 2xl:p-6",
  "border border-white/20 bg-white/10 text-white backdrop-blur-md",
  "transition-[background-color,border-color,color,translate,box-shadow] duration-300 ease-out",
  "hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#b54220] hover:shadow-2xl",
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
);

const ACTION_ICON = cn(
  "flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/15",
  "transition-colors duration-300 group-hover:bg-[#b54220] group-hover:text-white",
);

const ACTION_ARROW =
  "ml-auto size-6 shrink-0 transition-transform duration-300 ease-out";

export default function WorkTogether() {
  return (
    <section
      aria-labelledby="work-together-heading"
      className="relative isolate overflow-hidden bg-linear-to-r from-[#b54220] to-[#ea562c]"
    >
      <BackgroundGrid className="-z-10 opacity-60" />
      <div className={cn("py-16 md:py-24 2xl:py-32", PAGE_GUTTER)}>
        {/* Soft light pooling behind the heading */}
        <div className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 aspect-square w-[60rem] max-w-[150%] -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />

        <motion.p
          {...blurRiseInView(0)}
          className="text-center text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-white/70"
        >
          Get in touch
        </motion.p>

        <motion.h2
          {...blurRiseInView(1)}
          id="work-together-heading"
          className="mt-4 text-center font-black uppercase leading-[90%] text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-white/60">Let&apos;s</span> work
          <br />
          together
        </motion.h2>

        <motion.p
          {...blurRiseInView(2)}
          className="mt-6 md:mt-8 mx-auto max-w-2xl 2xl:max-w-3xl text-center text-lg 2xl:text-xl text-white/85"
        >
          Whether you have a product to build, a system to scale, or a role to
          fill, I&apos;d be glad to hear about it. Reach out directly, or grab
          my CV for the full picture.
        </motion.p>

        <ul className="mt-12 md:mt-16 mx-auto max-w-5xl 2xl:max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.li {...blurRiseInView(3)}>
            <Link
              href={`mailto:${EMAIL}`}
              className={ACTION_CARD}
            >
              <span className={ACTION_ICON}>
                <Mail className="size-6" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-lg font-bold">Email me</span>
                <span className="block truncate text-sm opacity-80">
                  {EMAIL}
                </span>
              </span>
              <ArrowUpRight
                className={cn(
                  ACTION_ARROW,
                  "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                )}
                aria-hidden
              />
            </Link>
          </motion.li>

          <motion.li {...blurRiseInView(4)}>
            <Link
              href={LINKEDIN_URL}
              className={ACTION_CARD}
            >
              <span className={ACTION_ICON}>
                <LinkedinIcon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-lg font-bold">
                  Connect on LinkedIn
                </span>
                <span className="block truncate text-sm opacity-80">
                  in/markoilicdev
                </span>
              </span>
              <ArrowUpRight
                className={cn(
                  ACTION_ARROW,
                  "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                )}
                aria-hidden
              />
            </Link>
          </motion.li>

          <motion.li {...blurRiseInView(5)}>
            <a href={CV_HREF} download className={ACTION_CARD}>
              <span className={ACTION_ICON}>
                <FileText className="size-6" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-lg font-bold">Download CV</span>
                <span className="block truncate text-sm opacity-80">
                  PDF · Full experience
                </span>
              </span>
              <ArrowDown
                className={cn(ACTION_ARROW, "group-hover:translate-y-0.5")}
                aria-hidden
              />
            </a>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
