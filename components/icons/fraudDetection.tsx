import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function FraudDetection({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("relative aspect-square shrink-0", className)}
    >
      <Image
        src="/icons/fraud-detection.svg"
        alt="Fraud Detection Icon"
        fill
        className="object-contain object-center"
      />
    </div>
  );
}
