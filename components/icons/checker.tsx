import Image from "next/image";
import { HTMLAttributes } from "react";

interface CheckerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export default function Checker({
  className,
  size = 32,
  ...props
}: CheckerProps) {
  return (
    <div className={className} {...props}>
      <Image
        src="/icons/checker.svg"
        alt="Checker Icon"
        width={size}
        height={size}
      />
    </div>
  );
}
