import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function Checker({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("relative aspect-square shrink-0", className)}
    >
      <Image
        src="/icons/checker.svg"
        alt="Checker Icon"
        fill
        className="object-contain object-center"
      />
    </div>
  );
}
