import Navbar from "@/components/Navbar";
import HeroActions from "@/components/pages/Home/Hero/HeroActions";
import BackgroundGrid from "@/components/BackgroundGrid";
import HeroImage from "@/components/pages/Home/Hero/HeroImage";
import { blurRiseIn, ENTRANCE_TRANSITION } from "@/components/animations";
import { PAGE_GUTTER } from "@/components/constants";
import { cn } from "cn";
import * as motion from "motion/react-client";

const CAREER_START_YEAR = 2018;

const TAGLINE_LINES = [
  "I translate loose",
  "ideas into production",
  "software",
];

export default function HomeHero() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-hidden relative h-svh bg-linear-to-r from-[#b54220] to-[#ea562c]">
      {/* In-flow content, painted beneath all positioned layers */}
      <div className={PAGE_GUTTER}>
        <Navbar />

        <motion.div
          initial={{ opacity: 0, scale: 1.2, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={ENTRANCE_TRANSITION}
          className="text-white text-center uppercase mt-4 sm:mt-6 md:mt-8 2xl:mt-16"
        >
          <h1 className="font-black leading-[90%] text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
            <span className="sr-only">Marko Ilic, </span>
            Software
            <br />
            Engineer
          </h1>
          <p className="font-extrabold mt-2 lg:text-2xl xl:text-3xl">
            With {currentYear - CAREER_START_YEAR} years of experience
          </p>
        </motion.div>

        <p
          className={cn(
            "text-white font-medium uppercase",
            "mt-4 text-center",
            "sm:mt-6",
            "md:text-xl md:mt-10",
            "lg:text-left lg:mt-[3svh]",
            "xl:text-2xl xl:font-normal",
          )}
        >
          {TAGLINE_LINES.map((line, index) => (
            <motion.span key={line} {...blurRiseIn(index)} className="block">
              {line}
            </motion.span>
          ))}
        </p>
      </div>

      {/* Decorative name, the accessible name lives in the h1 */}
      <div
        aria-hidden
        className={cn(
          "z-0 absolute inset-x-0 text-white/30 uppercase",
          "bottom-40 xs:bottom-60 sm:bottom-[18svh] lg:bottom-[15svh]",
          PAGE_GUTTER,
        )}
      >
        {/* Shrink-wraps the name so the © line can align with its first glyph */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={ENTRANCE_TRANSITION}
          className={cn(
            "w-fit xl:mx-auto",
            "[--name-size:5rem]",
            "xxxs:[--name-size:6rem]",
            "xxs[--name-size:7rem]",
            "xs:[--name-size:8rem]",
            "sm:[--name-size:9rem]",
            "md:[--name-size:10rem]",
            "xl:[--name-size:14.5vw]",
            "2xl:[--name-size:14vw]",
          )}
        >
          <p className="font-black leading-none text-(length:--name-size) xl:whitespace-nowrap">
            Marko <br className="xl:hidden" /> Ilic
          </p>
          {/* Offsets cancel the M's left side bearing and the space below the
              baseline, both of which scale with --name-size */}
          <p className="font-medium ml-[calc(var(--name-size)*0.06)] mt-[calc(var(--name-size)*-0.12)] text-lg sm:text-xl md:text-2xl">
            &copy;{currentYear}
          </p>
        </motion.div>
      </div>

      <BackgroundGrid className="z-10" />

      <HeroImage
        className={cn(
          "z-20 absolute bottom-0 pointer-events-none",
          "max-w-170 -right-52",
          "xs:max-w-190",
          "md:max-w-200",
          "xl:max-w-[min(50%,calc(58svh*1254/871))] xl:inset-x-0 xl:mx-auto",
          // Cap width so the height (via aspect ratio) never exceeds 50svh
          "2xl:max-w-[min(60%,calc(70svh*1254/871))]",
        )}
      />

      {/* Bottom glow */}
      <div className="z-30 pointer-events-none absolute inset-0 bg-linear-to-b from-white/0 from-90% to-[#f85802]/30" />

      {/* Bottom blur */}
      <div className="z-40 h-1/4 pointer-events-none absolute inset-x-0 bottom-0 bg-white/10 backdrop-blur-lg backdrop-saturate-150 [mask-image:linear-gradient(to_bottom,transparent,black_90%)]" />

      <div
        className={cn(
          "z-50 w-full absolute bottom-12 flex justify-center xl:justify-end",
          PAGE_GUTTER,
        )}
      >
        <HeroActions />
      </div>
    </div>
  );
}
