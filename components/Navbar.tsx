"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GithubIcon from "./GithubIcon";

const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Work", path: "/work" },
  { text: "Services", path: "/services" },
  { text: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center h-18 xs:h-20 sm:h-24 md:h-28 xl:h-32">
      <Link
        href="/"
        className="text-white font-bold text-xl md:text-2xl lg:text-3xl"
      >
        Marko Ilic®
      </Link>
      <ul className="justify-between items-center gap-8 hidden lg:flex xl:gap-[6vw]">
        {links.map(({ text, path }) => (
          <li key={path}>
            <Link
              href={path}
              className={`text-white text-xl font-medium underline underline-offset-5 transition-colors hover:decoration-white ${
                pathname === path ? "decoration-white" : "decoration-white/50"
              }`}
            >
              {text}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/DleiaDev"
            target="_blank"
            className="text-white cursor-pointer"
          >
            <GithubIcon className="w-10 h-10" />
          </a>
        </li>
      </ul>
      <button className="flex flex-col justify-between cursor-pointer w-14 h-5 md:w-16 md:h-6">
        <div className="w-full h-1 bg-white"></div>
        <div className="w-full h-1 bg-white"></div>
      </button>
    </nav>
  );
}
