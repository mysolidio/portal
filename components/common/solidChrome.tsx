import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function SolidChrome({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn("relative w-[inherit] shrink-0", className)}>
      <Image
        src="/solid_chrome.svg"
        alt="Solid Chrome"
        fill
        className="object-contain object-center"
      />
    </div>
  );
}
