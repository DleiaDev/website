import { Button } from "@/components/ui/button";
import { cn } from "cn";
import type { ComponentProps } from "react";

export default function HeroButton({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      variant="secondary"
      className={cn(
        "cursor-pointer font-semibold uppercase",
        "text-sm w-40 h-12",
        "xxxs:w-44 xxxs:h-12",
        "xxs:w-52 xxs:h-12",
        "xs:w-60 xs:h-12",
        "lg:text-base lg:w-64 lg:h-12",
        "xl:w-72 xl:h-14",
        className,
      )}
      {...props}
    />
  );
}
