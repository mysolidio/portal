"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps, MouseEvent } from "react";

export type CustomLinkProps = ComponentProps<typeof Link> & {
  onBeforeNavigate?: (e: MouseEvent<HTMLAnchorElement>) => Promise<void>;
};

export default function CustomLink({
  href,
  children,
  onBeforeNavigate,
  onClick,
  ...props
}: CustomLinkProps) {
  const router = useRouter();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (!href || href === "#") {
      e.preventDefault();
      return;
    }

    if (onBeforeNavigate) {
      e.preventDefault();
      await onBeforeNavigate(e);
      router.push(href.toString());
    }
  };

  return (
    <Link {...props} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
