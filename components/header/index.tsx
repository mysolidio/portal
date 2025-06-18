"use client";

import { useEffect, useState } from "react";

import Logo from "@/common/logo";
import LogoWithText from "@/components/common/logoWithText";
import { cn } from "@/lib/utils";

import CTAButton from "./menu/ctaButton";
import DesktopMenu from "./menu/desktop";
import MobileMenu from "./menu/mobile";

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
  }, []);

  return (
    <header
      className={cn(
        "bg-dark-blue relative z-50 w-full transition-all duration-500 ease-in-out lg:bg-[#F3F5F7] lg:py-4",
        isScrollUp ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      {/* Desktop Layout */}
      <div className="relative container hidden h-16 items-center gap-12 lg:flex">
        <Logo size={52} />
        <DesktopMenu className="max-w-full grow justify-start" />
        <CTAButton className="h-10 min-w-64 px-14" />
      </div>

      {/* Mobile Layout */}
      <div className="flex h-20 items-center justify-between p-6 lg:hidden">
        <LogoWithText size={32} className="text-white" />
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
}
