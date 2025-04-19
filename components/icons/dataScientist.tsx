import Image from "next/image";
import { HTMLAttributes } from "react";

interface DataScientistProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export default function DataScientist({
  className,
  size = 32,
  ...props
}: DataScientistProps) {
  return (
    <div className={className} {...props}>
      <Image
        src="/icons/data-scientist.svg"
        alt="Data Scientist Icon"
        width={size}
        height={size}
      />
    </div>
  );
}
