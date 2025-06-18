import { cn } from "@/lib/utils";

import { SvgIconProps } from "./types";

export default function X({ className, size }: SvgIconProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size ?? "1em"}
      height={size ?? "1em"}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9087 2.39551L8.57806 6.20284L5.69806 2.39551H1.52539L6.51006 8.91284L1.78606 14.3122H3.80872L7.45472 10.1455L10.6414 14.3122H14.7094L9.51339 7.44284L13.9301 2.39551H11.9087ZM11.1994 13.1022L3.88672 3.54151H5.08872L12.3194 13.1015L11.1994 13.1022Z"
        fill="currentColor"
      />
    </svg>
  );
}
