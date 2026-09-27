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
        "w-72 h-14 cursor-pointer text-xl font-semibold uppercase",
        className,
      )}
      {...props}
    />
  );
}
