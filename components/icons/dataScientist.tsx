import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function DataScientist({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("relative aspect-square shrink-0", className)}
    >
      <Image
        src="/icons/data-scientist.svg"
        alt="Data Scientist Icon"
        fill
        className="object-contain object-center"
      />
    </div>
  );
}
