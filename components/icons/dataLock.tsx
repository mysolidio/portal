import Image from "next/image";
import { HTMLAttributes } from "react";

interface DataLockProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export default function DataLock({
  className,
  size = 32,
  ...props
}: DataLockProps) {
  return (
    <div className={className} {...props}>
      <Image
        src="/icons/data-lock.svg"
        alt="Data Lock Icon"
        width={size}
        height={size}
      />
    </div>
  );
}
