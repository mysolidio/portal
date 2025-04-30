import { MenuIcon, X } from "lucide-react";
import { FC } from "react";

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
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger
        className="cursor-pointer lg:hidden"
        aria-label="Open menu"
      >
        <MenuIcon size={24} className="text-white" />
      </DrawerTrigger>
      <DrawerContent className="bg-dark-blue !w-screen !border-r-0 text-white shadow-none outline-none">
        <DrawerTitle />
        <nav className="flex h-20 items-center justify-between p-6">
          <LogoWithText size={32} className="text-white" />
          <button
            className="cursor-pointer text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </nav>
        <div className="flex h-full flex-col gap-6 px-6 pt-10 pb-6">
          <div className="max-h-[calc(100vh-288px)] grow overflow-auto">
            {items.map((item, idx) => (
              <details
                key={idx}
                className="group border-b border-[#515151] pb-2 transition-all select-none last:border-b-0 open:border-b-transparent"
              >
                <summary className="cursor-pointer list-none py-6 text-[32px] leading-[1.2] before:hidden [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  {item.label}
                </summary>
                <MenuContent isMobile item={item} />
              </details>
            ))}
          </div>
          <div className="shrink-0 space-y-6">
            <CTAButton className="h-16 w-full text-base uppercase [&>svg]:hidden" />
            <Socials dark linkClassName="size-10" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
