import Image from "next/image";
import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";

export default function LogoTextChrome({
  className,
  ...props
}: Omit<LinkProps, "href"> & { className?: string }) {
  return (
    <Link
      {...props}
      href="/"
      className={cn("relative inline-block w-[inherit] shrink-0", className)}
    >
      <Image
        src="/logo_text_chrome.svg"
        alt="Logo Text Chrome"
        fill
        className="object-contain object-center"
      />
    </Link>
  );
}
