import { memo } from "react";

import { cn } from "@/lib/utils";

function X({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      height="16"
      viewBox="0 0 17 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="m12.2914 2.04199-3.33071 3.80734-2.88-3.80734h-4.17267l4.98467 6.51734-4.724 5.39937h2.02266l3.646-4.16671 3.18665 4.16671h4.068l-5.19598-6.86937 4.41668-5.04734zm-.7094 10.70671-7.31265-9.56071h1.202l7.23065 9.56001z"
        fill="currentColor"
      />
    </svg>
  );
}

export const XIcon = memo(X);
export default XIcon;
