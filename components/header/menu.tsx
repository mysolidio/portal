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

type SubItemType = {
  label: string;
  href: string;
  description?: string;
};

type NavigationItemType = {
  label: string;
  href: string;
  description?: string;
  subItems: SubItemType[];
};

const items: NavigationItemType[] = [
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
    description:
      "Explore how our identity solutions solve real-world challenges across multiple industries with secure, compliant verification processes.",
    subItems: [
      {
        label: "KYC",
        href: "#kyc",
        description:
          "Streamline Know Your Customer processes with our secure identity verification system. Seamlessly onboard users while ensuring full compliance with global regulations and standards.",
      },
      {
        label: "Defi",
        href: "#defi",
        description:
          "Enable secure, compliant DeFi applications with verified identity. Facilitate lending, borrowing, and trading with minimal friction while maintaining regulatory compliance.",
      },
      {
        label: "National DID",
        href: "#digital-national-id",
        description:
          "Support sovereign digital identity solutions for governments and organizations. Create secure, privacy-preserving national ID systems with blockchain verification.",
      },
      {
        label: "Anti-Sybil",
        href: "#anti-sybil",
        description:
          "Protect your platform from Sybil attacks with our unique identity verification. Ensure one-person-one-account while preserving user privacy and preventing bot activity.",
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
        href: "https://github.com/SecondSwap/secondswap-svm/pull/2",
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

const jumpToWhitepaper = () => {
  if (window)
    window.open(
      "https://github.com/SecondSwap/secondswap-svm/pull/2",
      "_blank",
    );
};

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
      onClick={jumpToWhitepaper}
    >
      {children ?? "Book a demo"}
    </Button>
  );
};

const HeaderMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState<string | null>("KYC");

  return (
    <>
      {/* Desktop menu */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="gap-12">
          {items.map(({ label, subItems, description }, idx) => (
            <NavigationMenuItem key={idx} value={label}>
              <NavigationMenuTrigger
                className="font-inter h-14 border-b border-transparent bg-transparent px-0 text-base font-medium text-white capitalize transition-colors hover:border-white hover:bg-transparent"
                onMouseEnter={() => {
                  if (label === "Use Cases") {
                    setActiveUseCase("KYC");
                  }
                }}
              >
                {label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="right-0 container flex justify-end text-white">
                {label === "Use Cases" ? (
                  <div className="flex gap-10">
                    <div className="w-[300px] border-r border-white/10 p-4">
                      {activeUseCase && (
                        <>
                          <h4 className="text-md mb-1 font-medium">
                            {
                              subItems.find(
                                (item) => item.label === activeUseCase,
                              )?.label
                            }
                          </h4>
                          <p className="text-sm text-white/80">
                            {subItems.find(
                              (item) => item.label === activeUseCase,
                            )?.description || description}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="grid flex-1 grid-cols-2 gap-x-10 gap-y-2 pt-2 pb-4">
                      {subItems &&
                        subItems.map(
                          (
                            {
                              label: subLabel,
                              href,
                              description: subDescription,
                            },
                            subIdx,
                          ) => (
                            <Link
                              key={subIdx}
                              href={href}
                              className="group flex min-w-[150px] items-center justify-between border-b border-white/20 px-2 py-4 hover:border-white/50"
                              onMouseEnter={() =>
                                subDescription
                                  ? setActiveUseCase(subLabel)
                                  : null
                              }
                            >
                              {subLabel}
                              <ArrowRight
                                size={20}
                                className="hidden transition-all group-hover:inline-block"
                              />
                            </Link>
                          ),
                        )}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-x-10 gap-y-2 pt-2 pb-4">
                    {subItems &&
                      subItems.map(({ label: subLabel, href }, subIdx) => (
                        <Link
                          key={subIdx}
                          href={href}
                          className="group flex items-center justify-between border-b border-white/20 px-2 py-4 hover:border-white/50"
                        >
                          {subLabel}
                          <ArrowRight
                            size={20}
                            className="hidden transition-all group-hover:inline-block"
                          />
                        </Link>
                      ))}
                  </div>
                )}
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
