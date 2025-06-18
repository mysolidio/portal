import { cn } from "@/lib/utils";

import { SvgIconProps } from "./types";

export default function Telegram({ className, size }: SvgIconProps) {
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
        d="M6.6375 12.7869L6.82417 9.96691L11.9442 5.35358C12.1708 5.14691 11.8975 5.04691 11.5975 5.22691L5.2775 9.22024L2.54417 8.35358C1.9575 8.18691 1.95083 7.78024 2.6775 7.48691L13.3242 3.38024C13.8108 3.16024 14.2775 3.50024 14.0908 4.24691L12.2775 12.7869C12.1508 13.3936 11.7842 13.5402 11.2775 13.2602L8.5175 11.2202L7.19083 12.5069C7.0375 12.6602 6.91083 12.7869 6.6375 12.7869Z"
        fill="currentColor"
      />
    </svg>
  );
}
