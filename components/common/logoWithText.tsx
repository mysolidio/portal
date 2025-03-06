import Link from "next/link";

import { cn } from "@/lib/utils";

import Logo from "./logo";

type Props = {
  size: number;
  className?: string;
};

export default function LogoWithText({ size, className }: Props) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center gap-4 font-bold tracking-[0.28px]",
        className,
      )}
    >
      <Logo size={size} />
      <div
        className="!font-spline-sans text-inherit select-none"
        style={{ fontSize: size, lineHeight: `${size}px` }}
      >
        Solarid
      </div>
    </Link>
  );
}
