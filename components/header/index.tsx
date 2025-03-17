"use client";

import { useEffect, useState } from "react";

import LogoWithText from "@/components/common/logoWithText";
import { cn } from "@/lib/utils";

import Menu from "./menu";

export default function Header() {
  const [isScrollUp, setIsScrollUp] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const onScroll = () => {
      const currScrollTop = Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        0,
      );
      setIsScrollUp(currScrollTop > lastScrollTop);
      lastScrollTop = currScrollTop;
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setIsScrollUp]);

  return (
    <header
      className={cn(
        "fixed z-50 h-20 w-screen transition-all duration-500 ease-in-out has-[[data-slot=navigation-menu-content]]:bg-[#001024]",
        isScrollUp ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <div className="relative flex h-20 flex-wrap items-center justify-between p-6 lg:container lg:p-0">
        <LogoWithText size={32} className="text-white" />
        <Menu />
      </div>
    </header>
  );
}
