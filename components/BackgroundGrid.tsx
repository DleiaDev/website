import Cross from "@/components/Cross";
import { PAGE_GUTTER } from "@/components/constants";
import { cn } from "cn";
import type { CSSProperties } from "react";

// Fixed so every grid on the site shares the same rhythm.
const ROWS = 4;
const COLS = 4;

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

type BackgroundGridProps = {
  /** Any CSS color. Crosses use it as-is, lines at 20% opacity. */
  color?: string;
  className?: string;
};

export default function BackgroundGrid({
  color = "white",
  className,
}: BackgroundGridProps) {
  return (
    <div
      style={{ "--grid-color": color } as CSSProperties}
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {/* Vertical lines */}
      <div className={cn("absolute inset-0 flex justify-between", PAGE_GUTTER)}>
        {range(COLS).map((c) => (
          <div key={c} className="w-px bg-(--grid-color)/20" />
        ))}
      </div>

      {/* Horizontal lines, each with a cross at every column intersection */}
      <div className="absolute inset-0 flex flex-col justify-between py-18 xs:py-20 sm:py-24 md:py-28 xl:py-32">
        {range(ROWS).map((r) => (
          <div key={r} className="relative h-px bg-(--grid-color)/20">
            <div
              className={cn(
                "absolute inset-0 flex justify-between",
                PAGE_GUTTER,
              )}
            >
              {range(COLS).map((c) => (
                <Cross key={c} color="var(--grid-color)" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
