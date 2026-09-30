import BackgroundGrid from "@/components/BackgroundGrid";
import { NAV_LINKS, PAGE_GUTTER } from "@/components/constants";
import GithubIcon from "@/components/GithubIcon";
import InstagramIcon from "@/components/InstagramIcon";
import Link from "@/components/Link";
import LinkedinIcon from "@/components/LinkedinIcon";
import { cn } from "cn";
import { ArrowUp } from "lucide-react";

const EMAIL = "marko97.ilic97@gmail.com";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/markoilicdev",
    Icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/__markoilic___/",
    Icon: InstagramIcon,
  },
  { label: "GitHub", href: "https://github.com/DleiaDev", Icon: GithubIcon },
];

const HEADING = "text-sm font-semibold uppercase tracking-[0.25em] text-white/50";

const FOOTER_LINK =
  "text-white/80 underline-offset-5 hover:text-white hover:underline";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <BackgroundGrid className="-z-10 opacity-40" />
      <div className={cn("pt-16 pb-8 md:pt-24", PAGE_GUTTER)}>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              text="Marko Ilic®"
              className="font-bold text-2xl lg:text-3xl hover:text-white"
            />
            <p className="mt-4 max-w-md text-white/70">
              Software engineer turning loose ideas into production software.
              Open to new projects, collaborations and full-time roles.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className={HEADING}>Navigation</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map(({ text, path }) => (
                <li key={path}>
                  <Link href={path} text={text} className={FOOTER_LINK} />
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={HEADING}>Get in touch</h2>
            <Link
              href={`mailto:${EMAIL}`}
              text={EMAIL}
              className={cn("mt-4 block break-all", FOOTER_LINK)}
            />
            <ul className="mt-6 flex gap-6">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    className="text-white/80 hover:text-white"
                  >
                    <Icon className="size-8" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col-reverse gap-4 border-t border-white/20 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Marko Ilic. All rights reserved.</p>
          {/* Plain anchor: browsers scroll an empty fragment to the top natively */}
          <a
            href="#"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
