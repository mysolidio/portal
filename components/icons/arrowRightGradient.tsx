import Image from "next/image";

import ArrowRightLinearGradient from "@/assets/images/arrowRightGradient.svg";
import { cn } from "@/lib/utils";

import { ImageIconProps } from "./types";

export default function ArrowRightGradient({
  className,
  ...props
}: ImageIconProps) {
  return (
    <Image
      {...props}
      className={cn("shrink-0", className)}
      src={ArrowRightLinearGradient}
      alt="Arrow Right Icon"
    />
  );
}
