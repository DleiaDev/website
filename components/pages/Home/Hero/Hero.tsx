import Navbar from "@/components/Navbar";
import HeroActions from "@/components/pages/Home/Hero/HeroActions";
import HeroGrid from "@/components/pages/Home/Hero/HeroGrid";
import { HERO_GUTTER } from "@/components/pages/Home/Hero/constants";
import { cn } from "cn";
import Image from "next/image";

const CAREER_START_YEAR = 2018;

export default function HomeHero() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative h-svh bg-linear-to-r from-[#b54220] to-[#ea562c]">
      {/* In-flow content, painted beneath all positioned layers */}
      <div className={HERO_GUTTER}>
        <Navbar />

        <div className="mt-16 text-white text-center uppercase">
          <h1 className="font-black text-[140px] leading-[90%]">
            <span className="sr-only">Marko Ilic, </span>
            Software
            <br />
            Engineer
          </h1>
          <p className="text-3xl font-extrabold mt-2">
            With {currentYear - CAREER_START_YEAR} years of experience
          </p>
        </div>

        <p className="mt-16 text-white font-medium text-2xl uppercase">
          I translate loose
          <br />
          ideas into production
          <br />
          software
        </p>
      </div>

      {/* Decorative name, the accessible name lives in the h1 */}
      <div
        aria-hidden
        className="z-0 absolute inset-x-0 bottom-[20%] px-[10%] text-white/30 uppercase"
      >
        <p className="w-full text-center font-black text-[18em] whitespace-nowrap -mb-24">
          Marko Ilic
        </p>
        <p className="ml-52 text-2xl font-medium">&copy;{currentYear}</p>
      </div>

      <HeroGrid className="z-10" />

      <Image
        src="/me.png"
        alt="Marko Ilic"
        width={1254}
        height={871}
        loading="eager"
        fetchPriority="high"
        className="z-20 absolute inset-x-0 bottom-0 mx-auto max-h-svh max-w-[70%] pointer-events-none"
      />

      {/* Bottom glow */}
      <div className="z-30 pointer-events-none absolute inset-0 bg-linear-to-b from-white/0 from-90% to-[#f85802]/30" />

      {/* Bottom blur */}
      <div className="z-40 h-1/4 pointer-events-none absolute inset-x-0 bottom-0 bg-white/10 backdrop-blur-lg backdrop-saturate-150 [mask-image:linear-gradient(to_bottom,transparent,black_90%)]" />

      <div
        className={cn(
          "z-50 absolute inset-x-0 bottom-12 flex justify-end",
          HERO_GUTTER,
        )}
      >
        <HeroActions />
      </div>
    </div>
  );
}
