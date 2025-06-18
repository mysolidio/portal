import { MenuIcon, X } from "lucide-react";
import { FC, useRef } from "react";

import LogoWithText from "@/common/logoWithText";
import Socials from "@/common/socials";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/ui/drawer";

import CTAButton from "./ctaButton";
import MenuContent from "./menuContent";
import { items } from "./types";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const detailsRefs = useRef<HTMLDetailsElement[]>([]);

  const handleToggleDetails = (idx: number) => {
    const details = detailsRefs.current[idx];
    if (details.open) {
      detailsRefs.current.forEach((detail, i) => {
        if (i !== idx) {
          detail.open = false;
        }
      });
    }
  };

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger
        className="cursor-pointer lg:hidden"
        aria-label="Open menu"
      >
        <MenuIcon size={24} className="text-white" />
      </DrawerTrigger>
      <DrawerContent className="!w-screen !border-r-0 bg-white text-black shadow-none outline-none">
        <DrawerTitle />
        <nav className="flex h-20 items-center justify-between p-6">
          <LogoWithText size={32} />
          <button
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </nav>
        <div className="flex h-full flex-col gap-6 px-6 pt-15 pb-6">
          <div className="max-h-[calc(100vh-308px)] grow overflow-auto">
            {items.map((item, idx) => (
              <details
                key={idx}
                ref={(el) => {
                  if (el) {
                    detailsRefs.current[idx] = el;
                  }
                }}
                className="group border-b border-[#717171] transition-all select-none last:border-b-0"
                onToggle={() => handleToggleDetails(idx)}
              >
                <summary className="cursor-pointer list-none py-6 text-[32px] leading-[1.2] before:hidden [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  {item.label}
                </summary>
                <MenuContent isMobile data={item} />
              </details>
            ))}
          </div>
          <div className="shrink-0 space-y-6 text-center">
            <CTAButton className="w-[min(100%,256px)] text-base" />
            <Socials iconClassName="size-10" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
