import Cross from "@/components/pages/Home/Hero/Cross";
import { HERO_GUTTER } from "@/components/pages/Home/Hero/constants";
import { cn } from "cn";

const ROWS = 4;
const COLS = 4;

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

export default function HeroGrid({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      {/* Vertical lines */}
      <div className={cn("absolute inset-0 flex justify-between", HERO_GUTTER)}>
        {range(COLS).map((c) => (
          <div key={c} className="w-px bg-white/20" />
        ))}
      </div>

      {/* Horizontal lines, each with a cross at every column intersection */}
      <div className="absolute inset-0 flex flex-col justify-between py-18 xs:py-20 sm:py-24 md:py-28 xl:py-32">
        {range(ROWS).map((r) => (
          <div key={r} className="relative h-px bg-white/20">
            <div
              className={cn(
                "absolute inset-0 flex justify-between",
                HERO_GUTTER,
              )}
            >
              {range(COLS).map((c) => (
                <Cross key={c} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
