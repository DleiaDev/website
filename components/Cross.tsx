import { cn } from "cn";
import type { CSSProperties } from "react";

type CrossProps = {
  width?: number | string;
  height?: number | string;
};

const toCssSize = (value: number | string) =>
  typeof value === "number" ? `${value}px` : value;

export default function Cross({ width = 12, height = 12 }: CrossProps) {
  return (
    <div
      style={
        {
          "--cross-width": toCssSize(width),
          "--cross-height": toCssSize(height),
        } as CSSProperties
      }
      className={cn(
        "relative size-px",
        "before:absolute before:left-1/2 before:top-0 before:h-px before:w-[var(--cross-width)] before:-translate-x-1/2 before:bg-white ",
        "after:absolute after:left-0 after:top-1/2 after:h-[var(--cross-height)] after:w-px after:-translate-y-1/2 after:bg-white",
      )}
    />
  );
}
