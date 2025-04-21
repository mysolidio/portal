import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function DataLock({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("relative aspect-square shrink-0", className)}
    >
      <Image
        src="/icons/data-lock.svg"
        alt="Data Lock Icon"
        fill
        className="object-contain object-center"
      />
    </div>
  );
}
