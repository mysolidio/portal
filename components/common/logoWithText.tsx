import { cn } from "@/lib/utils";

import Logo from "./logo";

type Props = {
  size: number;
  className?: string;
};

export default async function LogoWithText({ size, className }: Props) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-4 font-bold tracking-[0.28px]",
        className,
      )}
    >
      <Logo size={size} />
      <div
        className="font-spline-sans text-inherit"
        style={{ fontSize: size, lineHeight: `${size}px` }}
      >
        Solarid
      </div>
    </div>
  );
}
