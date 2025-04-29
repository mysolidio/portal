import Link from "next/link";

import LogoIcon from "@/icons/logo";
import { cn } from "@/lib/utils";

type Props = {
  size: number;
  className?: string;
};

export default function LogoWithText({ size, className }: Props) {
  return (
    <Link
      href="/"
      className={cn(
        "!font-poppins inline-flex shrink-0 items-center gap-4 !font-medium -tracking-[2.11px]",
        className,
      )}
    >
      <LogoIcon size={size} />
      <div
        className="text-inherit select-none"
        style={{ fontSize: size, lineHeight: `${size}px` }}
      >
        Solid
      </div>
    </Link>
  );
}
