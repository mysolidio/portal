"use client";

import { useEffect, useState } from "react";

import Logo from "@/common/logo";
import LogoWithText from "@/components/common/logoWithText";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/ui/navigation-menu";

import LeftMenu from "./menu/left";
import MobileMenu from "./menu/mobile";
import RightMenu from "./menu/right";

export default function Header() {
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        "fixed z-50 w-full bg-black backdrop-blur-md transition-all duration-500 ease-in-out lg:py-4",
        isScrollUp ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      {/* Desktop Layout */}
      <div className="relative container hidden h-16 items-center [--header-content-width:936px] lg:flex">
        {/* Left Menu */}
        <NavigationMenu className="absolute right-[calc(50%+100px)]">
          <NavigationMenuList className="gap-12">
            <LeftMenu />
          </NavigationMenuList>
          <NavigationMenuViewport className="z-30 mt-4 !w-screen rounded-none border-0 bg-black" />
        </NavigationMenu>

        {/* Centered Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo size={58} className="text-white" />
        </div>

        {/* Right Menu */}
        <NavigationMenu className="absolute left-[calc(50%+100px)]">
          <NavigationMenuList className="gap-12">
            <RightMenu />
          </NavigationMenuList>
          <NavigationMenuViewport className="z-30 mt-4 !w-screen rounded-none border-0 bg-black" />
        </NavigationMenu>
      </div>

      {/* Mobile Layout */}
      <div className="flex h-20 items-center justify-between p-6 lg:hidden">
        <LogoWithText size={32} className="text-white" />
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
}
