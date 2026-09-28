import NextLink from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<ComponentProps<typeof NextLink>, "href" | "children"> & {
  href: string;
  text?: ReactNode;
  children?: ReactNode;
};

// Absolute (`https://…`), protocol-relative (`//…`) and scheme links
// (`mailto:`, `tel:`) leave the app, so Next's client-side routing can't handle them.
const EXTERNAL_HREF = /^([a-z][a-z\d+.-]*:|\/\/)/i;

export default function Link({
  href,
  text,
  children,
  className,
  prefetch,
  replace,
  scroll,
  onNavigate,
  transitionTypes,
  ...props
}: Props) {
  const classes = cn("transition-colors hover:text-primary", className);
  const content = children ?? text;

  if (EXTERNAL_HREF.test(href)) {
    const opensNewTab = /^(https?:)?\/\//i.test(href);
    return (
      <a
        href={href}
        className={classes}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={classes}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      onNavigate={onNavigate}
      transitionTypes={transitionTypes}
      {...props}
    >
      {content}
    </NextLink>
  );
}
