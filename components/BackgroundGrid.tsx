"use client";

import { NAV_HEIGHT, PAGE_GUTTER } from "@/components/constants";
import { cn } from "cn";
import { useEffect, useRef, type CSSProperties } from "react";

// Fixed so every grid on the site shares the same rhythm.
const COLS = 4;
const ROWS_PER_COLUMN_GAP = 2;

// Crosses span this many px along each axis, centered on the intersection
const CROSS_SIZE = 12;

// Line color per background the grid sits on. Crosses use it as-is, lines at 20% opacity.
const SURFACE_COLORS = {
  brand: "white",
  white: "#a3a3a3",
};

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

const LINE_COLOR = "color-mix(in oklab, var(--grid-color) 20%, transparent)";

// Rows repeat every row height, starting at the bottom of the navbar. Each
// grid shifts by its distance from the top of the document so grids in
// separate sections continue one another.
const ROW_POSITION_Y =
  "calc(var(--nav-h) - var(--grid-offset, 0px) - var(--rows-top))";

// Row layers start below the navbar, so rows never land above it on screens
// where a row is shorter than the navbar.
const ROWS_TOP = "max(0px, var(--nav-h) - var(--grid-offset, 0px))";

// A 1px line at the top of every row
const rowLine = (color: string) =>
  `linear-gradient(to bottom, ${color} 1px, transparent 1px)`;

const ROWS_STYLE: CSSProperties = {
  backgroundImage: rowLine(LINE_COLOR),
  backgroundSize: "100% var(--grid-row)",
  backgroundPositionY: ROW_POSITION_Y,
};

// Drawn on a CROSS_SIZE wide strip centered on each column line: the
// horizontal arm fills the strip's width, the vertical arm reaches half the
// cross size above and below each row.
const CROSSES_STYLE: CSSProperties = {
  backgroundImage: [
    rowLine("var(--grid-color)"),
    `linear-gradient(to bottom, var(--grid-color) ${CROSS_SIZE / 2}px, transparent ${CROSS_SIZE / 2}px calc(100% - ${CROSS_SIZE / 2}px), var(--grid-color) calc(100% - ${CROSS_SIZE / 2}px))`,
  ].join(", "),
  backgroundSize: "100% var(--grid-row), 1px var(--grid-row)",
  backgroundPosition: `0 ${ROW_POSITION_Y}, 50% ${ROW_POSITION_Y}`,
  backgroundRepeat: "repeat-y",
  width: CROSS_SIZE,
};

type BackgroundGridProps = {
  /** The background the grid is drawn over, which picks the line color. */
  surface?: keyof typeof SURFACE_COLORS;
  className?: string;
};

export default function BackgroundGrid({
  surface = "brand",
  className,
}: BackgroundGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;

    const update = () => {
      const top = grid.getBoundingClientRect().top + window.scrollY;
      grid.style.setProperty("--grid-offset", `${top}px`);
    };

    // Anything above this grid changing height also resizes the body
    update();
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={
        {
          "--grid-color": SURFACE_COLORS[surface],
          "--rows-top": ROWS_TOP,
        } as CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        NAV_HEIGHT,
        className,
      )}
    >
      {/* Column lines. The container makes cqw the distance between the outer
          columns, so rows split each square cell evenly. */}
      <div
        style={
          {
            "--grid-row": `calc(100cqw / ${COLS - 1} / ${ROWS_PER_COLUMN_GAP})`,
          } as CSSProperties
        }
        className={cn(
          "@container absolute inset-0 flex justify-between",
          PAGE_GUTTER,
        )}
      >
        {/* Row lines, widened past the gutters to the grid's clipped edges */}
        <div
          style={ROWS_STYLE}
          className="absolute top-(--rows-top) bottom-0 left-1/2 w-screen -translate-x-1/2"
        />

        {range(COLS).map((c) => (
          <div
            key={c}
            style={{ backgroundColor: LINE_COLOR }}
            className="relative w-px"
          >
            <div
              style={CROSSES_STYLE}
              className="absolute top-(--rows-top) bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
