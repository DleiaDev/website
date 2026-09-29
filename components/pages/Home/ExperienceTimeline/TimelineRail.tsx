import { cn } from "cn";

type Props = {
  active: boolean;
  // Draws the dot at --dot-y, the line then starts from it
  withDot?: boolean;
  // Runs the line past the bottom edge so it meets the next rail's dot
  extendToNext?: boolean;
  className?: string;
};

// Vertical line segment (and optional dot) of a single timeline entry
export default function TimelineRail({
  active,
  withDot = true,
  extendToNext = true,
  className,
}: Props) {
  return (
    <div aria-hidden className={cn("relative", className)}>
      <div
        className={cn(
          "absolute left-1/2 w-1 -translate-x-1/2",
          "transition-colors duration-250",
          withDot ? "top-(--dot-y)" : "top-0",
          extendToNext ? "bottom-[calc(var(--dot-y)*-1)]" : "bottom-0",
          active ? "bg-primary" : "bg-neutral-300",
        )}
      />
      {withDot && (
        <div
          className={cn(
            "z-10 absolute left-1/2 top-(--dot-y) size-3.5 -translate-1/2 rounded-full border-2",
            "transition-colors duration-250",
            active
              ? "border-primary bg-white"
              : "border-neutral-300 bg-neutral-300",
          )}
        />
      )}
    </div>
  );
}
