import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC, memo } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const items = ["solutions", "use cases", "develop", "learn"];

const HeaderMenu: FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-12">
        {items.map((title, idx) => (
          <NavigationMenuItem key={idx} value={title}>
            <NavigationMenuTrigger className="font-inter h-14 border-b border-transparent px-0 text-base font-medium text-white capitalize transition-colors hover:border-white">
              {title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="right-0 container flex justify-end text-white">
              <div className="grid w-[710px] grid-cols-2 gap-x-10 gap-y-2 pt-2 pb-4">
                {new Array(5).fill(0).map((_, idx) => (
                  <Link
                    key={idx}
                    href="/"
                    className="group flex items-center justify-between border-b border-white/20 px-2 py-4 hover:border-white/50"
                  >
                    Link 0{idx + 1}
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
        <button className="h-[60px] cursor-pointer rounded-full bg-white px-10 py-5 text-base leading-5 font-medium text-black uppercase">
          Book a demo
        </button>
      </NavigationMenuList>
      <NavigationMenuViewport className="z-30 mt-0 !w-screen rounded-none border-0 bg-[#001024]/50 backdrop-blur-lg" />
    </NavigationMenu>
  );
};

export default memo(HeaderMenu);
