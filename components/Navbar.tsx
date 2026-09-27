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
    <nav className="h-32 flex justify-between items-center">
      <Link href="/" className="text-white text-3xl font-bold">
        Marko Ilic®
      </Link>
      <ul className="flex justify-between items-center gap-40">
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
      <button className="w-16 h-6 flex flex-col justify-between cursor-pointer">
        <div className="w-full h-1 bg-white"></div>
        <div className="w-full h-1 bg-white"></div>
      </button>
    </nav>
  );
}
