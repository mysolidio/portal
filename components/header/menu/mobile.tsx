import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { FC, Fragment } from "react";

import LogoWithText from "@/common/logoWithText";
import Socials from "@/common/socials";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/ui/drawer";

import CTAButton from "./ctaButton";
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
      <DrawerContent className="!w-screen !border-r-0 bg-black shadow-none outline-none">
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
        <div className="flex h-full flex-col gap-6 p-6">
          <div className="max-h-[calc(100vh-288px)] grow overflow-auto">
            {items.map(({ label, href }, idx) => (
              <Fragment key={idx}>
                <Link
                  href={href}
                  className="my-2 block px-0 py-6 text-base font-medium text-white capitalize"
                >
                  {label}
                </Link>
                <div className="h-[0.5px] bg-white last:bg-transparent" />
              </Fragment>
            ))}
          </div>
          <div className="shrink-0 space-y-6">
            <CTAButton className="w-full" />
            <Socials />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
