"use client";

import Link from "./Link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PAGE_GUTTER } from "@/components/constants";
import GithubIcon from "./GithubIcon";
import Cross from "./Cross";
import { cn } from "cn";
import { motion } from "motion/react";
import { ENTRANCE_TRANSITION } from "@/components/animations";
import NavbarInfoField from "./NavbarInfoField";
import LinkedinIcon from "./LinkedinIcon";
import InstagramIcon from "./InstagramIcon";

const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Work", path: "/work" },
  { text: "Services", path: "/services" },
  { text: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    // Keep the page behind the menu from scrolling
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  return (
    // z-60 lifts the nav (and its fixed menu) above the hero's z-0..z-50 layers.
    // --nav-h is shared with the menu, which inherits it despite being fixed.
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={ENTRANCE_TRANSITION}
      className={cn(
        "relative z-60 flex justify-between items-center h-(--nav-h)",
        "[--nav-h:--spacing(18)] xs:[--nav-h:--spacing(20)] sm:[--nav-h:--spacing(24)] md:[--nav-h:--spacing(28)] xl:[--nav-h:--spacing(32)]",
      )}
    >
      {/* Full screen menu, painted beneath the nav's other children (z-10) */}
      <div
        id="navbar-menu"
        // Fades instead of using `hidden` (display can't transition). `invisible`
        // still removes it from focus and the a11y tree, and visibility only
        // flips once the fade out finishes. The nav's horizontal padding comes
        // from its parent's PAGE_GUTTER, so the menu reuses it to line up.
        className={`fixed overflow-auto inset-0 z-0 w-screen h-svh pt-(--nav-h) bg-black/90 transition-[opacity,visibility] duration-200 motion-reduce:transition-none ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={cn(
            `flex w-full h-full border-t border-white/20 ${PAGE_GUTTER} flex-col xs:flex-row`,
          )}
        >
          <div className="pt-4 pb-8 xs:border-r xs:border-white/20 xs:flex-1 xs:pb-0 md:pt-8">
            <ul className="flex flex-col gap-6 items-center xs:items-center xs:items-stretch lg:pr-16">
              {links.map(({ text, path }) => (
                <li key={path} className="flex justify-between items-center">
                  <Link
                    href={path}
                    text={text}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-bold uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${
                      pathname === path ? "text-white" : "text-white/50"
                    }`}
                  />
                  <Cross width={16} height={16} className="hidden lg:block" />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex text-white pb-8 pt-8 pl-4 md:pt-8 justify-center border-t border-white/20 xs:pt-4 xs:border-none xs:justify-end xs:flex-1">
            <div className="inline-flex flex-col gap-10 md:gap-16">
              <NavbarInfoField
                type="email"
                label="Contact Email"
                value="marko97.ilic97@gmail.com"
              />
              <NavbarInfoField
                type="phone"
                label="Contact Phone (US)"
                value="+1 (202) 948-6475"
              />
              <NavbarInfoField
                type="phone"
                label="Contact Phone (Serbia)"
                value="+381 061 307 1337"
              />
              <div className="flex gap-8 xs:flex-col md:flex-row md:justify-between md:gap-4 xl:mt-16">
                <Link
                  href="https://www.linkedin.com/in/markoilicdev"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-10 h-10" />
                </Link>
                <Link
                  href="https://www.instagram.com/__markoilic___/"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-10 h-10" />
                </Link>
                <Link href="https://github.com/DleiaDev" aria-label="GitHub">
                  <GithubIcon className="w-10 h-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/"
        text="Marko Ilic®"
        className="relative z-10 text-white font-bold text-xl md:text-2xl lg:text-3xl"
      />
      <ul
        className={`relative z-10 justify-between items-center gap-8 hidden lg:flex xl:gap-[6vw] transition-[opacity,visibility] duration-200 motion-reduce:transition-none ${
          isMenuOpen ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        {links.map(({ text, path }) => (
          <li key={path}>
            <Link
              href={path}
              text={text}
              className={`text-white text-xl font-medium underline underline-offset-5 hover:text-white hover:decoration-white ${
                pathname === path ? "decoration-white" : "decoration-white/50"
              }`}
            />
          </li>
        ))}
        <li>
          <Link
            href="https://github.com/DleiaDev"
            aria-label="GitHub"
            className="text-white hover:text-white"
          >
            <GithubIcon className="w-10 h-10" />
          </Link>
        </li>
      </ul>
      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="navbar-menu"
        onClick={() => setIsMenuOpen((open) => !open)}
        className="relative z-10 flex flex-col justify-between cursor-pointer w-14 h-5 md:w-16 md:h-6"
      >
        {/* When open, both lines move to the vertical center (half the button
            height minus half the line height) and rotate into an X */}
        <div
          className={`w-full h-1 bg-white transition-transform duration-300 motion-reduce:transition-none ${
            isMenuOpen ? "translate-y-2 md:translate-y-2.5 rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-full h-1 bg-white transition-transform duration-300 motion-reduce:transition-none ${
            isMenuOpen ? "-translate-y-2 md:-translate-y-2.5 -rotate-45" : ""
          }`}
        ></div>
      </button>
    </motion.nav>
  );
}
