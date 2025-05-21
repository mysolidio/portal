import Image from "next/image";
import { FC } from "react";

import { cn } from "@/lib/utils";

type ItemProps = {
  brand: "bottom" | "top";
  index: number;
  size?: number;
  className?: string;
};
const Item: FC<ItemProps> = ({ brand, index, className }) => {
  return (
    <div
      className={cn(
        "relative size-16 shrink-0 rounded-full bg-white",
        className,
      )}
    >
      <Image
        src={`/brands/${brand}-${index}.webp`}
        alt="Brand"
        fill
        className="aspect-square rounded-full object-contain p-[3px]"
      />
    </div>
  );
};

type Props = {
  className?: string;
  brand: "bottom" | "top";
  count: number;
  reverse?: boolean;
};

export default function Brands({
  className,
  brand,
  count,
  reverse = false,
}: Props) {
  return (
    <div
      className={cn(
        "scroll-infinite-x overflow-visible [--gap:24px]",
        className,
      )}
      data-reverse={reverse}
    >
      {Array.from({ length: count * 2 }).map((_, index) => (
        <Item key={index} brand={brand} index={index % count} size={64} />
      ))}
    </div>
  );
}
