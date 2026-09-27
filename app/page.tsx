import GithubIcon from "@/components/GithubIcon";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-svh bg-linear-to-r from-[#b54220] to-[#ea562c]">
      <Navbar />
      <div className="px-20 mt-16 text-white text-center uppercase">
        <h2 className="font-black text-[140px] leading-[90%]">
          Software
          <br />
          Engineer
        </h2>
        <p className="text-3xl font-extrabold mt-2">
          With 8 years of experience
        </p>
      </div>
      <p className="px-20 mt-16 text-white font-medium text-2xl uppercase">
        I translate loose
        <br />
        ideas into production
        <br />
        software
      </p>
      <Image
        src="/me.png"
        alt="Marko Ilic"
        width={1254}
        height={871}
        className="z-10 absolute inset-x-0 bottom-0 mx-auto max-h-svh max-w-[70%]"
      />
      <div className="w-full absolute px-[10%] bottom-[20%] left-0 text-white/30 uppercase">
        <h1 className="w-full text-center font-black text-[18em] whitespace-nowrap -mb-24">
          Marko Ilic
        </h1>
        <p className="ml-52 text-2xl font-medium">&copy;2026</p>
      </div>
      <div className="pointer-events-none absolute inset-0">
        {/* vertical lines */}
        <div className="absolute inset-0 flex justify-between px-20">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-px bg-white/20" />
          ))}
        </div>

        {/* horizontal lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-32">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-px bg-white/20" />
          ))}
        </div>

        {/* crosses */}
        <div className="absolute inset-0 flex flex-col justify-between py-32">
          {[...Array(4)].map((_, r) => (
            <div key={r} className="flex h-px justify-between px-20">
              {[...Array(4)].map((_, c) => (
                <div
                  key={c}
                  className="relative size-px before:absolute before:left-1/2 before:top-0 before:h-px before:w-3 before:-translate-x-1/2 before:bg-white after:absolute after:left-0 after:top-1/2 after:h-3 after:w-px after:-translate-y-1/2 after:bg-white"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="z-20 h-full w-full pointer-events-none absolute left-0 bottom-0 bg-linear-to-b from-white/0 from-90% to-[#f85802]/30" />
      <div className="z-20 h-1/4 w-full pointer-events-none absolute left-0 bottom-0 bg-white/10 backdrop-blur-lg backdrop-saturate-150 [mask-image:linear-gradient(to_bottom,transparent,black_90%)]" />
      <div className="z-20 absolute bottom-12 right-20 flex flex-col gap-2">
        <Button
          variant="secondary"
          className="text-white text-xl bg-black uppercase font-semibold w-72 h-14 cursor-pointer hover:bg-black/60"
        >
          Download CV
          <ArrowDown className="size-7" />
        </Button>
        <Button
          nativeButton={false}
          render={<Link href="https://github.com/DleiaDev" target="_blank" />}
          variant="secondary"
          className="text-xl uppercase font-semibold w-72 h-14 cursor-pointer"
        >
          Visit GitHub
          <GithubIcon className="size-7" />
        </Button>
      </div>
    </div>
  );
}
