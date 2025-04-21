import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function ArrowRightLinearGradient({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("relative aspect-square shrink-0", className)}
    >
      <Image
        src="/icons/arrow_right_linear_gradient.svg"
        alt="Arrow Right Icon"
        fill
        className="object-contain object-center"
      />
    </div>
  );
}
