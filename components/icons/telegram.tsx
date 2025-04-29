import { cn } from "@/lib/utils";

import { SvgIconProps } from "./types";

export default function Telegram({ className, size }: SvgIconProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size ?? "1em"}
      height={size ?? "1em"}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m7.02001 12.4334.18667-2.82001 5.12002-4.61333c.2266-.20667-.0467-.30667-.3467-.12667l-6.31999 3.99334-2.73333-.86667c-.58667-.16667-.59334-.57333.13333-.86667l10.64669-4.10666c.4866-.22.9533.12.7666.86666l-1.8133 8.54001c-.1267.6067-.4933.7533-1 .4733l-2.75999-2.04-1.32667 1.2867c-.15333.1533-.28.28-.55333.28z"
        fill="currentColor"
      />
    </svg>
  );
}
