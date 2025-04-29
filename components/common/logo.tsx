import Link from "next/link";

import LogoIcon from "@/icons/logo";
import { cn } from "@/lib/utils";

type Props = {
  size: number;
  className?: string;
};

export default function Logo({ className, size }: Props) {
  return (
    <Link
      href="/"
      className={cn("shrink-0", className)}
      style={{
        height: size,
        width: size,
      }}
    >
      <LogoIcon size={size} />
    </Link>
  );
}
