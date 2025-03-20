import { ArrowRight, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { FC, Fragment, memo, useState } from "react";

import LogoWithText from "@/common/logoWithText";
import Socials from "@/common/socials";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/ui/navigation-menu";

const items = [
  {
    label: "Solutions",
    href: "#solutions",
    subItems: [
      {
        label: "KYC Lifecycle Management",
        href: "#kyc-lifecycle-management",
      },
      {
        label: "Onchain KYC SDK",
        href: "#onchain-kyc-sdk",
      },
      {
        label: "Fraud Detection",
        href: "#fraud-detection",
      },
      {
        label: "Periodic AML Compliance Checker",
        href: "#periodic-aml-compliance-checker",
      },
    ],
  },
  {
    label: "Use Cases",
    href: "#use-cases",
    subItems: [
      {
        label: "Onramp & Offramp",
        href: "#onramp-offramp",
      },
      {
        label: "Payments",
        href: "#payments",
      },
      {
        label: "Regulatory Compliance for Exchanges",
        href: "#regulatory-compliance-for-exchanges",
      },
      {
        label: "Onchain ID for Real-world Applications",
        href: "#onchain-id-for-real-world-applications",
      },
    ],
  },
  {
    label: "Develop",
    href: "#develop",
    subItems: [
      {
        label: "Documentation",
        href: "#documentation",
      },
      {
        label: "API Reference",
        href: "#api-reference",
      },
    ],
  },
  {
    label: "Learn",
    href: "#learn",
    subItems: [
      {
        label: "Blog",
        href: "#blog",
      },
      {
        label: "Whitepaper",
        href: "#whitepaper",
      },
      {
        label: "What is Onchain KYC?",
        href: "#what-is-onchain-kyc",
      },
      {
        label: "What is Verifiable Credential?",
        href: "#what-is-verifiable-credential",
      },
    ],
  },
];

const BookDemoButton: typeof Button = ({ className, children, ...props }) => {
  return (
    <Button
      size="lg"
      variant="ghost"
      {...props}
      className={cn(
        "gap-2.5 rounded-full !px-6 text-white uppercase transition-all duration-300 ease-in-out",
        className,
      )}
    >
      {children ?? "Book a demo"}
    </Button>
  );
};

const HeaderMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop menu */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="gap-12">
          {items.map(({ label, subItems }, idx) => (
            <NavigationMenuItem key={idx} value={label}>
              <NavigationMenuTrigger className="font-inter h-14 border-b border-transparent bg-transparent px-0 text-base font-medium text-white capitalize transition-colors hover:border-white hover:bg-transparent">
                {label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="right-0 container flex justify-end text-white">
                <div className="grid w-[710px] grid-cols-2 gap-x-10 gap-y-2 pt-2 pb-4">
                  {subItems &&
                    subItems.map(({ label, href }, idx) => (
                      <Link
                        key={idx}
                        href={href}
                        className="group flex items-center justify-between border-b border-white/20 px-2 py-4 hover:border-white/50"
                      >
                        {label}
                        <ArrowRight
                          size={20}
                          className="hidden transition-all group-hover:inline-block"
                        />
                      </Link>
                    ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
          <li>
            <BookDemoButton />
          </li>
        </NavigationMenuList>
        <NavigationMenuViewport className="z-30 mt-0 !w-screen rounded-none border-0 bg-transparent backdrop-blur-md" />
      </NavigationMenu>

      {/* Mobile menu */}
      <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger
          className="cursor-pointer lg:hidden"
          aria-label="Open menu"
        >
          <MenuIcon size={24} className="text-white" />
        </DrawerTrigger>
        <DrawerContent className="!w-screen !border-r-0 bg-black/60 shadow-none backdrop-blur-md outline-none">
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
          <div className="flex h-full flex-col gap-6 px-6 pt-15 pb-6">
            <div className="max-h-[calc(100vh-288px)] grow overflow-auto">
              {items.map(({ label, href }, idx) => (
                <Fragment key={idx}>
                  <Link
                    href={href}
                    className="font-inter my-2 block px-0 py-6 text-base font-medium text-white capitalize"
                  >
                    {label}
                  </Link>
                  <div className="h-px bg-[#082659] last:bg-transparent" />
                </Fragment>
              ))}
            </div>
            <div className="shrink-0 space-y-6">
              <BookDemoButton className="w-full" />
              <Socials />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default memo(HeaderMenu);
