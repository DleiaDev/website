import Link from "./Link";
import { cn } from "cn";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      style={{ lineHeight: 1 }}
      className={cn("uppercase text-center font-black text-white", className)}
    >
      Marko
      <br />
      Ilic®
    </Link>
  );
}
